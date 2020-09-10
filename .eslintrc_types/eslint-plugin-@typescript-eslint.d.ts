/* AUTO GENERATED */
import { ESLintConfig } from "@typescript-eslint/typed-config";

declare global {
  namespace ESLintConfig {
    interface PluginRules {
      "@typescript-eslint": TypescriptEslintPluginRules;
    }
    interface PluginConfigs {
      "@typescript-eslint": {
        "plugin:@typescript-eslint/all": true;
        "plugin:@typescript-eslint/base": true;
        "plugin:@typescript-eslint/recommended": true;
        "plugin:@typescript-eslint/eslint-recommended": true;
        "plugin:@typescript-eslint/recommended-requiring-type-checking": true;
      };
    }
  }
}

interface TypescriptEslintPluginRules {
  /**
   * Require that member overloads be consecutive
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
   */
  "@typescript-eslint/adjacent-overload-signatures": ESLintConfig.RuleWithoutOptions;
  /**
   * Requires using either `T[]` or `Array<T>` for arrays
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/array-type.md
   */
  "@typescript-eslint/array-type": ESLintConfig.RuleOptions<
    [
      {
        default?: "array" | "generic" | "array-simple";
        readonly?: "array" | "generic" | "array-simple";
        [k: string]: unknown | undefined;
      }
    ]
  >;
  /**
   * Disallows awaiting a value that is not a Thenable
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/await-thenable.md
   */
  "@typescript-eslint/await-thenable": ESLintConfig.RuleWithoutOptions;
  /**
   * Bans `// @ts-<directive>` comments from being used or requires descriptions after directive
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/ban-ts-comment.md
   */
  "@typescript-eslint/ban-ts-comment": ESLintConfig.RuleOptions<
    [
      {
        "ts-expect-error"?: boolean | "allow-with-description";
        "ts-ignore"?: boolean | "allow-with-description";
        "ts-nocheck"?: boolean | "allow-with-description";
        "ts-check"?: boolean | "allow-with-description";
        minimumDescriptionLength?: number;
      }
    ]
  >;
  /**
   * Bans `// tslint:<rule-flag>` comments from being used
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
   */
  "@typescript-eslint/ban-tslint-comment": ESLintConfig.RuleWithoutOptions;
  /**
   * Bans specific types from being used
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/ban-types.md
   */
  "@typescript-eslint/ban-types": ESLintConfig.RuleOptions<
    [
      {
        types?: {
          [k: string]:
            | (
                | null
                | boolean
                | string
                | {
                    message?: string;
                    fixWith?: string;
                  }
              )
            | undefined;
        };
        extendDefaults?: boolean;
      }
    ]
  >;
  /**
   * Enforce consistent brace style for blocks
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/brace-style.md
   */
  "@typescript-eslint/brace-style": ESLintConfig.RuleOptions<
    [
      "1tbs" | "stroustrup" | "allman",
      {
        allowSingleLine?: boolean;
      }
    ]
  >;
  /**
   * Ensures that literals on classes are exposed in a consistent style
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/class-literal-property-style.md
   */
  "@typescript-eslint/class-literal-property-style": ESLintConfig.RuleOptions<
    ["fields" | "getters"]
  >;
  /**
   * Enforces consistent spacing before and after commas
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/comma-spacing.md
   */
  "@typescript-eslint/comma-spacing": ESLintConfig.RuleOptions<
    [
      {
        before?: boolean;
        after?: boolean;
      }
    ]
  >;
  /**
   * Disallow non-null assertion in locations that may be confusing
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
   */
  "@typescript-eslint/no-confusing-non-null-assertion": ESLintConfig.RuleWithoutOptions;
  /**
   * Enforces consistent usage of type assertions
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
   */
  "@typescript-eslint/consistent-type-assertions": ESLintConfig.RuleOptions<
    [
      | {
          assertionStyle: "never";
        }
      | {
          assertionStyle: "as" | "angle-bracket";
          objectLiteralTypeAssertions?:
            | "allow"
            | "allow-as-parameter"
            | "never";
        }
    ]
  >;
  /**
   * Consistent with type definition either `interface` or `type`
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
   */
  "@typescript-eslint/consistent-type-definitions": ESLintConfig.RuleOptions<
    ["interface" | "type"]
  >;
  /**
   * Enforces consistent usage of type imports
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/consistent-type-imports.md
   */
  "@typescript-eslint/consistent-type-imports": ESLintConfig.RuleOptions<
    [
      {
        prefer?: "type-imports" | "no-type-imports";
        disallowTypeAnnotations?: boolean;
      }
    ]
  >;
  /**
   * Enforce default parameters to be last
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/default-param-last.md
   */
  "@typescript-eslint/default-param-last": ESLintConfig.RuleWithoutOptions;
  /**
   * enforce dot notation whenever possible
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/dot-notation.md
   */
  "@typescript-eslint/dot-notation": ESLintConfig.RuleOptions<
    [
      {
        allowKeywords?: boolean;
        allowPattern?: string;
        allowPrivateClassPropertyAccess?: boolean;
      }
    ]
  >;
  /**
   * Require explicit return types on functions and class methods
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
   */
  "@typescript-eslint/explicit-function-return-type": ESLintConfig.RuleOptions<
    [
      {
        allowExpressions?: boolean;
        allowTypedFunctionExpressions?: boolean;
        allowHigherOrderFunctions?: boolean;
        allowDirectConstAssertionInArrowFunctions?: boolean;
        allowConciseArrowFunctionExpressionsStartingWithVoid?: boolean;
      }
    ]
  >;
  /**
   * Require explicit accessibility modifiers on class properties and methods
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
   */
  "@typescript-eslint/explicit-member-accessibility": ESLintConfig.RuleOptions<
    [
      {
        accessibility?: "explicit" | "no-public" | "off";
        overrides?: {
          accessors?: "explicit" | "no-public" | "off";
          constructors?: "explicit" | "no-public" | "off";
          methods?: "explicit" | "no-public" | "off";
          properties?: "explicit" | "no-public" | "off";
          parameterProperties?: "explicit" | "no-public" | "off";
        };
        ignoredMethodNames?: string[];
      }
    ]
  >;
  /**
   * Require explicit return and argument types on exported functions' and classes' public class methods
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
   */
  "@typescript-eslint/explicit-module-boundary-types": ESLintConfig.RuleOptions<
    [
      {
        allowArgumentsExplicitlyTypedAsAny?: boolean;
        allowDirectConstAssertionInArrowFunctions?: boolean;
        allowedNames?: string[];
        allowHigherOrderFunctions?: boolean;
        allowTypedFunctionExpressions?: boolean;
        shouldTrackReferences?: boolean;
      }
    ]
  >;
  /**
   * Require or disallow spacing between function identifiers and their invocations
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/func-call-spacing.md
   */
  "@typescript-eslint/func-call-spacing": ESLintConfig.RuleOptions<
    | []
    | ["never"]
    | []
    | ["always"]
    | [
        "always",
        {
          allowNewlines?: boolean;
        }
      ]
  >;
  /**
   * Enforce consistent indentation
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/indent.md
   */
  "@typescript-eslint/indent": ESLintConfig.RuleOptions<
    [
      "tab" | number,
      {
        SwitchCase?: number;
        VariableDeclarator?:
          | (number | ("first" | "off"))
          | {
              var?: number | ("first" | "off");
              let?: number | ("first" | "off");
              const?: number | ("first" | "off");
            };
        outerIIFEBody?: number | "off";
        MemberExpression?: number | "off";
        FunctionDeclaration?: {
          parameters?: number | ("first" | "off");
          body?: number;
        };
        FunctionExpression?: {
          parameters?: number | ("first" | "off");
          body?: number;
        };
        CallExpression?: {
          arguments?: number | ("first" | "off");
        };
        ArrayExpression?: number | ("first" | "off");
        ObjectExpression?: number | ("first" | "off");
        ImportDeclaration?: number | ("first" | "off");
        flatTernaryExpressions?: boolean;
        offsetTernaryExpressions?: boolean;
        ignoredNodes?: string[];
        ignoreComments?: boolean;
      }
    ]
  >;
  /**
   * require or disallow initialization in variable declarations
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/init-declarations.md
   */
  "@typescript-eslint/init-declarations": ESLintConfig.RuleOptions<
    | []
    | ["always"]
    | []
    | ["never"]
    | [
        "never",
        {
          ignoreForLoopInit?: boolean;
        }
      ]
  >;
  /**
   * Enforce consistent spacing before and after keywords
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/keyword-spacing.md
   */
  "@typescript-eslint/keyword-spacing": ESLintConfig.RuleOptions<
    [
      {
        before?: boolean;
        after?: boolean;
        overrides?: {
          abstract?: {
            before?: boolean;
            after?: boolean;
          };
          as?: {
            before?: boolean;
            after?: boolean;
          };
          async?: {
            before?: boolean;
            after?: boolean;
          };
          await?: {
            before?: boolean;
            after?: boolean;
          };
          boolean?: {
            before?: boolean;
            after?: boolean;
          };
          break?: {
            before?: boolean;
            after?: boolean;
          };
          byte?: {
            before?: boolean;
            after?: boolean;
          };
          case?: {
            before?: boolean;
            after?: boolean;
          };
          catch?: {
            before?: boolean;
            after?: boolean;
          };
          char?: {
            before?: boolean;
            after?: boolean;
          };
          class?: {
            before?: boolean;
            after?: boolean;
          };
          const?: {
            before?: boolean;
            after?: boolean;
          };
          continue?: {
            before?: boolean;
            after?: boolean;
          };
          debugger?: {
            before?: boolean;
            after?: boolean;
          };
          default?: {
            before?: boolean;
            after?: boolean;
          };
          delete?: {
            before?: boolean;
            after?: boolean;
          };
          do?: {
            before?: boolean;
            after?: boolean;
          };
          double?: {
            before?: boolean;
            after?: boolean;
          };
          else?: {
            before?: boolean;
            after?: boolean;
          };
          enum?: {
            before?: boolean;
            after?: boolean;
          };
          export?: {
            before?: boolean;
            after?: boolean;
          };
          extends?: {
            before?: boolean;
            after?: boolean;
          };
          false?: {
            before?: boolean;
            after?: boolean;
          };
          final?: {
            before?: boolean;
            after?: boolean;
          };
          finally?: {
            before?: boolean;
            after?: boolean;
          };
          float?: {
            before?: boolean;
            after?: boolean;
          };
          for?: {
            before?: boolean;
            after?: boolean;
          };
          from?: {
            before?: boolean;
            after?: boolean;
          };
          function?: {
            before?: boolean;
            after?: boolean;
          };
          get?: {
            before?: boolean;
            after?: boolean;
          };
          goto?: {
            before?: boolean;
            after?: boolean;
          };
          if?: {
            before?: boolean;
            after?: boolean;
          };
          implements?: {
            before?: boolean;
            after?: boolean;
          };
          import?: {
            before?: boolean;
            after?: boolean;
          };
          in?: {
            before?: boolean;
            after?: boolean;
          };
          instanceof?: {
            before?: boolean;
            after?: boolean;
          };
          int?: {
            before?: boolean;
            after?: boolean;
          };
          interface?: {
            before?: boolean;
            after?: boolean;
          };
          let?: {
            before?: boolean;
            after?: boolean;
          };
          long?: {
            before?: boolean;
            after?: boolean;
          };
          native?: {
            before?: boolean;
            after?: boolean;
          };
          new?: {
            before?: boolean;
            after?: boolean;
          };
          null?: {
            before?: boolean;
            after?: boolean;
          };
          of?: {
            before?: boolean;
            after?: boolean;
          };
          package?: {
            before?: boolean;
            after?: boolean;
          };
          private?: {
            before?: boolean;
            after?: boolean;
          };
          protected?: {
            before?: boolean;
            after?: boolean;
          };
          public?: {
            before?: boolean;
            after?: boolean;
          };
          return?: {
            before?: boolean;
            after?: boolean;
          };
          set?: {
            before?: boolean;
            after?: boolean;
          };
          short?: {
            before?: boolean;
            after?: boolean;
          };
          static?: {
            before?: boolean;
            after?: boolean;
          };
          super?: {
            before?: boolean;
            after?: boolean;
          };
          switch?: {
            before?: boolean;
            after?: boolean;
          };
          synchronized?: {
            before?: boolean;
            after?: boolean;
          };
          this?: {
            before?: boolean;
            after?: boolean;
          };
          throw?: {
            before?: boolean;
            after?: boolean;
          };
          throws?: {
            before?: boolean;
            after?: boolean;
          };
          transient?: {
            before?: boolean;
            after?: boolean;
          };
          true?: {
            before?: boolean;
            after?: boolean;
          };
          try?: {
            before?: boolean;
            after?: boolean;
          };
          typeof?: {
            before?: boolean;
            after?: boolean;
          };
          var?: {
            before?: boolean;
            after?: boolean;
          };
          void?: {
            before?: boolean;
            after?: boolean;
          };
          volatile?: {
            before?: boolean;
            after?: boolean;
          };
          while?: {
            before?: boolean;
            after?: boolean;
          };
          with?: {
            before?: boolean;
            after?: boolean;
          };
          yield?: {
            before?: boolean;
            after?: boolean;
          };
        };
      }
    ]
  >;
  /**
   * Require a specific member delimiter style for interfaces and type literals
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/member-delimiter-style.md
   */
  "@typescript-eslint/member-delimiter-style": ESLintConfig.RuleOptions<
    [
      {
        multiline?: {
          delimiter?: "none" | "semi" | "comma";
          requireLast?: boolean;
        };
        singleline?: {
          delimiter?: "semi" | "comma";
          requireLast?: boolean;
        };
        overrides?: {
          interface?: {
            multiline?: {
              delimiter?: "none" | "semi" | "comma";
              requireLast?: boolean;
            };
            singleline?: {
              delimiter?: "semi" | "comma";
              requireLast?: boolean;
            };
          };
          typeLiteral?: {
            multiline?: {
              delimiter?: "none" | "semi" | "comma";
              requireLast?: boolean;
            };
            singleline?: {
              delimiter?: "semi" | "comma";
              requireLast?: boolean;
            };
          };
        };
      }
    ]
  >;
  /**
   * Require a consistent member declaration order
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/member-ordering.md
   */
  "@typescript-eslint/member-ordering": ESLintConfig.RuleOptions<
    [
      {
        default?:
          | "never"
          | (
              | "signature"
              | "field"
              | "public-field"
              | "public-decorated-field"
              | "decorated-field"
              | "static-field"
              | "public-static-field"
              | "instance-field"
              | "public-instance-field"
              | "abstract-field"
              | "public-abstract-field"
              | "protected-field"
              | "protected-decorated-field"
              | "protected-static-field"
              | "protected-instance-field"
              | "protected-abstract-field"
              | "private-field"
              | "private-decorated-field"
              | "private-static-field"
              | "private-instance-field"
              | "private-abstract-field"
              | "method"
              | "public-method"
              | "public-decorated-method"
              | "decorated-method"
              | "static-method"
              | "public-static-method"
              | "instance-method"
              | "public-instance-method"
              | "abstract-method"
              | "public-abstract-method"
              | "protected-method"
              | "protected-decorated-method"
              | "protected-static-method"
              | "protected-instance-method"
              | "protected-abstract-method"
              | "private-method"
              | "private-decorated-method"
              | "private-static-method"
              | "private-instance-method"
              | "private-abstract-method"
              | "constructor"
              | "public-constructor"
              | "protected-constructor"
              | "private-constructor"
            )[]
          | {
              memberTypes?:
                | (
                    | "signature"
                    | "field"
                    | "public-field"
                    | "public-decorated-field"
                    | "decorated-field"
                    | "static-field"
                    | "public-static-field"
                    | "instance-field"
                    | "public-instance-field"
                    | "abstract-field"
                    | "public-abstract-field"
                    | "protected-field"
                    | "protected-decorated-field"
                    | "protected-static-field"
                    | "protected-instance-field"
                    | "protected-abstract-field"
                    | "private-field"
                    | "private-decorated-field"
                    | "private-static-field"
                    | "private-instance-field"
                    | "private-abstract-field"
                    | "method"
                    | "public-method"
                    | "public-decorated-method"
                    | "decorated-method"
                    | "static-method"
                    | "public-static-method"
                    | "instance-method"
                    | "public-instance-method"
                    | "abstract-method"
                    | "public-abstract-method"
                    | "protected-method"
                    | "protected-decorated-method"
                    | "protected-static-method"
                    | "protected-instance-method"
                    | "protected-abstract-method"
                    | "private-method"
                    | "private-decorated-method"
                    | "private-static-method"
                    | "private-instance-method"
                    | "private-abstract-method"
                    | "constructor"
                    | "public-constructor"
                    | "protected-constructor"
                    | "private-constructor"
                  )[]
                | "never";
              order?: "alphabetically" | "as-written";
            };
        classes?:
          | "never"
          | (
              | "signature"
              | "field"
              | "public-field"
              | "public-decorated-field"
              | "decorated-field"
              | "static-field"
              | "public-static-field"
              | "instance-field"
              | "public-instance-field"
              | "abstract-field"
              | "public-abstract-field"
              | "protected-field"
              | "protected-decorated-field"
              | "protected-static-field"
              | "protected-instance-field"
              | "protected-abstract-field"
              | "private-field"
              | "private-decorated-field"
              | "private-static-field"
              | "private-instance-field"
              | "private-abstract-field"
              | "method"
              | "public-method"
              | "public-decorated-method"
              | "decorated-method"
              | "static-method"
              | "public-static-method"
              | "instance-method"
              | "public-instance-method"
              | "abstract-method"
              | "public-abstract-method"
              | "protected-method"
              | "protected-decorated-method"
              | "protected-static-method"
              | "protected-instance-method"
              | "protected-abstract-method"
              | "private-method"
              | "private-decorated-method"
              | "private-static-method"
              | "private-instance-method"
              | "private-abstract-method"
              | "constructor"
              | "public-constructor"
              | "protected-constructor"
              | "private-constructor"
            )[]
          | {
              memberTypes?:
                | (
                    | "signature"
                    | "field"
                    | "public-field"
                    | "public-decorated-field"
                    | "decorated-field"
                    | "static-field"
                    | "public-static-field"
                    | "instance-field"
                    | "public-instance-field"
                    | "abstract-field"
                    | "public-abstract-field"
                    | "protected-field"
                    | "protected-decorated-field"
                    | "protected-static-field"
                    | "protected-instance-field"
                    | "protected-abstract-field"
                    | "private-field"
                    | "private-decorated-field"
                    | "private-static-field"
                    | "private-instance-field"
                    | "private-abstract-field"
                    | "method"
                    | "public-method"
                    | "public-decorated-method"
                    | "decorated-method"
                    | "static-method"
                    | "public-static-method"
                    | "instance-method"
                    | "public-instance-method"
                    | "abstract-method"
                    | "public-abstract-method"
                    | "protected-method"
                    | "protected-decorated-method"
                    | "protected-static-method"
                    | "protected-instance-method"
                    | "protected-abstract-method"
                    | "private-method"
                    | "private-decorated-method"
                    | "private-static-method"
                    | "private-instance-method"
                    | "private-abstract-method"
                    | "constructor"
                    | "public-constructor"
                    | "protected-constructor"
                    | "private-constructor"
                  )[]
                | "never";
              order?: "alphabetically" | "as-written";
            };
        classExpressions?:
          | "never"
          | (
              | "signature"
              | "field"
              | "public-field"
              | "public-decorated-field"
              | "decorated-field"
              | "static-field"
              | "public-static-field"
              | "instance-field"
              | "public-instance-field"
              | "abstract-field"
              | "public-abstract-field"
              | "protected-field"
              | "protected-decorated-field"
              | "protected-static-field"
              | "protected-instance-field"
              | "protected-abstract-field"
              | "private-field"
              | "private-decorated-field"
              | "private-static-field"
              | "private-instance-field"
              | "private-abstract-field"
              | "method"
              | "public-method"
              | "public-decorated-method"
              | "decorated-method"
              | "static-method"
              | "public-static-method"
              | "instance-method"
              | "public-instance-method"
              | "abstract-method"
              | "public-abstract-method"
              | "protected-method"
              | "protected-decorated-method"
              | "protected-static-method"
              | "protected-instance-method"
              | "protected-abstract-method"
              | "private-method"
              | "private-decorated-method"
              | "private-static-method"
              | "private-instance-method"
              | "private-abstract-method"
              | "constructor"
              | "public-constructor"
              | "protected-constructor"
              | "private-constructor"
            )[]
          | {
              memberTypes?:
                | (
                    | "signature"
                    | "field"
                    | "public-field"
                    | "public-decorated-field"
                    | "decorated-field"
                    | "static-field"
                    | "public-static-field"
                    | "instance-field"
                    | "public-instance-field"
                    | "abstract-field"
                    | "public-abstract-field"
                    | "protected-field"
                    | "protected-decorated-field"
                    | "protected-static-field"
                    | "protected-instance-field"
                    | "protected-abstract-field"
                    | "private-field"
                    | "private-decorated-field"
                    | "private-static-field"
                    | "private-instance-field"
                    | "private-abstract-field"
                    | "method"
                    | "public-method"
                    | "public-decorated-method"
                    | "decorated-method"
                    | "static-method"
                    | "public-static-method"
                    | "instance-method"
                    | "public-instance-method"
                    | "abstract-method"
                    | "public-abstract-method"
                    | "protected-method"
                    | "protected-decorated-method"
                    | "protected-static-method"
                    | "protected-instance-method"
                    | "protected-abstract-method"
                    | "private-method"
                    | "private-decorated-method"
                    | "private-static-method"
                    | "private-instance-method"
                    | "private-abstract-method"
                    | "constructor"
                    | "public-constructor"
                    | "protected-constructor"
                    | "private-constructor"
                  )[]
                | "never";
              order?: "alphabetically" | "as-written";
            };
        interfaces?:
          | "never"
          | ("signature" | "field" | "method" | "constructor")[]
          | {
              memberTypes?:
                | ("signature" | "field" | "method" | "constructor")[]
                | "never";
              order?: "alphabetically" | "as-written";
            };
        typeLiterals?:
          | "never"
          | ("signature" | "field" | "method" | "constructor")[]
          | {
              memberTypes?:
                | ("signature" | "field" | "method" | "constructor")[]
                | "never";
              order?: "alphabetically" | "as-written";
            };
      }
    ]
  >;
  /**
   * Enforces using a particular method signature syntax.
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/method-signature-style.md
   */
  "@typescript-eslint/method-signature-style": ESLintConfig.RuleOptions<
    ["property" | "method"]
  >;
  /**
   * Enforces naming conventions for everything across a codebase
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/naming-convention.md
   */
  "@typescript-eslint/naming-convention": ESLintConfig.RuleOptions<
    (
      | {
          format:
            | (
                | "camelCase"
                | "strictCamelCase"
                | "PascalCase"
                | "StrictPascalCase"
                | "snake_case"
                | "UPPER_CASE"
              )[]
            | null;
          custom?: {
            match: boolean;
            regex: string;
            [k: string]: unknown | undefined;
          };
          leadingUnderscore?: "forbid" | "allow" | "require";
          trailingUnderscore?: "forbid" | "allow" | "require";
          prefix?: string[];
          suffix?: string[];
          filter?:
            | string
            | {
                match: boolean;
                regex: string;
                [k: string]: unknown | undefined;
              };
          selector: (
            | "default"
            | "variableLike"
            | "memberLike"
            | "typeLike"
            | "variable"
            | "function"
            | "parameter"
            | "property"
            | "parameterProperty"
            | "method"
            | "accessor"
            | "enumMember"
            | "class"
            | "interface"
            | "typeAlias"
            | "enum"
            | "typeParameter"
          )[];
        }
      | {
          format:
            | (
                | "camelCase"
                | "strictCamelCase"
                | "PascalCase"
                | "StrictPascalCase"
                | "snake_case"
                | "UPPER_CASE"
              )[]
            | null;
          custom?: {
            match: boolean;
            regex: string;
            [k: string]: unknown | undefined;
          };
          leadingUnderscore?: "forbid" | "allow" | "require";
          trailingUnderscore?: "forbid" | "allow" | "require";
          prefix?: string[];
          suffix?: string[];
          filter?:
            | string
            | {
                match: boolean;
                regex: string;
                [k: string]: unknown | undefined;
              };
          selector: "default";
          modifiers?: (
            | "const"
            | "readonly"
            | "static"
            | "public"
            | "protected"
            | "private"
            | "abstract"
          )[];
        }
      | {
          format:
            | (
                | "camelCase"
                | "strictCamelCase"
                | "PascalCase"
                | "StrictPascalCase"
                | "snake_case"
                | "UPPER_CASE"
              )[]
            | null;
          custom?: {
            match: boolean;
            regex: string;
            [k: string]: unknown | undefined;
          };
          leadingUnderscore?: "forbid" | "allow" | "require";
          trailingUnderscore?: "forbid" | "allow" | "require";
          prefix?: string[];
          suffix?: string[];
          filter?:
            | string
            | {
                match: boolean;
                regex: string;
                [k: string]: unknown | undefined;
              };
          selector: "variableLike";
        }
      | {
          format:
            | (
                | "camelCase"
                | "strictCamelCase"
                | "PascalCase"
                | "StrictPascalCase"
                | "snake_case"
                | "UPPER_CASE"
              )[]
            | null;
          custom?: {
            match: boolean;
            regex: string;
            [k: string]: unknown | undefined;
          };
          leadingUnderscore?: "forbid" | "allow" | "require";
          trailingUnderscore?: "forbid" | "allow" | "require";
          prefix?: string[];
          suffix?: string[];
          filter?:
            | string
            | {
                match: boolean;
                regex: string;
                [k: string]: unknown | undefined;
              };
          selector: "variable";
          modifiers?: "const"[];
          types?: ("boolean" | "string" | "number" | "function" | "array")[];
        }
      | {
          format:
            | (
                | "camelCase"
                | "strictCamelCase"
                | "PascalCase"
                | "StrictPascalCase"
                | "snake_case"
                | "UPPER_CASE"
              )[]
            | null;
          custom?: {
            match: boolean;
            regex: string;
            [k: string]: unknown | undefined;
          };
          leadingUnderscore?: "forbid" | "allow" | "require";
          trailingUnderscore?: "forbid" | "allow" | "require";
          prefix?: string[];
          suffix?: string[];
          filter?:
            | string
            | {
                match: boolean;
                regex: string;
                [k: string]: unknown | undefined;
              };
          selector: "function";
        }
      | {
          format:
            | (
                | "camelCase"
                | "strictCamelCase"
                | "PascalCase"
                | "StrictPascalCase"
                | "snake_case"
                | "UPPER_CASE"
              )[]
            | null;
          custom?: {
            match: boolean;
            regex: string;
            [k: string]: unknown | undefined;
          };
          leadingUnderscore?: "forbid" | "allow" | "require";
          trailingUnderscore?: "forbid" | "allow" | "require";
          prefix?: string[];
          suffix?: string[];
          filter?:
            | string
            | {
                match: boolean;
                regex: string;
                [k: string]: unknown | undefined;
              };
          selector: "parameter";
          types?: ("boolean" | "string" | "number" | "function" | "array")[];
        }
      | {
          format:
            | (
                | "camelCase"
                | "strictCamelCase"
                | "PascalCase"
                | "StrictPascalCase"
                | "snake_case"
                | "UPPER_CASE"
              )[]
            | null;
          custom?: {
            match: boolean;
            regex: string;
            [k: string]: unknown | undefined;
          };
          leadingUnderscore?: "forbid" | "allow" | "require";
          trailingUnderscore?: "forbid" | "allow" | "require";
          prefix?: string[];
          suffix?: string[];
          filter?:
            | string
            | {
                match: boolean;
                regex: string;
                [k: string]: unknown | undefined;
              };
          selector: "memberLike";
          modifiers?: (
            | "private"
            | "protected"
            | "public"
            | "static"
            | "readonly"
            | "abstract"
          )[];
        }
      | {
          format:
            | (
                | "camelCase"
                | "strictCamelCase"
                | "PascalCase"
                | "StrictPascalCase"
                | "snake_case"
                | "UPPER_CASE"
              )[]
            | null;
          custom?: {
            match: boolean;
            regex: string;
            [k: string]: unknown | undefined;
          };
          leadingUnderscore?: "forbid" | "allow" | "require";
          trailingUnderscore?: "forbid" | "allow" | "require";
          prefix?: string[];
          suffix?: string[];
          filter?:
            | string
            | {
                match: boolean;
                regex: string;
                [k: string]: unknown | undefined;
              };
          selector: "property";
          modifiers?: (
            | "private"
            | "protected"
            | "public"
            | "static"
            | "readonly"
            | "abstract"
          )[];
          types?: ("boolean" | "string" | "number" | "function" | "array")[];
        }
      | {
          format:
            | (
                | "camelCase"
                | "strictCamelCase"
                | "PascalCase"
                | "StrictPascalCase"
                | "snake_case"
                | "UPPER_CASE"
              )[]
            | null;
          custom?: {
            match: boolean;
            regex: string;
            [k: string]: unknown | undefined;
          };
          leadingUnderscore?: "forbid" | "allow" | "require";
          trailingUnderscore?: "forbid" | "allow" | "require";
          prefix?: string[];
          suffix?: string[];
          filter?:
            | string
            | {
                match: boolean;
                regex: string;
                [k: string]: unknown | undefined;
              };
          selector: "parameterProperty";
          modifiers?: ("private" | "protected" | "public" | "readonly")[];
          types?: ("boolean" | "string" | "number" | "function" | "array")[];
        }
      | {
          format:
            | (
                | "camelCase"
                | "strictCamelCase"
                | "PascalCase"
                | "StrictPascalCase"
                | "snake_case"
                | "UPPER_CASE"
              )[]
            | null;
          custom?: {
            match: boolean;
            regex: string;
            [k: string]: unknown | undefined;
          };
          leadingUnderscore?: "forbid" | "allow" | "require";
          trailingUnderscore?: "forbid" | "allow" | "require";
          prefix?: string[];
          suffix?: string[];
          filter?:
            | string
            | {
                match: boolean;
                regex: string;
                [k: string]: unknown | undefined;
              };
          selector: "method";
          modifiers?: (
            | "private"
            | "protected"
            | "public"
            | "static"
            | "abstract"
          )[];
        }
      | {
          format:
            | (
                | "camelCase"
                | "strictCamelCase"
                | "PascalCase"
                | "StrictPascalCase"
                | "snake_case"
                | "UPPER_CASE"
              )[]
            | null;
          custom?: {
            match: boolean;
            regex: string;
            [k: string]: unknown | undefined;
          };
          leadingUnderscore?: "forbid" | "allow" | "require";
          trailingUnderscore?: "forbid" | "allow" | "require";
          prefix?: string[];
          suffix?: string[];
          filter?:
            | string
            | {
                match: boolean;
                regex: string;
                [k: string]: unknown | undefined;
              };
          selector: "accessor";
          modifiers?: (
            | "private"
            | "protected"
            | "public"
            | "static"
            | "abstract"
          )[];
          types?: ("boolean" | "string" | "number" | "function" | "array")[];
        }
      | {
          format:
            | (
                | "camelCase"
                | "strictCamelCase"
                | "PascalCase"
                | "StrictPascalCase"
                | "snake_case"
                | "UPPER_CASE"
              )[]
            | null;
          custom?: {
            match: boolean;
            regex: string;
            [k: string]: unknown | undefined;
          };
          leadingUnderscore?: "forbid" | "allow" | "require";
          trailingUnderscore?: "forbid" | "allow" | "require";
          prefix?: string[];
          suffix?: string[];
          filter?:
            | string
            | {
                match: boolean;
                regex: string;
                [k: string]: unknown | undefined;
              };
          selector: "enumMember";
        }
      | {
          format:
            | (
                | "camelCase"
                | "strictCamelCase"
                | "PascalCase"
                | "StrictPascalCase"
                | "snake_case"
                | "UPPER_CASE"
              )[]
            | null;
          custom?: {
            match: boolean;
            regex: string;
            [k: string]: unknown | undefined;
          };
          leadingUnderscore?: "forbid" | "allow" | "require";
          trailingUnderscore?: "forbid" | "allow" | "require";
          prefix?: string[];
          suffix?: string[];
          filter?:
            | string
            | {
                match: boolean;
                regex: string;
                [k: string]: unknown | undefined;
              };
          selector: "typeLike";
          modifiers?: "abstract"[];
        }
      | {
          format:
            | (
                | "camelCase"
                | "strictCamelCase"
                | "PascalCase"
                | "StrictPascalCase"
                | "snake_case"
                | "UPPER_CASE"
              )[]
            | null;
          custom?: {
            match: boolean;
            regex: string;
            [k: string]: unknown | undefined;
          };
          leadingUnderscore?: "forbid" | "allow" | "require";
          trailingUnderscore?: "forbid" | "allow" | "require";
          prefix?: string[];
          suffix?: string[];
          filter?:
            | string
            | {
                match: boolean;
                regex: string;
                [k: string]: unknown | undefined;
              };
          selector: "class";
          modifiers?: "abstract"[];
        }
      | {
          format:
            | (
                | "camelCase"
                | "strictCamelCase"
                | "PascalCase"
                | "StrictPascalCase"
                | "snake_case"
                | "UPPER_CASE"
              )[]
            | null;
          custom?: {
            match: boolean;
            regex: string;
            [k: string]: unknown | undefined;
          };
          leadingUnderscore?: "forbid" | "allow" | "require";
          trailingUnderscore?: "forbid" | "allow" | "require";
          prefix?: string[];
          suffix?: string[];
          filter?:
            | string
            | {
                match: boolean;
                regex: string;
                [k: string]: unknown | undefined;
              };
          selector: "interface";
        }
      | {
          format:
            | (
                | "camelCase"
                | "strictCamelCase"
                | "PascalCase"
                | "StrictPascalCase"
                | "snake_case"
                | "UPPER_CASE"
              )[]
            | null;
          custom?: {
            match: boolean;
            regex: string;
            [k: string]: unknown | undefined;
          };
          leadingUnderscore?: "forbid" | "allow" | "require";
          trailingUnderscore?: "forbid" | "allow" | "require";
          prefix?: string[];
          suffix?: string[];
          filter?:
            | string
            | {
                match: boolean;
                regex: string;
                [k: string]: unknown | undefined;
              };
          selector: "typeAlias";
        }
      | {
          format:
            | (
                | "camelCase"
                | "strictCamelCase"
                | "PascalCase"
                | "StrictPascalCase"
                | "snake_case"
                | "UPPER_CASE"
              )[]
            | null;
          custom?: {
            match: boolean;
            regex: string;
            [k: string]: unknown | undefined;
          };
          leadingUnderscore?: "forbid" | "allow" | "require";
          trailingUnderscore?: "forbid" | "allow" | "require";
          prefix?: string[];
          suffix?: string[];
          filter?:
            | string
            | {
                match: boolean;
                regex: string;
                [k: string]: unknown | undefined;
              };
          selector: "enum";
        }
      | {
          format:
            | (
                | "camelCase"
                | "strictCamelCase"
                | "PascalCase"
                | "StrictPascalCase"
                | "snake_case"
                | "UPPER_CASE"
              )[]
            | null;
          custom?: {
            match: boolean;
            regex: string;
            [k: string]: unknown | undefined;
          };
          leadingUnderscore?: "forbid" | "allow" | "require";
          trailingUnderscore?: "forbid" | "allow" | "require";
          prefix?: string[];
          suffix?: string[];
          filter?:
            | string
            | {
                match: boolean;
                regex: string;
                [k: string]: unknown | undefined;
              };
          selector: "typeParameter";
        }
    )[]
  >;
  /**
   * Disallow generic `Array` constructors
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-array-constructor.md
   */
  "@typescript-eslint/no-array-constructor": ESLintConfig.RuleWithoutOptions;
  /**
   * Requires that `.toString()` is only called on objects which provide useful information when stringified
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-base-to-string.md
   */
  "@typescript-eslint/no-base-to-string": ESLintConfig.RuleOptions<
    [
      {
        ignoredTypeNames?: string[];
      }
    ]
  >;
  /**
   * Disallow duplicate class members
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
   */
  "@typescript-eslint/no-dupe-class-members": ESLintConfig.RuleWithoutOptions;
  /**
   * Disallow the delete operator with computed key expressions
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
   */
  "@typescript-eslint/no-dynamic-delete": ESLintConfig.RuleWithoutOptions;
  /**
   * Disallow empty functions
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-empty-function.md
   */
  "@typescript-eslint/no-empty-function": ESLintConfig.RuleOptions<
    [
      {
        allow?: (
          | "functions"
          | "arrowFunctions"
          | "generatorFunctions"
          | "methods"
          | "generatorMethods"
          | "getters"
          | "setters"
          | "constructors"
          | "private-constructors"
          | "protected-constructors"
          | "asyncFunctions"
          | "asyncMethods"
          | "decoratedFunctions"
        )[];
      }
    ]
  >;
  /**
   * Disallow the declaration of empty interfaces
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-empty-interface.md
   */
  "@typescript-eslint/no-empty-interface": ESLintConfig.RuleOptions<
    [
      {
        allowSingleExtends?: boolean;
      }
    ]
  >;
  /**
   * Disallow usage of the `any` type
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-explicit-any.md
   */
  "@typescript-eslint/no-explicit-any": ESLintConfig.RuleOptions<
    [
      {
        fixToUnknown?: boolean;
        ignoreRestArgs?: boolean;
      }
    ]
  >;
  /**
   * Disallow usage of the implicit `any` type in catch clauses
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
   */
  "@typescript-eslint/no-implicit-any-catch": ESLintConfig.RuleOptions<
    [
      {
        allowExplicitAny?: boolean;
      }
    ]
  >;
  /**
   * Disallow extra non-null assertion
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
   */
  "@typescript-eslint/no-extra-non-null-assertion": ESLintConfig.RuleWithoutOptions;
  /**
   * Disallow unnecessary parentheses
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-extra-parens.md
   */
  "@typescript-eslint/no-extra-parens": ESLintConfig.RuleOptions<
    | []
    | ["functions"]
    | []
    | ["all"]
    | [
        "all",
        {
          conditionalAssign?: boolean;
          nestedBinaryExpressions?: boolean;
          returnAssign?: boolean;
          ignoreJSX?: "none" | "all" | "single-line" | "multi-line";
          enforceForArrowConditionals?: boolean;
          enforceForSequenceExpressions?: boolean;
          enforceForNewInMemberExpressions?: boolean;
          enforceForFunctionPrototypeMethods?: boolean;
        }
      ]
  >;
  /**
   * Disallow unnecessary semicolons
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-extra-semi.md
   */
  "@typescript-eslint/no-extra-semi": ESLintConfig.RuleWithoutOptions;
  /**
   * Forbids the use of classes as namespaces
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-extraneous-class.md
   */
  "@typescript-eslint/no-extraneous-class": ESLintConfig.RuleOptions<
    [
      {
        allowConstructorOnly?: boolean;
        allowEmpty?: boolean;
        allowStaticOnly?: boolean;
        allowWithDecorator?: boolean;
      }
    ]
  >;
  /**
   * Requires Promise-like values to be handled appropriately
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-floating-promises.md
   */
  "@typescript-eslint/no-floating-promises": ESLintConfig.RuleOptions<
    [
      {
        ignoreVoid?: boolean;
        ignoreIIFE?: boolean;
      }
    ]
  >;
  /**
   * Disallow iterating over an array with a for-in loop
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-for-in-array.md
   */
  "@typescript-eslint/no-for-in-array": ESLintConfig.RuleWithoutOptions;
  /**
   * Disallow the use of `eval()`-like methods
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-implied-eval.md
   */
  "@typescript-eslint/no-implied-eval": ESLintConfig.RuleWithoutOptions;
  /**
   * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-inferrable-types.md
   */
  "@typescript-eslint/no-inferrable-types": ESLintConfig.RuleOptions<
    [
      {
        ignoreParameters?: boolean;
        ignoreProperties?: boolean;
      }
    ]
  >;
  /**
   * disallow `this` keywords outside of classes or class-like objects
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-invalid-this.md
   */
  "@typescript-eslint/no-invalid-this": ESLintConfig.RuleOptions<
    [
      {
        capIsConstructor?: boolean;
      }
    ]
  >;
  /**
   * Disallows usage of `void` type outside of generic or return types
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
   */
  "@typescript-eslint/no-invalid-void-type": ESLintConfig.RuleOptions<
    [
      {
        allowInGenericTypeArguments?: boolean | string[];
      }
    ]
  >;
  /**
   * Disallow magic numbers
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-magic-numbers.md
   */
  "@typescript-eslint/no-magic-numbers": ESLintConfig.RuleOptions<
    [
      {
        detectObjects?: boolean;
        enforceConst?: boolean;
        ignore?: (number | string)[];
        ignoreArrayIndexes?: boolean;
        ignoreNumericLiteralTypes?: boolean;
        ignoreEnums?: boolean;
        ignoreReadonlyClassProperties?: boolean;
      }
    ]
  >;
  /**
   * Enforce valid definition of `new` and `constructor`
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-misused-new.md
   */
  "@typescript-eslint/no-misused-new": ESLintConfig.RuleWithoutOptions;
  /**
   * Avoid using promises in places not designed to handle them
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-misused-promises.md
   */
  "@typescript-eslint/no-misused-promises": ESLintConfig.RuleOptions<
    [
      {
        checksConditionals?: boolean;
        checksVoidReturn?: boolean;
        [k: string]: unknown | undefined;
      }
    ]
  >;
  /**
   * Disallow the use of custom TypeScript modules and namespaces
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-namespace.md
   */
  "@typescript-eslint/no-namespace": ESLintConfig.RuleOptions<
    [
      {
        allowDeclarations?: boolean;
        allowDefinitionFiles?: boolean;
      }
    ]
  >;
  /**
   * Disallows using a non-null assertion after an optional chain expression
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
   */
  "@typescript-eslint/no-non-null-asserted-optional-chain": ESLintConfig.RuleWithoutOptions;
  /**
   * Disallows non-null assertions using the `!` postfix operator
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
   */
  "@typescript-eslint/no-non-null-assertion": ESLintConfig.RuleWithoutOptions;
  /**
   * Disallow the use of parameter properties in class constructors
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-parameter-properties.md
   */
  "@typescript-eslint/no-parameter-properties": ESLintConfig.RuleOptions<
    [
      {
        allows?: [
          (
            | "readonly"
            | "private"
            | "protected"
            | "public"
            | "private readonly"
            | "protected readonly"
            | "public readonly"
          ),
          ...(
            | "readonly"
            | "private"
            | "protected"
            | "public"
            | "private readonly"
            | "protected readonly"
            | "public readonly"
          )[]
        ];
      }
    ]
  >;
  /**
   * Disallow variable redeclaration
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-redeclare.md
   */
  "@typescript-eslint/no-redeclare": ESLintConfig.RuleOptions<
    [
      {
        builtinGlobals?: boolean;
        ignoreDeclarationMerge?: boolean;
      }
    ]
  >;
  /**
   * Disallows invocation of `require()`
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-require-imports.md
   */
  "@typescript-eslint/no-require-imports": ESLintConfig.RuleWithoutOptions;
  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-shadow.md
   */
  "@typescript-eslint/no-shadow": ESLintConfig.RuleOptions<
    [
      {
        builtinGlobals?: boolean;
        hoist?: "all" | "functions" | "never";
        allow?: string[];
        ignoreTypeValueShadow?: boolean;
        ignoreFunctionTypeParameterNameValueShadow?: boolean;
      }
    ]
  >;
  /**
   * Disallow aliasing `this`
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-this-alias.md
   */
  "@typescript-eslint/no-this-alias": ESLintConfig.RuleOptions<
    [
      {
        allowDestructuring?: boolean;
        allowedNames?: string[];
      }
    ]
  >;
  /**
   * Disallow throwing literals as exceptions
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-throw-literal.md
   */
  "@typescript-eslint/no-throw-literal": ESLintConfig.RuleWithoutOptions;
  /**
   * Disallow the use of type aliases
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-type-alias.md
   */
  "@typescript-eslint/no-type-alias": ESLintConfig.RuleOptions<
    [
      {
        allowAliases?:
          | "always"
          | "never"
          | "in-unions"
          | "in-intersections"
          | "in-unions-and-intersections";
        allowCallbacks?: "always" | "never";
        allowConditionalTypes?: "always" | "never";
        allowConstructors?: "always" | "never";
        allowLiterals?:
          | "always"
          | "never"
          | "in-unions"
          | "in-intersections"
          | "in-unions-and-intersections";
        allowMappedTypes?:
          | "always"
          | "never"
          | "in-unions"
          | "in-intersections"
          | "in-unions-and-intersections";
        allowTupleTypes?:
          | "always"
          | "never"
          | "in-unions"
          | "in-intersections"
          | "in-unions-and-intersections";
      }
    ]
  >;
  /**
   * Flags unnecessary equality comparisons against boolean literals
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
   */
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": ESLintConfig.RuleOptions<
    [
      {
        allowComparingNullableBooleansToTrue?: boolean;
        allowComparingNullableBooleansToFalse?: boolean;
      }
    ]
  >;
  /**
   * Prevents conditionals where the type is always truthy or always falsy
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
   */
  "@typescript-eslint/no-unnecessary-condition": ESLintConfig.RuleOptions<
    [
      {
        allowConstantLoopConditions?: boolean;
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
      }
    ]
  >;
  /**
   * Warns when a namespace qualifier is unnecessary
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
   */
  "@typescript-eslint/no-unnecessary-qualifier": ESLintConfig.RuleWithoutOptions;
  /**
   * Enforces that type arguments will not be used if not required
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
   */
  "@typescript-eslint/no-unnecessary-type-arguments": ESLintConfig.RuleWithoutOptions;
  /**
   * Warns if a type assertion does not change the type of an expression
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
   */
  "@typescript-eslint/no-unnecessary-type-assertion": ESLintConfig.RuleOptions<
    [
      {
        typesToIgnore?: string[];
        [k: string]: unknown | undefined;
      }
    ]
  >;
  /**
   * Disallows assigning any to variables and properties
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
   */
  "@typescript-eslint/no-unsafe-assignment": ESLintConfig.RuleWithoutOptions;
  /**
   * Disallows calling an any type value
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-unsafe-call.md
   */
  "@typescript-eslint/no-unsafe-call": ESLintConfig.RuleWithoutOptions;
  /**
   * Disallows member access on any typed variables
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
   */
  "@typescript-eslint/no-unsafe-member-access": ESLintConfig.RuleWithoutOptions;
  /**
   * Disallows returning any from a function
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-unsafe-return.md
   */
  "@typescript-eslint/no-unsafe-return": ESLintConfig.RuleWithoutOptions;
  /**
   * Disallow unused expressions
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-unused-expressions.md
   */
  "@typescript-eslint/no-unused-expressions": ESLintConfig.RuleOptions<
    [
      {
        allowShortCircuit?: boolean;
        allowTernary?: boolean;
        allowTaggedTemplates?: boolean;
      }
    ]
  >;
  /**
   * Disallow unused variables and arguments
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-unused-vars-experimental.md
   */
  "@typescript-eslint/no-unused-vars-experimental": ESLintConfig.RuleOptions<
    [
      {
        ignoredNamesRegex?: string | false;
        ignoreArgsIfArgsAfterAreUsed?: boolean;
      }
    ]
  >;
  /**
   * Disallow unused variables
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-unused-vars.md
   */
  "@typescript-eslint/no-unused-vars": ESLintConfig.RuleOptions<
    [
      | ("all" | "local")
      | {
          vars?: "all" | "local";
          varsIgnorePattern?: string;
          args?: "all" | "after-used" | "none";
          ignoreRestSiblings?: boolean;
          argsIgnorePattern?: string;
          caughtErrors?: "all" | "none";
          caughtErrorsIgnorePattern?: string;
        }
    ]
  >;
  /**
   * Disallow the use of variables before they are defined
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-use-before-define.md
   */
  "@typescript-eslint/no-use-before-define": ESLintConfig.RuleOptions<
    [
      | "nofunc"
      | {
          functions?: boolean;
          classes?: boolean;
          enums?: boolean;
          variables?: boolean;
          typedefs?: boolean;
          ignoreTypeReferences?: boolean;
        }
    ]
  >;
  /**
   * Disallow unnecessary constructors
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-useless-constructor.md
   */
  "@typescript-eslint/no-useless-constructor": ESLintConfig.RuleWithoutOptions;
  /**
   * Disallows the use of require statements except in import statements
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-var-requires.md
   */
  "@typescript-eslint/no-var-requires": ESLintConfig.RuleWithoutOptions;
  /**
   * Prefer usage of `as const` over literal type
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/prefer-as-const.md
   */
  "@typescript-eslint/prefer-as-const": ESLintConfig.RuleWithoutOptions;
  /**
   * Prefer initializing each enums member value
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
   */
  "@typescript-eslint/prefer-enum-initializers": ESLintConfig.RuleWithoutOptions;
  /**
   * Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/prefer-for-of.md
   */
  "@typescript-eslint/prefer-for-of": ESLintConfig.RuleWithoutOptions;
  /**
   * Use function types instead of interfaces with call signatures
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/prefer-function-type.md
   */
  "@typescript-eslint/prefer-function-type": ESLintConfig.RuleWithoutOptions;
  /**
   * Enforce `includes` method over `indexOf` method
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/prefer-includes.md
   */
  "@typescript-eslint/prefer-includes": ESLintConfig.RuleWithoutOptions;
  /**
   * Require that all enum members be literal values to prevent unintended enum member name shadow issues
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
   */
  "@typescript-eslint/prefer-literal-enum-member": ESLintConfig.RuleWithoutOptions;
  /**
   * Require the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
   */
  "@typescript-eslint/prefer-namespace-keyword": ESLintConfig.RuleWithoutOptions;
  /**
   * Enforce the usage of the nullish coalescing operator instead of logical chaining
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
   */
  "@typescript-eslint/prefer-nullish-coalescing": ESLintConfig.RuleOptions<
    [
      {
        ignoreConditionalTests?: boolean;
        ignoreMixedLogicalExpressions?: boolean;
        forceSuggestionFixer?: boolean;
      }
    ]
  >;
  /**
   * Prefer using concise optional chain expressions instead of chained logical ands
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
   */
  "@typescript-eslint/prefer-optional-chain": ESLintConfig.RuleWithoutOptions;
  /**
   * Requires that function parameters are typed as readonly to prevent accidental mutation of inputs
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
   */
  "@typescript-eslint/prefer-readonly-parameter-types": ESLintConfig.RuleOptions<
    [
      {
        checkParameterProperties?: boolean;
      }
    ]
  >;
  /**
   * Requires that private members are marked as `readonly` if they're never modified outside of the constructor
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/prefer-readonly.md
   */
  "@typescript-eslint/prefer-readonly": ESLintConfig.RuleOptions<
    [
      {
        onlyInlineLambdas?: boolean;
        [k: string]: unknown | undefined;
      }
    ]
  >;
  /**
   * Prefer using type parameter when calling `Array#reduce` instead of casting
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
   */
  "@typescript-eslint/prefer-reduce-type-parameter": ESLintConfig.RuleWithoutOptions;
  /**
   * Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
   */
  "@typescript-eslint/prefer-regexp-exec": ESLintConfig.RuleWithoutOptions;
  /**
   * Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
   */
  "@typescript-eslint/prefer-string-starts-ends-with": ESLintConfig.RuleWithoutOptions;
  /**
   * Recommends using `// @ts-expect-error` over `// @ts-ignore`
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
   */
  "@typescript-eslint/prefer-ts-expect-error": ESLintConfig.RuleWithoutOptions;
  /**
   * Requires any function or method that returns a Promise to be marked async
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/promise-function-async.md
   */
  "@typescript-eslint/promise-function-async": ESLintConfig.RuleOptions<
    [
      {
        allowAny?: boolean;
        allowedPromiseNames?: string[];
        checkArrowFunctions?: boolean;
        checkFunctionDeclarations?: boolean;
        checkFunctionExpressions?: boolean;
        checkMethodDeclarations?: boolean;
      }
    ]
  >;
  /**
   * Enforce the consistent use of either backticks, double, or single quotes
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/quotes.md
   */
  "@typescript-eslint/quotes": ESLintConfig.RuleOptions<
    [
      "single" | "double" | "backtick",
      (
        | "avoid-escape"
        | {
            avoidEscape?: boolean;
            allowTemplateLiterals?: boolean;
          }
      )
    ]
  >;
  /**
   * Requires `Array#sort` calls to always provide a `compareFunction`
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
   */
  "@typescript-eslint/require-array-sort-compare": ESLintConfig.RuleOptions<
    [
      {
        ignoreStringArrays?: boolean;
        [k: string]: unknown | undefined;
      }
    ]
  >;
  /**
   * Disallow async functions which have no `await` expression
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/require-await.md
   */
  "@typescript-eslint/require-await": ESLintConfig.RuleWithoutOptions;
  /**
   * When adding two variables, operands must both be of type number or of type string
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
   */
  "@typescript-eslint/restrict-plus-operands": ESLintConfig.RuleOptions<
    [
      {
        checkCompoundAssignments?: boolean;
      }
    ]
  >;
  /**
   * Enforce template literal expressions to be of string type
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
   */
  "@typescript-eslint/restrict-template-expressions": ESLintConfig.RuleOptions<
    [
      {
        allowNumber?: boolean;
        allowBoolean?: boolean;
        allowAny?: boolean;
        allowNullish?: boolean;
        [k: string]: unknown | undefined;
      }
    ]
  >;
  /**
   * Enforces consistent returning of awaited values
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/return-await.md
   */
  "@typescript-eslint/return-await": ESLintConfig.RuleOptions<
    ["in-try-catch" | "always" | "never"]
  >;
  /**
   * Require or disallow semicolons instead of ASI
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/semi.md
   */
  "@typescript-eslint/semi": ESLintConfig.RuleOptions<
    | []
    | ["never"]
    | [
        "never",
        {
          beforeStatementContinuationChars?: "always" | "any" | "never";
        }
      ]
    | []
    | ["always"]
    | [
        "always",
        {
          omitLastInOneLineBlock?: boolean;
        }
      ]
  >;
  /**
   * Enforces consistent spacing before function parenthesis
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/space-before-function-paren.md
   */
  "@typescript-eslint/space-before-function-paren": ESLintConfig.RuleOptions<
    [
      | ("always" | "never")
      | {
          anonymous?: "always" | "never" | "ignore";
          named?: "always" | "never" | "ignore";
          asyncArrow?: "always" | "never" | "ignore";
        }
    ]
  >;
  /**
   * Restricts the types allowed in boolean expressions
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
   */
  "@typescript-eslint/strict-boolean-expressions": ESLintConfig.RuleOptions<
    [
      {
        allowString?: boolean;
        allowNumber?: boolean;
        allowNullableObject?: boolean;
        allowNullableBoolean?: boolean;
        allowNullableString?: boolean;
        allowNullableNumber?: boolean;
        allowAny?: boolean;
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
      }
    ]
  >;
  /**
   * Exhaustiveness checking in switch with union type
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
   */
  "@typescript-eslint/switch-exhaustiveness-check": ESLintConfig.RuleWithoutOptions;
  /**
   * Sets preference level for triple slash directives versus ES6-style import declarations
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/triple-slash-reference.md
   */
  "@typescript-eslint/triple-slash-reference": ESLintConfig.RuleOptions<
    [
      {
        lib?: "always" | "never";
        path?: "always" | "never";
        types?: "always" | "never" | "prefer-import";
      }
    ]
  >;
  /**
   * Require consistent spacing around type annotations
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
   */
  "@typescript-eslint/type-annotation-spacing": ESLintConfig.RuleOptions<
    [
      {
        before?: boolean;
        after?: boolean;
        overrides?: {
          colon?: {
            before?: boolean;
            after?: boolean;
          };
          arrow?: {
            before?: boolean;
            after?: boolean;
          };
          variable?: {
            before?: boolean;
            after?: boolean;
          };
          parameter?: {
            before?: boolean;
            after?: boolean;
          };
          property?: {
            before?: boolean;
            after?: boolean;
          };
          returnType?: {
            before?: boolean;
            after?: boolean;
          };
        };
      }
    ]
  >;
  /**
   * Requires type annotations to exist
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/typedef.md
   */
  "@typescript-eslint/typedef": ESLintConfig.RuleOptions<
    [
      {
        arrayDestructuring?: boolean;
        arrowParameter?: boolean;
        memberVariableDeclaration?: boolean;
        objectDestructuring?: boolean;
        parameter?: boolean;
        propertyDeclaration?: boolean;
        variableDeclaration?: boolean;
        variableDeclarationIgnoreFunction?: boolean;
        [k: string]: unknown | undefined;
      }
    ]
  >;
  /**
   * Enforces unbound methods are called with their expected scope
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/unbound-method.md
   */
  "@typescript-eslint/unbound-method": ESLintConfig.RuleOptions<
    [
      {
        ignoreStatic?: boolean;
      }
    ]
  >;
  /**
   * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/unified-signatures.md
   */
  "@typescript-eslint/unified-signatures": ESLintConfig.RuleWithoutOptions;
  /**
   * Require or disallow an empty line between class members
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/lines-between-class-members.md
   */
  "@typescript-eslint/lines-between-class-members": ESLintConfig.RuleOptions<{
    [k: string]: unknown | undefined;
  }>;
  /**
   * Disallow literal numbers that lose precision
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
   */
  "@typescript-eslint/no-loss-of-precision": ESLintConfig.RuleWithoutOptions;
}

/* REST IS AUTO-GENERATED REFERENCE TYPES */
