var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    './index'
  ],
  output: {
    path: '/production/',
    filename: 'bundle.js',
    publicPath: 'https://github.com/xinyzhang9/ClashRoyaleDeck/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],

        }
      },
      {
        test: /\.(png|jpg)$/, loader: 'url-loader?name=/img/[name].[ext]',
      }
    ]
  }
}
