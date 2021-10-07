<template>
  <luma-ui-forms-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import Page from '@/components/Page'
  import {LumaUiFormsPage} from 'vue-luma'

  export default {
    components: {
      LumaUiFormsPage
    },
    extends: Page,
    data() {
      return {
        title: 'Forms'
      }
    }
  }
</script>
