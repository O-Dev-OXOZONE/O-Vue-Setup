module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
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
    tsconfigRootDir: __dirname, // Needed for tsconfig to be applied to ts files within a dir
  },
  rules: {
    // Plugins
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // Off - block
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-nested-ternary': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    // Lint - block
    'semi': ['error', 'never'],
    'no-unexpected-multiline': 'off',
    'quote-props': ['error', 'consistent'],
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'operator-linebreak': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-newline': 'off',
    'nonblock-statement-body-position': 'off',
    'curly': 'off',
    'no-confusing-arrow': 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/quotes': 'off',
    'vue/operator-linebreak': 'off',
    'vue/max-len': 'warn',
    'vue/object-curly-newline': 'off',
    'vue/quote-props': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-indent': 'off',
    // eslint - block
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    // Vue - block
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
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/define-emits-declaration': ['warn', 'type-based'],
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineProps', 'defineEmits'],
      },
    ],
    'vue/define-props-declaration': ['warn', 'type-based'],
    'vue/next-tick-style': ['error', 'promise'],
    // 'vue/no-bare-strings-in-template': 'error', // SW
    'vue/no-empty-component-block': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-required-prop-with-default': 'error',
    // "vue/no-restricted-class" // SW
    'vue/no-restricted-html-elements': ['error', 'b', 'i'],
    'vue/no-static-inline-styles': [
      'error',
      {
        allowBinding: true,
      },
    ],
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-undef-components': ['error', { ignorePatterns: ['router-*'] }],
    'vue/no-undef-properties': 'error',
    'vue/no-unused-properties': 'error',
    'vue/no-unused-refs': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': ['error', 'never'],
    'vue/prefer-define-options': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/prefer-true-attribute-shorthand': 'error',
    'vue/require-macro-variable-name': [
      'error',
      {
        defineProps: 'props',
        defineEmits: 'emit',
        defineSlots: 'slots',
        useSlots: 'slots',
        useAttrs: 'attrs',
      },
    ],
    'vue/require-typed-ref': 'error', // NP so easy
    'vue/valid-define-options': 'error',
    'vue/eqeqeq': 'error',
    'vue/no-console': 'error', // in template part there should be no console
    'vue/no-constant-condition': 'warn',
    'vue/no-empty-pattern': 'error',
    'no-irregular-whitespace': 'error',
    'vue/no-useless-concat': 'error',
    'vue/prefer-template': 'error',
    // eslint block
    'getter-return': 'error',
    'accessor-pairs': 'warn', // not critical
    'camelcase': [
      'warn',
      {
        properties: 'always',
        ignoreDestructuring: true,
        ignoreImports: true,
        ignoreGlobals: true,
      },
    ],
    'complexity': ['error', 11], // tunned on 3 projects. may be less
    'consistent-this': ['error', 'that'],
    'default-param-last': 'error',
    'func-style': ['error', 'expression'],
    // you will hate me for this rule
    'id-length': [
      'error',
      {
        min: 2,
        exceptions: ['x', 'y', '_'],
        properties: 'never',
      },
    ],
    'logical-assignment-operators': ['error', 'always'],
    'max-classes-per-file': ['error', 1], // sw-logic, NOT NP
    'max-depth': ['error', 4],
    'no-continue': 'off', // it is useful in cycles sometimes
    'no-div-regex': 'warn',
    'no-empty-function': 'error', // should be at least comment
    'no-empty-static-block': 'error',
    'no-eq-null': 'error',
    'no-extra-semi': 'error',
    'no-invalid-this': 'error',
    'no-loop-func': 'error',
    // sw, sorry
    'no-magic-numbers': [
      'error',
      {
        ignore: [0, 1, 10],
        ignoreDefaultValues: true,
        enforceConst: false,
        detectObjects: true,
      },
    ],
    'no-new-func': 'error',
    'no-param-reassign': 'off', // error on np
    'no-redeclare': 'error',
    'no-throw-literal': 'error',
    'no-useless-call': 'error',
    'prefer-object-has-own': 'error',
    'require-await': 'error',
  },
  overrides: [
    // test files
    {
      files: ['__mocks__/**/*.ts', '**/*.test.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        'no-empty-function': 'off',
        'no-magic-numbers': 'off',
      },
    },
    {
      files: ['__mocks__/**/*.ts'],
      rules: {
        'max-classes-per-file': 'off',
      },
    },
    {
      files: ['.eslintrc*', 'vite.config*'],
      rules: {
        'no-magic-numbers': 'off',
      },
    },
  ],
}
