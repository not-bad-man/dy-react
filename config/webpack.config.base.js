const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
   entry: path.resolve(__dirname, '../src/index.js'),

   output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].js'
   },
   mode: 'development',
   resolve: {
      extensions: ['.js', '.json', '.jsx'],
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['es2015', 'react']
               }
            },
            exclude: /node_modules/
         }
      ]
   },

   plugins: [
      new HTMLWebpackPlugin({
         title: 'dy-react',
         template: 'index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
   ],

   devServer: {
      port: 3000,
      host: 'localhost',
      hot: true,
      open: true
   }
}

