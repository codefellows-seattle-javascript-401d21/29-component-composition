'use strict';
// Vinicio - this file will be run by node, before webpack.

// Node (webpack.config.js) -> Webpack

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpackConfig = module.exports = {};

//---------------------------------------------------------
webpackConfig.entry = `${__dirname}/src/main.js`;

webpackConfig.output = {
  filename: 'bundle.[hash].js',
  path: `${__dirname}/build`,
};

//---------------------------------------------------------

webpackConfig.plugins = [
    new HTMLPlugin(),
    new ExtractTextPlugin({
      disable: process.env.NODE_ENV !== 'production',
      filename: 'bundle.[hash].css'
    })
];

//---------------------------------------------------------

webpackConfig.module = {
  rules: [ // Vinicio - which files do we want to process?
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }
  ]
};
//---------------------------------------------------------
webpackConfig.devtool = 'eval-source-map';

webpackConfig.devServer = {
  historyApiFallback: true,
};
