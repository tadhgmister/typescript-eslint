import type { ESLintConfig } from './eslintConfig';
import './rule-defs';

/**
 * allows parser to be specified
 */
// interface KnownParserConfig<P extends string> extends ESLintConfig.Config {
//   parser?: P | keyof ESLintConfig.ExtraParserOptionsMap;
//   parserOptions?: Partial<
//     ESLintConfig.BaseParserOptions &
//       (P extends keyof ESLintConfig.ExtraParserOptionsMap
//         ? ESLintConfig.ExtraParserOptionsMap[P]
//         : Record<string, unknown>)
//   >;
// }
// type A = keyof ESLintConfig.ExtraParserOptionsMap;
function typedConfig(config: ESLintConfig.Config): typeof config {
  return config;
}
// const test = typedConfig({
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     tsconfigRootDir: './',
//   },
// });

export { typedConfig, ESLintConfig };
