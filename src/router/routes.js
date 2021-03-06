const Layout = () => import(/* webpackChunkName: "layout" */ '../views/Layout.vue')
const Home = () => import(/* webpackChunkName: "home" */ '../pages/_layout/index.vue')

const routes = [
  {
    path: '/',
    name: '/',
    component: Home
  },
  {
    path: '/:layout',
    id: 'layout',
    component: Layout,
    children: [
      { path: '', name: 'layout-home', component: Home },
      { path: 'billing-history', name: 'layout-billing-history', component: () => import(/* webpackChunkName: "billing-history" */ '../pages/_layout/billing-history.vue'), meta: { auth: true } },
      { path: 'billing-invoice', name: 'layout-billing-invoice', component: () => import(/* webpackChunkName: "billing-invoice" */ '../pages/_layout/billing-invoice.vue'), meta: { auth: true } },
      { path: 'billing-payment', name: 'layout-billing-payment', component: () => import(/* webpackChunkName: "billing-payment" */ '../pages/_layout/billing-payment.vue'), meta: { auth: true } },
      { path: 'billing-upgrade', name: 'layout-billing-upgrade', component: () => import(/* webpackChunkName: "billing-upgrade" */ '../pages/_layout/billing-upgrade.vue'), meta: { auth: true } },
      { path: 'billing', name: 'layout-billing', component: () => import(/* webpackChunkName: "billing" */ '../pages/_layout/billing.vue'), meta: { auth: true } },
      { path: 'blog-post', name: 'layout-blog-post', component: () => import(/* webpackChunkName: "blog-post" */ '../pages/_layout/blog-post.vue') },
      { path: 'blog', name: 'layout-blog', component: () => import(/* webpackChunkName: "blog" */ '../pages/_layout/blog.vue') },
      { path: 'change-password', name: 'layout-change-password', component: () => import(/* webpackChunkName: "change-password" */ '../pages/_layout/change-password.vue'), meta: { auth: true } },
      { path: 'discussion', name: 'layout-discussion', component: () => import(/* webpackChunkName: "discussion" */ '../pages/_layout/discussion.vue') },
      { path: 'discussions-ask', name: 'layout-discussions-ask', component: () => import(/* webpackChunkName: "discussions-ask" */ '../pages/_layout/discussions-ask.vue'), meta: { auth: true } },
      { path: 'discussions', name: 'layout-discussions', component: () => import(/* webpackChunkName: "discussions" */ '../pages/_layout/discussions.vue') },
      { path: 'edit-account-notifications', name: 'layout-edit-account-notifications', component: () => import(/* webpackChunkName: "edit-account-notifications" */ '../pages/_layout/edit-account-notifications.vue'), meta: { auth: true } },
      { path: 'edit-account-profile', name: 'layout-edit-account-profile', component: () => import(/* webpackChunkName: "edit-account-profile" */ '../pages/_layout/edit-account-profile.vue'), meta: { auth: true } },
      { path: 'edit-account', name: 'layout-edit-account', component: () => import(/* webpackChunkName: "edit-account" */ '../pages/_layout/edit-account.vue'), meta: { auth: true } },
      { path: 'faq', name: 'layout-faq', component: () => import(/* webpackChunkName: "faq" */ '../pages/_layout/faq.vue') },
      { path: 'forgot-password', name: 'layout-forgot-password', component: () => import(/* webpackChunkName: "forgot-password" */ '../pages/_layout/forgot-password.vue') },
      { path: 'help-center', name: 'layout-help-center', component: () => import(/* webpackChunkName: "help-center" */ '../pages/_layout/help-center.vue') },
      { path: 'instructor-courses', name: 'layout-instructor-courses', component: () => import(/* webpackChunkName: "instructor-courses" */ '../pages/_layout/instructor-courses.vue'), meta: { auth: true } },
      { path: 'instructor-dashboard', name: 'layout-instructor-dashboard', component: () => import(/* webpackChunkName: "instructor-dashboard" */ '../pages/_layout/instructor-dashboard.vue'), meta: { auth: true } },
      { path: 'instructor-earnings', name: 'layout-instructor-earnings', component: () => import(/* webpackChunkName: "instructor-earnings" */ '../pages/_layout/instructor-earnings.vue'), meta: { auth: true } },
      { path: 'instructor-edit-course', name: 'layout-instructor-edit-course', component: () => import(/* webpackChunkName: "instructor-edit-course" */ '../pages/_layout/instructor-edit-course.vue'), meta: { auth: true } },
      { path: 'instructor-edit-quiz', name: 'layout-instructor-edit-quiz', component: () => import(/* webpackChunkName: "instructor-edit-quiz" */ '../pages/_layout/instructor-edit-quiz.vue'), meta: { auth: true } },
      { path: 'instructor-profile', name: 'layout-instructor-profile', component: () => import(/* webpackChunkName: "instructor-profile" */ '../pages/_layout/instructor-profile.vue'), meta: { auth: true } },
      { path: 'instructor-quizzes', name: 'layout-instructor-quizzes', component: () => import(/* webpackChunkName: "instructor-quizzes" */ '../pages/_layout/instructor-quizzes.vue'), meta: { auth: true } },
      { path: 'instructor-statement', name: 'layout-instructor-statement', component: () => import(/* webpackChunkName: "instructor-statement" */ '../pages/_layout/instructor-statement.vue'), meta: { auth: true } },
      { path: 'login', name: 'layout-login', component: () => import(/* webpackChunkName: "login" */ '../pages/_layout/login.vue') },
      { path: 'logout', name: 'layout-logout', component: () => import(/* webpackChunkName: "logout" */ '../pages/_layout/logout.vue') },
      { path: 'messages', name: 'layout-messages', component: () => import(/* webpackChunkName: "messages" */ '../pages/_layout/messages.vue'), meta: { auth: true } },
      { path: 'pricing', name: 'layout-pricing', component: () => import(/* webpackChunkName: "pricing" */ '../pages/_layout/pricing.vue') },
      { path: 'signup', name: 'layout-signup', component: () => import(/* webpackChunkName: "signup" */ '../pages/_layout/signup.vue') },
      { path: 'student-course', name: 'layout-student-course', component: () => import(/* webpackChunkName: "student-course" */ '../pages/_layout/student-course.vue') },
      { path: 'student-courses', name: 'layout-student-courses', component: () => import(/* webpackChunkName: "student-courses" */ '../pages/_layout/student-courses.vue') },
      { path: 'student-dashboard', name: 'layout-student-dashboard', component: () => import(/* webpackChunkName: "student-dashboard" */ '../pages/_layout/student-dashboard.vue'), meta: { auth: true } },
      { path: 'student-lesson', name: 'layout-student-lesson', component: () => import(/* webpackChunkName: "student-lesson" */ '../pages/_layout/student-lesson.vue') },
      { path: 'student-my-courses', name: 'layout-student-my-courses', component: () => import(/*webpackChunkName: "student-my-courses" */ '../pages/_layout/student-my-courses.vue'), meta: { auth: true } },
      { path: 'student-my-paths', name: 'layout-student-my-paths', component: () => import(/* webpackChunkName: "student-my-paths" */ '../pages/_layout/student-my-paths.vue'), meta: { auth: true } },
      { path: 'student-my-quizzes', name: 'layout-student-my-quizzes', component: () => import(/* webpackChunkName: "student-my-quizzes" */ '../pages/_layout/student-my-quizzes.vue'), meta: { auth: true } },
      { path: 'student-path', name: 'layout-student-path', component: () => import(/* webpackChunkName: "student-path" */ '../pages/_layout/student-path.vue') },
      { path: 'student-paths', name: 'layout-student-paths', component: () => import(/* webpackChunkName: "student-paths" */ '../pages/_layout/student-paths.vue') },
      { path: 'student-profile', name: 'layout-student-profile', component: () => import(/* webpackChunkName: "student-profile" */ '../pages/_layout/student-profile.vue'), meta: { auth: true } },
      { path: 'student-quiz-result', name: 'layout-student-quiz-result', component: () => import(/* webpackChunkName: "student-quiz-result" */ '../pages/_layout/student-quiz-result.vue'), meta: { auth: true } },
      { path: 'student-skill-assessment', name: 'layout-student-skill-assessment', component: () => import(/* webpackChunkName: "student-skill-assessment" */ '../pages/_layout/student-skill-assessment.vue'), meta: { auth: true } },
      { path: 'student-skill-result', name: 'layout-student-skill-result', component: () => import(/* webpackChunkName: "student-skill-result" */ '../pages/_layout/student-skill-result.vue'), meta: { auth: true } },
      { path: 'student-take-course', name: 'layout-student-take-course', component: () => import(/* webpackChunkName: "student-take-course" */ '../pages/_layout/student-take-course.vue'), meta: { auth: true } },
      { path: 'student-take-lesson', name: 'layout-student-take-lesson', component: () => import(/* webpackChunkName: "student-take-lesson" */ '../pages/_layout/student-take-lesson.vue'), meta: { auth: true } },
      { path: 'student-take-quiz', name: 'layout-student-take-quiz', component: () => import(/* webpackChunkName: "student-take-quiz" */ '../pages/_layout/student-take-quiz.vue'), meta: { auth: true } },
      { path: 'teachers', name: 'layout-teachers', component: () => import(/* webpackChunkName: "teachers" */ '../pages/_layout/teachers.vue') },
      { path: 'ui-alerts', name: 'layout-ui-alerts', component: () => import(/* webpackChunkName: "ui-alerts" */ '../pages/_layout/ui-alerts.vue') },
      { path: 'ui-app-layout', name: 'layout-ui-app-layout', component: () => import(/* webpackChunkName: "ui-app-layout" */ '../pages/_layout/ui-app-layout.vue') },
      { path: 'ui-avatar', name: 'layout-ui-avatar', component: () => import(/* webpackChunkName: "ui-avatar" */ '../pages/_layout/ui-avatar.vue') },
      { path: 'ui-cards', name: 'layout-ui-cards', component: () => import(/* webpackChunkName: "ui-cards" */ '../pages/_layout/ui-cards.vue') },
      { path: 'ui-chart-area', name: 'layout-ui-chart-area', component: () => import(/* webpackChunkName: "ui-chart-area" */ '../pages/_layout/ui-chart-area.vue') },
      { path: 'ui-chart-bar', name: 'layout-ui-chart-bar', component: () => import(/* webpackChunkName: "ui-chart-bar" */ '../pages/_layout/ui-chart-bar.vue') },
      { path: 'ui-chart-doughnut', name: 'layout-ui-chart-doughnut', component: () => import(/* webpackChunkName: "ui-chart-doughnut" */ '../pages/_layout/ui-chart-doughnut.vue') },
      { path: 'ui-chart-line', name: 'layout-ui-chart-line', component: () => import(/* webpackChunkName: "ui-chart-line" */ '../pages/_layout/ui-chart-line.vue') },
      { path: 'ui-chart-radar', name: 'layout-ui-chart-radar', component: () => import(/* webpackChunkName: "ui-chart-radar" */ '../pages/_layout/ui-chart-radar.vue') },
      { path: 'ui-drawer-layout', name: 'layout-ui-drawer-layout', component: () => import(/* webpackChunkName: "ui-drawer-layout" */ '../pages/_layout/faq.vue') },
      { path: 'ui-drawer', name: 'layout-ui-drawer', component: () => import(/* webpackChunkName: "ui-drawer" */ '../pages/_layout/ui-drawer.vue') },
      { path: 'ui-fixed-layout', name: 'layout-ui-fixed-layout', component: () => import(/* webpackChunkName: "ui-fixed-layout" */ '../pages/_layout/ui-fixed-layout.vue') },
      { path: 'ui-form-image-group', name: 'layout-ui-form-image-group', component: () => import(/* webpackChunkName: "ui-form-image-group" */ '../pages/_layout/ui-form-image-group.vue') },
      { path: 'ui-forms', name: 'layout-ui-forms', component: () => import(/* webpackChunkName: "ui-forms" */ '../pages/_layout/ui-forms.vue') },
      { path: 'ui-header-layout', name: 'layout-ui-header-layout', component: () => import(/* webpackChunkName: "ui-header-layout" */ '../pages/_layout/ui-header-layout.vue') },
      { path: 'ui-header', name: 'layout-ui-header', component: () => import(/* webpackChunkName: "ui-header" */ '../pages/_layout/ui-header.vue') },
      { path: 'ui-icons', name: 'layout-ui-icons', component: () => import(/* webpackChunkName: "ui-icons" */ '../pages/_layout/ui-icons.vue') },
      { path: 'ui-input-group-merge', name: 'layout-ui-input-group-merge', component: () => import(/* webpackChunkName: "ui-input-group-merge" */ '../pages/_layout/ui-input-group-merge.vue') },
      { path: 'ui-perfect-scrollbar', name: 'layout-ui-perfect-scrollbar', component: () => import(/* webpackChunkName: "ui-perfect-scrollbar" */ '../pages/_layout/ui-perfect-scrollbar.vue') },
      { path: 'ui-sidebar', name: 'layout-ui-sidebar', component: () => import(/* webpackChunkName: "ui-sidebar" */ '../pages/_layout/ui-sidebar.vue') },
      { path: 'ui-sidebar-menu', name: 'layout-ui-sidebar-menu', component: () => import(/* webpackChunkName: "ui-sidebar-menu" */ '../pages/_layout/ui-sidebar-menu.vue') },
      { path: 'ui-syntax-highlight', name: 'layout-ui-syntax-highlight', component: () => import(/* webpackChunkName: "ui-syntax-highlight" */ '../pages/_layout/ui-syntax-highlight.vue') },
      { path: 'ui-tabs', name: 'layout-ui-tabs', component: () => import(/* webpackChunkName: "ui-tabs" */ '../pages/_layout/ui-tabs.vue') },
    ]
  }
]

module.exports = {
  routes
}