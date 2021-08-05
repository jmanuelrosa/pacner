module.exports = {
  root: true,
  extends: [
    '@pacner/eslint-config',
    './rules/react',
    './rules/cypress'
  ].map((element) => require.resolve(element))
}

console.log('NEW version')
