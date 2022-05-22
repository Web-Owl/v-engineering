const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
      plugins: [
          new webpack.ProvidePlugin({
              $: 'jquery',
              jquery: 'jquery',
              'window.jQuery': 'jquery',
              jQuery: 'jquery',
              appConfig: ['~/core/appConfig', 'default']
          })
      ]
  }
});
