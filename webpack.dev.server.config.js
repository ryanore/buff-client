var _ = require('lodash');
var webpack = require('webpack');
var webpackConfig = require('./webpack.base.config');
var buildTarget = process.env.BUILD_TARGET || 'form';
var config = _.merge(
  webpackConfig({
    hot: buildTarget === 'form',
    eslintrcPath: './_dev.eslintrc',
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }),
  {
    entry: {
      buff: [
        'webpack-dev-server/client?http://localhost:9999',
        'webpack/hot/only-dev-server',
        './src/form/index.jsx'
      ],
      buffstrap: [
        'webpack-dev-server/client?http://localhost:9999',
        'webpack/hot/only-dev-server',
        './src/bootstrap/index.js'
      ]
    }
  }
);
module.exports = config;
