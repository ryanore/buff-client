'use strict';

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var PurifyCssPlugin = require('purifycss-loader/PurifyCssPlugin');
var _ = require('lodash');

module.exports = function(customConfig) {

  customConfig = customConfig || { plugins: [] };
  if (!customConfig.plugins) {
    customConfig.plugins = [];
  }

  var jsLoader = 'babel-loader?stage=0&optional=runtime';
  if (customConfig.hot) {
    jsLoader = 'react-hot!' + jsLoader;
  }

  var scriptLoader = 'style-loader!css-loader';
  var cssLoader = 'style-loader!css-loader!purifycss-loader';
  var scssLoader = 'style-loader!css-loader!sass-loader?sourceMap';

  // DON'T EXTRACT.. INLINE ALL THE STYLES
  // if (customConfig.build) {
  //   cssLoader = ExtractTextPlugin.extract('style-loader', 'css');
  //   scssLoader = ExtractTextPlugin.extract('style-loader', 'css!sass?sourceMap');
  // }

  var plugins = [
    new webpack.DefinePlugin({
      'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || customConfig.nodeEnv || 'development')
      }
    }),
    new webpack.NoErrorsPlugin()
  ];

  if (customConfig.plugins && customConfig.plugins.length) {
    plugins = plugins.concat(customConfig.plugins);
  }

  var alias = _.merge({
    app: path.join(__dirname, 'src')
  }, customConfig.alias);

  return ({
    entry: {
      buff: [
        './src/form/index.jsx'
      ],
      buffstrap: [
        './src/bootstrap/index.js'
      ]
    },

    output: {
      path: path.join(__dirname, 'build', 'assets'),
      publicPath: '/assets/',
      filename: '[name].js',
      chunkFilename: '[id].chunk.js',
      sourceMapFilename: 'debug/[file].map',
      pathinfo: true
    },

    resolve: {
      root: path.join(__dirname, 'src'),
      modulesDirectories: ['node_modules'],
      extensions: ['', '.js', '.jsx'],
      alias: alias
    },

    resolveLoader: { root: path.join(__dirname, 'node_modules') },

    cache: true,

    debug: true,

    devtool: 'eval',

    externals: {},

    plugins: plugins,
    
    eslint: {
      configFile: customConfig.eslintrcPath || path.join(__dirname, '.eslintrc'),
      emitError: customConfig.build,
      emitWarning: customConfig.test
    },

    module: {
      preLoaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        }
      ],
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: jsLoader
        },
        {
          test: /\.css$/,
          loader: cssLoader
        },
        {
          test: /\.(scss|sass)$/,
          loader: scssLoader
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          loader: 'url-loader?limit=10000&name=[name]-[hash].[ext]'
        },
        {
          test: /\.(woff|woff2)$/,
          loader: 'url-loader?limit=10000&name=[name]-[hash].[ext]'
        },
        {
          test: /\.(ttf|eot)$/,
          loader: 'file-loader?name=[name]-[hash].[ext]'
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.json5$/,
          loader: 'json5-loader'
        },
        {
          test: /\.(wav|mp3)$/,
          loader: 'file-loader?name=[name]-[hash].[ext]'
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.txt$/,
          loader: 'raw-loader'
        },
        {
          test: /\.(md|markdown)$/,
          loaders: ['html-loader', 'markdown-loader']
        }
      ]
    }
  });
};
