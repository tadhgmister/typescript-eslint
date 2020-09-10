/* AUTO GENERATED */
import { ESLintConfig } from "@typescript-eslint/typed-config";

declare global {
  namespace ESLintConfig {
    interface PluginRules {
      import: ImportPluginRules;
    }
    interface PluginConfigs {
      import: {
        "plugin:import/recommended": true;
        "plugin:import/errors": true;
        "plugin:import/warnings": true;
        "plugin:import/stage-0": true;
        "plugin:import/react": true;
        "plugin:import/react-native": true;
        "plugin:import/electron": true;
        "plugin:import/typescript": true;
      };
    }
  }
}

interface ImportPluginRules {
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-unresolved.md
   */
  "import/no-unresolved": ESLintConfig.RuleOptions<
    [
      {
        commonjs?: boolean;
        amd?: boolean;
        esmodule?: boolean;
        ignore?: [string, ...string[]];
        caseSensitive?: boolean;
      }
    ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/named.md
   */
  "import/named": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/default.md
   */
  "import/default": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/namespace.md
   */
  "import/namespace": ESLintConfig.RuleOptions<
    [
      {
        /**
         * If `false`, will report computed (and thus, un-lintable) references to namespace members.
         */
        allowComputed?: boolean;
      }
    ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-namespace.md
   */
  "import/no-namespace": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/export.md
   */
  "import/export": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-mutable-exports.md
   */
  "import/no-mutable-exports": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/extensions.md
   */
  "import/extensions": ESLintConfig.RuleOptions<
    | []
    | ["always" | "ignorePackages" | "never"]
    | []
    | ["always" | "ignorePackages" | "never"]
    | [
        "always" | "ignorePackages" | "never",
        {
          pattern?: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` ".*".
             */
            [k: string]: "always" | "ignorePackages" | "never";
          };
          ignorePackages?: boolean;
          [k: string]: unknown | undefined;
        }
      ]
    | []
    | [
        {
          pattern?: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` ".*".
             */
            [k: string]: "always" | "ignorePackages" | "never";
          };
          ignorePackages?: boolean;
          [k: string]: unknown | undefined;
        }
      ]
    | []
    | [
        {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` ".*".
           */
          [k: string]: "always" | "ignorePackages" | "never";
        }
      ]
    | []
    | ["always" | "ignorePackages" | "never"]
    | [
        "always" | "ignorePackages" | "never",
        {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` ".*".
           */
          [k: string]: "always" | "ignorePackages" | "never";
        }
      ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-restricted-paths.md
   */
  "import/no-restricted-paths": ESLintConfig.RuleOptions<
    [
      {
        zones?: [
          {
            target?: string;
            from?: string;
            except?: string[];
            message?: string;
          },
          ...{
            target?: string;
            from?: string;
            except?: string[];
            message?: string;
          }[]
        ];
        basePath?: string;
      }
    ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-internal-modules.md
   */
  "import/no-internal-modules": ESLintConfig.RuleOptions<
    [
      {
        allow?: string[];
      }
    ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/group-exports.md
   */
  "import/group-exports": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-relative-parent-imports.md
   */
  "import/no-relative-parent-imports": ESLintConfig.RuleOptions<
    [
      {
        commonjs?: boolean;
        amd?: boolean;
        esmodule?: boolean;
        ignore?: [string, ...string[]];
      }
    ]
  >;
  /**
   * Forbid a module from importing itself
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-self-import.md
   */
  "import/no-self-import": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-cycle.md
   */
  "import/no-cycle": ESLintConfig.RuleOptions<
    [
      {
        commonjs?: boolean;
        amd?: boolean;
        esmodule?: boolean;
        ignore?: [string, ...string[]];
        maxDepth?: number | "∞";
        /**
         * ignore external modules
         */
        ignoreExternal?: boolean;
      }
    ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-named-default.md
   */
  "import/no-named-default": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-named-as-default.md
   */
  "import/no-named-as-default": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-named-as-default-member.md
   */
  "import/no-named-as-default-member": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-anonymous-default-export.md
   */
  "import/no-anonymous-default-export": ESLintConfig.RuleOptions<
    [
      {
        /**
         * If `false`, will report default export of an array
         */
        allowArray?: boolean;
        /**
         * If `false`, will report default export of an arrow function
         */
        allowArrowFunction?: boolean;
        /**
         * If `false`, will report default export of a function call
         */
        allowCallExpression?: boolean;
        /**
         * If `false`, will report default export of an anonymous class
         */
        allowAnonymousClass?: boolean;
        /**
         * If `false`, will report default export of an anonymous function
         */
        allowAnonymousFunction?: boolean;
        /**
         * If `false`, will report default export of a literal
         */
        allowLiteral?: boolean;
        /**
         * If `false`, will report default export of an object expression
         */
        allowObject?: boolean;
      }
    ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-unused-modules.md
   */
  "import/no-unused-modules": ESLintConfig.RuleOptions<
    [
      | {
          [k: string]: unknown | undefined;
        }
      | {
          unusedExports: true;
          [k: string]: unknown | undefined;
        }
      | {
          missingExports: true;
          [k: string]: unknown | undefined;
        }
    ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-commonjs.md
   */
  "import/no-commonjs": ESLintConfig.RuleOptions<
    | []
    | ["allow-primitive-modules"]
    | []
    | [
        {
          allowPrimitiveModules?: boolean;
          allowRequire?: boolean;
          allowConditionalRequire?: boolean;
        }
      ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-amd.md
   */
  "import/no-amd": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-duplicates.md
   */
  "import/no-duplicates": ESLintConfig.RuleOptions<
    [
      {
        considerQueryString?: boolean;
      }
    ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/first.md
   */
  "import/first": ESLintConfig.RuleOptions<
    ["absolute-first" | "disable-absolute-first"]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/max-dependencies.md
   */
  "import/max-dependencies": ESLintConfig.RuleOptions<
    [
      {
        max?: number;
      }
    ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-extraneous-dependencies.md
   */
  "import/no-extraneous-dependencies": ESLintConfig.RuleOptions<
    [
      {
        devDependencies?: boolean | unknown[];
        optionalDependencies?: boolean | unknown[];
        peerDependencies?: boolean | unknown[];
        bundledDependencies?: boolean | unknown[];
        packageDir?: string | unknown[];
      }
    ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-absolute-path.md
   */
  "import/no-absolute-path": ESLintConfig.RuleOptions<
    [
      {
        commonjs?: boolean;
        amd?: boolean;
        esmodule?: boolean;
        ignore?: [string, ...string[]];
      }
    ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-nodejs-modules.md
   */
  "import/no-nodejs-modules": ESLintConfig.RuleOptions<
    [
      {
        allow?: string[];
      }
    ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-webpack-loader-syntax.md
   */
  "import/no-webpack-loader-syntax": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/order.md
   */
  "import/order": ESLintConfig.RuleOptions<
    [
      {
        groups?: unknown[];
        pathGroupsExcludedImportTypes?: unknown[];
        pathGroups?: {
          pattern: string;
          patternOptions?: {
            [k: string]: unknown | undefined;
          };
          group:
            | "builtin"
            | "external"
            | "internal"
            | "unknown"
            | "parent"
            | "sibling"
            | "index"
            | "object";
          position?: "after" | "before";
          [k: string]: unknown | undefined;
        }[];
        "newlines-between"?:
          | "ignore"
          | "always"
          | "always-and-inside-groups"
          | "never";
        alphabetize?: {
          caseInsensitive?: boolean;
          order?: "ignore" | "asc" | "desc";
        };
      }
    ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/newline-after-import.md
   */
  "import/newline-after-import": ESLintConfig.RuleOptions<
    [
      {
        count?: number;
      }
    ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/prefer-default-export.md
   */
  "import/prefer-default-export": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-default-export.md
   */
  "import/no-default-export": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-named-export.md
   */
  "import/no-named-export": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-dynamic-require.md
   */
  "import/no-dynamic-require": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/unambiguous.md
   */
  "import/unambiguous": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-unassigned-import.md
   */
  "import/no-unassigned-import": ESLintConfig.RuleOptions<
    [
      {
        devDependencies?: boolean | unknown[];
        optionalDependencies?: boolean | unknown[];
        peerDependencies?: boolean | unknown[];
        allow?: string[];
      }
    ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-useless-path-segments.md
   */
  "import/no-useless-path-segments": ESLintConfig.RuleOptions<
    [
      {
        commonjs?: boolean;
        noUselessIndex?: boolean;
      }
    ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/dynamic-import-chunkname.md
   */
  "import/dynamic-import-chunkname": ESLintConfig.RuleOptions<
    [
      {
        importFunctions?: string[];
        webpackChunknameFormat?: string;
        [k: string]: unknown | undefined;
      }
    ]
  >;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/exports-last.md
   */
  "import/exports-last": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/v2.22.0/docs/rules/no-deprecated.md
   */
  "import/no-deprecated": ESLintConfig.RuleWithoutOptions;
  /**
   * <!-- no description set -->
   *
   * https://github.com/benmosher/eslint-plugin-import/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md
   */
  "import/imports-first": ESLintConfig.RuleOptions<
    ["absolute-first" | "disable-absolute-first"]
  >;
}

/* REST IS AUTO-GENERATED REFERENCE TYPES */
