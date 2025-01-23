const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/kcs',
  transpileDependencies: true,
  devServer: {
    proxy: null,
  }
})
