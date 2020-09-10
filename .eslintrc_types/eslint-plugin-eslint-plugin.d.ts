/* AUTO GENERATED */
import { ESLintConfig } from "@typescript-eslint/typed-config";

declare global {
  namespace ESLintConfig {
    interface PluginRules {
      "eslint-plugin": EslintPluginPluginRules;
    }
    interface PluginConfigs {
      "eslint-plugin": {
        "plugin:eslint-plugin/all": true;
        "plugin:eslint-plugin/recommended": true;
        "plugin:eslint-plugin/rules": true;
        "plugin:eslint-plugin/tests": true;
        "plugin:eslint-plugin/rules-recommended": true;
        "plugin:eslint-plugin/tests-recommended": true;
      };
    }
  }
}

interface EslintPluginPluginRules {
  /**
   * enforce consistent use of output assertions in rule tests
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/consistent-output.md
   */
  "eslint-plugin/consistent-output": ESLintConfig.RuleOptions<
    ["always" | "consistent"]
  >;
  /**
   * require fixer function to always return a value.
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/fixer-return.md
   */
  "eslint-plugin/fixer-return": ESLintConfig.RuleWithoutOptions;
  /**
   * enforce the order of meta properties
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/meta-property-ordering.md
   */
  "eslint-plugin/meta-property-ordering": ESLintConfig.RuleOptions<[unknown[]]>;
  /**
   * disallow usage of deprecated methods on rule context objects
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/no-deprecated-context-methods.md
   */
  "eslint-plugin/no-deprecated-context-methods": ESLintConfig.RuleWithoutOptions;
  /**
   * disallow use of the deprecated context.report() API
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/no-deprecated-report-api.md
   */
  "eslint-plugin/no-deprecated-report-api": ESLintConfig.RuleWithoutOptions;
  /**
   * disallow identical tests
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/no-identical-tests.md
   */
  "eslint-plugin/no-identical-tests": ESLintConfig.RuleWithoutOptions;
  /**
   * disallow missing placeholders in rule report messages
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/no-missing-placeholders.md
   */
  "eslint-plugin/no-missing-placeholders": ESLintConfig.RuleWithoutOptions;
  /**
   * disallow unused placeholders in rule report messages
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/no-unused-placeholders.md
   */
  "eslint-plugin/no-unused-placeholders": ESLintConfig.RuleWithoutOptions;
  /**
   * disallow unnecessary calls to sourceCode.getFirstToken and sourceCode.getLastToken
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/no-useless-token-range.md
   */
  "eslint-plugin/no-useless-token-range": ESLintConfig.RuleWithoutOptions;
  /**
   * disallow rule exports where the export is a function.
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/prefer-object-rule.md
   */
  "eslint-plugin/prefer-object-rule": ESLintConfig.RuleWithoutOptions;
  /**
   * disallow invalid RuleTester test cases with the output the same as the code.
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/prefer-output-null.md
   */
  "eslint-plugin/prefer-output-null": ESLintConfig.RuleWithoutOptions;
  /**
   * disallow template literals as report messages
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/prefer-placeholders.md
   */
  "eslint-plugin/prefer-placeholders": ESLintConfig.RuleWithoutOptions;
  /**
   * require using replaceText instead of replaceTextRange.
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/prefer-replace-text.md
   */
  "eslint-plugin/prefer-replace-text": ESLintConfig.RuleWithoutOptions;
  /**
   * enforce a consistent format for rule report messages
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/report-message-format.md
   */
  "eslint-plugin/report-message-format": ESLintConfig.RuleOptions<[string]>;
  /**
   * require rules to implement a meta.docs.description property with the correct format
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/require-meta-docs-description.md
   */
  "eslint-plugin/require-meta-docs-description": ESLintConfig.RuleOptions<
    [
      {
        pattern?: string;
      }
    ]
  >;
  /**
   * require rules to implement a meta.docs.url property
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/require-meta-docs-url.md
   */
  "eslint-plugin/require-meta-docs-url": ESLintConfig.RuleOptions<
    [
      {
        pattern?: string;
      }
    ]
  >;
  /**
   * require rules to implement a meta.fixable property
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/require-meta-fixable.md
   */
  "eslint-plugin/require-meta-fixable": ESLintConfig.RuleWithoutOptions;
  /**
   * require rules to implement a meta.schema property
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/require-meta-schema.md
   */
  "eslint-plugin/require-meta-schema": ESLintConfig.RuleOptions<
    [
      {
        exceptRange?: boolean;
      }
    ]
  >;
  /**
   * require rules to implement a meta.type property
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/require-meta-type.md
   */
  "eslint-plugin/require-meta-type": ESLintConfig.RuleWithoutOptions;
  /**
   * require the properties of a test case to be placed in a consistent order
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/test-case-property-ordering.md
   */
  "eslint-plugin/test-case-property-ordering": ESLintConfig.RuleOptions<
    [unknown[]]
  >;
  /**
   * enforce consistent usage of shorthand strings for test cases with no options
   *
   * https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/tree/v2.3.0/docs/rules/test-case-shorthand-strings.md
   */
  "eslint-plugin/test-case-shorthand-strings": ESLintConfig.RuleOptions<
    ["as-needed" | "never" | "consistent" | "consistent-as-needed"]
  >;
}

/* REST IS AUTO-GENERATED REFERENCE TYPES */
