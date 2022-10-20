module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  'overrides': [
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2020,
    'project': ['tsconfig.json'] ,
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'prettier'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'prettier/prettier': ['error'],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'max-len': ['error', { code: 120 }],
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'object-curly-spacing': ['error', 'always', { 'objectsInObjects': true, 'arraysInObjects': true }],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/array-type': 'warn',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
    '@typescript-eslint/member-delimiter-style': ['error'],
    '@typescript-eslint/no-implicit-any-catch': ['error', { allowExplicitAny: false } ],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-namespace': ['error', { allowDefinitionFiles: true } ],
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'warn',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'error',
  }
};
