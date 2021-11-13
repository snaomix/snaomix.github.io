const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const PATHS = {
  src: path.join(__dirname, 'src')
}

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
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    }),  ],
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
