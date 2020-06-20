module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		project: './tsconfig.json',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'airbnb-typescript',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
		'./rules/best-practices',
		'./rules/complexity',
		'./rules/imports',
		'./rules/react',
		'./rules/style',
		'./rules/variables'
	],
	env: {
		node: true,
		browser: true,
		jest: true,
	},
	rules: {
		'import/prefer-default-export': 'off',
	},
};
