const never = "never";
const always = "always";

const bestPractices = {
    "curly": 2,

    "guard-for-in": 2,

    "no-void": 2,

    "radix": 2,

    "no-alert": 2,

    "eol-last": 2,

    "no-bitwise": 2,
};

const variablesRules = {
    "no-use-before-define": [2, "nofunc"],
};

const styleRules = {
    "brace-style": [2, "stroustrup", { allowSingleLine: true }],

    "indent": [2, 4, { SwitchCase: 1 }],

    "linebreak-style": [2, "unix"],

    "space-infix-ops": 2,

    "no-multiple-empty-lines": [2, { max: 1 }],

    "one-var": [2, never],

    "no-multi-spaces": 2,

    "operator-linebreak": [2, "after"],

    "keyword-spacing": 2,

    "space-before-blocks": 2,

    "space-before-function-paren": [2, never],

    "spaced-comment": 2,

    "max-len": [2, 205, 4],
};

const es6Rules = {
    "arrow-spacing": 2,

    "no-duplicate-imports": 2,

    "no-useless-constructor": 2,

    "no-var": 2,

    "prefer-const": 2,

    "prefer-rest-params": 2,

    "prefer-spread": 2,

    "arrow-parens": [2, "as-needed"],
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

    "jsx-max-props-per-line": [2, { maximum: 3 }],

    "jsx-no-duplicate-props": 2,

    "jsx-no-undef": 2,

    "jsx-uses-react": 2,

    "jsx-uses-vars": 2,

    "jsx-wrap-multilines": 2,
};

module.exports = {
    extends: [
        "eslint:recommended"
    ],

    env: {
        browser: true,
        node: true,
        es6: true,
    },

    plugins: ["react"],

    ecmaFeatures: {
        experimentalObjectRestSpread: true,
    },

    parser: "babel-eslint",

    rules: Object.assign(
        {},
        bestPractices,
        variablesRules,
        styleRules,
        es6Rules,
        Object.keys(reactRules).reduce((result, key) => (result[`react/${key}`] = reactRules[key], result), {})
    ),
};
