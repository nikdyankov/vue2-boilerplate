const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Clears everything after a build
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Generates an HTML file from a template

module.exports = {
    entry: {
      main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: 'Vue 2 boilerplate',
          template: path.resolve(__dirname, './src/template.html'),
          filename: 'index.html', // output file
        }),
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