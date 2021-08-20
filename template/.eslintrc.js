module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react'],
    globals:{
        module: true,
        require:true
    },
    rules: {
        '@typescript-eslint/explicit-module-boundary-types':'off',
        'semi': 'off',
        '@typescript-eslint/semi': ['error', 'never', { 'beforeStatementContinuationChars':'never' }],
        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['error'],
        'comma-spacing': 'off',
        '@typescript-eslint/comma-spacing': ['error'],
        'func-call-spacing': 'off',
        '@typescript-eslint/func-call-spacing': ['error'],
        'indent': 'off',
        '@typescript-eslint/indent': ['error'],
        'keyword-spacing': 'off',
        '@typescript-eslint/keyword-spacing': ['error'],
        'no-dupe-class-members': 'off',
        '@typescript-eslint/no-dupe-class-members': ['error'],
        'no-duplicate-imports': 'off',
        '@typescript-eslint/no-duplicate-imports': ['error'],
        'no-extra-parens': 'off',
        '@typescript-eslint/no-extra-parens': ['error'],
        'no-extra-semi': 'off',
        '@typescript-eslint/no-extra-semi': ['error'],
        'no-invalid-this': 'off',
        '@typescript-eslint/no-invalid-this': ['error'],
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': ['error'],
        'no-loss-of-precision': 'off',
        '@typescript-eslint/no-loss-of-precision': ['error'],
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': ['error'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': ['error'],
        'object-curly-spacing': 'off',
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        'quotes': 'off',
        '@typescript-eslint/quotes': ['error', 'single'],
        'space-infix-ops': 'off',
        '@typescript-eslint/space-infix-ops': ['error', { 'int32Hint': false }],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/member-delimiter-style': ['error', {
            multiline: {
                delimiter: 'none',    // 'none' or 'semi' or 'comma'
            },
            singleline: {
                delimiter: 'semi',    // 'semi' or 'comma'
            },
        }],
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                'allowSingleExtends': false
            }
        ],
        '@typescript-eslint/prefer-for-of':['error'],
        '@typescript-eslint/prefer-optional-chain':['error'],
        '@typescript-eslint/type-annotation-spacing':['error', {
            after:true
        }],
        '@typescript-eslint/no-explicit-any':'off',
        '@typescript-eslint/default-param-last':'off',
        '@typescript-eslint/no-var-requires':'off',
        '@typescript-eslint/ban-ts-comment':'off'
    },
}