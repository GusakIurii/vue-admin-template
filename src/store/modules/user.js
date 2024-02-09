import { login, register, getAll, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import store from '@/store'
import { alert } from "vue-simple-alert"

const getDefaultState = () => {
  return {
    // data: NULL,
    hiddenReg: false,
    loggedIn: false,
    registrationSuccess: false,
    id: '',
    token: getToken(),
    // name: '',
    firstName: '',
    lastName: '',

    // avatar: '',
    username: '',
    role: ''
  }
}

let data = ''

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
  // SET_AVATAR: (state, avatar) => {
  //   state.avatar = avatar
  // },
  SET_USERNAME: (state, username) => {
    state.username = username
  },
  SET_ROLE: (state, role) => {
    state.role = role
  },
  SET_LOGGEDIN: (state, loggedIn) => {
    state.loggedIn = true
  },
  SET_REGISTRATIONSUCCESS: (state, registrationSuccess) => {
    state.registrationSuccess = true
  }
//   loginSuccess(state, user) {
//     state.status = { loggedIn: true };
//     state.user = user;
// }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    console.log('login method')
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: userInfo.username.trim(), password: userInfo.password }).then(response => {
        // commit('loginSuccess', user)
        console.log('userInfo.username: ' + userInfo.username)
        console.log('userInfo.password: ' + userInfo.password)
        console.log('login function')
        console.log('response.token: ' + response.token)
        data  = response
        console.log('getToken.data,token: ' + response.token)
        // commit('SET_TOKEN', data.token)
        // setToken(data.token)
        commit('SET_TOKEN', response.token)
        // setToken(data.token)
        setToken(response.token)
        commit('SET_LOGGEDIN', response.loggedIn)
        commit('SET_ID', data.id)
        commit('SET_FIRSTNAME', response.firstName)
        commit('SET_LASTNAME', response.lastName)
        commit('SET_USERNAME', response.username)
        commit('SET_ROLE', response.role)
        console.log('setToken.data,token: ' + response.token)
        resolve()
      }).catch(error => {
        console.log('login function error: ' + error)
        reject(error)
      })
    })
  },
  register({ commit }, user) {
    const { username, role, firstName, lastName, password } = user
    return new Promise((resolve, reject) => {
      register({ username: username.trim(), role: role, firstName: firstName, lastName: lastName, password: password }).then(response => {
        // setTimeout(() => {
          // display success message after route change completes
          // dispatch('alert/success', 'Registration successful', { root: true })
      // })
      commit('SET_REGISTRATIONSUCCESS', true)
      resolve()
      console.log('message: ' + response.message)
      setTimeout(() => {
        // display success message after route change completes
        store.dispatch('alert/success', response.message, { root: true })
        
        // alert(response.message)
    })
      }).catch(error => {
        // console.log('register function error: ' + error)
        // console.log('message: ' + response.message)
        store.dispatch('alert/error', "Register failure", { root: true })
        
        reject(error)
      })
    })
},

  getAll({ commit }) {
    // const { username, firstName, lastName, password } = user
    return new Promise((resolve, reject) => {
      getAll().then(response => {
        // setTimeout(() => {
          // display success message after route change completes
          // dispatch('alert/success', 'Registration successful', { root: true })
      // })
      // commit('SET_REGISTRATIONSUCCESS', true)
      console.log('users function: ' + response)
      resolve()
    //   console.log('message: ' + response.message)
    //   setTimeout(() => {
    //     // display success message after route change completes
    //     store.dispatch('alert/success', response.message, { root: true })
        
    //     // alert(response.message)
    // })
      }).catch(error => {
        console.log('users function error: ' + error)
        // console.log('message: ' + response.message)
        // store.dispatch('alert/error', "Register failure", { root: true })
        
        reject(error)
      })
    })
},

// function getAll() {
//   const requestOptions = {
//       method: 'GET',
//       headers: authHeader()
//   };

//   return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
// }

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

        // const { name, avatar } = data
        // console.log('getInfo.data,token: ' + data.token)
        
        // commit('SET_NAME', name)
        // commit('SET_AVATAR', avatar)
        // resolve(data)
        const { name, avatar, username } = response
        // console.log('getInfo.data,token: ' + response.token)
        // console.log('response.username: ' + response.username)
        // console.log('response.token: ' + response.token)
        // commit('SET_NAME', name)
        // commit('SET_AVATAR', avatar)
        
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

      // logout(state.token).then(() => {
      //   removeToken() // must remove  token  first
      //   console.log('state token after ' + state.token)
      //   resetRouter()
      //   commit('RESET_STATE')
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
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

