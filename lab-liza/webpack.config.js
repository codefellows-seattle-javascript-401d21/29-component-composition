'use strict';

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
    new ExtractTextPlugin('bundle.[hash].css')
];

//---------------------------------------------------------

webpackConfig.module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test:  /\.scss$/,
      loader: ExtractTextPlugin.extract({
        use: [
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [`${__dirname}/src/style`],
            },
          },
        ],
      }),
    },
  ]
};
//---------------------------------------------------------
webpackConfig.devtool = 'eval-source-map';

webpackConfig.devServer = {
  historyApiFallback: true,
};