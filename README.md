# ZeroTurnaround's ESLint config [![Build Status](https://travis-ci.org/zeroturnaround/eslint-config-zt.svg?branch=master)](https://travis-ci.org/zeroturnaround/eslint-config-zt)

ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for ZeroTurnaround JavaScript projects.

## Installation

```shell
$ npm install --save-dev eslint babel-eslint eslint-config-zt
```

## Usage

```js
// .eslintrc
{
  "extends": "zt/base",
  "rules": {
    // Additional, per-project rules...
  }
}
```

## Projects with React

1. Add additional dependency `eslint-plugin-react`:

```shell
$ npm install --save-dev eslint-plugin-react
```

2. Extend both `zt/base` and `zt/react`:
```js
// .eslintrc
{
  "extends": ["zt/base", "zt/react"],
  "rules": {
    // Additional, per-project rules...
  }
}
```
