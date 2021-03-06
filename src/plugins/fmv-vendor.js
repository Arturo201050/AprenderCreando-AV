import Vue from 'vue'

import {
  PageHeading,
  PageHeadline,
  PageHeader,
  PageSeparator,
  MdIcon,
  Card,
  Pager,
  DocsPage,
  NextLink,
  DocsCard
} from 'vue-luma'

import 'vue-luma/dist/vue-luma.css'

Vue.component('PageHeading', PageHeading)
Vue.component('PageHeadline', PageHeadline)
Vue.component('PageHeader', PageHeader)
Vue.component('PageSeparator', PageSeparator)
Vue.component('MdIcon', MdIcon)
Vue.component('Card', Card)
Vue.component('Pager', Pager)
Vue.component('DocsPage', DocsPage)
Vue.component('NextLink', NextLink)
Vue.component('DocsCard', DocsCard)

import {FmvAvatar} from 'fmv-avatar'
Vue.component('FmvAvatar', FmvAvatar)

import {BvFormImageGroup} from 'bv-form-image-group'
Vue.component('BvFormImageGroup', BvFormImageGroup)

import {FmvInputGroupMerge} from 'fmv-input-group-merge'
Vue.component('FmvInputGroupMerge', FmvInputGroupMerge)
