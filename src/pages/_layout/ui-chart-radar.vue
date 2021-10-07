<template>
  <luma-ui-chart-radar-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import Page from '@/components/Page'
  import {LumaUiChartRadarPage} from 'vue-luma'

  export default {
    components: {
      LumaUiChartRadarPage
    },
    extends: Page,
    data() {
      return {
        title: 'Radar Chart'
      }
    },
    async asyncData() {
      return {
        title: 'Radar Chart'
      }
    }
  }
</script>
