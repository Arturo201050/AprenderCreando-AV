<template>
  <luma-ui-app-layout-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import Page from '@/components/Page'
  import {LumaUiAppLayoutPage} from 'vue-luma'

  export default {
    components: {
      LumaUiAppLayoutPage
    },
    extends: Page,
    data() {
      return {
        title: 'App Layout'
      }
    }
  }
</script>
