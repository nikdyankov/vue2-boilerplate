const path = require('path');
const webpack = require('webpack')

const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Clears everything after a build
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Generates an HTML file from a template

module.exports = {
    mode: 'production',
    entry: {
      base: '@src/js/base.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, './src')
      },
    },
    devServer: {
      host: '0.0.0.0',
      port: 8080,
      https: true,
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, './dist'),
      open: true,
      compress: true,
      hot: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Vue 2 boilerplate',
          template: path.resolve(__dirname, './src/template.html'),
          filename: 'index.html', // output file
        }),
        new webpack.HotModuleReplacementPlugin() // HMR - Only update what has changed
    ],
    module: {
        rules: [
          // JavaScript
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
          },
        ],
    }
}