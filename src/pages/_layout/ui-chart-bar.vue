<template>
  <luma-ui-chart-bar-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import Page from '@/components/Page'
  import {LumaUiChartBarPage} from 'vue-luma'

  export default {
    components: {
      LumaUiChartBarPage
    },
    extends: Page,
    data() {
      return {
        title: 'Bar Chart'
      }
    },
    async asyncData() {
      return {
        title: 'Bar Chart'
      }
    }
  }
</script>
