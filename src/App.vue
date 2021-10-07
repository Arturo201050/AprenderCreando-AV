<template>
  <div id="app">
    <component 
      :is="layout"
      v-if="layout_" />
  </div>
</template>

<script>
  // import { mediaQuery } from 'material-design-kit'
  // import { watch, unwatch } from 'watch-object'

  const ssr = process.env.VUE_APP_SSR === 'true'

  const { name, version } = require('~/package.json')
  import { Session } from 'fm-app-settings'
  import dot from 'dot-object'

  import App from './layouts/app.vue'
  import Sticky from './layouts/sticky.vue'
  import Boxed from './layouts/boxed.vue'
  import Fixed from './layouts/fixed.vue'
  import Blank from './layouts/blank.vue'
  
  export default {
    head() {
      return {
        title: this.$store.state && this.$store.state.brand,
        htmlAttrs: {
          dir: `${this.$store.state && this.$store.getters.settings.layout.rtl ? 'rtl' : 'ltr'}`
        }
      }
    },
    components: {
      App,
      Sticky,
      Boxed,
      Blank,
      Fixed
    },
    watch: {
      '$route': {
        deep: true,
        immediate: ssr,
        handler() {
          // layout & settings
          this.setLayout()

          // auth
          this.$router.currentRoute.matched
            .map(route => {
              if (route.meta && route.meta.auth) {
                this.$store.dispatch('auth/getUser').catch(() => {})
              }
            })
        }
      }
    },
    data() {
      return {
        session: null,
        ssr,

        // prevent loading the default layout 
        // until the route was loaded 
        // and the layout has changed in the store
        layout_: null
      }
    },
    computed: {
      layout() {
        return this.layout_ || this.ssr ? this.$store.getters.settings.layout.layout : null
      }
    },
    methods: {
      setSettings(layout) {
        const payload = {
          layout: {
            layout
          }
        }
        this.$store.dispatch('settings/setSettings', payload)
        this.layout_ = layout
      },
      setLayout() {
        let layout = this.$store.getters.settings.layout.layout

        /** Override from currentRoute.params.layout */

        if (this.$route.params && this.$route.params.layout) {
          layout = this.$route.params.layout
        }

        /** Override from routeConfig.meta.layout */

        this.$router.currentRoute.matched
          .map(route => {
            if (route.meta && route.meta.layout) {
              layout = route.meta.layout
            }
          })

        /** Set Layout */

        this.setSettings(layout)

        /** Save layout to localStorage */

        try {
          let memory = this.session.memory('settings')
          if (memory) {
            dot.object(memory)
          }

          if (!memory || (memory && memory.layout.layout !== this.$route.params.layout)) {
            this.session.save('settings', dot.dot(this.$store.getters.settings))
          }
        // eslint-disable-next-line no-empty
        } catch (e) {}
      }
    },
    beforeMount() {
      this.session = new Session(`${name}-${version}`)
    }
  }
</script>
