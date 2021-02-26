# eslint-plugin-standard-prettier-react

Shareable ESlint and Prettier configuration files using prettier-standard, react-app, jsx-a11y, react, react-hooks, sonarjs

## Usage

Install ESlint and Prettier in the project.

``` bash
$ yarn add --save-dev eslint
$ yarn add --save-dev --save-exact prettier
```

Create ESlint and Prettier configurations in the root directory

``` json
// .eslintrc.json
{
  "extends": [
    "spx-react"
  ]
}
```

``` js
// .prettierrc.js
module.exports = require('eslint-config-spx-react/lib/prettier')
```
