module.exports = {
	rules: {
		'at-rule-no-unknown': [
			null,
			{
				ignoreAtRules: [],
			},
		],
		'function-no-unknown': [
			null,
			{
				ignoreFunctions: [],
			},
		],
		'at-rule-empty-line-before': [
			'always',
			{
				except: ['first-nested', 'blockless-after-same-name-blockless'],
				ignore: ['after-comment'],
				ignoreAtRules: ['else'],
			},
		],
		'block-closing-brace-newline-after': [
			'always',
			{
				ignoreAtRules: ['if', 'else'],
			},
		],
	},
};
