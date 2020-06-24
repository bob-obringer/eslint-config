module.exports = {
    rules: {
        "react/boolean-prop-naming": ["error", { "rule": "^(is|has|should)[A-Z]([A-Za-z0-9]?)+" }],
        "react/jsx-filename-extension": ["error", { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        "react/jsx-handler-names": "error",
        "react/jsx-indent": ["off"],
        "react/jsx-indent-props": ["off"],
        "react/jsx-key": "error",
        "react/jsx-max-depth": ["error", {
            "max": 2
        }],
        'react/jsx-no-literals': ['error', { ignoreProps: true }],
        "react/no-unsafe": ["error"],
        "react/prop-types": ["off"],
        "react/jsx-uses-react": ["error"],
        "react/jsx-uses-vars": ["error"],
        "react/react-in-jsx-scope": ["error"],
        'react/no-unescaped-entities': [
            'error',
            {
                forbid: [
                    {
                        char: '>',
                        alternatives: ['&gt;'],
                    },
                    {
                        char: '}',
                        alternatives: ['&#125;'],
                    },
                ],
            },
        ],
    },
};
