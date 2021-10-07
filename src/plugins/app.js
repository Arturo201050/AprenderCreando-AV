import Vue from 'vue'

import NoSsr from 'vue-no-ssr'

Vue.component('NoSsr', NoSsr)

/**
 * Global Helpers
 */

import {mapGetters} from 'vuex'

Vue.mixin({
  computed: {
    ...mapGetters('auth', [
      'isLoggedIn'
    ]),
    ...mapGetters('settings', [
      'routes',
      'layout'
    ])
  }
})