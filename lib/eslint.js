module.exports = {
  extends: [
    'prettier-standard/prettier-file-base',
    'react-app',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier-standard/end'
  ],
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    'no-unused-vars': 'error',
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'warn',
    'sonarjs/cognitive-complexity': 'warn'
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js'],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off'
      }
    },
    {
      files: ['**/stories/**/*.js'],
      rules: {
        'sonarjs/no-duplicate-string': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off'
      }
    }
  ]
}
