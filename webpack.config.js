var webpack = require("webpack");
var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDER_LIBS = [
  "react",
  "lodash",
  "redux",
  "react-redux",
  "react-dom",
  "faker",
  "react-input-range",
  "redux-form",
  "redux-thunk",
];

module.exports = {
  entry: {
    bundle: "./src/index.js",
    vendor: VENDER_LIBS,
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
        ],
        test: /\.css$/,
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"],
    }),

    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
