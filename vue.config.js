const webpack = require('webpack')
const path = require('path')

//////////////////////////////////////
// generate routes for prerendering //
// used with `npm run generate`     //
//////////////////////////////////////

const { routes } = require('./src/router/routes')
const renderRoutes = []
const layouts = ['app', 'sticky', 'boxed', 'fixed']

routes
  // exclude routes with meta.auth
  .filter(route => !(route.meta && route.meta.auth))
  .map(route => {
    // generate /:layout/:page
    if (route.id === 'layout') {
      const layoutRoutes = route.children
        // exclude routes with meta.auth
        .filter(route => !(route.meta && route.meta.auth))
        .map(route => route.path)

      layouts.map(layout => layoutRoutes.map(route => renderRoutes.push(`/${layout}/${route}`)))
    }
    // top level routes
    else if (! route.children) {
      renderRoutes.push(route.path)
    }
  })

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        sassOptions: {
          includePaths: ['node_modules']
        }
      },
      postcss: {
        plugins: [
          require('postcss-rtl')
        ]
      }
    }
  },

  chainWebpack: config => {
    config.resolve.symlinks(false)
    config.resolve.alias.set('~', path.resolve(__dirname))
    config.resolve.alias.set('vue$', 'vue/dist/vue.runtime.esm.js')

    config.plugin('provide')
      .use(webpack.ProvidePlugin, [{
        $: 'jquery', // used by ui-icons page
        domFactory: 'dom-factory'
      }])

    // https://github.com/Akryum/vue-cli-plugin-ssr/issues/158
    const htmlSsrPlugin = config.plugins.get('html-ssr')

    if (htmlSsrPlugin) {
      htmlSsrPlugin.store.get('args')[0].chunks = []
    }
  },

  pluginOptions: {
    ssr: {
      nodeExternalsWhitelist: [
        /\.css$/,
        /\?vue&type=style/,
        /\.eot$/,
        /\.woff2$/,
        /\.woff$/,
        /\.ttf$/,
        /\.svg$/
      ]
    },
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    },
    prerenderSpa: {
      registry: undefined,
      renderRoutes,
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      postProcess: renderedRoute => {
        // Ignore any redirects.
        renderedRoute.route = renderedRoute.originalRoute
        renderedRoute.outputPath = path.join(__dirname, 'dist', `${renderedRoute.route}/index.html`)
        return renderedRoute
      },
    }
  },

  devServer: {
    // https://github.com/vuejs/vue-cli/issues/2509#issuecomment-421216342
    // Fixes vue-cli-service serve serving stale app.js in dev mode on safari
    before: app => {
      app.set('etag', 'strong')
      app.use((req, res, next) => {
        res.set('Cache-Control', 'must-revalidate')
        next()
      })
    }
  }
}
