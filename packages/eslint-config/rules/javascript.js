module.exports = {
  extends: 'standard',
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'import/newline-after-import': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        },
        groups: ['builtin', 'external', 'parent', 'internal', 'sibling', 'index'],
        'newlines-between': 'always-and-inside-groups'
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.ts', '.d.ts', 'tsx', 'json']
      }
    },
    'import/extensions': ['.js', '.mjs', '.jsx'],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|styl|hbs|svg|json)$']
  }
}
