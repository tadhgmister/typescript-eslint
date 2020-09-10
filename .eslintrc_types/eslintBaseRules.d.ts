/* AUTO GENERATED */
import { ESLintConfig } from '@typescript-eslint/typed-config';

declare global {
  namespace ESLintConfig {
    interface BaseRules extends EslintBaseRules {}
  }
}

interface EslintBaseRules {
  /**
   * enforce getter and setter pairs in objects and classes
   *
   * https://eslint.org/docs/rules/accessor-pairs
   */
  'accessor-pairs': ESLintConfig.RuleOptions<
    [
      {
        getWithoutSet?: boolean;
        setWithoutGet?: boolean;
        enforceForClassMembers?: boolean;
      },
    ]
  >;
  /**
   * enforce linebreaks after opening and before closing array brackets
   *
   * https://eslint.org/docs/rules/array-bracket-newline
   */
  'array-bracket-newline': ESLintConfig.RuleOptions<
    [
      | ('always' | 'never' | 'consistent')
      | {
          multiline?: boolean;
          minItems?: number | null;
        },
    ]
  >;
  /**
   * enforce consistent spacing inside array brackets
   *
   * https://eslint.org/docs/rules/array-bracket-spacing
   */
  'array-bracket-spacing': ESLintConfig.RuleOptions<
    [
      'always' | 'never',
      {
        singleValue?: boolean;
        objectsInArrays?: boolean;
        arraysInArrays?: boolean;
      },
    ]
  >;
  /**
   * enforce `return` statements in callbacks of array methods
   *
   * https://eslint.org/docs/rules/array-callback-return
   */
  'array-callback-return': ESLintConfig.RuleOptions<
    [
      {
        allowImplicit?: boolean;
        checkForEach?: boolean;
      },
    ]
  >;
  /**
   * enforce line breaks after each array element
   *
   * https://eslint.org/docs/rules/array-element-newline
   */
  'array-element-newline': ESLintConfig.RuleOptions<
    | []
    | [
        | ArrayElementNewlinebasicConfig
        | {
            ArrayExpression?: ArrayElementNewlinebasicConfig;
            ArrayPattern?: ArrayElementNewlinebasicConfig;
          },
      ]
  >;
  /**
   * require braces around arrow function bodies
   *
   * https://eslint.org/docs/rules/arrow-body-style
   */
  'arrow-body-style': ESLintConfig.RuleOptions<
    | []
    | ['always' | 'never']
    | []
    | ['as-needed']
    | [
        'as-needed',
        {
          requireReturnForObjectLiteral?: boolean;
        },
      ]
  >;
  /**
   * require parentheses around arrow function arguments
   *
   * https://eslint.org/docs/rules/arrow-parens
   */
  'arrow-parens': ESLintConfig.RuleOptions<
    [
      'always' | 'as-needed',
      {
        requireForBlockBody?: boolean;
      },
    ]
  >;
  /**
   * enforce consistent spacing before and after the arrow in arrow functions
   *
   * https://eslint.org/docs/rules/arrow-spacing
   */
  'arrow-spacing': ESLintConfig.RuleOptions<
    [
      {
        before?: boolean;
        after?: boolean;
      },
    ]
  >;
  /**
   * enforce the use of variables within the scope they are defined
   *
   * https://eslint.org/docs/rules/block-scoped-var
   */
  'block-scoped-var': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow or enforce spaces inside of blocks after opening block and before closing block
   *
   * https://eslint.org/docs/rules/block-spacing
   */
  'block-spacing': ESLintConfig.RuleOptions<['always' | 'never']>;
  /**
   * enforce consistent brace style for blocks
   *
   * https://eslint.org/docs/rules/brace-style
   */
  'brace-style': ESLintConfig.RuleOptions<
    [
      '1tbs' | 'stroustrup' | 'allman',
      {
        allowSingleLine?: boolean;
      },
    ]
  >;
  /**
   * require `return` statements after callbacks
   *
   * https://eslint.org/docs/rules/callback-return
   */
  'callback-return': ESLintConfig.RuleOptions<[string[]]>;
  /**
   * enforce camelcase naming convention
   *
   * https://eslint.org/docs/rules/camelcase
   */
  camelcase: ESLintConfig.RuleOptions<
    [
      {
        ignoreDestructuring?: boolean;
        ignoreImports?: boolean;
        ignoreGlobals?: boolean;
        properties?: 'always' | 'never';
        allow?: [] | [string];
      },
    ]
  >;
  /**
   * enforce or disallow capitalization of the first letter of a comment
   *
   * https://eslint.org/docs/rules/capitalized-comments
   */
  'capitalized-comments': ESLintConfig.RuleOptions<
    [
      'always' | 'never',
      (
        | {
            ignorePattern?: string;
            ignoreInlineComments?: boolean;
            ignoreConsecutiveComments?: boolean;
          }
        | {
            line?: {
              ignorePattern?: string;
              ignoreInlineComments?: boolean;
              ignoreConsecutiveComments?: boolean;
            };
            block?: {
              ignorePattern?: string;
              ignoreInlineComments?: boolean;
              ignoreConsecutiveComments?: boolean;
            };
          }
      ),
    ]
  >;
  /**
   * enforce that class methods utilize `this`
   *
   * https://eslint.org/docs/rules/class-methods-use-this
   */
  'class-methods-use-this': ESLintConfig.RuleOptions<
    [
      {
        exceptMethods?: string[];
      },
    ]
  >;
  /**
   * require or disallow trailing commas
   *
   * https://eslint.org/docs/rules/comma-dangle
   */
  'comma-dangle': ESLintConfig.RuleOptions<
    | []
    | [
        | CommaDanglevalue
        | {
            arrays?: CommaDanglevalueWithIgnore;
            objects?: CommaDanglevalueWithIgnore;
            imports?: CommaDanglevalueWithIgnore;
            exports?: CommaDanglevalueWithIgnore;
            functions?: CommaDanglevalueWithIgnore;
          },
      ]
  >;
  /**
   * enforce consistent spacing before and after commas
   *
   * https://eslint.org/docs/rules/comma-spacing
   */
  'comma-spacing': ESLintConfig.RuleOptions<
    [
      {
        before?: boolean;
        after?: boolean;
      },
    ]
  >;
  /**
   * enforce consistent comma style
   *
   * https://eslint.org/docs/rules/comma-style
   */
  'comma-style': ESLintConfig.RuleOptions<
    [
      'first' | 'last',
      {
        exceptions?: {
          [k: string]: boolean | undefined;
        };
      },
    ]
  >;
  /**
   * enforce a maximum cyclomatic complexity allowed in a program
   *
   * https://eslint.org/docs/rules/complexity
   */
  complexity: ESLintConfig.RuleOptions<
    [
      | number
      | {
          maximum?: number;
          max?: number;
        },
    ]
  >;
  /**
   * enforce consistent spacing inside computed property brackets
   *
   * https://eslint.org/docs/rules/computed-property-spacing
   */
  'computed-property-spacing': ESLintConfig.RuleOptions<
    [
      'always' | 'never',
      {
        enforceForClassMembers?: boolean;
      },
    ]
  >;
  /**
   * require `return` statements to either always or never specify values
   *
   * https://eslint.org/docs/rules/consistent-return
   */
  'consistent-return': ESLintConfig.RuleOptions<
    [
      {
        treatUndefinedAsUnspecified?: boolean;
      },
    ]
  >;
  /**
   * enforce consistent naming when capturing the current execution context
   *
   * https://eslint.org/docs/rules/consistent-this
   */
  'consistent-this': ESLintConfig.RuleOptions<string[]>;
  /**
   * require `super()` calls in constructors
   *
   * https://eslint.org/docs/rules/constructor-super
   */
  'constructor-super': ESLintConfig.RuleWithoutOptions;
  /**
   * enforce consistent brace style for all control statements
   *
   * https://eslint.org/docs/rules/curly
   */
  curly: ESLintConfig.RuleOptions<
    | []
    | ['all']
    | []
    | ['multi' | 'multi-line' | 'multi-or-nest']
    | ['multi' | 'multi-line' | 'multi-or-nest', 'consistent']
  >;
  /**
   * require `default` cases in `switch` statements
   *
   * https://eslint.org/docs/rules/default-case
   */
  'default-case': ESLintConfig.RuleOptions<
    [
      {
        commentPattern?: string;
      },
    ]
  >;
  /**
   * enforce default clauses in switch statements to be last
   *
   * https://eslint.org/docs/rules/default-case-last
   */
  'default-case-last': ESLintConfig.RuleWithoutOptions;
  /**
   * enforce default parameters to be last
   *
   * https://eslint.org/docs/rules/default-param-last
   */
  'default-param-last': ESLintConfig.RuleWithoutOptions;
  /**
   * enforce consistent newlines before and after dots
   *
   * https://eslint.org/docs/rules/dot-location
   */
  'dot-location': ESLintConfig.RuleOptions<['object' | 'property']>;
  /**
   * enforce dot notation whenever possible
   *
   * https://eslint.org/docs/rules/dot-notation
   */
  'dot-notation': ESLintConfig.RuleOptions<
    [
      {
        allowKeywords?: boolean;
        allowPattern?: string;
      },
    ]
  >;
  /**
   * require or disallow newline at the end of files
   *
   * https://eslint.org/docs/rules/eol-last
   */
  'eol-last': ESLintConfig.RuleOptions<
    ['always' | 'never' | 'unix' | 'windows']
  >;
  /**
   * require the use of `===` and `!==`
   *
   * https://eslint.org/docs/rules/eqeqeq
   */
  eqeqeq: ESLintConfig.RuleOptions<
    | []
    | ['always']
    | [
        'always',
        {
          null?: 'always' | 'never' | 'ignore';
        },
      ]
    | []
    | ['smart' | 'allow-null']
  >;
  /**
   * enforce "for" loop update clause moving the counter in the right direction.
   *
   * https://eslint.org/docs/rules/for-direction
   */
  'for-direction': ESLintConfig.RuleWithoutOptions;
  /**
   * require or disallow spacing between function identifiers and their invocations
   *
   * https://eslint.org/docs/rules/func-call-spacing
   */
  'func-call-spacing': ESLintConfig.RuleOptions<
    | []
    | ['never']
    | []
    | ['always']
    | [
        'always',
        {
          allowNewlines?: boolean;
        },
      ]
  >;
  /**
   * require function names to match the name of the variable or property to which they are assigned
   *
   * https://eslint.org/docs/rules/func-name-matching
   */
  'func-name-matching': ESLintConfig.RuleOptions<
    | []
    | ['always' | 'never']
    | [
        'always' | 'never',
        {
          considerPropertyDescriptor?: boolean;
          includeCommonJSModuleExports?: boolean;
        },
      ]
    | []
    | [
        {
          considerPropertyDescriptor?: boolean;
          includeCommonJSModuleExports?: boolean;
        },
      ]
  >;
  /**
   * require or disallow named `function` expressions
   *
   * https://eslint.org/docs/rules/func-names
   */
  'func-names': ESLintConfig.RuleOptions<
    | []
    | [FuncNamesvalue]
    | [
        FuncNamesvalue,
        {
          generators?: FuncNamesvalue;
        },
      ]
  >;
  /**
   * enforce the consistent use of either `function` declarations or expressions
   *
   * https://eslint.org/docs/rules/func-style
   */
  'func-style': ESLintConfig.RuleOptions<
    [
      'declaration' | 'expression',
      {
        allowArrowFunctions?: boolean;
      },
    ]
  >;
  /**
   * enforce line breaks between arguments of a function call
   *
   * https://eslint.org/docs/rules/function-call-argument-newline
   */
  'function-call-argument-newline': ESLintConfig.RuleOptions<
    ['always' | 'never' | 'consistent']
  >;
  /**
   * enforce consistent line breaks inside function parentheses
   *
   * https://eslint.org/docs/rules/function-paren-newline
   */
  'function-paren-newline': ESLintConfig.RuleOptions<
    [
      | (
          | 'always'
          | 'never'
          | 'consistent'
          | 'multiline'
          | 'multiline-arguments'
        )
      | {
          minItems?: number;
        },
    ]
  >;
  /**
   * enforce consistent spacing around `*` operators in generator functions
   *
   * https://eslint.org/docs/rules/generator-star-spacing
   */
  'generator-star-spacing': ESLintConfig.RuleOptions<
    [
      | ('before' | 'after' | 'both' | 'neither')
      | {
          before?: boolean;
          after?: boolean;
          named?:
            | ('before' | 'after' | 'both' | 'neither')
            | {
                before?: boolean;
                after?: boolean;
              };
          anonymous?:
            | ('before' | 'after' | 'both' | 'neither')
            | {
                before?: boolean;
                after?: boolean;
              };
          method?:
            | ('before' | 'after' | 'both' | 'neither')
            | {
                before?: boolean;
                after?: boolean;
              };
        },
    ]
  >;
  /**
   * enforce `return` statements in getters
   *
   * https://eslint.org/docs/rules/getter-return
   */
  'getter-return': ESLintConfig.RuleOptions<
    [
      {
        allowImplicit?: boolean;
      },
    ]
  >;
  /**
   * require `require()` calls to be placed at top-level module scope
   *
   * https://eslint.org/docs/rules/global-require
   */
  'global-require': ESLintConfig.RuleWithoutOptions;
  /**
   * require grouped accessor pairs in object literals and classes
   *
   * https://eslint.org/docs/rules/grouped-accessor-pairs
   */
  'grouped-accessor-pairs': ESLintConfig.RuleOptions<
    ['anyOrder' | 'getBeforeSet' | 'setBeforeGet']
  >;
  /**
   * require `for-in` loops to include an `if` statement
   *
   * https://eslint.org/docs/rules/guard-for-in
   */
  'guard-for-in': ESLintConfig.RuleWithoutOptions;
  /**
   * require error handling in callbacks
   *
   * https://eslint.org/docs/rules/handle-callback-err
   */
  'handle-callback-err': ESLintConfig.RuleOptions<[string]>;
  /**
   * disallow specified identifiers
   *
   * https://eslint.org/docs/rules/id-blacklist
   */
  'id-blacklist': ESLintConfig.RuleOptions<string[]>;
  /**
   * disallow specified identifiers
   *
   * https://eslint.org/docs/rules/id-denylist
   */
  'id-denylist': ESLintConfig.RuleOptions<string[]>;
  /**
   * enforce minimum and maximum identifier lengths
   *
   * https://eslint.org/docs/rules/id-length
   */
  'id-length': ESLintConfig.RuleOptions<
    [
      {
        min?: number;
        max?: number;
        exceptions?: string[];
        properties?: 'always' | 'never';
      },
    ]
  >;
  /**
   * require identifiers to match a specified regular expression
   *
   * https://eslint.org/docs/rules/id-match
   */
  'id-match': ESLintConfig.RuleOptions<
    [
      string,
      {
        properties?: boolean;
        onlyDeclarations?: boolean;
        ignoreDestructuring?: boolean;
      },
    ]
  >;
  /**
   * enforce the location of arrow function bodies
   *
   * https://eslint.org/docs/rules/implicit-arrow-linebreak
   */
  'implicit-arrow-linebreak': ESLintConfig.RuleOptions<['beside' | 'below']>;
  /**
   * enforce consistent indentation
   *
   * https://eslint.org/docs/rules/indent
   */
  indent: ESLintConfig.RuleOptions<
    [
      'tab' | number,
      {
        SwitchCase?: number;
        VariableDeclarator?:
          | (number | ('first' | 'off'))
          | {
              var?: number | ('first' | 'off');
              let?: number | ('first' | 'off');
              const?: number | ('first' | 'off');
            };
        outerIIFEBody?: number | 'off';
        MemberExpression?: number | 'off';
        FunctionDeclaration?: {
          parameters?: number | ('first' | 'off');
          body?: number;
        };
        FunctionExpression?: {
          parameters?: number | ('first' | 'off');
          body?: number;
        };
        CallExpression?: {
          arguments?: number | ('first' | 'off');
        };
        ArrayExpression?: number | ('first' | 'off');
        ObjectExpression?: number | ('first' | 'off');
        ImportDeclaration?: number | ('first' | 'off');
        flatTernaryExpressions?: boolean;
        offsetTernaryExpressions?: boolean;
        ignoredNodes?: string[];
        ignoreComments?: boolean;
      },
    ]
  >;
  /**
   * enforce consistent indentation
   *
   * https://eslint.org/docs/rules/indent-legacy
   */
  'indent-legacy': ESLintConfig.RuleOptions<
    [
      'tab' | number,
      {
        SwitchCase?: number;
        VariableDeclarator?:
          | number
          | {
              var?: number;
              let?: number;
              const?: number;
              [k: string]: unknown | undefined;
            };
        outerIIFEBody?: number;
        MemberExpression?: number;
        FunctionDeclaration?: {
          parameters?: number | 'first';
          body?: number;
          [k: string]: unknown | undefined;
        };
        FunctionExpression?: {
          parameters?: number | 'first';
          body?: number;
          [k: string]: unknown | undefined;
        };
        CallExpression?: {
          parameters?: number | 'first';
          [k: string]: unknown | undefined;
        };
        ArrayExpression?: number | 'first';
        ObjectExpression?: number | 'first';
      },
    ]
  >;
  /**
   * require or disallow initialization in variable declarations
   *
   * https://eslint.org/docs/rules/init-declarations
   */
  'init-declarations': ESLintConfig.RuleOptions<
    | []
    | ['always']
    | []
    | ['never']
    | [
        'never',
        {
          ignoreForLoopInit?: boolean;
        },
      ]
  >;
  /**
   * enforce the consistent use of either double or single quotes in JSX attributes
   *
   * https://eslint.org/docs/rules/jsx-quotes
   */
  'jsx-quotes': ESLintConfig.RuleOptions<['prefer-single' | 'prefer-double']>;
  /**
   * enforce consistent spacing between keys and values in object literal properties
   *
   * https://eslint.org/docs/rules/key-spacing
   */
  'key-spacing': ESLintConfig.RuleOptions<
    [
      | {
          align?:
            | ('colon' | 'value')
            | {
                mode?: 'strict' | 'minimum';
                on?: 'colon' | 'value';
                beforeColon?: boolean;
                afterColon?: boolean;
              };
          mode?: 'strict' | 'minimum';
          beforeColon?: boolean;
          afterColon?: boolean;
        }
      | {
          singleLine?: {
            mode?: 'strict' | 'minimum';
            beforeColon?: boolean;
            afterColon?: boolean;
          };
          multiLine?: {
            align?:
              | ('colon' | 'value')
              | {
                  mode?: 'strict' | 'minimum';
                  on?: 'colon' | 'value';
                  beforeColon?: boolean;
                  afterColon?: boolean;
                };
            mode?: 'strict' | 'minimum';
            beforeColon?: boolean;
            afterColon?: boolean;
          };
        }
      | {
          singleLine?: {
            mode?: 'strict' | 'minimum';
            beforeColon?: boolean;
            afterColon?: boolean;
          };
          multiLine?: {
            mode?: 'strict' | 'minimum';
            beforeColon?: boolean;
            afterColon?: boolean;
          };
          align?: {
            mode?: 'strict' | 'minimum';
            on?: 'colon' | 'value';
            beforeColon?: boolean;
            afterColon?: boolean;
          };
        },
    ]
  >;
  /**
   * enforce consistent spacing before and after keywords
   *
   * https://eslint.org/docs/rules/keyword-spacing
   */
  'keyword-spacing': ESLintConfig.RuleOptions<
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
      },
    ]
  >;
  /**
   * enforce position of line comments
   *
   * https://eslint.org/docs/rules/line-comment-position
   */
  'line-comment-position': ESLintConfig.RuleOptions<
    [
      | ('above' | 'beside')
      | {
          position?: 'above' | 'beside';
          ignorePattern?: string;
          applyDefaultPatterns?: boolean;
          applyDefaultIgnorePatterns?: boolean;
        },
    ]
  >;
  /**
   * enforce consistent linebreak style
   *
   * https://eslint.org/docs/rules/linebreak-style
   */
  'linebreak-style': ESLintConfig.RuleOptions<['unix' | 'windows']>;
  /**
   * require empty lines around comments
   *
   * https://eslint.org/docs/rules/lines-around-comment
   */
  'lines-around-comment': ESLintConfig.RuleOptions<
    [
      {
        beforeBlockComment?: boolean;
        afterBlockComment?: boolean;
        beforeLineComment?: boolean;
        afterLineComment?: boolean;
        allowBlockStart?: boolean;
        allowBlockEnd?: boolean;
        allowClassStart?: boolean;
        allowClassEnd?: boolean;
        allowObjectStart?: boolean;
        allowObjectEnd?: boolean;
        allowArrayStart?: boolean;
        allowArrayEnd?: boolean;
        ignorePattern?: string;
        applyDefaultIgnorePatterns?: boolean;
      },
    ]
  >;
  /**
   * require or disallow newlines around directives
   *
   * https://eslint.org/docs/rules/lines-around-directive
   */
  'lines-around-directive': ESLintConfig.RuleOptions<
    [
      | ('always' | 'never')
      | {
          before?: 'always' | 'never';
          after?: 'always' | 'never';
        },
    ]
  >;
  /**
   * require or disallow an empty line between class members
   *
   * https://eslint.org/docs/rules/lines-between-class-members
   */
  'lines-between-class-members': ESLintConfig.RuleOptions<
    [
      'always' | 'never',
      {
        exceptAfterSingleLine?: boolean;
      },
    ]
  >;
  /**
   * enforce a maximum number of classes per file
   *
   * https://eslint.org/docs/rules/max-classes-per-file
   */
  'max-classes-per-file': ESLintConfig.RuleOptions<[number]>;
  /**
   * enforce a maximum depth that blocks can be nested
   *
   * https://eslint.org/docs/rules/max-depth
   */
  'max-depth': ESLintConfig.RuleOptions<
    [
      | number
      | {
          maximum?: number;
          max?: number;
        },
    ]
  >;
  /**
   * enforce a maximum line length
   *
   * https://eslint.org/docs/rules/max-len
   */
  'max-len': ESLintConfig.RuleOptions<
    [
      (
        | {
            code?: number;
            comments?: number;
            tabWidth?: number;
            ignorePattern?: string;
            ignoreComments?: boolean;
            ignoreStrings?: boolean;
            ignoreUrls?: boolean;
            ignoreTemplateLiterals?: boolean;
            ignoreRegExpLiterals?: boolean;
            ignoreTrailingComments?: boolean;
          }
        | number
      ),
      (
        | {
            code?: number;
            comments?: number;
            tabWidth?: number;
            ignorePattern?: string;
            ignoreComments?: boolean;
            ignoreStrings?: boolean;
            ignoreUrls?: boolean;
            ignoreTemplateLiterals?: boolean;
            ignoreRegExpLiterals?: boolean;
            ignoreTrailingComments?: boolean;
          }
        | number
      ),
      {
        code?: number;
        comments?: number;
        tabWidth?: number;
        ignorePattern?: string;
        ignoreComments?: boolean;
        ignoreStrings?: boolean;
        ignoreUrls?: boolean;
        ignoreTemplateLiterals?: boolean;
        ignoreRegExpLiterals?: boolean;
        ignoreTrailingComments?: boolean;
      },
    ]
  >;
  /**
   * enforce a maximum number of lines per file
   *
   * https://eslint.org/docs/rules/max-lines
   */
  'max-lines': ESLintConfig.RuleOptions<
    [
      | number
      | {
          max?: number;
          skipComments?: boolean;
          skipBlankLines?: boolean;
        },
    ]
  >;
  /**
   * enforce a maximum number of line of code in a function
   *
   * https://eslint.org/docs/rules/max-lines-per-function
   */
  'max-lines-per-function': ESLintConfig.RuleOptions<
    [
      | {
          max?: number;
          skipComments?: boolean;
          skipBlankLines?: boolean;
          IIFEs?: boolean;
        }
      | number,
    ]
  >;
  /**
   * enforce a maximum depth that callbacks can be nested
   *
   * https://eslint.org/docs/rules/max-nested-callbacks
   */
  'max-nested-callbacks': ESLintConfig.RuleOptions<
    [
      | number
      | {
          maximum?: number;
          max?: number;
        },
    ]
  >;
  /**
   * enforce a maximum number of parameters in function definitions
   *
   * https://eslint.org/docs/rules/max-params
   */
  'max-params': ESLintConfig.RuleOptions<
    [
      | number
      | {
          maximum?: number;
          max?: number;
        },
    ]
  >;
  /**
   * enforce a maximum number of statements allowed in function blocks
   *
   * https://eslint.org/docs/rules/max-statements
   */
  'max-statements': ESLintConfig.RuleOptions<
    [
      (
        | number
        | {
            maximum?: number;
            max?: number;
          }
      ),
      {
        ignoreTopLevelFunctions?: boolean;
      },
    ]
  >;
  /**
   * enforce a maximum number of statements allowed per line
   *
   * https://eslint.org/docs/rules/max-statements-per-line
   */
  'max-statements-per-line': ESLintConfig.RuleOptions<
    [
      {
        max?: number;
      },
    ]
  >;
  /**
   * enforce a particular style for multiline comments
   *
   * https://eslint.org/docs/rules/multiline-comment-style
   */
  'multiline-comment-style': ESLintConfig.RuleOptions<
    ['starred-block' | 'separate-lines' | 'bare-block']
  >;
  /**
   * enforce newlines between operands of ternary expressions
   *
   * https://eslint.org/docs/rules/multiline-ternary
   */
  'multiline-ternary': ESLintConfig.RuleOptions<
    ['always' | 'always-multiline' | 'never']
  >;
  /**
   * require constructor names to begin with a capital letter
   *
   * https://eslint.org/docs/rules/new-cap
   */
  'new-cap': ESLintConfig.RuleOptions<
    [
      {
        newIsCap?: boolean;
        capIsNew?: boolean;
        newIsCapExceptions?: string[];
        newIsCapExceptionPattern?: string;
        capIsNewExceptions?: string[];
        capIsNewExceptionPattern?: string;
        properties?: boolean;
      },
    ]
  >;
  /**
   * enforce or disallow parentheses when invoking a constructor with no arguments
   *
   * https://eslint.org/docs/rules/new-parens
   */
  'new-parens': ESLintConfig.RuleOptions<[] | ['always' | 'never']>;
  /**
   * require or disallow an empty line after variable declarations
   *
   * https://eslint.org/docs/rules/newline-after-var
   */
  'newline-after-var': ESLintConfig.RuleOptions<['never' | 'always']>;
  /**
   * require an empty line before `return` statements
   *
   * https://eslint.org/docs/rules/newline-before-return
   */
  'newline-before-return': ESLintConfig.RuleWithoutOptions;
  /**
   * require a newline after each call in a method chain
   *
   * https://eslint.org/docs/rules/newline-per-chained-call
   */
  'newline-per-chained-call': ESLintConfig.RuleOptions<
    [
      {
        ignoreChainWithDepth?: number;
      },
    ]
  >;
  /**
   * disallow the use of `alert`, `confirm`, and `prompt`
   *
   * https://eslint.org/docs/rules/no-alert
   */
  'no-alert': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow `Array` constructors
   *
   * https://eslint.org/docs/rules/no-array-constructor
   */
  'no-array-constructor': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow using an async function as a Promise executor
   *
   * https://eslint.org/docs/rules/no-async-promise-executor
   */
  'no-async-promise-executor': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow `await` inside of loops
   *
   * https://eslint.org/docs/rules/no-await-in-loop
   */
  'no-await-in-loop': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow bitwise operators
   *
   * https://eslint.org/docs/rules/no-bitwise
   */
  'no-bitwise': ESLintConfig.RuleOptions<
    [
      {
        allow?: (
          | '^'
          | '|'
          | '&'
          | '<<'
          | '>>'
          | '>>>'
          | '^='
          | '|='
          | '&='
          | '<<='
          | '>>='
          | '>>>='
          | '~'
        )[];
        int32Hint?: boolean;
      },
    ]
  >;
  /**
   * disallow use of the `Buffer()` constructor
   *
   * https://eslint.org/docs/rules/no-buffer-constructor
   */
  'no-buffer-constructor': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow the use of `arguments.caller` or `arguments.callee`
   *
   * https://eslint.org/docs/rules/no-caller
   */
  'no-caller': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow lexical declarations in case clauses
   *
   * https://eslint.org/docs/rules/no-case-declarations
   */
  'no-case-declarations': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow `catch` clause parameters from shadowing variables in the outer scope
   *
   * https://eslint.org/docs/rules/no-catch-shadow
   */
  'no-catch-shadow': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow reassigning class members
   *
   * https://eslint.org/docs/rules/no-class-assign
   */
  'no-class-assign': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow comparing against -0
   *
   * https://eslint.org/docs/rules/no-compare-neg-zero
   */
  'no-compare-neg-zero': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow assignment operators in conditional expressions
   *
   * https://eslint.org/docs/rules/no-cond-assign
   */
  'no-cond-assign': ESLintConfig.RuleOptions<['except-parens' | 'always']>;
  /**
   * disallow arrow functions where they could be confused with comparisons
   *
   * https://eslint.org/docs/rules/no-confusing-arrow
   */
  'no-confusing-arrow': ESLintConfig.RuleOptions<
    [
      {
        allowParens?: boolean;
      },
    ]
  >;
  /**
   * disallow the use of `console`
   *
   * https://eslint.org/docs/rules/no-console
   */
  'no-console': ESLintConfig.RuleOptions<
    [
      {
        allow?: [string, ...string[]];
      },
    ]
  >;
  /**
   * disallow reassigning `const` variables
   *
   * https://eslint.org/docs/rules/no-const-assign
   */
  'no-const-assign': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow constant expressions in conditions
   *
   * https://eslint.org/docs/rules/no-constant-condition
   */
  'no-constant-condition': ESLintConfig.RuleOptions<
    [
      {
        checkLoops?: boolean;
      },
    ]
  >;
  /**
   * disallow returning value from constructor
   *
   * https://eslint.org/docs/rules/no-constructor-return
   */
  'no-constructor-return': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow `continue` statements
   *
   * https://eslint.org/docs/rules/no-continue
   */
  'no-continue': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow control characters in regular expressions
   *
   * https://eslint.org/docs/rules/no-control-regex
   */
  'no-control-regex': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow the use of `debugger`
   *
   * https://eslint.org/docs/rules/no-debugger
   */
  'no-debugger': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow deleting variables
   *
   * https://eslint.org/docs/rules/no-delete-var
   */
  'no-delete-var': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow division operators explicitly at the beginning of regular expressions
   *
   * https://eslint.org/docs/rules/no-div-regex
   */
  'no-div-regex': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow duplicate arguments in `function` definitions
   *
   * https://eslint.org/docs/rules/no-dupe-args
   */
  'no-dupe-args': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow duplicate class members
   *
   * https://eslint.org/docs/rules/no-dupe-class-members
   */
  'no-dupe-class-members': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow duplicate conditions in if-else-if chains
   *
   * https://eslint.org/docs/rules/no-dupe-else-if
   */
  'no-dupe-else-if': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow duplicate keys in object literals
   *
   * https://eslint.org/docs/rules/no-dupe-keys
   */
  'no-dupe-keys': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow duplicate case labels
   *
   * https://eslint.org/docs/rules/no-duplicate-case
   */
  'no-duplicate-case': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow duplicate module imports
   *
   * https://eslint.org/docs/rules/no-duplicate-imports
   */
  'no-duplicate-imports': ESLintConfig.RuleOptions<
    [
      {
        includeExports?: boolean;
      },
    ]
  >;
  /**
   * disallow `else` blocks after `return` statements in `if` statements
   *
   * https://eslint.org/docs/rules/no-else-return
   */
  'no-else-return': ESLintConfig.RuleOptions<
    [
      {
        allowElseIf?: boolean;
      },
    ]
  >;
  /**
   * disallow empty block statements
   *
   * https://eslint.org/docs/rules/no-empty
   */
  'no-empty': ESLintConfig.RuleOptions<
    [
      {
        allowEmptyCatch?: boolean;
      },
    ]
  >;
  /**
   * disallow empty character classes in regular expressions
   *
   * https://eslint.org/docs/rules/no-empty-character-class
   */
  'no-empty-character-class': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow empty functions
   *
   * https://eslint.org/docs/rules/no-empty-function
   */
  'no-empty-function': ESLintConfig.RuleOptions<
    [
      {
        allow?: (
          | 'functions'
          | 'arrowFunctions'
          | 'generatorFunctions'
          | 'methods'
          | 'generatorMethods'
          | 'getters'
          | 'setters'
          | 'constructors'
          | 'asyncFunctions'
          | 'asyncMethods'
        )[];
      },
    ]
  >;
  /**
   * disallow empty destructuring patterns
   *
   * https://eslint.org/docs/rules/no-empty-pattern
   */
  'no-empty-pattern': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow `null` comparisons without type-checking operators
   *
   * https://eslint.org/docs/rules/no-eq-null
   */
  'no-eq-null': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow the use of `eval()`
   *
   * https://eslint.org/docs/rules/no-eval
   */
  'no-eval': ESLintConfig.RuleOptions<
    [
      {
        allowIndirect?: boolean;
      },
    ]
  >;
  /**
   * disallow reassigning exceptions in `catch` clauses
   *
   * https://eslint.org/docs/rules/no-ex-assign
   */
  'no-ex-assign': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow extending native types
   *
   * https://eslint.org/docs/rules/no-extend-native
   */
  'no-extend-native': ESLintConfig.RuleOptions<
    [
      {
        exceptions?: string[];
      },
    ]
  >;
  /**
   * disallow unnecessary calls to `.bind()`
   *
   * https://eslint.org/docs/rules/no-extra-bind
   */
  'no-extra-bind': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow unnecessary boolean casts
   *
   * https://eslint.org/docs/rules/no-extra-boolean-cast
   */
  'no-extra-boolean-cast': ESLintConfig.RuleOptions<
    [
      {
        enforceForLogicalOperands?: boolean;
      },
    ]
  >;
  /**
   * disallow unnecessary labels
   *
   * https://eslint.org/docs/rules/no-extra-label
   */
  'no-extra-label': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow unnecessary parentheses
   *
   * https://eslint.org/docs/rules/no-extra-parens
   */
  'no-extra-parens': ESLintConfig.RuleOptions<
    | []
    | ['functions']
    | []
    | ['all']
    | [
        'all',
        {
          conditionalAssign?: boolean;
          nestedBinaryExpressions?: boolean;
          returnAssign?: boolean;
          ignoreJSX?: 'none' | 'all' | 'single-line' | 'multi-line';
          enforceForArrowConditionals?: boolean;
          enforceForSequenceExpressions?: boolean;
          enforceForNewInMemberExpressions?: boolean;
          enforceForFunctionPrototypeMethods?: boolean;
        },
      ]
  >;
  /**
   * disallow unnecessary semicolons
   *
   * https://eslint.org/docs/rules/no-extra-semi
   */
  'no-extra-semi': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow fallthrough of `case` statements
   *
   * https://eslint.org/docs/rules/no-fallthrough
   */
  'no-fallthrough': ESLintConfig.RuleOptions<
    [
      {
        commentPattern?: string;
      },
    ]
  >;
  /**
   * disallow leading or trailing decimal points in numeric literals
   *
   * https://eslint.org/docs/rules/no-floating-decimal
   */
  'no-floating-decimal': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow reassigning `function` declarations
   *
   * https://eslint.org/docs/rules/no-func-assign
   */
  'no-func-assign': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow assignments to native objects or read-only global variables
   *
   * https://eslint.org/docs/rules/no-global-assign
   */
  'no-global-assign': ESLintConfig.RuleOptions<
    [
      {
        exceptions?: string[];
      },
    ]
  >;
  /**
   * disallow shorthand type conversions
   *
   * https://eslint.org/docs/rules/no-implicit-coercion
   */
  'no-implicit-coercion': ESLintConfig.RuleOptions<
    [
      {
        boolean?: boolean;
        number?: boolean;
        string?: boolean;
        allow?: ('~' | '!!' | '+' | '*')[];
      },
    ]
  >;
  /**
   * disallow declarations in the global scope
   *
   * https://eslint.org/docs/rules/no-implicit-globals
   */
  'no-implicit-globals': ESLintConfig.RuleOptions<
    [
      {
        lexicalBindings?: boolean;
      },
    ]
  >;
  /**
   * disallow the use of `eval()`-like methods
   *
   * https://eslint.org/docs/rules/no-implied-eval
   */
  'no-implied-eval': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow assigning to imported bindings
   *
   * https://eslint.org/docs/rules/no-import-assign
   */
  'no-import-assign': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow inline comments after code
   *
   * https://eslint.org/docs/rules/no-inline-comments
   */
  'no-inline-comments': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow variable or `function` declarations in nested blocks
   *
   * https://eslint.org/docs/rules/no-inner-declarations
   */
  'no-inner-declarations': ESLintConfig.RuleOptions<['functions' | 'both']>;
  /**
   * disallow invalid regular expression strings in `RegExp` constructors
   *
   * https://eslint.org/docs/rules/no-invalid-regexp
   */
  'no-invalid-regexp': ESLintConfig.RuleOptions<
    [
      {
        allowConstructorFlags?: string[];
      },
    ]
  >;
  /**
   * disallow `this` keywords outside of classes or class-like objects
   *
   * https://eslint.org/docs/rules/no-invalid-this
   */
  'no-invalid-this': ESLintConfig.RuleOptions<
    [
      {
        capIsConstructor?: boolean;
      },
    ]
  >;
  /**
   * disallow irregular whitespace
   *
   * https://eslint.org/docs/rules/no-irregular-whitespace
   */
  'no-irregular-whitespace': ESLintConfig.RuleOptions<
    [
      {
        skipComments?: boolean;
        skipStrings?: boolean;
        skipTemplates?: boolean;
        skipRegExps?: boolean;
      },
    ]
  >;
  /**
   * disallow the use of the `__iterator__` property
   *
   * https://eslint.org/docs/rules/no-iterator
   */
  'no-iterator': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow labels that share a name with a variable
   *
   * https://eslint.org/docs/rules/no-label-var
   */
  'no-label-var': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow labeled statements
   *
   * https://eslint.org/docs/rules/no-labels
   */
  'no-labels': ESLintConfig.RuleOptions<
    [
      {
        allowLoop?: boolean;
        allowSwitch?: boolean;
      },
    ]
  >;
  /**
   * disallow unnecessary nested blocks
   *
   * https://eslint.org/docs/rules/no-lone-blocks
   */
  'no-lone-blocks': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow `if` statements as the only statement in `else` blocks
   *
   * https://eslint.org/docs/rules/no-lonely-if
   */
  'no-lonely-if': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow function declarations that contain unsafe references inside loop statements
   *
   * https://eslint.org/docs/rules/no-loop-func
   */
  'no-loop-func': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow literal numbers that lose precision
   *
   * https://eslint.org/docs/rules/no-loss-of-precision
   */
  'no-loss-of-precision': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow magic numbers
   *
   * https://eslint.org/docs/rules/no-magic-numbers
   */
  'no-magic-numbers': ESLintConfig.RuleOptions<
    [
      {
        detectObjects?: boolean;
        enforceConst?: boolean;
        ignore?: (number | string)[];
        ignoreArrayIndexes?: boolean;
      },
    ]
  >;
  /**
   * disallow characters which are made with multiple code points in character class syntax
   *
   * https://eslint.org/docs/rules/no-misleading-character-class
   */
  'no-misleading-character-class': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow mixed binary operators
   *
   * https://eslint.org/docs/rules/no-mixed-operators
   */
  'no-mixed-operators': ESLintConfig.RuleOptions<
    [
      {
        groups?: [
          (
            | '+'
            | '-'
            | '*'
            | '/'
            | '%'
            | '**'
            | '&'
            | '|'
            | '^'
            | '~'
            | '<<'
            | '>>'
            | '>>>'
            | '=='
            | '!='
            | '==='
            | '!=='
            | '>'
            | '>='
            | '<'
            | '<='
            | '&&'
            | '||'
            | 'in'
            | 'instanceof'
            | '?:'
            | '??'
          ),
          (
            | '+'
            | '-'
            | '*'
            | '/'
            | '%'
            | '**'
            | '&'
            | '|'
            | '^'
            | '~'
            | '<<'
            | '>>'
            | '>>>'
            | '=='
            | '!='
            | '==='
            | '!=='
            | '>'
            | '>='
            | '<'
            | '<='
            | '&&'
            | '||'
            | 'in'
            | 'instanceof'
            | '?:'
            | '??'
          ),
          ...(
            | '+'
            | '-'
            | '*'
            | '/'
            | '%'
            | '**'
            | '&'
            | '|'
            | '^'
            | '~'
            | '<<'
            | '>>'
            | '>>>'
            | '=='
            | '!='
            | '==='
            | '!=='
            | '>'
            | '>='
            | '<'
            | '<='
            | '&&'
            | '||'
            | 'in'
            | 'instanceof'
            | '?:'
            | '??'
          )[]
        ][];
        allowSamePrecedence?: boolean;
      },
    ]
  >;
  /**
   * disallow `require` calls to be mixed with regular variable declarations
   *
   * https://eslint.org/docs/rules/no-mixed-requires
   */
  'no-mixed-requires': ESLintConfig.RuleOptions<
    [
      | boolean
      | {
          grouping?: boolean;
          allowCall?: boolean;
        },
    ]
  >;
  /**
   * disallow mixed spaces and tabs for indentation
   *
   * https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
   */
  'no-mixed-spaces-and-tabs': ESLintConfig.RuleOptions<
    ['smart-tabs' | true | false]
  >;
  /**
   * disallow use of chained assignment expressions
   *
   * https://eslint.org/docs/rules/no-multi-assign
   */
  'no-multi-assign': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow multiple spaces
   *
   * https://eslint.org/docs/rules/no-multi-spaces
   */
  'no-multi-spaces': ESLintConfig.RuleOptions<
    [
      {
        exceptions?: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^([A-Z][a-z]*)+$".
           */
          [k: string]: boolean;
        };
        ignoreEOLComments?: boolean;
      },
    ]
  >;
  /**
   * disallow multiline strings
   *
   * https://eslint.org/docs/rules/no-multi-str
   */
  'no-multi-str': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow multiple empty lines
   *
   * https://eslint.org/docs/rules/no-multiple-empty-lines
   */
  'no-multiple-empty-lines': ESLintConfig.RuleOptions<
    [
      {
        max: number;
        maxEOF?: number;
        maxBOF?: number;
      },
    ]
  >;
  /**
   * disallow assignments to native objects or read-only global variables
   *
   * https://eslint.org/docs/rules/no-native-reassign
   */
  'no-native-reassign': ESLintConfig.RuleOptions<
    [
      {
        exceptions?: string[];
      },
    ]
  >;
  /**
   * disallow negated conditions
   *
   * https://eslint.org/docs/rules/no-negated-condition
   */
  'no-negated-condition': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow negating the left operand in `in` expressions
   *
   * https://eslint.org/docs/rules/no-negated-in-lhs
   */
  'no-negated-in-lhs': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow nested ternary expressions
   *
   * https://eslint.org/docs/rules/no-nested-ternary
   */
  'no-nested-ternary': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow `new` operators outside of assignments or comparisons
   *
   * https://eslint.org/docs/rules/no-new
   */
  'no-new': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow `new` operators with the `Function` object
   *
   * https://eslint.org/docs/rules/no-new-func
   */
  'no-new-func': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow `Object` constructors
   *
   * https://eslint.org/docs/rules/no-new-object
   */
  'no-new-object': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow `new` operators with calls to `require`
   *
   * https://eslint.org/docs/rules/no-new-require
   */
  'no-new-require': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow `new` operators with the `Symbol` object
   *
   * https://eslint.org/docs/rules/no-new-symbol
   */
  'no-new-symbol': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow `new` operators with the `String`, `Number`, and `Boolean` objects
   *
   * https://eslint.org/docs/rules/no-new-wrappers
   */
  'no-new-wrappers': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow calling global object properties as functions
   *
   * https://eslint.org/docs/rules/no-obj-calls
   */
  'no-obj-calls': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow octal literals
   *
   * https://eslint.org/docs/rules/no-octal
   */
  'no-octal': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow octal escape sequences in string literals
   *
   * https://eslint.org/docs/rules/no-octal-escape
   */
  'no-octal-escape': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow reassigning `function` parameters
   *
   * https://eslint.org/docs/rules/no-param-reassign
   */
  'no-param-reassign': ESLintConfig.RuleOptions<
    [
      | {
          props?: false;
        }
      | {
          props?: true;
          ignorePropertyModificationsFor?: string[];
          ignorePropertyModificationsForRegex?: string[];
        },
    ]
  >;
  /**
   * disallow string concatenation with `__dirname` and `__filename`
   *
   * https://eslint.org/docs/rules/no-path-concat
   */
  'no-path-concat': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow the unary operators `++` and `--`
   *
   * https://eslint.org/docs/rules/no-plusplus
   */
  'no-plusplus': ESLintConfig.RuleOptions<
    [
      {
        allowForLoopAfterthoughts?: boolean;
      },
    ]
  >;
  /**
   * disallow the use of `process.env`
   *
   * https://eslint.org/docs/rules/no-process-env
   */
  'no-process-env': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow the use of `process.exit()`
   *
   * https://eslint.org/docs/rules/no-process-exit
   */
  'no-process-exit': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow returning values from Promise executor functions
   *
   * https://eslint.org/docs/rules/no-promise-executor-return
   */
  'no-promise-executor-return': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow the use of the `__proto__` property
   *
   * https://eslint.org/docs/rules/no-proto
   */
  'no-proto': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow calling some `Object.prototype` methods directly on objects
   *
   * https://eslint.org/docs/rules/no-prototype-builtins
   */
  'no-prototype-builtins': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow variable redeclaration
   *
   * https://eslint.org/docs/rules/no-redeclare
   */
  'no-redeclare': ESLintConfig.RuleOptions<
    [
      {
        builtinGlobals?: boolean;
      },
    ]
  >;
  /**
   * disallow multiple spaces in regular expressions
   *
   * https://eslint.org/docs/rules/no-regex-spaces
   */
  'no-regex-spaces': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow specified names in exports
   *
   * https://eslint.org/docs/rules/no-restricted-exports
   */
  'no-restricted-exports': ESLintConfig.RuleOptions<
    [
      {
        restrictedNamedExports?: string[];
      },
    ]
  >;
  /**
   * disallow specified global variables
   *
   * https://eslint.org/docs/rules/no-restricted-globals
   */
  'no-restricted-globals': ESLintConfig.RuleOptions<
    (
      | string
      | {
          name: string;
          message?: string;
        }
    )[]
  >;
  /**
   * disallow specified modules when loaded by `import`
   *
   * https://eslint.org/docs/rules/no-restricted-imports
   */
  'no-restricted-imports': ESLintConfig.RuleOptions<
    | (
        | string
        | {
            name: string;
            message?: string;
            importNames?: string[];
          }
      )[]
    | []
    | [
        {
          paths?: (
            | string
            | {
                name: string;
                message?: string;
                importNames?: string[];
              }
          )[];
          patterns?: string[];
        },
      ]
  >;
  /**
   * disallow specified modules when loaded by `require`
   *
   * https://eslint.org/docs/rules/no-restricted-modules
   */
  'no-restricted-modules': ESLintConfig.RuleOptions<
    | (
        | string
        | {
            name: string;
            message?: string;
          }
      )[]
    | {
        paths?: (
          | string
          | {
              name: string;
              message?: string;
            }
        )[];
        patterns?: string[];
      }[]
  >;
  /**
   * disallow certain properties on certain objects
   *
   * https://eslint.org/docs/rules/no-restricted-properties
   */
  'no-restricted-properties': ESLintConfig.RuleOptions<
    (
      | {
          object: string;
          property?: string;
          message?: string;
        }
      | {
          object?: string;
          property: string;
          message?: string;
        }
    )[]
  >;
  /**
   * disallow specified syntax
   *
   * https://eslint.org/docs/rules/no-restricted-syntax
   */
  'no-restricted-syntax': ESLintConfig.RuleOptions<
    (
      | string
      | {
          selector: string;
          message?: string;
        }
    )[]
  >;
  /**
   * disallow assignment operators in `return` statements
   *
   * https://eslint.org/docs/rules/no-return-assign
   */
  'no-return-assign': ESLintConfig.RuleOptions<['except-parens' | 'always']>;
  /**
   * disallow unnecessary `return await`
   *
   * https://eslint.org/docs/rules/no-return-await
   */
  'no-return-await': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow `javascript:` urls
   *
   * https://eslint.org/docs/rules/no-script-url
   */
  'no-script-url': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow assignments where both sides are exactly the same
   *
   * https://eslint.org/docs/rules/no-self-assign
   */
  'no-self-assign': ESLintConfig.RuleOptions<
    [
      {
        props?: boolean;
      },
    ]
  >;
  /**
   * disallow comparisons where both sides are exactly the same
   *
   * https://eslint.org/docs/rules/no-self-compare
   */
  'no-self-compare': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow comma operators
   *
   * https://eslint.org/docs/rules/no-sequences
   */
  'no-sequences': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow returning values from setters
   *
   * https://eslint.org/docs/rules/no-setter-return
   */
  'no-setter-return': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow variable declarations from shadowing variables declared in the outer scope
   *
   * https://eslint.org/docs/rules/no-shadow
   */
  'no-shadow': ESLintConfig.RuleOptions<
    [
      {
        builtinGlobals?: boolean;
        hoist?: 'all' | 'functions' | 'never';
        allow?: string[];
      },
    ]
  >;
  /**
   * disallow identifiers from shadowing restricted names
   *
   * https://eslint.org/docs/rules/no-shadow-restricted-names
   */
  'no-shadow-restricted-names': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow spacing between function identifiers and their applications (deprecated)
   *
   * https://eslint.org/docs/rules/no-spaced-func
   */
  'no-spaced-func': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow sparse arrays
   *
   * https://eslint.org/docs/rules/no-sparse-arrays
   */
  'no-sparse-arrays': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow synchronous methods
   *
   * https://eslint.org/docs/rules/no-sync
   */
  'no-sync': ESLintConfig.RuleOptions<
    [
      {
        allowAtRootLevel?: boolean;
      },
    ]
  >;
  /**
   * disallow all tabs
   *
   * https://eslint.org/docs/rules/no-tabs
   */
  'no-tabs': ESLintConfig.RuleOptions<
    [
      {
        allowIndentationTabs?: boolean;
      },
    ]
  >;
  /**
   * disallow template literal placeholder syntax in regular strings
   *
   * https://eslint.org/docs/rules/no-template-curly-in-string
   */
  'no-template-curly-in-string': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow ternary operators
   *
   * https://eslint.org/docs/rules/no-ternary
   */
  'no-ternary': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow `this`/`super` before calling `super()` in constructors
   *
   * https://eslint.org/docs/rules/no-this-before-super
   */
  'no-this-before-super': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow throwing literals as exceptions
   *
   * https://eslint.org/docs/rules/no-throw-literal
   */
  'no-throw-literal': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow trailing whitespace at the end of lines
   *
   * https://eslint.org/docs/rules/no-trailing-spaces
   */
  'no-trailing-spaces': ESLintConfig.RuleOptions<
    [
      {
        skipBlankLines?: boolean;
        ignoreComments?: boolean;
      },
    ]
  >;
  /**
   * disallow the use of undeclared variables unless mentioned in `/*global * /` comments
   *
   * https://eslint.org/docs/rules/no-undef
   */
  'no-undef': ESLintConfig.RuleOptions<
    [
      {
        typeof?: boolean;
      },
    ]
  >;
  /**
   * disallow initializing variables to `undefined`
   *
   * https://eslint.org/docs/rules/no-undef-init
   */
  'no-undef-init': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow the use of `undefined` as an identifier
   *
   * https://eslint.org/docs/rules/no-undefined
   */
  'no-undefined': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow dangling underscores in identifiers
   *
   * https://eslint.org/docs/rules/no-underscore-dangle
   */
  'no-underscore-dangle': ESLintConfig.RuleOptions<
    [
      {
        allow?: string[];
        allowAfterThis?: boolean;
        allowAfterSuper?: boolean;
        allowAfterThisConstructor?: boolean;
        enforceInMethodNames?: boolean;
        allowFunctionParams?: boolean;
      },
    ]
  >;
  /**
   * disallow confusing multiline expressions
   *
   * https://eslint.org/docs/rules/no-unexpected-multiline
   */
  'no-unexpected-multiline': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow unmodified loop conditions
   *
   * https://eslint.org/docs/rules/no-unmodified-loop-condition
   */
  'no-unmodified-loop-condition': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow ternary operators when simpler alternatives exist
   *
   * https://eslint.org/docs/rules/no-unneeded-ternary
   */
  'no-unneeded-ternary': ESLintConfig.RuleOptions<
    [
      {
        defaultAssignment?: boolean;
      },
    ]
  >;
  /**
   * disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
   *
   * https://eslint.org/docs/rules/no-unreachable
   */
  'no-unreachable': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow loops with a body that allows only one iteration
   *
   * https://eslint.org/docs/rules/no-unreachable-loop
   */
  'no-unreachable-loop': ESLintConfig.RuleOptions<
    [
      {
        ignore?: (
          | 'WhileStatement'
          | 'DoWhileStatement'
          | 'ForStatement'
          | 'ForInStatement'
          | 'ForOfStatement'
        )[];
      },
    ]
  >;
  /**
   * disallow control flow statements in `finally` blocks
   *
   * https://eslint.org/docs/rules/no-unsafe-finally
   */
  'no-unsafe-finally': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow negating the left operand of relational operators
   *
   * https://eslint.org/docs/rules/no-unsafe-negation
   */
  'no-unsafe-negation': ESLintConfig.RuleOptions<
    [
      {
        enforceForOrderingRelations?: boolean;
      },
    ]
  >;
  /**
   * disallow unused expressions
   *
   * https://eslint.org/docs/rules/no-unused-expressions
   */
  'no-unused-expressions': ESLintConfig.RuleOptions<
    [
      {
        allowShortCircuit?: boolean;
        allowTernary?: boolean;
        allowTaggedTemplates?: boolean;
      },
    ]
  >;
  /**
   * disallow unused labels
   *
   * https://eslint.org/docs/rules/no-unused-labels
   */
  'no-unused-labels': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow unused variables
   *
   * https://eslint.org/docs/rules/no-unused-vars
   */
  'no-unused-vars': ESLintConfig.RuleOptions<
    [
      | ('all' | 'local')
      | {
          vars?: 'all' | 'local';
          varsIgnorePattern?: string;
          args?: 'all' | 'after-used' | 'none';
          ignoreRestSiblings?: boolean;
          argsIgnorePattern?: string;
          caughtErrors?: 'all' | 'none';
          caughtErrorsIgnorePattern?: string;
        },
    ]
  >;
  /**
   * disallow the use of variables before they are defined
   *
   * https://eslint.org/docs/rules/no-use-before-define
   */
  'no-use-before-define': ESLintConfig.RuleOptions<
    [
      | 'nofunc'
      | {
          functions?: boolean;
          classes?: boolean;
          variables?: boolean;
        },
    ]
  >;
  /**
   * disallow useless backreferences in regular expressions
   *
   * https://eslint.org/docs/rules/no-useless-backreference
   */
  'no-useless-backreference': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow unnecessary calls to `.call()` and `.apply()`
   *
   * https://eslint.org/docs/rules/no-useless-call
   */
  'no-useless-call': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow unnecessary `catch` clauses
   *
   * https://eslint.org/docs/rules/no-useless-catch
   */
  'no-useless-catch': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow unnecessary computed property keys in objects and classes
   *
   * https://eslint.org/docs/rules/no-useless-computed-key
   */
  'no-useless-computed-key': ESLintConfig.RuleOptions<
    [
      {
        enforceForClassMembers?: boolean;
      },
    ]
  >;
  /**
   * disallow unnecessary concatenation of literals or template literals
   *
   * https://eslint.org/docs/rules/no-useless-concat
   */
  'no-useless-concat': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow unnecessary constructors
   *
   * https://eslint.org/docs/rules/no-useless-constructor
   */
  'no-useless-constructor': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow unnecessary escape characters
   *
   * https://eslint.org/docs/rules/no-useless-escape
   */
  'no-useless-escape': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow renaming import, export, and destructured assignments to the same name
   *
   * https://eslint.org/docs/rules/no-useless-rename
   */
  'no-useless-rename': ESLintConfig.RuleOptions<
    [
      {
        ignoreDestructuring?: boolean;
        ignoreImport?: boolean;
        ignoreExport?: boolean;
      },
    ]
  >;
  /**
   * disallow redundant return statements
   *
   * https://eslint.org/docs/rules/no-useless-return
   */
  'no-useless-return': ESLintConfig.RuleWithoutOptions;
  /**
   * require `let` or `const` instead of `var`
   *
   * https://eslint.org/docs/rules/no-var
   */
  'no-var': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow `void` operators
   *
   * https://eslint.org/docs/rules/no-void
   */
  'no-void': ESLintConfig.RuleOptions<
    [
      {
        allowAsStatement?: boolean;
      },
    ]
  >;
  /**
   * disallow specified warning terms in comments
   *
   * https://eslint.org/docs/rules/no-warning-comments
   */
  'no-warning-comments': ESLintConfig.RuleOptions<
    [
      {
        terms?: string[];
        location?: 'start' | 'anywhere';
      },
    ]
  >;
  /**
   * disallow whitespace before properties
   *
   * https://eslint.org/docs/rules/no-whitespace-before-property
   */
  'no-whitespace-before-property': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow `with` statements
   *
   * https://eslint.org/docs/rules/no-with
   */
  'no-with': ESLintConfig.RuleWithoutOptions;
  /**
   * enforce the location of single-line statements
   *
   * https://eslint.org/docs/rules/nonblock-statement-body-position
   */
  'nonblock-statement-body-position': ESLintConfig.RuleOptions<
    [
      'beside' | 'below' | 'any',
      {
        overrides?: {
          if?: 'beside' | 'below' | 'any';
          else?: 'beside' | 'below' | 'any';
          while?: 'beside' | 'below' | 'any';
          do?: 'beside' | 'below' | 'any';
          for?: 'beside' | 'below' | 'any';
        };
      },
    ]
  >;
  /**
   * enforce consistent line breaks inside braces
   *
   * https://eslint.org/docs/rules/object-curly-newline
   */
  'object-curly-newline': ESLintConfig.RuleOptions<
    [
      | (
          | ('always' | 'never')
          | {
              multiline?: boolean;
              minProperties?: number;
              consistent?: boolean;
            }
        )
      | {
          ObjectExpression?:
            | ('always' | 'never')
            | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
              };
          ObjectPattern?:
            | ('always' | 'never')
            | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
              };
          ImportDeclaration?:
            | ('always' | 'never')
            | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
              };
          ExportDeclaration?:
            | ('always' | 'never')
            | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
              };
        },
    ]
  >;
  /**
   * enforce consistent spacing inside braces
   *
   * https://eslint.org/docs/rules/object-curly-spacing
   */
  'object-curly-spacing': ESLintConfig.RuleOptions<
    [
      'always' | 'never',
      {
        arraysInObjects?: boolean;
        objectsInObjects?: boolean;
      },
    ]
  >;
  /**
   * enforce placing object properties on separate lines
   *
   * https://eslint.org/docs/rules/object-property-newline
   */
  'object-property-newline': ESLintConfig.RuleOptions<
    [
      {
        allowAllPropertiesOnSameLine?: boolean;
        allowMultiplePropertiesPerLine?: boolean;
      },
    ]
  >;
  /**
   * require or disallow method and property shorthand syntax for object literals
   *
   * https://eslint.org/docs/rules/object-shorthand
   */
  'object-shorthand': ESLintConfig.RuleOptions<
    | []
    | [
        | 'always'
        | 'methods'
        | 'properties'
        | 'never'
        | 'consistent'
        | 'consistent-as-needed',
      ]
    | []
    | ['always' | 'methods' | 'properties']
    | [
        'always' | 'methods' | 'properties',
        {
          avoidQuotes?: boolean;
        },
      ]
    | []
    | ['always' | 'methods']
    | [
        'always' | 'methods',
        {
          ignoreConstructors?: boolean;
          avoidQuotes?: boolean;
          avoidExplicitReturnArrows?: boolean;
        },
      ]
  >;
  /**
   * enforce variables to be declared either together or separately in functions
   *
   * https://eslint.org/docs/rules/one-var
   */
  'one-var': ESLintConfig.RuleOptions<
    [
      | ('always' | 'never' | 'consecutive')
      | {
          separateRequires?: boolean;
          var?: 'always' | 'never' | 'consecutive';
          let?: 'always' | 'never' | 'consecutive';
          const?: 'always' | 'never' | 'consecutive';
        }
      | {
          initialized?: 'always' | 'never' | 'consecutive';
          uninitialized?: 'always' | 'never' | 'consecutive';
        },
    ]
  >;
  /**
   * require or disallow newlines around variable declarations
   *
   * https://eslint.org/docs/rules/one-var-declaration-per-line
   */
  'one-var-declaration-per-line': ESLintConfig.RuleOptions<
    ['always' | 'initializations']
  >;
  /**
   * require or disallow assignment operator shorthand where possible
   *
   * https://eslint.org/docs/rules/operator-assignment
   */
  'operator-assignment': ESLintConfig.RuleOptions<['always' | 'never']>;
  /**
   * enforce consistent linebreak style for operators
   *
   * https://eslint.org/docs/rules/operator-linebreak
   */
  'operator-linebreak': ESLintConfig.RuleOptions<
    [
      'after' | 'before' | 'none' | null,
      {
        overrides?: {
          [k: string]: ('after' | 'before' | 'none' | 'ignore') | undefined;
        };
      },
    ]
  >;
  /**
   * require or disallow padding within blocks
   *
   * https://eslint.org/docs/rules/padded-blocks
   */
  'padded-blocks': ESLintConfig.RuleOptions<
    [
      (
        | ('always' | 'never')
        | {
            blocks?: 'always' | 'never';
            switches?: 'always' | 'never';
            classes?: 'always' | 'never';
          }
      ),
      {
        allowSingleLineBlocks?: boolean;
      },
    ]
  >;
  /**
   * require or disallow padding lines between statements
   *
   * https://eslint.org/docs/rules/padding-line-between-statements
   */
  'padding-line-between-statements': ESLintConfig.RuleOptions<
    {
      blankLine: PaddingLineBetweenStatementspaddingType;
      prev: PaddingLineBetweenStatementsstatementType;
      next: PaddingLineBetweenStatementsstatementType;
    }[]
  >;
  /**
   * require using arrow functions for callbacks
   *
   * https://eslint.org/docs/rules/prefer-arrow-callback
   */
  'prefer-arrow-callback': ESLintConfig.RuleOptions<
    [
      {
        allowNamedFunctions?: boolean;
        allowUnboundThis?: boolean;
      },
    ]
  >;
  /**
   * require `const` declarations for variables that are never reassigned after declared
   *
   * https://eslint.org/docs/rules/prefer-const
   */
  'prefer-const': ESLintConfig.RuleOptions<
    [
      {
        destructuring?: 'any' | 'all';
        ignoreReadBeforeAssign?: boolean;
      },
    ]
  >;
  /**
   * require destructuring from arrays and/or objects
   *
   * https://eslint.org/docs/rules/prefer-destructuring
   */
  'prefer-destructuring': ESLintConfig.RuleOptions<
    [
      (
        | {
            VariableDeclarator?: {
              array?: boolean;
              object?: boolean;
            };
            AssignmentExpression?: {
              array?: boolean;
              object?: boolean;
            };
          }
        | {
            array?: boolean;
            object?: boolean;
          }
      ),
      {
        enforceForRenamedProperties?: boolean;
      },
    ]
  >;
  /**
   * disallow the use of `Math.pow` in favor of the `**` operator
   *
   * https://eslint.org/docs/rules/prefer-exponentiation-operator
   */
  'prefer-exponentiation-operator': ESLintConfig.RuleWithoutOptions;
  /**
   * enforce using named capture group in regular expression
   *
   * https://eslint.org/docs/rules/prefer-named-capture-group
   */
  'prefer-named-capture-group': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
   *
   * https://eslint.org/docs/rules/prefer-numeric-literals
   */
  'prefer-numeric-literals': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
   *
   * https://eslint.org/docs/rules/prefer-object-spread
   */
  'prefer-object-spread': ESLintConfig.RuleWithoutOptions;
  /**
   * require using Error objects as Promise rejection reasons
   *
   * https://eslint.org/docs/rules/prefer-promise-reject-errors
   */
  'prefer-promise-reject-errors': ESLintConfig.RuleOptions<
    [
      {
        allowEmptyReject?: boolean;
      },
    ]
  >;
  /**
   * require `Reflect` methods where applicable
   *
   * https://eslint.org/docs/rules/prefer-reflect
   */
  'prefer-reflect': ESLintConfig.RuleOptions<
    [
      {
        exceptions?: (
          | 'apply'
          | 'call'
          | 'delete'
          | 'defineProperty'
          | 'getOwnPropertyDescriptor'
          | 'getPrototypeOf'
          | 'setPrototypeOf'
          | 'isExtensible'
          | 'getOwnPropertyNames'
          | 'preventExtensions'
        )[];
      },
    ]
  >;
  /**
   * disallow use of the `RegExp` constructor in favor of regular expression literals
   *
   * https://eslint.org/docs/rules/prefer-regex-literals
   */
  'prefer-regex-literals': ESLintConfig.RuleOptions<
    [
      {
        disallowRedundantWrapping?: boolean;
      },
    ]
  >;
  /**
   * require rest parameters instead of `arguments`
   *
   * https://eslint.org/docs/rules/prefer-rest-params
   */
  'prefer-rest-params': ESLintConfig.RuleWithoutOptions;
  /**
   * require spread operators instead of `.apply()`
   *
   * https://eslint.org/docs/rules/prefer-spread
   */
  'prefer-spread': ESLintConfig.RuleWithoutOptions;
  /**
   * require template literals instead of string concatenation
   *
   * https://eslint.org/docs/rules/prefer-template
   */
  'prefer-template': ESLintConfig.RuleWithoutOptions;
  /**
   * require quotes around object literal property names
   *
   * https://eslint.org/docs/rules/quote-props
   */
  'quote-props': ESLintConfig.RuleOptions<
    | []
    | ['always' | 'as-needed' | 'consistent' | 'consistent-as-needed']
    | []
    | ['always' | 'as-needed' | 'consistent' | 'consistent-as-needed']
    | [
        'always' | 'as-needed' | 'consistent' | 'consistent-as-needed',
        {
          keywords?: boolean;
          unnecessary?: boolean;
          numbers?: boolean;
        },
      ]
  >;
  /**
   * enforce the consistent use of either backticks, double, or single quotes
   *
   * https://eslint.org/docs/rules/quotes
   */
  quotes: ESLintConfig.RuleOptions<
    [
      'single' | 'double' | 'backtick',
      (
        | 'avoid-escape'
        | {
            avoidEscape?: boolean;
            allowTemplateLiterals?: boolean;
          }
      ),
    ]
  >;
  /**
   * enforce the consistent use of the radix argument when using `parseInt()`
   *
   * https://eslint.org/docs/rules/radix
   */
  radix: ESLintConfig.RuleOptions<['always' | 'as-needed']>;
  /**
   * disallow assignments that can lead to race conditions due to usage of `await` or `yield`
   *
   * https://eslint.org/docs/rules/require-atomic-updates
   */
  'require-atomic-updates': ESLintConfig.RuleWithoutOptions;
  /**
   * disallow async functions which have no `await` expression
   *
   * https://eslint.org/docs/rules/require-await
   */
  'require-await': ESLintConfig.RuleWithoutOptions;
  /**
   * require JSDoc comments
   *
   * https://eslint.org/docs/rules/require-jsdoc
   */
  'require-jsdoc': ESLintConfig.RuleOptions<
    [
      {
        require?: {
          ClassDeclaration?: boolean;
          MethodDefinition?: boolean;
          FunctionDeclaration?: boolean;
          ArrowFunctionExpression?: boolean;
          FunctionExpression?: boolean;
        };
      },
    ]
  >;
  /**
   * enforce the use of `u` flag on RegExp
   *
   * https://eslint.org/docs/rules/require-unicode-regexp
   */
  'require-unicode-regexp': ESLintConfig.RuleWithoutOptions;
  /**
   * require generator functions to contain `yield`
   *
   * https://eslint.org/docs/rules/require-yield
   */
  'require-yield': ESLintConfig.RuleWithoutOptions;
  /**
   * enforce spacing between rest and spread operators and their expressions
   *
   * https://eslint.org/docs/rules/rest-spread-spacing
   */
  'rest-spread-spacing': ESLintConfig.RuleOptions<['always' | 'never']>;
  /**
   * require or disallow semicolons instead of ASI
   *
   * https://eslint.org/docs/rules/semi
   */
  semi: ESLintConfig.RuleOptions<
    | []
    | ['never']
    | [
        'never',
        {
          beforeStatementContinuationChars?: 'always' | 'any' | 'never';
        },
      ]
    | []
    | ['always']
    | [
        'always',
        {
          omitLastInOneLineBlock?: boolean;
        },
      ]
  >;
  /**
   * enforce consistent spacing before and after semicolons
   *
   * https://eslint.org/docs/rules/semi-spacing
   */
  'semi-spacing': ESLintConfig.RuleOptions<
    [
      {
        before?: boolean;
        after?: boolean;
      },
    ]
  >;
  /**
   * enforce location of semicolons
   *
   * https://eslint.org/docs/rules/semi-style
   */
  'semi-style': ESLintConfig.RuleOptions<['last' | 'first']>;
  /**
   * enforce sorted import declarations within modules
   *
   * https://eslint.org/docs/rules/sort-imports
   */
  'sort-imports': ESLintConfig.RuleOptions<
    [
      {
        ignoreCase?: boolean;
        memberSyntaxSortOrder?: [
          'none' | 'all' | 'multiple' | 'single',
          'none' | 'all' | 'multiple' | 'single',
          'none' | 'all' | 'multiple' | 'single',
          'none' | 'all' | 'multiple' | 'single',
        ];
        ignoreDeclarationSort?: boolean;
        ignoreMemberSort?: boolean;
        allowSeparatedGroups?: boolean;
      },
    ]
  >;
  /**
   * require object keys to be sorted
   *
   * https://eslint.org/docs/rules/sort-keys
   */
  'sort-keys': ESLintConfig.RuleOptions<
    [
      'asc' | 'desc',
      {
        caseSensitive?: boolean;
        natural?: boolean;
        minKeys?: number;
      },
    ]
  >;
  /**
   * require variables within the same declaration block to be sorted
   *
   * https://eslint.org/docs/rules/sort-vars
   */
  'sort-vars': ESLintConfig.RuleOptions<
    [
      {
        ignoreCase?: boolean;
      },
    ]
  >;
  /**
   * enforce consistent spacing before blocks
   *
   * https://eslint.org/docs/rules/space-before-blocks
   */
  'space-before-blocks': ESLintConfig.RuleOptions<
    [
      | ('always' | 'never')
      | {
          keywords?: 'always' | 'never' | 'off';
          functions?: 'always' | 'never' | 'off';
          classes?: 'always' | 'never' | 'off';
        },
    ]
  >;
  /**
   * enforce consistent spacing before `function` definition opening parenthesis
   *
   * https://eslint.org/docs/rules/space-before-function-paren
   */
  'space-before-function-paren': ESLintConfig.RuleOptions<
    [
      | ('always' | 'never')
      | {
          anonymous?: 'always' | 'never' | 'ignore';
          named?: 'always' | 'never' | 'ignore';
          asyncArrow?: 'always' | 'never' | 'ignore';
        },
    ]
  >;
  /**
   * enforce consistent spacing inside parentheses
   *
   * https://eslint.org/docs/rules/space-in-parens
   */
  'space-in-parens': ESLintConfig.RuleOptions<
    [
      'always' | 'never',
      {
        exceptions?: ('{}' | '[]' | '()' | 'empty')[];
      },
    ]
  >;
  /**
   * require spacing around infix operators
   *
   * https://eslint.org/docs/rules/space-infix-ops
   */
  'space-infix-ops': ESLintConfig.RuleOptions<
    [
      {
        int32Hint?: boolean;
      },
    ]
  >;
  /**
   * enforce consistent spacing before or after unary operators
   *
   * https://eslint.org/docs/rules/space-unary-ops
   */
  'space-unary-ops': ESLintConfig.RuleOptions<
    [
      {
        words?: boolean;
        nonwords?: boolean;
        overrides?: {
          [k: string]: boolean | undefined;
        };
      },
    ]
  >;
  /**
   * enforce consistent spacing after the `//` or `/*` in a comment
   *
   * https://eslint.org/docs/rules/spaced-comment
   */
  'spaced-comment': ESLintConfig.RuleOptions<
    [
      'always' | 'never',
      {
        exceptions?: string[];
        markers?: string[];
        line?: {
          exceptions?: string[];
          markers?: string[];
        };
        block?: {
          exceptions?: string[];
          markers?: string[];
          balanced?: boolean;
        };
      },
    ]
  >;
  /**
   * require or disallow strict mode directives
   *
   * https://eslint.org/docs/rules/strict
   */
  strict: ESLintConfig.RuleOptions<['never' | 'global' | 'function' | 'safe']>;
  /**
   * enforce spacing around colons of switch statements
   *
   * https://eslint.org/docs/rules/switch-colon-spacing
   */
  'switch-colon-spacing': ESLintConfig.RuleOptions<
    [
      {
        before?: boolean;
        after?: boolean;
      },
    ]
  >;
  /**
   * require symbol descriptions
   *
   * https://eslint.org/docs/rules/symbol-description
   */
  'symbol-description': ESLintConfig.RuleWithoutOptions;
  /**
   * require or disallow spacing around embedded expressions of template strings
   *
   * https://eslint.org/docs/rules/template-curly-spacing
   */
  'template-curly-spacing': ESLintConfig.RuleOptions<['always' | 'never']>;
  /**
   * require or disallow spacing between template tags and their literals
   *
   * https://eslint.org/docs/rules/template-tag-spacing
   */
  'template-tag-spacing': ESLintConfig.RuleOptions<['always' | 'never']>;
  /**
   * require or disallow Unicode byte order mark (BOM)
   *
   * https://eslint.org/docs/rules/unicode-bom
   */
  'unicode-bom': ESLintConfig.RuleOptions<['always' | 'never']>;
  /**
   * require calls to `isNaN()` when checking for `NaN`
   *
   * https://eslint.org/docs/rules/use-isnan
   */
  'use-isnan': ESLintConfig.RuleOptions<
    [
      {
        enforceForSwitchCase?: boolean;
        enforceForIndexOf?: boolean;
      },
    ]
  >;
  /**
   * enforce valid JSDoc comments
   *
   * https://eslint.org/docs/rules/valid-jsdoc
   */
  'valid-jsdoc': ESLintConfig.RuleOptions<
    [
      {
        prefer?: {
          [k: string]: string | undefined;
        };
        preferType?: {
          [k: string]: string | undefined;
        };
        requireReturn?: boolean;
        requireParamDescription?: boolean;
        requireReturnDescription?: boolean;
        matchDescription?: string;
        requireReturnType?: boolean;
        requireParamType?: boolean;
      },
    ]
  >;
  /**
   * enforce comparing `typeof` expressions against valid strings
   *
   * https://eslint.org/docs/rules/valid-typeof
   */
  'valid-typeof': ESLintConfig.RuleOptions<
    [
      {
        requireStringLiterals?: boolean;
      },
    ]
  >;
  /**
   * require `var` declarations be placed at the top of their containing scope
   *
   * https://eslint.org/docs/rules/vars-on-top
   */
  'vars-on-top': ESLintConfig.RuleWithoutOptions;
  /**
   * require parentheses around immediate `function` invocations
   *
   * https://eslint.org/docs/rules/wrap-iife
   */
  'wrap-iife': ESLintConfig.RuleOptions<
    [
      'outside' | 'inside' | 'any',
      {
        functionPrototypeMethods?: boolean;
      },
    ]
  >;
  /**
   * require parenthesis around regex literals
   *
   * https://eslint.org/docs/rules/wrap-regex
   */
  'wrap-regex': ESLintConfig.RuleWithoutOptions;
  /**
   * require or disallow spacing around the `*` in `yield*` expressions
   *
   * https://eslint.org/docs/rules/yield-star-spacing
   */
  'yield-star-spacing': ESLintConfig.RuleOptions<
    [
      | ('before' | 'after' | 'both' | 'neither')
      | {
          before?: boolean;
          after?: boolean;
        },
    ]
  >;
  /**
   * require or disallow "Yoda" conditions
   *
   * https://eslint.org/docs/rules/yoda
   */
  yoda: ESLintConfig.RuleOptions<
    [
      'always' | 'never',
      {
        exceptRange?: boolean;
        onlyEquality?: boolean;
      },
    ]
  >;
}

