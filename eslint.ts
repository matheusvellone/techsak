import antfu from '@antfu/eslint-config'

export default antfu({
  linterOptions: {
    reportUnusedDisableDirectives: 'error',
  },

  typescript: {
    tsconfigPath: './tsconfig.json',
    overridesTypeAware: {
      'ts/no-unnecessary-condition': 'error',
      'ts/no-floating-promises': 'error',
      'ts/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],

      'import/no-deprecated': 'off',
      'ts/no-deprecated': 'error',

      'ts/await-thenable': 'error',
    },
  },

  react: true,
  jsx: true,

  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: true,
    overrides: {
      'style/quotes': ['error', 'single', {
        avoidEscape: true,
      }],
    },
  },
}, {
  name: 'vellone/all',
  rules: {
    'antfu/top-level-function': 'off',

    'style/multiline-ternary': 'off',
    'style/jsx-one-expression-per-line': 'off',
    'style/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      dynamicImports: 'always-multiline',
      enums: 'always-multiline',
      generics: 'always-multiline',
      importAttributes: 'always-multiline',
      tuples: 'always-multiline',
      functions: 'never',
    }],
    'style/jsx-quotes': ['error', 'prefer-single'],
    'style/brace-style': ['error', '1tbs'],

    'perfectionist/sort-imports': ['error', {
      type: 'unsorted',
    }],
    'perfectionist/sort-named-imports': 'off',

    'node/prefer-global/process': 'off',

    'ts/consistent-type-definitions': ['error', 'type'],
    'ts/strict-boolean-expressions': 'off',
    'ts/array-type': ['error', {
      default: 'array-simple',
    }],
    'ts/no-unused-vars': 'error',
    'ts/no-explicit-any': 'error',
    'ts/no-inferrable-types': 'error',
    'no-redeclare': 'off',
    'ts/no-redeclare': 'off',

    'ts/consistent-generic-constructors': 'error',
    'ts/method-signature-style': ['error', 'property'],
    'ts/no-empty-object-type': 'error',
    'no-loop-func': 'off',
    'ts/no-loop-func': 'error',

    'eslint-comments/no-use': ['error', {
      allow: [
        'eslint-disable-next-line',
      ],
    }],
  },
})
