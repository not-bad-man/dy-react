const baseConfig = require('./webpack.config.base');
const merge = require('webpack-merge');


module.exports = merge(baseConfig, {
   mode: 'development',
   devServer: {
      port: 3000,
      host: '127.0.0.1',
      hot: true,
      open: true
   }
})