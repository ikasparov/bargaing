'use strict'

const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './client/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.png|jpg|jpeg|gif$/, loader: 'file-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader!sasslint-loader' }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      title: 'Bargaing',
      filename: 'index.html',
      inject: 'body',
      hash: true
    }),
    // new ExtractTextPlugin()
  ]
};
