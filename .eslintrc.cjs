module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    '@vue/eslint-config-airbnb-with-typescript',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  plugins: ['prettier', 'simple-import-sort'],
  // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname, // needed for tsconfig to be applied to ts files within a dir
  },
  rules: {
    // plugins
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // off - block
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-nested-ternary': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    // eslint - block
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    // vue - block
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts',
        },
        style: {
          lang: 'scss',
        },
      },
    ],
    'vue/no-empty-component-block': 'error',
    'vue/no-restricted-html-elements': ['error', 'b', 'i'],
    'vue/padding-line-between-blocks': ['error', 'never'],
    'vue/prefer-true-attribute-shorthand': 'error',
  },
}
