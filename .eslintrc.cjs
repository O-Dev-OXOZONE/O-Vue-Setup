module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    '@vue/eslint-config-airbnb-with-typescript',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['simple-import-sort'],
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
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // off - block
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-nested-ternary': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    // lint - block
    'semi': ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],
    'no-unexpected-multiline': 'off',
    'quote-props': ['error', 'consistent'],
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'operator-linebreak': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-newline': 'off',
    'vue/operator-linebreak': 'off',
    'nonblock-statement-body-position': 'off',
    'curly': 'off',
    '@typescript-eslint/indent': 'off',
    'no-confusing-arrow': 'off',
    'vue/max-len': 'warn', // warn
    'vue/object-curly-newline': 'off',
    'vue/quote-props': 'off',
    '@typescript-eslint/quotes': 'off', // ['warn', 'single'], // TODO: fix
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-indent': 'off',
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
