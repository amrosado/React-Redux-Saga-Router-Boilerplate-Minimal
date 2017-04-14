// http://webpack.github.io/docs/configuration.html
// http://webpack.github.io/docs/webpack-dev-server.html
var app_root = "src"; // the app root folder: src, src_users, etc
var path = require("path");
var webpack = require("webpack");
var CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  app_root: app_root, // the app root folder, needed by the other webpack configs
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '']
  },
  entry: [
    // http://gaearon.github.io/react-hot-loader/getstarted/
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "babel-polyfill",
    __dirname + "/" + app_root + "/index.jsx",
  ],
  output: {
    path: __dirname + "/public/js",
    publicPath: "js/",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /(.jsx?$)|(.js$)/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "stage-0", "react"],
          plugins: ["transform-decorators-legacy"]
        }
      },
      {
        // https://github.com/jtangelder/sass-loader
        test: /\.scss$/,
        loaders: ["style", "css", "postcss-loader?parser=postcss-scss"],
      },
      {
        test: /\.css$/,
        loaders: ["style", "css", "postcss-loader"],
      }
    ],
  },
  devServer: {
    contentBase: __dirname + "/public",
    port: 8080
  },
  plugins: [
    new CleanWebpackPlugin(["css/main.css", "js/bundle.js"], {
      root: __dirname + "/public",
      verbose: true,
      dry: false, // true for simulation
    }),
    new webpack.DefinePlugin({
      "process.env": {
      },
    }),
  ],
  postcss: function () {
    return [
      require('autoprefixer'),
      require('precss')
    ]
  }
};
