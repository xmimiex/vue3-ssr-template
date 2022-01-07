const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const assetsDir = 'assets'

const config = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : 'source-map',
  output: {
    assetModuleFilename: `${assetsDir}/img/[name].[contenthash:8][ext][query]`,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              hotReload: !isProd,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env'],
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src/app'),
    },
    fallback: {
      fs: false,
      http: false,
      https: false,
    },
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
}

module.exports = config
