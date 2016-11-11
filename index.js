const possibleErrorRules = {
    "no-cond-assign": 2,

    "no-console": 2,

    "no-constant-condition": 2,

    "no-control-regex": 2,

    "no-debugger": 2,

    "no-dupe-args": 2,

    "no-dupe-keys": 2,

    "no-duplicate-case": 2,

    "no-empty": 2,

    "no-empty-character-class": 2,

    "no-ex-assign": 2,

    "no-extra-boolean-cast": 2,

    "no-extra-semi": 2,

    "no-func-assign": 2,

    "no-inner-declarations": 2,

    "no-invalid-regexp": 2,

    "no-irregular-whitespace": 2,

    "no-obj-calls": 2,

    "no-regex-spaces": 2,

    "no-sparse-arrays": 2,

    "no-unexpected-multiline": 2,

    "no-unreachable": 2,

    "no-unsafe-finally": 2,

    "no-unsafe-negation": 2,

    "use-isnan": 2,

    "valid-typeof": 2,
};

const bestPracticeRules = {
    "curly": 2,

    "guard-for-in": 2,

    "no-alert": 2,

    "no-bitwise": 2,

    "no-case-declarations": 2,

    "no-empty-pattern": 2,

    "no-fallthrough": 2,

    "no-multi-spaces": 2,

    "no-octal": 2,

    "no-redeclare": 2,

    "no-self-assign": 2,

    "no-unused-labels": 2,

    "no-void": 2,

    "radix": 2,
};

const variablesRules = {
    "no-delete-var": 2,

    "no-undef": 2,

    "no-unused-vars": 2,

    "no-use-before-define": [2, "nofunc"],
};

const styleRules = {
    "brace-style": [2, "stroustrup", { allowSingleLine: true }],

    "eol-last": 2,

    "indent": [2, 4, { SwitchCase: 1 }],

    "keyword-spacing": 2,

    "linebreak-style": [2, "unix"],

    "max-len": [2, 140, 4],

    "no-mixed-spaces-and-tabs": 2,

    "no-multiple-empty-lines": [2, { max: 1 }],

    "one-var": [2, "never"],

    "operator-linebreak": [2, "after"],

    "space-before-blocks": 2,

    "space-before-function-paren": [2, "never"],

    "spaced-comment": 2,

    "space-infix-ops": 2,
};

const es6Rules = {
    "arrow-spacing": 2,

    "constructor-super": 2,

    "no-class-assign": 2,

    "no-const-assign": 2,

    "no-dupe-class-members": 2,

    "no-duplicate-imports": 2,

    "no-new-symbol": 2,

    "no-this-before-super": 2,

    "no-useless-constructor": 2,

    "no-var": 2,

    "prefer-const": 2,

    "prefer-rest-params": 2,

    "prefer-spread": 2,

    "require-yield": 2,
};

const reactRules = {
    "no-deprecated": 2,

    "no-direct-mutation-state": 2,

    "no-find-dom-node": 2,

    "no-is-mounted": 2,

    "no-render-return-value": 2,

    "no-string-refs": 2,

    "no-unknown-property": 2,

    "prefer-es6-class": 2,

    "react-in-jsx-scope": 2,

    "self-closing-comp": 2,

    "style-prop-object": 2,

    "jsx-closing-bracket-location": [2, "line-aligned"],

    "jsx-indent": [2, 4],

    "jsx-indent-props": [2, 4],

    "jsx-space-before-closing": 2,

    "jsx-equals-spacing": 2,

    "jsx-first-prop-new-line": [2, "multiline"],

    "jsx-pascal-case": 2,

    "jsx-max-props-per-line": [2, { maximum: 5 }],

    "jsx-no-duplicate-props": 2,

    "jsx-no-undef": 2,

    "jsx-uses-react": 2,

    "jsx-uses-vars": 2,

    "jsx-wrap-multilines": 2,
};

module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },

    plugins: ["react"],

    parser: "babel-eslint",

    rules: Object.assign(
        {},
        possibleErrorRules,
        bestPracticeRules,
        variablesRules,
        styleRules,
        es6Rules,
        Object.keys(reactRules).reduce((result, key) => (result[`react/${key}`] = reactRules[key], result), {})
    ),
};
