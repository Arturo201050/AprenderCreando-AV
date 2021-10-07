<template>
  <luma-ui-cards-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import Page from '@/components/Page'
  import {LumaUiCardsPage} from 'vue-luma'

  export default {
    components: {
      LumaUiCardsPage
    },
    extends: Page,
    data() {
      return {
        title: 'Cards'
      }
    }
  }
</script>
