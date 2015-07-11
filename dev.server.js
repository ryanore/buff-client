var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.server.config');
var buildTarget = process.env.BUILD_TARGET || 'form';

new WebpackDevServer(webpack(config), {
  hot: buildTarget === 'form',
  publicPath: config.output.publicPath,
  historyApiFallback: {
    index: './templates/dev/'+buildTarget+'.html'
  },
  stats: {
    colors: true,
    exclude: [
      /.*-dev-server/,
      /buildin/,
      /hot/,
      /babel/,
      /node_modules[\\\/]react(-router)?[\\\/]/
    ]
  }
}).listen(9999, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:9999');
});
