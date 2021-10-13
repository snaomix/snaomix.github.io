const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `./src/index.html`,
      minify: false,
      inject: true,
      hash: false
    }),
    new MiniCssExtractPlugin({
      filename: "[name].style.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // inject CSS to page
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // "style-loader",
          // translates CSS into CommonJS modules
          "css-loader",
          {
            // compiles Sass to CSS
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
              sassOptions: {
                fiber: false,
              }
            }
          }
        ],
      },
    ],
  },
};
