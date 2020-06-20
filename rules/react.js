module.exports = {
    rules: {
        "react/boolean-prop-naming": ["error", { "rule": "^(is|has|should)[A-Z]([A-Za-z0-9]?)+" }],
        "react/jsx-filename-extension": ["error", { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
        "react/jsx-handler-names": "error",
        "react/jsx-indent": ["error", "tab"],
        "react/jsx-indent-props": ["error", "tab"],
        "react/jsx-key": "error",
        "react/jsx-max-depth": ["error", 3],
        "react/jsx-no-literals": "error",
		"react/no-bind": "error",
        "react/no-unsafe": "error",
        "react/prop-types": "error",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/react-in-jsx-scope": "error"
    },
};
