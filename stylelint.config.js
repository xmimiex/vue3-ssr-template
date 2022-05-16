module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
  ],
  rules: {
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: [
          'rem-calc',
          'math.percentage',
          'math.div',
          'list.length',
          'list.nth',
          'list.append',
          'convert-to-rem',
          'strip-unit',
          'map.get',
        ],
      },
    ],
    indentation: [
      2,
      {
        baseIndentLevel: 1,
      },
    ],
  },
}
