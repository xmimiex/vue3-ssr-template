const { merge } = require('webpack-merge')
const WebpackNodeExternals = require('webpack-node-externals')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const webpack = require('webpack')
const path = require('path')
const WebpackBar = require('webpackbar')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./webpack.common')

const isProd = process.env.NODE_ENV === 'production'
const assetsDir = 'assets'

const config = {
  target: 'node',
  entry: {
    app: './src/app/entry-server.ts',
  },
  output: {
    path: path.resolve(__dirname, '../dist/app'),
    filename: `${assetsDir}/js/[name]-server.[contenthash:8].js`,
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
              additionalData: `
                @import '~@app/assets/scss/tokens.scss';
              `,
            },
          },
        ],
      },
    ],
  },
  externals: WebpackNodeExternals({
    allowlist: /\.(css|vue)$/,
  }),
  optimization: {
    splitChunks: false,
    moduleIds: 'deterministic',
    minimize: false,
  },
  plugins: [
    new WebpackBar({
      name: 'app-server',
      color: 'yellow',
    }),
    new webpack.DefinePlugin({
      __VUE_PROD_DEVTOOLS__: !isProd,
      __VUE_HMR_RUNTIME__: !isProd,
    }),
    new WebpackManifestPlugin({
      fileName: 'ssr-manifest.json',
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new MiniCssExtractPlugin({
      filename: `${assetsDir}/css/[name].[contenthash:8].css`,
      ignoreOrder: true,
    }),
  ],
}

module.exports = () => merge([
  common,
  config,
])
