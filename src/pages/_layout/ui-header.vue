<template>
  <luma-ui-header-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import Page from '@/components/Page'
  import {LumaUiHeaderPage} from 'vue-luma'

  export default {
    components: {
      LumaUiHeaderPage
    },
    extends: Page,
    data() {
      return {
        title: 'Header'
      }
    }
  }
</script>
