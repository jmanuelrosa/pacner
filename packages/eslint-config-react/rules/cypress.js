module.exports = {
  overrides: [
    {
      files: ['**/*.e2e.*'],
      env: {
        'cypress/globals': true
      },
      plugins: ['cypress']
    }
  ]
}
