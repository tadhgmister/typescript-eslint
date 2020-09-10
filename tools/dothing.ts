import prettier from 'prettier';
import { compile, JSONSchema } from 'json-schema-to-typescript';
import { toSafeString } from 'json-schema-to-typescript/dist/src/utils';
import { writeFileSync } from 'fs';

import baseRules from '../node_modules/eslint/lib/rules/index';
import type { Rule } from './modules';

interface EslintPluginModule {
  rules: Record<string, Rule>;
  configs: Record<string, unknown>;
}
/**
 * loads the module for an eslint plugin and verifies it has a rules and configs item.
 * throws an error if the module isn't found or it doesn't contain rules and configs
 * @param name name of eslint plugin, as used in the eslint config (plugins list)
 */
function getEslintPlugin(name: string): EslintPluginModule {
  let module: EslintPluginModule | undefined;
  const tryPatterns = ['eslint-plugin-' + name, name + '/eslint-plugin', name];
  if (name.includes('/')) {
    // convert @typescript-eslint/internal to @typescript-eslint/eslint-plugin-internal
    const parts = name.split('/');
    const last = parts.pop();
    tryPatterns.unshift([...parts, 'eslint-plugin-' + last].join('/'));
  }
  for (const moduleName of tryPatterns) {
    try {
      module = require(moduleName);
    } catch {
      continue;
    }
    if ('rules' in module!) {
      break;
    }
  }
  if (module === undefined) {
    throw new Error(`cannot find eslint plugin module ${name}`);
  } else if (!('rules' in module)) {
    throw new Error(`found module ${name} but it was missing 'rules'.`);
  } else {
    return module;
  }
}
/**
 * THIS FUNCTION IS FUNDEMENTALLY FLAWED
 * The goal of this function is to rename the references so that 2 rules that use the name
 * 'value' for the type won't overlap.
 * But it assumes the reference is internal which it shouldn't, need to get ref settings to
 * only allow internal references in which case this function should assert the reference
 * is in the format "#/definitions/NAME"
 */
function replaceDefinitions(schema: JSONSchema, ruleName: string): JSONSchema {
  if (schema.definitions === undefined) {
    // no problem if there are no definitions :)
    return schema;
  }
  function insertRuleName(def: string): string {
    const parts = def.split('/');
    const [last] = parts.splice(parts.length - 1, parts.length);
    return [...parts, ruleName + last].join('/');
  }
  function recurse(val: { $ref: string } | unknown): typeof val {
    if (val instanceof Array) {
      return val.map(a => recurse(a));
    } else if (typeof val !== 'object' || val === null) {
      return val;
    } else if ('$ref' in val) {
      return { $ref: insertRuleName((val as { $ref: string }).$ref) };
    }
    // else object.
    const modified: Record<string, unknown> = {};
    for (const [key, field] of Object.entries(val)) {
      modified[key] = recurse(field);
    }
    return modified;
  }
  const newSchema: JSONSchema & { definitions: Record<string, JSONSchema> } = {
    definitions: {},
  };
  for (const [oldDef, value] of Object.entries(schema.definitions)) {
    newSchema.definitions[ruleName + oldDef] = value;
  }
  for (const [k, v] of Object.entries(schema)) {
    if (k === 'definitions') {
      continue;
    }
    newSchema[k] = recurse(v);
  }
  return newSchema;
}
async function generateType(
  schema: JSONSchema | JSONSchema[] | undefined,
  extraDefsCallback: (preamble?: string, tail?: string) => void,
  ruleName: string,
): Promise<string> {
  if (
    schema === undefined ||
    (schema instanceof Array ? schema.length : Object.keys(schema).length) === 0
  ) {
    return '[]';
  }
  if (schema instanceof Array) {
    const rawType =
      '[' +
      (
        await Promise.all(
          schema.map(v => generateType(v, extraDefsCallback, ruleName)),
        )
      ).join(', ') +
      ']';
    return rawType;
  }
  // compile the type into a long name thing, this helps extract it later.
  const innerName = 'ConvolutedNameUnlikelyToBeReferencedOtherwise';
  const wholeDeclaration = await compile(
    replaceDefinitions(schema, ruleName),
    innerName,
    {
      bannerComment: '',
      strictIndexSignatures: true,
      unknownAny: true,
    },
  );
  // will be exported as interface or type, check both and extract the corresponding one
  for (const possibleDef of [
    `export interface ${innerName}`,
    `export type ${innerName} =`,
  ]) {
    if (wholeDeclaration.includes(possibleDef)) {
      // split by defining statement and the next line that starts with export or type or interface
      // tail might be undefined here.
      const [preamble, rest] = wholeDeclaration.split(possibleDef);
      // split from the next letter like `export` or `type`, because split is weird
      // setting the limit to 2 like in python just truncates the data, so we have to re-stitch
      // the tail back together.
      const [realType1, ...tailArr] = rest.split(/\n(?=\w)/);
      const tail = tailArr.join('\n');
      let realType = realType1.trim();

      extraDefsCallback(preamble?.trim(), tail?.trim());
      if (realType.endsWith(';')) {
        // pull out trailing semicolon so when we stick it into the generics it doesn't be syntactically invalid
        realType = realType.slice(0, realType.length - 1);
      }
      return realType;
    }
  }
  console.error(wholeDeclaration);
  throw new Error('declaration did not generate as expected.');
}

