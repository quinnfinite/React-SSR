const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './client/App.jsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
  },
  module: {
    rules:[{
      test: /\.jsx?/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets:['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  }
}