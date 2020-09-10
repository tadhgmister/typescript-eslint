// declare module 'eslint-plugin-import' {
//   export const rules: Record<
//     string,
//     { meta: unknown; create(...args: unknown[]): unknown }
//   >;
//   export const configs: Record<string, unknown>;
// }
// declare namespace ESLintConfig {
//   type AAA = 5;
// }

import { JSONSchema } from 'json-schema-to-typescript';

declare module 'eslint/lib/rules' {
  const rules: Map<string, Rule>;
  // I don't get why this errors, this is the exact same format as used in
  // ../packages/eslint-plugin/typings/eslint-rules.d.ts
  export = rules;
}

export interface Rule {
  meta: {
    docs: {
      url?: string;
      description?: string;
    };
    schema?: JSONSchema | JSONSchema[];
  };
}
