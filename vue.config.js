const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true
})

module.exports = {
  devServer: {
    proxy: {
      '/one': {
        target: 'https://maps.googleapis.com/',
        pathRewrite: {'^/one' : ''}
      },
      '/two': {
        target: 'http://datamall2.mytransport.sg',
        pathRewrite: {'^/two' : ''}
      }
    }
  }
}