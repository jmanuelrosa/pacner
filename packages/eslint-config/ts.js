module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    tsconfigRootDir: process.cwd(),
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: false // @typescript-eslint/eslint-plugin add it as true by default
    }
  },
  extends: [
    './rules/javascript',
    './rules/typescript',
    './rules/unicorn',
    './rules/jest',
    './rules/markdown',
    './rules/json'
  ].map((element) => require.resolve(element)),
  settings: {
    jest: {
      version: 'detect'
    }
  }
}
