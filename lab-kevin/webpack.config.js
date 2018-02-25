'use strict';

const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpack_config = module.exports = {};

webpack_config.entry = `${__dirname}/src/main.js`;

webpack_config.devtool = 'eval-source-map';

webpack_config.devServer = {historyApiFallback: true};
  
webpack_config.output = {
    path: `${__dirname}/build`,
    filename: 'bungle-[hash].js',
    publicPath: '/',
  };

  webpack_config.plugins = [
    new HtmlPlugin({template: `${__dirname}/src/index.html`}),
    new ExtractTextPlugin('bundle-[hash].css'),
  ];

  webpack_config.module = {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node-modules/,
        loaders: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
};