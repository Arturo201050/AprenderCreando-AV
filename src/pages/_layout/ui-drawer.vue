<template>
  <luma-ui-drawer-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import Page from '@/components/Page'
  import {LumaUiDrawerPage} from 'vue-luma'

  export default {
    components: {
      LumaUiDrawerPage
    },
    extends: Page,
    data() {
      return {
        title: 'Drawer'
      }
    }
  }
</script>
