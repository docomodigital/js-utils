
module.exports = {
    parser: 'babel-eslint',
    env: { browser: true, jest: true },
    extends: ['airbnb-base'],
    rules: {
        indent: ['error', 4],
        'comma-dangle': 'off',
        'one-var': 'off',
        'one-var-declaration-per-line': 'off',
        'eol-last': 'off',
        'no-param-reassign': 'off',
        'class-methods-use-this': 'off',
        'no-console': 2,
        'no-empty': 'off',
        'arrow-parens': ['error', 'as-needed', {
            requireForBlockBody: true,
        }],
        'prefer-object-spread': 'off'
    },
    parserOptions: {
        ecmaFeatures: {
            legacyDecorators: true
        }
    }
};
