<template>
  <div :class="layout ? layout.containerClass : null">
    <!-- <pre v-text="layout" /> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {
      HelloWorld
    },
    props: {
      layout: {
        type: Object,
        default: null
      }
    }
  }
</script>
