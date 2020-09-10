## TITLE

Note that this guide assumes zero experience with ESLint, you may wish to just do the [installation](#Installation) then skip to [I already understand ESLint, no hand holding please][exportguide]

### Installation

First step is to install the necessary packages, if you use `npm` the command is

```bash
$ npm i --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Or if you use `yarn` the equivalent command is:

```bash
$ yarn add -D eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Configuration

next create a file called `.eslintrc.js` in the root of your project and fill it with this code:

<!-- prettier-ignore -->
```js
// @ts-check
const { typedConfigEasySetup } = require('@typescript-eslint/typed-config');
module.exports = typedConfigEasySetup({
  root: true,
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
});
```

Explaining the important bits:

TODO: come back to this and add appropriate links.

## Running the lint

If you use an IDE head over to [ESLint's integration guide][eslintintegration] and find the appropriate extension for your IDE. This enables real time linting while you write code.

You can also see [ESLint's command line interface][eslintcommandline] for running the linter from the command line, a simple use would be like this: (either `npx` or `yarn` depending on which you use)

```bash
$ npx  eslint . --ext .js,.jsx,.ts,.tsx
$ yarn eslint . --ext .js,.jsx,.ts,.tsx
```

If you need some bad code to confirm it reports errors try adding this to a `.ts` file:

```ts
export interface StringArray extends Array<String> {}
```

this triggers 2 errors,

- `@typescript-eslint/no-empty-interface` is thrown on the name `StrArr` suggesting you convert it to a plain `type` declaration instead of using an `interface`
- `@typescript-eslint/ban-types` suggests using the lower case `string` instead of `String`

Both these rules have auto-fixes offered, your IDE may have an integrated option to apply them or you can run the lint command with the `--fix` flag

```bash
$ npx  eslint . --ext .js,.jsx,.ts,.tsx --fix
$ yarn eslint . --ext .js,.jsx,.ts,.tsx --fix
```

This will change the above code to this:

```ts
export type StringArray = Array<string>;
```

### Adding type info

Some rules require typing info in addition to just TypeScript syntax, these rules can be slower since the typing system is more complicated than just the AST. Because of this the `plugin:@typescript-eslint/recommended` does not include any rules that require typing information, instead there is a separate config called `plugin:@typescript-eslint/recommended-requiring-type-checking`

```diff
 // @ts-check
 const { typedConfigEasySetup } = require('@typescript-eslint/typed-config');
 module.exports = typedConfigEasySetup({
   root: true,
+  parserOptions: {
+    tsconfigRootDir: __dirname,
+    project: ['./tsconfig.json'],
+  },
   plugins: ['@typescript-eslint'],
   extends: [
     'eslint:recommended',
     'plugin:@typescript-eslint/recommended',
+    'plugin:@typescript-eslint/recommended-requiring-type-checking',
   ],
 });
```

- `parserOptions.tsconfigRootDir` tells our parser the absolute path of your project's root directory.
- `parserOptions.project` tells our parser the relative path where your project's `tsconfig.json` is.
  - If your project is a multi-package monorepo, see [our docs on configuring a monorepo](./MONOREPO.md).
- `plugin:@typescript-eslint/recommended-requiring-type-checking` is another recommended configuration we provide. This one contains rules that specifically require type information.

To test this try adding this code to your `.ts` file:

```ts
async function foo(x: string) {
  return await x;
}
```

In this case using `await` on a string raises the `@typescript-eslint/await-thenable` rule, which suggests to remove the unnecessary await.

## I already understand ESLint, no hand holding please

you will want to add this to your `.eslintrc.js`:

```diff
+// @ts-check
+const { typedConfig } = require('@typescript-eslint/typed-config');
-module.exports = {
+module.exports = typedConfig({
   plugins: [
+    '@typescript-eslint',
   ],
+  parserOptions: {
+    tsconfigRootDir: __dirname,
+    project: ['tsconfig.json'],
+  },
]
-};
+});
```

the `typedConfig` helper function is primarily to offer auto-complete for rules and plugins, the only thing it adds [at runtime][typedconfigruntime] is that it inserts `extends: 'plugin:@typescript-eslint/base'` which just [adds some parser info][baseconfig].

The `parserOptions` specify 2 things:

- `tsconfigRootDir` specifies the same `rootDir` as specified in your `tsconfig.json`
- `project` specifies the `tsconfig.json` file or a list of them if you are using a monorepo, see [setting up linting in monorepo if applicable.][monorepo]

These parser options will be relevant if you use any rules that use type information.

You will also want to see the [list of rules][rules] or use one of our recommended configs:

TODO: list configs here or link to another document?

TODO: explain what `typedConfigEasySetup` does, also figure out what it will actually do.

<!-- links: -->

[exportguide]: #I%20already%20understand%20ESLint,%20no%20hand%20holding%20please
[eslintintegration]: https://eslint.org/docs/user-guide/integrations
[eslintcommandline]: https://eslint.org/docs/user-guide/command-line-interface
[typedconfigruntime]: #TODO
[baseconfig]: #TODO
[monorepo]: #TODO
[rules]: #TODO
