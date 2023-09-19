# React + TypeScript + Vite

In order to test this feature, just run `npm test`. There is also a live version available at https://qventus-otavio.netlify.app/ so you can test manually.

## Main scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
You just have to open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode *so you can check that everything is working as expected*

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
