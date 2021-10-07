<template>
  <div 
    class="page-content justify-content-center"
    style="min-height: 100vh">
    <div 
      class="d-flex justify-content-center my-5"
      v-if="loading">
      <b-spinner 
        variant="primary" 
        type="grow" 
        label="Loading ..."
        style="width: 3rem; height: 3rem;" />
    </div>

    <div v-show="! loading">
      <luma-login-page
        :title="title"
        :brand="$store.state.brand"
        auth-with-google
        :on-auth-with-google="onAuthWithGoogle"
        :on-submit-handler="onSubmitHandler"
        email="test@luma.test"
        password="12345678"
        :errors="errors">
        
        <p v-if="message">
          <b-form-invalid-feedback
            v-text="message"
            :state="!message" />
        </p>
      </luma-login-page>
    </div>
  </div>
</template>

<script>
  import Page from '@/components/Page'
  import {LumaLoginPage} from 'vue-luma'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      LumaLoginPage
    },
    extends: Page,
    layout: 'blank',
    data() {
      return {
        title: 'Login',
        errors: null,
        message: null
      }
    },
    async asyncData() {
      return {
        title: 'Login'
      }
    },
    computed: {
      ...mapGetters('auth', [
        'authStatus'
      ]),
      loading() {
        return this.authStatus === 'loading'
      }
    },
    watch: {
      isLoggedIn: {
        immediate: true,
        handler(isLoggedIn) {
          if (isLoggedIn) {
            this.onLoginSuccess()
          }
        }
      }
    },
    methods: {
      onAuthWithGoogle() {
        alert('Custom onAuthWithGoogle implementation here')
      },
      onLoginSuccess() {
        this.$router.push(this.routeTo(this.routes.studentDashboard))
      },
      onSubmitHandler(form) {
        this.errors = null
        this.message = null

        this.$store.dispatch('auth/login', form)
          .catch(error => {
            try {
              let { response } = error
              let { data } = response
              let { errors, message } = data
              this.errors = errors
              this.message = message
            } catch (e) {
              this.message = error
            }
          })
      }
    },
    created() {
      this.$store.dispatch('auth/getUser').catch(() => {})
    }
  }
</script>
