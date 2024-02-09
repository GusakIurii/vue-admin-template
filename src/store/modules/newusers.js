import { login, register, getAll, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import store from '@/store'
import { alert } from "vue-simple-alert"

const getDefaultState = () => {
  return {
    all: {}
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_ID: (state, id) => {
    state.id = id
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_FIRSTNAME: (state, firstName) => {
    state.firstName = firstName
  },
  SET_LASTNAME: (state, lastName) => {
    state.lastName = lastName
  },
  SET_USERNAME: (state, username) => {
    state.username = username
  },
  SET_LOGGEDIN: (state, loggedIn) => {
    state.loggedIn = true
  },
  SET_REGISTRATIONSUCCESS: (state, registrationSuccess) => {
    state.registrationSuccess = true
  },
  getAllRequest(state) {
    state.all = { loading: true };
  },
  getAllSuccess(state, users) {
      state.all = { items: users };
  },
  getAllFailure(state, error) {
      state.all = { error };
  }
}

const actions = {

  register({ commit }, user) {
    const { username, firstName, lastName, password } = user
    return new Promise((resolve, reject) => {
      register({ username: username.trim(), firstName: firstName, lastName: lastName, password: password }).then(response => {
      commit('SET_REGISTRATIONSUCCESS', true)
      resolve()
      console.log('message: ' + response.message)
      setTimeout(() => {
        // display success message after route change completes
        store.dispatch('alert/success', response.message, { root: true })
    })
      }).catch(error => {
        store.dispatch('alert/error', "Register failure", { root: true })
        
        reject(error)
      })
    })
},

  getAll({ commit }) {
    return new Promise((resolve, reject) => {
      getAll().then(response => {
        users => commit('getAllSuccess', users),
        error => commit('getAllFailure', error)
        console.log('users function: ' + response)
        resolve()
      }).catch(error => {
        console.log('users function error: ' + error)       
        reject(error)
      })
    })
},

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token, state.username).then(response => {
        const { data } = response

        // if (!data) {
        if (!response) {
          console.log('Verification failed, please Login again.')
          return reject('Verification failed, please Login again.')
        }
        const { name, avatar, username } = response       
        resolve(response)
      }).catch(error => {
        console.log('getInfo function error: ' + error)
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    console.log('logout started')
    return new Promise((resolve, reject) => {
      console.log('state token before: ' + state.token)

      removeToken() // must remove  token  first
      console.log('state token after ' + state.token)
      resetRouter()
      commit('RESET_STATE')
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}



export default {
  namespaced: true,
  state,
  mutations,
  actions
}

