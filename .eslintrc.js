module.exports = {
	extends: 'eslint:recommended',
	env: {
		'browser': true,
		'commonjs': true,
		'es6': true
	},
	globals: {
		'P': 'writable'
	},
	rules: {
		'no-prototype-builtins': 'off',
		'no-unused-vars': 'warn',
		'no-useless-escape': 'off',
		'no-constant-condition': ['error', {'checkLoops': false}],

		'array-bracket-spacing': ['error', 'never'],
		'block-spacing': ['error', 'always'],
		'camelcase': ['error', {
			properties: 'never'
		}],
		'comma-dangle': ['error', 'never'],
		'comma-spacing': ['error'],
		'comma-style': ['error'],
		'eol-last': ['error', 'always'],
		'func-call-spacing': ['error', 'never'],
		'indent': ['error', 'tab', {'SwitchCase': 1}],
		'key-spacing': ['error', {
			beforeColon: false,
			afterColon: true,
			mode: 'strict'
		}],
		'keyword-spacing': ['error', {
			before: true,
			after: true
		}],
		'linebreak-style': ['error', 'unix'],
		'max-len': [1, {
			code: 120,
			tabWidth: 4,
			ignoreUrls: true
		}],
		'new-parens': ['error'],
		'newline-per-chained-call': ['error'],
		'no-mixed-operators': ['error'],
		'no-multiple-empty-lines': ['error', {
			max: 2,
			maxBOF: 0,
			maxEOF: 0
		}],
		'no-negated-condition': ['error'],
		'no-trailing-spaces': ['error', {skipBlankLines: true}],
		'no-unneeded-ternary': ['error'],
		'object-curly-spacing': ['error'],
		'object-property-newline': ['error', {
			allowMultiplePropertiesPerLine: true
		}],
		'operator-linebreak': ['error', 'after'],
		'quotes': ['error', 'single', {
			allowTemplateLiterals: true,
			avoidEscape: true
		}],
		'semi': ['error', 'always'],
		'semi-spacing': ['error'],
		'space-before-function-paren': ['error', 'always'],
		'space-in-parens': ['error'],
		'space-infix-ops': ['error'],
		'space-unary-ops': ['error']
	},
	parserOptions: {
		'es6': true
	},
	overrides: [
		{
			'files': ['**/compile.js', '**/compile2_old.js', '**/codegen-block.js'],
			'rules': {
				'no-undef': 'off',
				'no-redeclare': 'off',
				'no-mixed-operators': 'off',
				'no-unused-vars': 'off',
				'max-len': 'off'
			}
		},
		{
			'files': ['webpack.config.js'],
			'env': {
				'node': true
			}
		},
		{
			'files': ['**/runtime.js'],
			'rules': {
				'no-unused-vars': 'off'
			}
		}
	]
}
