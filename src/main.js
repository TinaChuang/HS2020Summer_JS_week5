import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// Import component
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

// 在 window 的全域下，新增一個變數 $ 為套件的 $
window.$ = $

// 元件，全域註冊
Vue.component('Loading', Loading)

// 套件加入到 Vue 的藍圖內(原型)
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
