const customRules = [
	'./rules/react',
	'./rules/best-practices',
	'./rules/es6',
	'./rules/imports',
	'./rules/possible-errors',
	'./rules/stylistic-issues',
	'./rules/variables'
].map(require.resolve);

module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		}
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: [
		'@typescript-eslint',
		'prettier',
		'react',
		'react-hooks'
	],
	extends: [
		'plugin:react/recommended',
		'eslint-config-airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
		...customRules
	],
	env: {
		node: true,
		browser: true,
		jest: true,
	},
};
