module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier', 'testcafe'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'plugin:testcafe/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    indent: 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',

    quotes: 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      { allowTemplateLiterals: true },
    ],

    'simple-import-sort/sort': 'error',

    'unicorn/filename-case': [
      'error',
      {
        cases: {
          pascalCase: true,
          kebabCase: true,
        },
      },
    ],
  },
};
