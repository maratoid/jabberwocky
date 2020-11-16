module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title = "Злопастный Брандашмknыг";
          return args;
        })
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
