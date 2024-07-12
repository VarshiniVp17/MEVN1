const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  //adding dev server proxy
  devServer: {
    proxy: "http://localhost:5000"
  },
});
