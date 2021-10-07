<template>
  <div />
</template>

<script>
  import { routeToMixin } from 'vue-luma'

  export default {
    layout: 'blank',
    mixins: [routeToMixin],
    created() {
      this.$store.dispatch('auth/logout')
        .then(this.onLogout)
        .catch(this.onLogout)
    },
    methods: {
      onLogout() {
        this.$router.push(this.routeTo(this.routes.login))
      }
    }
  }
</script>