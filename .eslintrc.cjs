module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  plugins: ['simple-import-sort'],
  // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  rules: {
    'object-curly-spacing': ['error', 'always'],
    eqeqeq: 'warn',
    'no-irregular-whitespace': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'no-alert': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // all emit's generics args should start with `_`, like `_event`, `_value`
    'func-call-spacing': 'error', // for defineEmits only interface-based syntax may be used
    'no-extra-semi': 'error',
    'no-trailing-spaces': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-spacing': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'vue/html-indent': ['error', 2],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/singleline-html-element-content-newline': 'off',
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
    'vue/component-api-style': ['error', ['script-setup']],
    // 'vue/component-name-in-template-casing': ['error', 'kebab-case'], // for SW
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/define-emits-declaration': ['warn', 'type-based'], // now - warn, then - error
    'vue/define-props-declaration': ['warn', 'type-based'], // now - warn, then - error
    'vue/html-button-has-type': 'warn',
    'vue/html-comment-content-spacing': ['error', 'always'],
    'vue/html-comment-indent': ['error', 2],
    // 'vue/no-bare-strings-in-template': 'error', // for SW
    'vue/no-empty-component-block': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-required-prop-with-default': 'error',
    'vue/no-restricted-html-elements': ['error', 'b', 'i'], // semantics !
    'vue/no-static-inline-styles': [
      'error',
      {
        allowBinding: true,
      },
    ],
    'vue/no-template-target-blank': 'error', // semantics
    // 'vue/no-undef-components': 'error', // due to global names
    'vue/no-undef-properties': 'error',
    'vue/no-unused-properties': 'error',
    'vue/no-unused-refs': 'error',
    // 'vue/no-use-v-else-with-v-for': 'warn',
    'vue/no-useless-mustaches': 'error', // is related with vue/no-bare-strings-in-template, forces to update the config for a project
    // "vue/no-restricted-class": ["error", 'h-screen'], // for SW
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': ['error', 'never'],
    'vue/prefer-separate-static-class': 'warn',
    'vue/prefer-true-attribute-shorthand': 'warn',
    'vue/require-emit-validator': 'error',
    // 'vue/require-typed-ref': 'warn', // in the future
    'vue/no-v-text': 'error',
    'vue/v-on-handler-style': ['error', ['method', 'inline']],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}
