var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var appEnv = process.env.NODE_ENV || 'development';

var config = {

  entry: {
    main: './src/main.js',
    vendor: './src/vendor.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },

  module: {
    exprContextCritical: false,
    rules: [
      // load and compile javascript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ]
      },

      // load css
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: [
          "css-loader"
        ]
      },

      // load HTML
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          "raw-loader"
        ]
      },
    ]
  },

  // inject js bundle to index.html
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      minify: false
    })
  ],

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
