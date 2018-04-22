// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import config from '@/js/conf'

Vue.config.productionTip = false

// This is a global mixin config, the config is available to every component
Vue.mixin({
  data: function () {
    return {
      get appConfig () {
        return config
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
