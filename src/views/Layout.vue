<template>
  <div class="d-flex flex-column flex h-100">
    <router-view v-bind:layout-props="layoutProps" />
  </div>
</template>

<script>
  export default {
    props: {
      layoutProps: {
        type: Object
      }
    }
  }
</script>