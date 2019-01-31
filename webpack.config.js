const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: ['@babel/polyfill', './src/index'],
  // entry: ['./src/index'],
  output: {
    path: __dirname + '/dist',
    publicPath: './',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // Load JavaScript files
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      files: {
        js: ['./dist/bundle.js']
      },
      template: path.resolve(__dirname, 'src/assets/base.tmpl.html'),
      title: 'Goji',
      filename: path.join(__dirname, 'dist', 'index.html'),
    }),
  ],
  devServer: {
    publicPath: 'localhost:8080/',
    historyApiFallback: true,
    hot: true,
    https: true,
  }
};
