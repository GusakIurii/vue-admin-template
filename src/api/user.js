import request from '@/utils/request'

export function login(data) {

  return request({
    // url: '/vue-admin-template/user/login',
    url: '/users/authenticate',
    method: 'post',
    // headers: {/*'Authorization': 'Bearer', */'Content-Type': 'application/json'},
    data
  }

  )
  
}

export function register(data) {
  return request({
    // url: '/vue-admin-template/user/login',
    url: '/users/register',
    method: 'post',
    data
  }
  )
}

export function getAll() {
  return request({
    // url: '/vue-admin-template/user/login',
    url: '/users',
    method: 'get'
  }
  )
}

export function getInfo(token, username) {
  return request({
    // url: '/vue-admin-template/user/info',
    url: '/users',
    method: 'get',
    params: { token, username }
  })
}

export function logout() {
  return request({
    // url: '/vue-admin-template/user/logout',
    url: '/users',
    method: 'post'
  })
  // console.log('user before removing: ' + localStorage.user)
  // localStorage.removeItem('user');
  // console.log('user after removing: ' + localStorage.user)
}

export function _delete(id) {
  return request({
    // url: '/vue-admin-template/user/login',
    url: `/users/${id}`,
    method: 'delete'
  }
  )
}

