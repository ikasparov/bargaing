'use strict'

const path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.png|jpg|jpeg|gif$/, loader: 'file-loader' },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader!sasslint-loader' }
      // { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') }
    ]
  },




  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Bargaing',
      filename: 'index.html',
      inject: 'body',
      hash: true
    }),
    // new ExtractTextPlugin('dist/styles.css')
  ]
};
