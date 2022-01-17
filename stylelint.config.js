module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
  ],
  rules: {
    indentation: [
      2,
      {
        baseIndentLevel: 1,
      },
    ],
  },
}
