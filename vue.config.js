module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title = "Злопастный Брандашмыг";
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
