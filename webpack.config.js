const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: path.resolve(__dirname, 'src/index.js'),

   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
   },
   mode: 'development',

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
   ],
}

