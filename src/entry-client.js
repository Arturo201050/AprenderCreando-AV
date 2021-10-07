import { loadAsyncComponents } from '@akryum/vue-cli-plugin-ssr/client'

import { createApp } from './main'

const ssr = process.env.VUE_APP_SSR === 'true'

createApp({
  async beforeApp ({
    router
  }) {
    if (ssr) {
      await loadAsyncComponents({ router })
    }
  },

  afterApp ({
    app,
    router,
    store,
  }) {
    if (ssr) {
      store.replaceState(window.__INITIAL_STATE__)
      router.onReady(() => {
        app.$mount('#app')
      })
    }
    else {
      app.$mount('#app')
    }
  }
})