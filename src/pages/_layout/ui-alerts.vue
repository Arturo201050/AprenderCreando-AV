<template>
  <luma-ui-alerts-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import Page from '@/components/Page'
  import {LumaUiAlertsPage} from 'vue-luma'

  export default {
    components: {
      LumaUiAlertsPage
    },
    extends: Page,
    data() {
      return {
        title: 'Alerts'
      }
    }
  }
</script>
