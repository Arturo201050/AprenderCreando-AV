<template>
  <luma-ui-fixed-layout-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import Page from '@/components/Page'
  import {LumaUiFixedLayoutPage} from 'vue-luma'

  export default {
    components: {
      LumaUiFixedLayoutPage
    },
    extends: Page,
    data() {
      return {
        title: 'Fixed Layout'
      }
    }
  }
</script>
