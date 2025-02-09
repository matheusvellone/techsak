import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import comments from '@eslint-community/eslint-plugin-eslint-comments/configs'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  // {
  //   files: ['**/*.{ts,tsx}'],
  //   extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
  //   // other configs...
  // },
  comments.recommended,
  eslintPluginUnicorn.configs['flat/recommended'],
  {
    rules: {
      'array-callback-return': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      curly: 'error',
      'default-case-last': 'error',
      'default-case': 'off',
      'dot-notation': 'error',
      eqeqeq: ['error', 'smart'],
      indent: ['error', 2],
      'keyword-spacing': ['error', {
        before: true,
        after: true,
      }],
      'no-alert': 'error',
      'no-console': 'error',
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',
      'no-eval': 'warn',
      'no-extra-semi': 'error',
      'no-lonely-if': 'error',
      'no-multi-assign': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-multiple-empty-lines': ['error', {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      }],
      'no-param-reassign': 'error',
      'no-return-assign': 'error',
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-undef': 'off',
      'no-unneeded-ternary': 'error',
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-useless-return': 'off',
      'no-var': 'error',
      // Queria na verdade configurar que 'ou é tudo em uma linha ou é tudo em várias linhas', mas não consegui.
      // Esse foi o mais próximo disso que consegui
      'object-curly-newline': ['error', {
        ObjectExpression:  { multiline: true, minProperties: 5,  consistent: true },
        ObjectPattern:     { multiline: true, minProperties: 5,  consistent: true },
        ImportDeclaration: { multiline: true, minProperties: 50, consistent: true },
        ExportDeclaration: { multiline: true, minProperties: 5,  consistent: true },
      }],
      'object-property-newline': ['error', {
        allowAllPropertiesOnSameLine: true,
      }],
      'object-shorthand': 'error',
      'operator-assignment': ['error', 'always'],
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-exponentiation-operator': 'error',
      'prefer-object-has-own': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-template': 'error',
      'quote-props': ['error', 'as-needed'],
      quotes: ['error', 'single', {
        avoidEscape: true,
      }],
      radix: 'error',
      semi: ['error', 'never'],
      'space-before-blocks': 'error',
      yoda: 'error',
    },
  },
  // {
  //   rules: {
  //     'import/no-deprecated': 'error',
  //     'import/no-anonymous-default-export': [0],
  //     'import/no-unused-modules': ['error', {
  //       unusedExports: true,
  //       ignoreExports: [
  //         './src/app',
  //       ],
  //     }],
  //   },
  // },
  {
    // TypeScript ESLint specific rules
    // https://typescript-eslint.io/rules/
    rules: {
      'require-await': 'off',
      '@typescript-eslint/require-await': 'error',

      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/array-type': ['error', {
        default: 'array-simple',
      }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'none',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/consistent-generic-constructors': 'error',
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      'no-loop-func': 'off',
      '@typescript-eslint/no-loop-func': 'error',
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'error',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
    },
  },
  {
    rules: {
      '@eslint-community/eslint-comments/no-unlimited-disable': 'error',
      '@eslint-community/eslint-comments/no-unused-disable': 'error',
      '@eslint-community/eslint-comments/no-use': ['error', {
        allow: [
          'eslint-disable-next-line',
        ],
      }],
    },
  },
  {
    rules: {
      'unicorn/filename-case': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-unused-properties': 'error',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-null': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
)
