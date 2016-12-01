# ZeroTurnaround's ESLint config

## Installation

```shell
$ yarn add --dev eslint-config-zt
```

## Usage

```yaml
// .eslintrc.yml
---
extends:
  - "zt"

rules:
    # Some overrides
    no-fallthrough: 0
```

### Base rules

Extend only `zt/base` when you don't use React in your project.
