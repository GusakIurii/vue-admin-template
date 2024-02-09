import Vue from 'vue'
import VeeValidate from 'vee-validate'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
//import websocket from '@/webSocket'
// import {Tabs, Tab} from 'vue-tabs-component';
import Tabs from 'vue-tabs-component'

import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'

import VueNumericInput from 'vue-numeric-input'
import VueSimpleAlert from "vue-simple-alert"

import VuexPersistence from 'vuex-persist'

import vSelect from "vue-select"
import "vue-select/dist/vue-select.css"



import '@/icons' // icon
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
//  Vue.component('tabs', Tabs);
//  Vue.component('tab', Tab);

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)
Vue.use(Tabs);
Vue.use(VueTabs);
Vue.use(VueNumericInput)
// Vue.use(VeeValidate)

Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: 'veeFields'
})

Vue.use(VueSimpleAlert)
Vue.component("v-select", vSelect)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  //websocket,
  render: h => h(App)
})
