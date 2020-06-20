module.exports = {
    rules: {
        "import/default": "error",
        "import/exports-last": "error",
        "import/group-exports": "error",
        "import/first": "error",
        "import/max-dependencies": ["error", 15],
        "import/no-anonymous-default-export": "error",
        "import/no-deprecated": "error",
        "import/no-extraneous-dependencies": "off",
        "import/no-namespace": "error",
        "import/prefer-default-export": "off",
        "import/no-unassigned-import": [
            "error",
            {allow: ["**/*.css", "**/*.scss"]}
        ]
    }
};
