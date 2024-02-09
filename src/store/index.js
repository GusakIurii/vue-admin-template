import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import account from './modules/account'
import alert from './modules/alert'
import users from './modules/users'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    // account,
    alert,
    users
  },
  getters,
  plugins: [new VuexPersistence().plugin]
})

// const store = () => {
//   return new Vuex.Store({
//     modules: {
//       app,
//       settings,
//       user,
//       // account,
//       alert,
//       users
//     },
//     getters
//   });
// };

export default store
