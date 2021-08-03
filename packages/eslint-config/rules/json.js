module.exports = {
  overrides: [
    {
      files: ['**/*.json', '**/*.json5'],
      plugins: ['jsonc'],
      parser: "jsonc-eslint-parser",
      rules: {
        'jsonc/no-bigint-literals': ['error'],
        'jsonc/no-dupe-keys': ['error'],
        'jsonc/no-floating-decimal': ['error'],
        'jsonc/no-multi-str': ['error'],
        'jsonc/no-number-props': ['error'],
        'jsonc/no-numeric-separators': ['error'],
        'jsonc/no-regexp-literals': ['error'],
        'jsonc/no-sparse-arrays': ['error'],
        'jsonc/no-template-literals': ['error'],
        'jsonc/no-undefined-value': ['error'],
        'jsonc/no-useless-escape': ['error'],
        'jsonc/quote-props': ['error'],
        'jsonc/quotes': ['error'],
        'jsonc/space-unary-ops': ['error'],
        'jsonc/valid-json-number': ['error'],
        'jsonc/vue-custom-block/no-parsing-error': ['error'],
        strict: ['off'],
        'no-unused-expressions': ['off']
      }
    },
    {
      files: ['package.json'],
      plugins: ['jsonc'],
      parser: "jsonc-eslint-parser",
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'description',
              'license',
              'private',
              'main',
              'bin',
              'type',
              'module',
              'umd:main',
              'unpkg',
              'keywords',
              'author',
              'homepage',
              'repository',
              'funding',
              'bugs',
              'engines',
              'files',
              'exports',
              'scripts',
              'dependencies',
              'devDependencies',
              'peerDependencies',
              'peerDependenciesMeta',
              'publishConfig'
            ]
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: { type: 'asc' }
          }
        ]
      }
    }
  ]
}
