const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './client/index.js',
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
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
          presets:[['@babel/preset-env', {"targets": {"node": "current"}}], '@babel/preset-react']
        }
      }
    }]
  },
  plugins: [["@babel/plugin-proposal-class-properties"]]
}