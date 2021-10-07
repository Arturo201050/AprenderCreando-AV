<template>
  <luma-ui-syntax-highlight-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import Page from '@/components/Page'
  import {LumaUiSyntaxHighlightPage} from 'vue-luma'

  export default {
    components: {
      LumaUiSyntaxHighlightPage
    },
    extends: Page,
    data() {
      return {
        title: 'Syntax Highlight'
      }
    }
  }
</script>
