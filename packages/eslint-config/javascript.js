module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false // eslint-config-standard add it as true by default
    }
  },
  extends: [
    // './rules/javascript',
    // './rules/unicorn',
    // './rules/jest',
    // './rules/markdown',
    './rules/json'
  ].map((element) => require.resolve(element))
}
