// import ruleIndex from '@typescript-eslint/eslint-plugin/src/rules';
// import configs from './configs/all';
import {} from './eslintConfig';

// type RuleDefs = typeof configs['rules'];
// // all the rules we disable because they conflict with one of ours
// type _BaseHasExtension = {
//   [K in keyof RuleDefs]: RuleDefs[K] extends 'off' ? K : never;
// }[keyof RuleDefs];
// // the rest of them:
// type TSRules = {
//   [K in keyof RuleDefs]: RuleDefs[K] extends 'off' ? never : K;
// }[keyof RuleDefs];
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ESLintConfig {
    interface ExtraParserOptionsMap {
      '@typescript-eslint/parser': {
        /**
         * by default the typescript-eslint/parser will warn if you are using an unsupported typescript version
         * set this to false to disable the warning
         */
        warnOnUnsupportedTypeScriptVersion?: boolean;
        /**
         * root directory of typescript
         * TODO: get more info here
         */
        tsconfigRootDir?: string;
        /**
         * the path to the tsconfig.json file, or list of them if monorepo.
         * TODO: check if just a string is accepted here
         */
        project?: string[];
      };
    }
    // interface BaseRules extends Record<BaseHasExtension, 'off'> {}
    // interface PluginRules {
    //   '@typescript-eslint': Record<
    //     TSRules,
    //     ESLintConfig.RuleOptions<unknown[]>
    //   >;
    // }
  }
}
