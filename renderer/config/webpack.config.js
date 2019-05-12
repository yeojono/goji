const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

// Path for the root of the renderer module
const packageRoot = path.join(__dirname, '..');

module.exports = {
  // Tell Webpack to look for entry points and loaders from the package root
  context: packageRoot,
  devtool: 'inline-source-map',
  entry: ['@babel/polyfill', path.join(packageRoot, 'src/index')],
  externals: {
    sqlite3: 'commonjs sqlite3',
  },
  // entry: ['./src/index'],
  output: {
    path: path.join(packageRoot, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        // Load JavaScript files
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.join(packageRoot, 'config/.babelrc'),
          }
        }
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
        js: ['../dist/bundle.js']
      },
      template: path.resolve(__dirname, '../src/assets/base.tmpl.html'),
      title: 'Goji',
      filename: path.join(packageRoot, 'dist/index.html'),
    }),
  ],
  devServer: {
    publicPath: 'localhost:8080/',
    historyApiFallback: true,
    hot: true,
    https: true,
  },
  node: {
    fs: 'empty',
  }
};
