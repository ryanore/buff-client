var _ = require('lodash');
var webpack = require('webpack');
var webpackConfig = require('./webpack.base.config');
var buildTarget = process.env.BUILD_TARGET || 'form';
var config = _.merge(
  webpackConfig({
    hot: false,
    test: true,
    eslintrcPath: './_test.eslintrc'
  }),
  {
    output: {},
    entry: {},
    devtool: 'inline-source-map'
  }
);

module.exports = config;
