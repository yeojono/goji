const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  module: {
    rules: [
      {
        // Load JavaScript files
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
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
    contentBase: './dist',
    historyApiFallback: {
      rewrites: { from: /.*/, to: 'index.html' }
    },
    hot: true,
    https: true,
  }
};
