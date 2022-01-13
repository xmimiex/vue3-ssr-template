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
            @import '~@app/assets/scss/tokens.scss';
          `
        }
      }
    ],
  });
  config.resolve.alias['@app'] = path.resolve(__dirname, '../src/app');
  config.resolve.alias['@server'] = path.resolve(__dirname, '../src/server');

  return config;
};
