module.exports = {
    rules: {
        "indent": ["error", "tab"],
        "max-depth": ["error", 2],
        "max-len": [
            "error",
            {
                code: 100,
                ignorePattern: true,
                ignoreRegExpLiterals: true
            }
        ],
        "max-lines": [
            "error",
            {
                max: 150,
                skipBlankLines: true,
                skipComments: true
            }
        ],
        "max-lines-per-function": [
            "error",
            {
                max: 40,
                skipBlankLines: true
            }
        ],
        "max-nested-callbacks": ["error", 2],
        "max-params": ["error", 2],
        "max-statements": ["error", 7],
        "max-statements-per-line": "error",
        "no-multiple-empty-lines": ["error", 1],
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: "*", next: "return" },
            { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
            { blankLine: "any",    prev: ["const", "let", "var"], next: ["const", "let", "var"]},
        ],
        "prefer-object-spread": "error",
        "quote-props": ["error", "consistent-as-needed", { numbers: true }]
    }
};
