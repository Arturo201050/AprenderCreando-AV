<template>
  <luma-student-courses-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :results-heading-sidebar-toggle="resultsHeadingSidebarToggle" />
</template>

<script>
  import Page from '@/components/Page'
  import {
    LumaStudentCoursesPage,
    LibraryDrawer,
    LibrarySidebar
  } from 'vue-luma'

  export default {
    components: {
      LumaStudentCoursesPage
    },
    extends: Page,
    data () {
      return {
        title: this.$t('Browse Courses')
      }
    },
    computed: {
      subLayout() {
        return this.layout === 'fixed'
      },
      subLayoutDrawer() {
        return this.layout === 'fixed' 
          ? LibrarySidebar
          : LibraryDrawer
      },
      subLayoutDrawerId() {
        return 'library-drawer'
      },
      resultsHeadingSidebarToggle() {
        return this.layout === 'fixed' ? 'mobile' : true
      }
    },
    async asyncData({ app }) {
      return {
        title: app.$i18n.t('Browse Courses')
      }
    }
  }
</script>
