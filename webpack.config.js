const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //convert bundle JS code to HTML
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {

  entry: './frontend/app.js',
  output: {
    path: path.join(__dirname, 'backend/public'),
    filename: 'js/bundle.js'
  },
  mode: 'production',

  module: { //This module examine all css files
      rules: [
        {
          test: /\.css/,
          use: [ //And once it understand the files use the next modules
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader, //if devMode charge styles css into JS or otherwise charge styles in CSS file
            'css-loader'
          ]
      }
      ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/index.html', //it creates a copy of html file in public folder
      minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkAttributes: true,
          useShortDocType: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/bundle.css'
    })
  ],
  devtool: 'source-map' //Show mistake lines

}