/* REST IS AUTO-GENERATED REFERENCE TYPES */
export type ArrayElementNewlinebasicConfig =
  | ('always' | 'never' | 'consistent')
  | {
      multiline?: boolean;
      minItems?: number | null;
    };
export type CommaDanglevalue =
  | 'always-multiline'
  | 'always'
  | 'never'
  | 'only-multiline';
export type CommaDanglevalueWithIgnore =
  | 'always-multiline'
  | 'always'
  | 'ignore'
  | 'never'
  | 'only-multiline';
export type FuncNamesvalue = 'always' | 'as-needed' | 'never';
export type PaddingLineBetweenStatementspaddingType =
  | 'any'
  | 'never'
  | 'always';
export type PaddingLineBetweenStatementsstatementType =
  | (
      | '*'
      | 'block-like'
      | 'cjs-export'
      | 'cjs-import'
      | 'directive'
      | 'expression'
      | 'iife'
      | 'multiline-block-like'
      | 'multiline-expression'
      | 'multiline-const'
      | 'multiline-let'
      | 'multiline-var'
      | 'singleline-const'
      | 'singleline-let'
      | 'singleline-var'
      | 'block'
      | 'empty'
      | 'function'
      | 'break'
      | 'case'
      | 'class'
      | 'const'
      | 'continue'
      | 'debugger'
      | 'default'
      | 'do'
      | 'export'
      | 'for'
      | 'if'
      | 'import'
      | 'let'
      | 'return'
      | 'switch'
      | 'throw'
      | 'try'
      | 'var'
      | 'while'
      | 'with'
    )
  | [
      (
        | '*'
        | 'block-like'
        | 'cjs-export'
        | 'cjs-import'
        | 'directive'
        | 'expression'
        | 'iife'
        | 'multiline-block-like'
        | 'multiline-expression'
        | 'multiline-const'
        | 'multiline-let'
        | 'multiline-var'
        | 'singleline-const'
        | 'singleline-let'
        | 'singleline-var'
        | 'block'
        | 'empty'
        | 'function'
        | 'break'
        | 'case'
        | 'class'
        | 'const'
        | 'continue'
        | 'debugger'
        | 'default'
        | 'do'
        | 'export'
        | 'for'
        | 'if'
        | 'import'
        | 'let'
        | 'return'
        | 'switch'
        | 'throw'
        | 'try'
        | 'var'
        | 'while'
        | 'with'
      ),
      ...(
        | '*'
        | 'block-like'
        | 'cjs-export'
        | 'cjs-import'
        | 'directive'
        | 'expression'
        | 'iife'
        | 'multiline-block-like'
        | 'multiline-expression'
        | 'multiline-const'
        | 'multiline-let'
        | 'multiline-var'
        | 'singleline-const'
        | 'singleline-let'
        | 'singleline-var'
        | 'block'
        | 'empty'
        | 'function'
        | 'break'
        | 'case'
        | 'class'
        | 'const'
        | 'continue'
        | 'debugger'
        | 'default'
        | 'do'
        | 'export'
        | 'for'
        | 'if'
        | 'import'
        | 'let'
        | 'return'
        | 'switch'
        | 'throw'
        | 'try'
        | 'var'
        | 'while'
        | 'with'
      )[]
    ];
