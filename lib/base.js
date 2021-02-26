const merge = require('deepmerge')
const baseConfig = require('./eslint.js')
const prettierConfig = require('./prettier.js')

module.exports = merge(baseConfig, {
  rules: { 'prettier/prettier': ['error', prettierConfig] }
})
