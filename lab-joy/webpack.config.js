'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackConfig = module.exports = {};

webpackConfig.entry = `${__dirname}/src/main.js`;

webpackConfig.output = {
  filename: 'bundle.[hash].js',
  path: `${__dirname}/build`,
};

webpackConfig.plugins = [
  new HTMLPlugin(),
];

webpackConfig.module = {
  rules: [ 
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
  ],
};

webpackConfig.devtool = 'eval-source-map';

webpackConfig.devServer = {
  historyApiFallback: true,
};