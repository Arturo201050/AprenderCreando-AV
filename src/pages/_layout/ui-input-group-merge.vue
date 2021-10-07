<template>
  <luma-ui-input-group-merge-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="layout === 'fixed' || layout === 'sticky'" />
</template>

<script>
  import Page from '@/components/Page'
  import {LumaUiInputGroupMergePage} from 'vue-luma'

  export default {
    components: {
      LumaUiInputGroupMergePage
    },
    extends: Page,
    data() {
      return {
        title: 'Input Group Merge'
      }
    }
  }
</script>
