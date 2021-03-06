import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'

Vue.use(Vuex)

import Mint from '../node_modules/mint-ui'
import '../node_modules/mint-ui/lib/style.css'
Vue.use(Mint);

import router from '../src/assets/js/router.js'

// 全局的css
import '../src/assets/css/cssreset.css'

import '../src/assets/css/common.css'

import store from '../src/assets/js/data.js'

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
