<template>
  <div :class="layout ? layout.containerClass : null">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
  export default {
    props: {
      layout: {
        type: Object,
        default: null
      }
    }
  }
</script>
