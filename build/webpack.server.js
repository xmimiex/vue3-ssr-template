const path = require('path')
const WebpackBar = require('webpackbar')
const WebpackNodeExternals = require('webpack-node-externals')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : 'source-map',
  target: 'node',
  stats: 'minimal',
  entry: {
    app: './src/server/index.ts',
  },
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'index.js',
  },
  externals: WebpackNodeExternals(),
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
              },
            },
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
    alias: {
      '@app': path.resolve(__dirname, '../src/app'),
      '@server': path.resolve(__dirname, '../src/server'),
    },
  },
  plugins: [
    new WebpackBar({
      name: 'server',
      color: 'cyan',
    }),
  ],
}
