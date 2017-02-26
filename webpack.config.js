var HtmlWebpackPlugin = require('html-webpack-plugin');
var appEnv = process.env.NODE_ENV || 'development';

var config = {

  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },

  module: {
    loaders: [
      // load and compile javascript
      { test: /\.js$/, exclude: /node_modules/, loader:"babel" },

      // load JSON files and HTML
      { test: /\.html$/, exclude: /node_modules/, loader:"raw" },
    ]
  },

  // inject js bundle to index.html
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
    minify: false
  })],

  // webpack dev server configuration
  devServer: {
    contentBase: "./src",
    noInfo: false,
    hot: false
  }
};

if (appEnv === 'development') {
  config.devtool = '#inline-source-map';
}

module.exports = config;
