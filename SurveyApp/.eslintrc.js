module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-native', 'eslint-plugin-react-hooks'],
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx',
                    '.d.ts',
                    '.android.js',
                    '.android.jsx',
                    '.android.ts',
                    '.android.tsx',
                    '.ios.js',
                    '.ios.jsx',
                    '.ios.ts',
                    '.ios.tsx',
                    '.web.js',
                    '.web.jsx',
                    '.web.ts',
                    '.web.tsx',
                ],
            },
        },
    },
    parserOptions: { sourceType: 'module' },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    rules: {
        'react/jsx-curly-spacing': [2, { when: 'always', allowMultiline: false }],
        'react/jsx-closing-bracket-location': [1, 'after-props'],
        '@typescript-eslint/member-delimiter-style': 2,
        'curly': ['error', 'all'],
        'no-param-reassign': ['error', { props: false }],
        'global-require': 0,
        'no-unused-vars': 0,
        'no-undef': 0,
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            },
        ],
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/no-empty-interface': 0,
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'react/jsx-props-no-spreading': 0,
        'space-before-function-paren': ['error', 'always'],
        'no-underscore-dangle': 0,
        'react-native/no-unused-styles': 2,
        'react-native/no-inline-styles': 0,
        'react-native/no-color-literals': 0,
        'react-native/no-raw-text': 0,
        'react-hooks/exhaustive-deps': ['error', { additionalHooks: '(useMemoOne)' }],
        'react/display-name': 0,
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': ['error', 'single'],
        'indent': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': [2, 'first'],
        'import/no-extraneous-dependencies': 0,
        'react/prop-types': 0,
        'max-len': [
            'error',
            120,
            {
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'object-curly-newline': ['error', { multiline: true, consistent: true }],
        'brace-style': ['error', '1tbs', { allowSingleLine: false }],
        'array-element-newline': ['error', 'consistent'],
        'padding-line-between-statements': ['error', {
            blankLine: 'never',
            prev: ['singleline-const', 'singleline-let'],
            next: ['singleline-const', 'singleline-let'],
        }, {
            blankLine: 'always',
            prev: ['multiline-const', 'multiline-let', 'block', 'block-like', 'if'],
            next: ['block', 'block-like', 'return', 'if', 'function'],
        }, {
            blankLine: 'never',
            prev: ['case'],
            next: ['case'],
        }],
        'object-curly-spacing': ['error', 'always'],
    },
    globals: { fetch: 'readonly' },
};
