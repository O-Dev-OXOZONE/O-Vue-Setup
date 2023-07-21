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
    // eslint rules
    // Possible Problems
    'array-callback-return': 'error',
    'no-await-in-loop': 'warn', // use Promise.all
    'no-constant-binary-expression': 'warn',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    // 'no-new-native-nonconstructo': 'error',
    'no-promise-executor-return': 'warn',
    'no-self-compare': 'error',
    'no-template-curly-in-string': 'error', // TODO: change to warn if it is really needed
    'no-unmodified-loop-condition': 'warn',
    'no-unreachable-loop': 'error',
    'no-unused-private-class-members': 'error', // change to warn for SW
    'no-use-before-define': 'error',
    'require-atomic-updates': 'error', // an important issue
    // suggestions
    'accessor-pairs': ['error', { enforceForClassMembers: false }],
    'arrow-body-style': ['error', 'as-needed'], // questionable for debug, but I prefer this way
    'block-scoped-var': 'error',
    // 'camelcase': 'warn', // I prefer don't to use it if it is possible
    'class-methods-use-this': 'error',
    'complexity': ['error', 20], // now the default value is set up, but after a while it may be changed
    'consistent-return': 'error',
    'consistent-this': ['error', 'that'], // hope, it'll never be used
    'curly': ['error', 'multi-or-nest', 'consistent'],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': ['error', { allowKeywords: false }],
    'eqeqeq': 'warn',
    'func-name-matching': 'error',
    'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'expression'], // let's try
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'warn', // an interesting case
    'id-length': ['error', { min: 2, exceptions: ['x', 'y'] }],
    'logical-assignment-operators': ['error', 'always'],
    'max-depth': ['error', 4], // let's try this number and then tune it
    'max-nested-callbacks': ['error', 3], // let's try
    'multiline-comment-style': ['error', 'starred-block'], // TODO: check single-line to be //
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'warn', // generally, we don't do them
    'no-caller': 'error', // I even didn't know about them
    'no-case-declarations': 'warn',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-div-regex': 'warn',
    'no-else-return': 'error', // my favorite
    'no-empty-function': 'warn',
    'no-empty-static-block': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error', // if you use it, you are clever enough to remove it
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': ['warn', {
      ignore: [0, 1, 10],
      ignoreArrayIndexes: true,
      ignoreDefaultValues: true,
      detectObjects: false,
    }], // important for SW, questionable
    'no-negated-condition': 'warn', // really not important
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error', // questionable, but error-producing
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'warn', // TODO: error
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error', // if needed - block with comment
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'one-var': ['error', 'never'],
    'prefer-const': 'error',
    'prefer-destructuring': ['warn', { object: true, array: false }],
    'prefer-exponentiation-operator': 'error', // cool syntax
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'warn',
    'prefer-promise-reject-errors': 'error', // let's try, may be removed
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error', // related to no-caller
    'prefer-spread': 'error',
    'prefer-template': 'error', // in some cases for readability it may be important, but in these cases use comment
    'quote-props': ['error', 'consistent-as-needed'],
    'require-await': 'warn', // NP wil have a lot of pain
    // 'sort-imports': 'error', // strongly conflicting with simple-import-sort, never uncomment
    'spaced-comment': ['error', 'always', { exceptions: ['*', '-'] }],
    'yoda': ['error', 'never', { exceptRange: true }],
    // Layout & Formatting
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'arrow-parens': ['error', 'as-needed'], // just my taste
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': 'error', // for defineEmits only interface-based syntax may be used
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'multiline'],
    'generator-star-spacing': 'error',
    'implicit-arrow-linebreak': 'error',
    'indent': ['error', 2, { SwitchCase: 1 }],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'lines-between-class-members': ['error', 'always'],
    'max-len': ['error', { code: 80, ignoreComments: true, ignoreUrls: true }], // let's try
    'max-statements-per-line': ['error', { max: 2 }],
    'multiline-ternary': ['error', 'always-multiline'],
    'new-parens': 'error',
    // 'newline-per-chained-call': 'error', // return, if max-len will not help
    'no-extra-parens': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': ['error', { consistent: true }],
    'object-curly-spacing': ['error', 'always'],
    'operator-linebreak': ['error', 'before'], // needed for ternary
    'quotes': ['error', 'single'],
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'never'],
    'semi-spacing': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'switch-colon-spacing': 'error',
    'template-curly-spacing': ['error', 'always'],
    'template-tag-spacing': 'error',
    'wrap-iife': ['error', 'inside'],
    'wrap-regex': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // all emit's generics args should start with `_`, like `_event`, `_value`
    'no-extra-semi': 'error',
    'prefer-arrow-callback': 'error',
    // vue-rules
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
        script: { lang: 'ts' },
        style: { lang: 'scss' },
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
      { allowBinding: true },
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
    // vue eslint-based rules (just a copy from the config above)
    'vue/array-bracket-newline': ['error', 'consistent'],
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/array-element-newline': ['error', 'consistent'],
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/comma-spacing': 'error',
    'vue/comma-style': ['error', 'last'],
    'vue/dot-location': ['error', 'property'],
    'vue/dot-notation': ['error', { allowKeywords: false }],
    'vue/eqeqeq': 'warn',
    'vue/func-call-spacing': 'error',
    'vue/key-spacing': 'error',
    'vue/keyword-spacing': 'error',
    'vue/max-len': ['error', {
      code: 100,
      ignoreComments: true,
      ignoreUrls: true,
    }], // warning: the value is different from js-one
    'vue/multiline-ternary': ['error', 'always-multiline'],
    'vue/no-console': ['error', { allow: ['warn', 'error'] }],
    'vue/no-extra-parens': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-loss-of-precision': 'error',
    'vue/no-sparse-arrays': 'error',
    'vue/no-useless-concat': 'error',
    'vue/object-curly-newline': ['error', { consistent: true }],
    'vue/object-curly-spacing': ['error', 'always'],
    // 'vue/object-property-newline': ['error', 'before'],
    'vue/operator-linebreak': ['error', 'before'],
    'vue/prefer-template': 'error',
    'vue/quote-props': ['error', 'consistent-as-needed'],
    'vue/space-in-parens': ['error', 'never'],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/template-curly-spacing': ['error', 'always'],
  },
  overrides: [
    {
      files: ['**/__tests__/*.test.ts'],
      extends: [
        'eslint:recommended',
        '@vue/typescript/recommended',
      ],
      rules: {
        'no-magic-numbers': 'off',
      },
    },
    {
      files: ['.eslintrc.*', 'vite.config.ts'], // TODO: add other config files here
      extends: [
        'eslint:recommended',
      ],
      rules: {
        'no-magic-numbers': 'off',
      },
    },
  ],
}
