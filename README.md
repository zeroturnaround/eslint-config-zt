# ZeroTurnaround's ESLint config [![Build Status](https://travis-ci.org/zeroturnaround/eslint-config-zt.svg?branch=master)](https://travis-ci.org/zeroturnaround/eslint-config-zt)

ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for ZeroTurnaround JavaScript projects.

## Installation

```shell
$ npm install --save-dev eslint-config-zt
```

## Usage

```js
{
  "extends": "zt",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### Base rules

Extend only `zt/base` when you don't use React in your project.
