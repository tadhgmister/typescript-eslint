/* AUTO GENERATED */
import { ESLintConfig } from "@typescript-eslint/typed-config";

declare global {
  namespace ESLintConfig {
    interface PluginRules {
      "@typescript-eslint/internal": TypescriptEslintInternalPluginRules;
    }
    interface PluginConfigs {
      "@typescript-eslint/internal": {};
    }
  }
}

interface TypescriptEslintInternalPluginRules {
  /**
   * Enforces rules don't use TS API properties with known bad type definitions
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin-internal/src/rules/no-poorly-typed-ts-props.ts
   */
  "@typescript-eslint/internal/no-poorly-typed-ts-props": ESLintConfig.RuleWithoutOptions;
  /**
   * Enforces that packages rules don't do `import ts from 'typescript';`
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin-internal/src/rules/no-typescript-default-import.ts
   */
  "@typescript-eslint/internal/no-typescript-default-import": ESLintConfig.RuleWithoutOptions;
  /**
   * Enforces that eslint-plugin rules don't require anything from @typescript-eslint/typescript-estree or @typescript-eslint/types
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin-internal/src/rules/no-typescript-estree-import.ts
   */
  "@typescript-eslint/internal/no-typescript-estree-import": ESLintConfig.RuleWithoutOptions;
  /**
   * Enforces that eslint-plugin test snippets are correctly formatted
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin-internal/src/rules/plugin-test-formatting.ts
   */
  "@typescript-eslint/internal/plugin-test-formatting": ESLintConfig.RuleOptions<
    [
      {
        formatWithPrettier?: boolean;
      }
    ]
  >;
  /**
   * Ensures consistent usage of AST_NODE_TYPES & AST_TOKEN_TYPES enums.
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/v4.0.1/packages/eslint-plugin-internal/src/rules//Users/tadhgmcdonald-jensen/Documents/coding/typescript-eslint/packages/eslint-plugin-internal/dist/rules/prefer-ast-types-enum.js.ts
   */
  "@typescript-eslint/internal/prefer-ast-types-enum": ESLintConfig.RuleWithoutOptions;
}

/* REST IS AUTO-GENERATED REFERENCE TYPES */
