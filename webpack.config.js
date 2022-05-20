const webpack = require('webpack')
const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'dist/main.js'
  },
  plugins: [
    new Dotenv(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'dist/main.css'
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {url: false}
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ],
  },
};
