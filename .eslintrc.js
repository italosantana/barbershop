module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: {
      module: true,
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react', 'react-hooks'],
  extends: ['prettier', 'eslint:recommended'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/named': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: ['packages/*/tsconfig.json'],
      },
    },
  },
};
