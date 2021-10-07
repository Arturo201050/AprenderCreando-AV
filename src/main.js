import Vue from 'vue'
import App from './App.vue'

import { createRouter } from './router'
import store from './store'

import i18n from './i18n'
import http from './http'

import './plugins/vue-meta'
import './plugins/bootstrap-vue'
import './plugins/vue-quill-editor'
import './plugins/fmv-vendor'
import './plugins/fmv-layout'
import './plugins/fmv-charts'
import './plugins/fmv-highlight'
import './plugins/app'

import '@/assets/scss/vendor/material-icons.scss'
import '@/assets/scss/vendor/fontawesome.scss'
import '@/assets/scss/app.scss'
import '@/assets/scss/vendor/quill.scss'

Vue.config.productionTip = false

export const createApp = async ({
  beforeApp = () => {},
  afterApp = () => {}
} = {}) => {
  const router = createRouter()

  await beforeApp({
    router,
    store
  })

  const app = new Vue({
    router,
    store,
    i18n,
    http,
    render: h => h(App),
    mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
  })

  const result = {
    app,
    router,
    store
  }

  await afterApp(result)

  return result
}