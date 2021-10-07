<template>
  <luma-ui-chart-line-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import Page from '@/components/Page'
  import {LumaUiChartLinePage} from 'vue-luma'

  export default {
    components: {
      LumaUiChartLinePage
    },
    extends: Page,
    data() {
      return {
        title: 'Line Chart'
      }
    },
    async asyncData() {
      return {
        title: 'Line Chart'
      }
    }
  }
</script>
