import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from './routes'
// import {createStore} from '../store'
import store from '../store'
import scrollBehavior from './scrollBehavior'

export const createRouter = () => {
  // const store = createStore()

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes,
    scrollBehavior
  })

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.auth)) {
      if (store.getters['auth/isLoggedIn']) {
        next()
        return
      }

      let params = {}

      try {
        params = {
          layout: to.params.layout
        }
      // eslint-disable-next-line no-empty
      } catch(e) {}

      next({
        name: 'layout-login',
        params
      })
    } else {
      next()
    }
  })

  return router
}

const router = createRouter()
export default router