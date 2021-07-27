module.exports = {
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
      plugins: ['markdown'],
      rules: {
        'eol-last': ['off'],
        'no-undef': ['off'],
        'no-unused-expressions': ['off'],
        'no-unused-vars': ['off'],
        'padded-blocks': ['off'],
        strict: ['off'],
        'unicode-bom': ['off']
      }
    }
  ]
}
