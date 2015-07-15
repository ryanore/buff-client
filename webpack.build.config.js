var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.base.config');
var CleanPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var buildDate = (new Date());
var buildTarget = process.env.BUILD_TARGET || 'form';
var ASSETS_PATH_FULLY_QUALIFIED = '/assets/';

var tmpl = buildTarget === 'form' ? 'index' : 'bootstrap';

var config = _.merge(
  webpackConfig({
    hot: false,
    build: true,
    plugins: [
      new CleanPlugin(['build']),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        },
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new ExtractTextPlugin('[name].css'),
      new webpack.NoErrorsPlugin(),
      new HtmlWebpackPlugin({
        title: 'Production - '+buildTarget,
        description: 'Description of '+buildTarget,
        filename: '../index.html',
        minify: {
          collapseWhitespace: true
        },
        inject: false,
        template: './templates/prod/'+tmpl+'.html',
        buildDate: {
          unix: buildDate.getTime(),
          string: buildDate.toString(),
          date: buildDate.toDateString()
        }
      }),
      new StatsPlugin(path.join(__dirname, 'build', 'stats.json'), {
        chunkModules: true,
        exclude: [
          /node_modules[\\\/]react(-router)?[\\\/]/
        ]
      })
    ],
    eslintrcPath: './_prod.eslintrc'
  }),
  {
    output: {
      publicPath: ASSETS_PATH_FULLY_QUALIFIED,
      filename: '[name].js'
    },
    cache: false,
    debug: false,
    devtool: false
  }
);

module.exports = config;