async function* makeRules(
  rules: Record<string, Rule> | Map<string, Rule>,
  prefix: string,
  extraDefsCallback: (preamble?: string, tail?: string) => void,
): AsyncGenerator<string, void> {
  const iter = rules instanceof Map ? rules.entries() : Object.entries(rules);
  for (const [
    ruleName,
    {
      meta: { docs, schema },
    },
  ] of iter) {
    const docstring = `/**
 * ${docs.description?.replace('*/', '* /') ?? '<!-- no description set -->'}
 *
 * ${docs.url ?? '<!-- url not set -->'}
 */`;
    const ruleType = await generateType(schema, extraDefsCallback, ruleName);
    const wholeType =
      ruleType === '[]' || ruleType === '{}'
        ? 'ESLintConfig.RuleWithoutOptions'
        : `ESLintConfig.RuleOptions<${ruleType}>`;
    yield `${docstring}
"${prefix}${ruleName}": ${wholeType};`;
  }
}

async function MakeDeclarationFile(
  module: string,
  rules: Record<string, Rule> | Map<string, Rule>,
  configs?: Record<string, unknown>,
): Promise<string> {
  const isPlugin = module !== '';
  const interfaceName = isPlugin
    ? `${toSafeString(module)}PluginRules`
    : 'EslintBaseRules';
  // TODO: simplify this logic to not use so many ternaries.
  const configsString =
    configs === undefined
      ? ''
      : Object.keys(configs)
          .map(config => `"plugin:${module}/${config}":true;`)
          .join('');

  // for plugin declare to pluginRules and PluginConfigs
  const mainDeclaration = isPlugin
    ? `
  interface PluginRules {
    "${module}": ${interfaceName};
  }
  interface PluginConfigs {
    "${module}": {${configsString}}
  }
  `
    : // or for main declaration get BaseRules to extend the rule interface.
      `
  interface BaseRules extends ${interfaceName} {}
  `;
  const preamble: string[] = [
    '/* AUTO GENERATED */',
    `import { ESLintConfig } from '@typescript-eslint/typed-config';`,
    '', // add extra blank line after import

    `
declare global {
  namespace ESLintConfig {
    ${mainDeclaration}
  }
}`,
  ];
  const tail: string[] = ['/* REST IS AUTO-GENERATED REFERENCE TYPES */'];
  const addToPreambleAndTail = (a?: string, b?: string): void => {
    if (a !== undefined && a !== '') {
      // will put everything in tail, they are all suppliment type definitions
      // we don't need to see them at the top.
      tail.push(a);
    }
    if (b !== undefined && b !== '') {
      tail.push(b);
    }
  };

  const ruleText: string[] = [];
  for await (const rule of makeRules(
    rules,
    isPlugin ? module + '/' : '',
    addToPreambleAndTail,
  )) {
    ruleText.push(rule);
  }
  // prettier preserves 1 extra blank line but not more than that.
  // we will trim all elements then join by newline and separate the preamble and tail with
  // extra blank line.
  const wholeText = [
    preamble.map(a => a.trim()).join('\n'),
    `
interface ${interfaceName} {
  ${ruleText.map(a => a.trim()).join('\n')}
}`,
    tail.map(a => a.trim()).join('\n'),
  ].join('\n\n');
  // return wholeText;
  return prettier.format(wholeText, {
    parser: 'typescript',
  });
}
async function writePluginDeclaration(
  module: string,
  destination = `./.eslintrc_types/eslint-plugin-${module.replace(
    '/',
    '_',
  )}.d.ts`,
): Promise<void> {
  const { rules, configs } = getEslintPlugin(module);
  const text = await MakeDeclarationFile(module, rules, configs);
  writeFileSync(destination, text);
}
async function writeBaseRules(
  destination = `./.eslintrc_types/eslintBaseRules.d.ts`,
): Promise<void> {
  const text = await MakeDeclarationFile('', baseRules);
  writeFileSync(destination, text);
}

/*  actual work.  */
for (const modu of [
  'eslint-plugin',
  '@typescript-eslint',
  'jest',
  'import',
  'eslint-comments',
  '@typescript-eslint/internal',
]) {
  writePluginDeclaration(modu);
}
writeBaseRules();
