module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'space-infix-ops': 'error',
    'quote-props': ['error', 'as-needed'],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
      },
    }],
    'max-len': ['error', { code: 120 }],
    indent: ['error', 2],
    quotes: ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true,
    }],
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 0,
      ignores: [],
    }],
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'vue/multi-word-component-names': 'off',
    'vue/component-name-in-template-casing': [
      1,
      'PascalCase',
      { registeredComponentsOnly: true },
    ],
    'no-multi-spaces': ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'never'],
  },
  overrides: [
    {
      files: [
        '**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ],
}
