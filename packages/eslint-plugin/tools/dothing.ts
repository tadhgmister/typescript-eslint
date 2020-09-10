import prettier from 'prettier';
import { compile, JSONSchema } from 'json-schema-to-typescript';
import { toSafeString } from 'json-schema-to-typescript/dist/src/utils';
import { writeFileSync } from 'fs';

import baseRules from 'eslint/lib/rules';
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
  for (const moduleName of [
    name,
    name + '/eslint-plugin',
    'eslint-plugin-' + name,
  ]) {
    try {
      module = require(moduleName);
    } catch {
      continue;
    }
    if ('rules' in module! && 'configs' in module!) {
      break;
    }
  }
  if (module === undefined) {
    throw new Error(`cannot find eslint plugin module ${name}`);
  } else if (!('rules' in module && 'configs' in module)) {
    throw new Error(
      `found module ${name} but it was missing 'rules' and/or 'configs'.`,
    );
  } else {
    return module;
  }
}
async function generateType(
  schema: JSONSchema | JSONSchema[] | undefined,
  extraDefsCallback: (preamble?: string, tail?: string) => void,
): Promise<string> {
  if (schema === undefined) {
    return '[]';
  }
  if (schema instanceof Array) {
    const rawType =
      '[' +
      (
        await Promise.all(schema.map(v => generateType(v, extraDefsCallback)))
      ).join(', ') +
      ']';
    return rawType;
  }
  // compile the type into a long name thing, this helps extract it later.
  const innerName = 'ConvolutedNameUnlikelyToBeReferencedOtherwise';
  const wholeDeclaration = await compile(schema, innerName, {
    bannerComment: '',
    strictIndexSignatures: true,
    unknownAny: true,
  });
  // will be exported as interface or type, check both and extract the corresponding one
  for (const possibleDef of [
    `export interface ${innerName}`,
    `export type ${innerName} =`,
  ]) {
    if (wholeDeclaration.includes(possibleDef)) {
      // split by defining statement and the next line that starts with export or type or interface
      // tail might be undefined here.
      const [preamble, rest] = wholeDeclaration.split(possibleDef);
      const [realType1, tail] = rest.split(
        /\n((export)|(type)|(interface))/,
        1,
      );
      extraDefsCallback(preamble?.trim(), tail?.trim());
      let realType = realType1.trim();
      if (realType.endsWith(';')) {
        // pull out trailing semicolon so when we stick it into the generics it doesn't be syntactically invalid
        realType = realType.slice(0, realType.length - 1);
      }
      return realType;
    }
  }
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
 * ${docs.url ?? '<!-- url not set -->'}
 */`;
    const ruleType = await generateType(schema, extraDefsCallback);
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
  const interfaceName = `${toSafeString(module)}PluginRules`;
  // TODO: simplify this logic to not use so many ternaries.
  const configsString =
    configs === undefined
      ? ''
      : Object.keys(configs)
          .map(config => `"plugin:${module}/${config}":true;`)
          .join('');
  const preamble: string[] = [
    // TODO: add auto generated comment
    `import { ESLintConfig } from './eslintConfig';`,
  ];
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
  const tail: string[] = [
    `
declare global {
  namespace ESLintConfig {
    ${mainDeclaration}
  }
}`,
  ];
  const addToPreambleAndTail = (a?: string, b?: string): void => {
    if (a !== undefined && a !== '') {
      preamble.push(a);
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
  destination = `../typed-config/src/eslint-plugin-${module}.d.ts`,
): Promise<void> {
  const { rules, configs } = getEslintPlugin(module);
  const text = await MakeDeclarationFile(module, rules, configs);
  writeFileSync(destination, text);
}
async function writeBaseRules(
  destination = `../typed-config/src/eslintBaseRules.d.ts`,
): Promise<void> {
  const text = await MakeDeclarationFile('', baseRules);
  writeFileSync(destination, text);
}

/*  actual work.  */

// console.log(baseRules.get('array-element-newline').meta.schema);

for (const modu of [
  'import',
  'eslint-comments',
  '@typescript-eslint',
  'jest',
]) {
  writePluginDeclaration(modu);
}
writeBaseRules();
