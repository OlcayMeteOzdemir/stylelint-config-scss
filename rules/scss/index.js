module.exports = {
	plugins: ['stylelint-scss'],
	customSyntax: 'postcss-scss',
	rules: {
		'scss/at-each-key-value-single-line': null,
		'scss/at-else-closing-brace-newline-after': [
			'always-last-in-chain',
			{
				disableFix: false,
			},
		],
		'scss/at-else-closing-brace-space-after': 'always-intermediate',
		'scss/at-else-empty-line-before': 'never',
		'scss/at-else-if-parentheses-space-before': 'always',
		'scss/at-extend-no-missing-placeholder': null,
		'scss/at-function-named-arguments': [
			'never',
			{
				ignore: [],
				ignoreFunctions: ['scale-color'],
			},
		],
		'scss/at-function-parentheses-space-before': 'never',
		'scss/at-function-pattern': [
			'^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				message:
					'Function name can contain only lowercase letters [ a-z ], numbers [ 0-9 ] and hypen [ - ] (scss/at-function-pattern)',
			},
		],
		'scss/at-if-closing-brace-newline-after': [
			'always-last-in-chain',
			{
				disableFix: false,
			},
		],
		'scss/at-if-closing-brace-space-after': 'always-intermediate',
		'scss/at-if-no-null': null,
		'scss/at-import-no-partial-leading-underscore': true,
		'scss/at-import-partial-extension': 'never',
		'scss/at-import-partial-extension-blacklist': null,
		'scss/at-import-partial-extension-whitelist': null,
		'scss/at-mixin-argumentless-call-parentheses': 'always',
		'scss/at-mixin-named-arguments': [
			'never',
			{
				ignore: [],
			},
		],
		'scss/at-mixin-parentheses-space-before': 'never',
		'scss/at-mixin-pattern': [
			'^([_][a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				message:
					'Mixin name should start with underscore [ _ ], can contain only lowercase letters [ a-z ], numbers [ 0-9 ] and hypen [ - ] (scss/at-mixin-pattern)',
			},
		],
		'scss/at-rule-conditional-no-parentheses': null,
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [],
			},
		],
		'scss/at-use-no-unnamespaced': null,
		'scss/dollar-variable-colon-newline-after': [
			null,
			{
				disableFix: false,
			},
		],
		'scss/dollar-variable-colon-space-after': 'always',
		'scss/dollar-variable-colon-space-before': 'never',
		'scss/dollar-variable-default': [
			null,
			{
				ignore: [],
			},
		],
		'scss/dollar-variable-empty-line-after': [
			null,
			{
				except: [],
				ignore: [],
				disableFix: false,
			},
		],
		'scss/dollar-variable-empty-line-before': [
			'always',
			{
				except: ['first-nested', 'after-dollar-variable'],
				ignore: ['after-comment', 'inside-single-line-block'],
				disableFix: false,
			},
		],
		'scss/dollar-variable-first-in-block': [
			null,
			{
				ignore: [],
				except: [],
			},
		],
		'scss/dollar-variable-no-missing-interpolation': true,
		'scss/dollar-variable-no-namespaced-assignment': true,
		'scss/dollar-variable-pattern': [
			'^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				message:
					'Variable name can contain only lowercase letters [ a-z ], numbers [ 0-9 ] and hypen [ - ] (scss/dollar-variable-pattern)',
				ignore: [],
			},
		],
		'scss/percent-placeholder-pattern': [
			'^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
			{
				message:
					'Placeholder name can contain only lowercase letters [ a-z ], numbers [ 0-9 ] and hypen [ - ] (scss/percent-placeholder-pattern)',
			},
		],
		'scss/double-slash-comment-empty-line-before': [
			'always',
			{
				except: ['first-nested'],
				ignore: ['between-comments', 'stylelint-commands'],
			},
		],
		'scss/double-slash-comment-inline': [
			null,
			{
				ignore: [],
			},
		],
		'scss/double-slash-comment-whitespace-inside': 'always',
		'scss/comment-no-empty': true,
		'scss/comment-no-loud': null,
		'scss/declaration-nested-properties': [
			null,
			{
				except: [],
			},
		],
		'scss/declaration-nested-properties-no-divided-groups': null,
		'scss/dimension-no-non-numeric-values': true,
		'scss/function-color-relative': true,
		'scss/function-no-unknown': [
			true,
			{
				ignoreFunctions: [],
			},
		],
		'scss/function-quote-no-quoted-strings-inside': true,
		'scss/function-unquote-no-unquoted-strings-inside': true,
		'scss/map-keys-quotes': 'always',
		'scss/media-feature-value-dollar-variable': [
			null,
			{
				ignore: [],
			},
		],
		'scss/operator-no-newline-after': true,
		'scss/operator-no-newline-before': true,
		'scss/operator-no-unspaced': true,
		'scss/partial-no-import': null,
		'scss/selector-nest-combinators': null,
		'scss/selector-no-redundant-nesting-selector': [
			true,
			{
				ignoreKeywords: [],
			},
		],
		'scss/selector-no-union-class-name': null,
		'scss/no-dollar-variables': null,
		'scss/no-duplicate-dollar-variables': [
			null,
			{
				ignoreInside: [],
				ignoreInsideAtRules: [],
				ignoreDefaults: true,
			},
		],
		'scss/no-duplicate-mixins': true,
		'scss/no-global-function-names': null,
	},
};
