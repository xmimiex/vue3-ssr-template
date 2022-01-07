const path = require('path');

module.exports = async ({ config }) => {

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          additionalData: `
            @import '~@/assets/scss/index.scss';
          `
        }
      }
    ],
  });
  config.resolve.alias['@'] = path.resolve(__dirname, '../src/app');

  return config;
};
