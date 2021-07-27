module.exports = {
  env: {
    browser: true
  },
  plugins: ['react-hooks', 'jsx-a11y'],
  extends: [
    'plugin:jsx-a11y/recommended',
    'standard-jsx',
    'standard-react'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-fragments': ['error', 'element'],
    'react/jsx-handler-names': ['error', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on'
    }],
    'react/jsx-sort-props': ['off', {
      ignoreCase: true,
      callbacksLast: false,
      shorthandFirst: false,
      shorthandLast: false,
      noSortAlphabetically: false,
      reservedFirst: true
    }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
