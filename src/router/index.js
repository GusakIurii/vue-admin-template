import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import store from '@/store'
import { mapState } from 'vuex'
import { default as dataInv } from "@/components/Inverter/data-inv-01"

Vue.use(Router)

/* Layout */
import Layout from '@/layout'




/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
//  const role = store.getters.role
//  console.log('store: ')
//  console.log(store)

//  const role = this.$store.state.user.role
// console.log('store: ' + this.$store.user.state.role)

//  function  Role() {
//   return this.$store.user.state.role
// }
// const lStore = store

// const userRole = lStore.user.state.role

// console.log('userName: ' + username)

// let hiddenReg = false
// let hiddenItem = false
// let username = this.$store.user.state.username
// let role = Role()


// console.log('hiddenReg: ' + hiddenReg)
// console.log('dataInv.role: ' + dataInv.role)
// console.log('role: ' + role)

  // sidebar() {
  //   return this.$store.state.app.sidebar
  // }
let usernameObj2 = ''
let userRole2 = ''

if(JSON.parse(localStorage.getItem("vuex")) === null){
usernameObj2 = ''
userRole2 = ''
}else{
usernameObj2 = JSON.parse(localStorage.getItem("vuex"))
userRole2 = usernameObj2.user.role
}
let hiddenReg = false
// hiddenReg = usernameObj.user.hiddenReg
// let usernameObj = JSON.parse(localStorage.getItem("vuex"))
// let username = localStorage.vuex.user.username
// console.log(usernameObj)
// let user = usernameObj.user
// console.log(user)
// let username = usernameObj.user.username
// console.log(username)

if(userRole2 !== 'superadmin' && usernameObj2 !==null){
  hiddenReg = true
}else{
  hiddenReg = false
}


// let usernameObj = JSON.parse(localStorage.getItem("vuex"))
// // let username = usernameObj.user.username
// let userRole = usernameObj.user.role


export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    // component: () => import('/client/src/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    // redirect: '/login',
    children: [{
      path: 'dashboard',
      name: 'Dashdoard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Головна', icon: 'dashboard' }
    }]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },
  // {
  //   path: '/usertable',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Usertable',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Usertable', icon: 'form' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: 'Form', icon: 'form' }
  //     }
  //   ]
  // },
  {
    path: '/registration',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Registration',
        component: () => import('@/views/registration/index'),
        meta: { title: 'Реєстрація', icon: 'form' },
        hidden: hiddenReg,
        beforeEnter: (to, from, next) => {
          let usernameObj = JSON.parse(localStorage.getItem("vuex"))
          // let username = usernameObj.user.username
          let userRole = usernameObj.user.role
          if(userRole === 'superadmin'){
              next() // changes route
              console.log('next')
          }
          else{
              next(false) // doesn't allow changing route, you can also do redirects here etc.
              console.log('next-false')
          }
        }
        // hidden: hiddenReg,
        // meta: { title: 'Реєстрація', icon: 'form' }
      }
    ]
  },
  {
    path: '/users',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Users',
        component: () => import('@/views/users/index'),
        // hidden: hiddenItem,
        meta: { title: 'Users', icon: 'form' },
        hidden: hiddenReg,
        beforeEnter: (to, from, next) => {
          let usernameObj = JSON.parse(localStorage.getItem("vuex"))
          // let username = usernameObj.user.username
          let userRole = usernameObj.user.role
          if(userRole === 'superadmin'){
              next() // changes route
              console.log('next')
              // hiddenItem = false
          }
          else{
              next(false) // doesn't allow changing route, you can also do redirects here etc.
              console.log('next-false')
              // hiddenItem = true
          }
        }
        
      },
      
    ]
  },
  // {
  //   path: '/websocket',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'websocket',
  //       component: () => import('@/views/webSocket/index'),
  //       meta: { title: 'websocket', icon: 'form' }
  //     }
  //   ]
  // },
  // {
  //   path: '/inv-tables-01',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Page 1',
  //       component: () => import('@/views/inv-common-data/inv-tables-01/index'),
  //       meta: { title: 'Загальні дані / Інвертер №1', icon: 'table' }
  //     }
  //   ]
  // },

  {
    path: '/inv-common-data',
    component: Layout,
    redirect: '/inv-common-data-menus/menu1',
    name: 'Nested',
    meta: {
      title: 'Загальні дані',
      icon: 'nested'
    },
    children: [
      // {
      //   path: 'menu1',
      //   component: () => import('@/views/inv-common-data-menus/menu1/index'), // Parent router-view
      //   name: 'Menu1',
      //   meta: { title: 'Menu1' },
      //   children: [
      //     {
      //       path: 'menu1-1',
      //       component: () => import('@/views/inv-common-data-menus/menu1/menu1-1'),
      //       name: 'Menu1-1',
      //       meta: { title: 'Menu1-1' }
      //     },
      //     {
      //       path: 'menu1-2',
      //       component: () => import('@/views/inv-common-data-menus/menu1/menu1-2'),
      //       name: 'Menu1-2',
      //       meta: { title: 'Menu1-2' },
      //       children: [
      //         {
      //           path: 'menu1-2-1',
      //           component: () => import('@/views/inv-common-data-menus/menu1/menu1-2/menu1-2-1'),
      //           name: 'Menu1-2-1',
      //           meta: { title: 'Menu1-2-1' }
      //         },
      //         {
      //           path: 'menu1-2-2',
      //           component: () => import('@/views/inv-common-data-menus/menu1/menu1-2/menu1-2-2'),
      //           name: 'Menu1-2-2',
      //           meta: { title: 'Menu1-2-2' }
      //         }
      //       ]
      //     },
      //     {
      //       path: 'menu1-3',
      //       component: () => import('@/views/inv-common-data-menus/menu1/menu1-3'),
      //       name: 'Menu1-3',
      //       meta: { title: 'Menu1-3' }
      //     }
      //   ]
      // },
      {
        path: 'inv-01',
        // component: () => import('@/views/nested/menu2/index'),
        component: () => import('@/views/inv-common-data-menus/inv-01/index'),
        name: 'Inv-menu-01',
        meta: { title: 'Інвертер №1' }
      },
      {
        path: 'inv-02',
        // component: () => import('@/views/nested/menu2/index'),
        component: () => import('@/views/inv-common-data-menus/inv-02/index'),
        name: 'Inv-menu-02',
        meta: { title: 'Інвертер №2' }
      },
      {
        path: 'inv-03',
        // component: () => import('@/views/nested/menu2/index'),
        component: () => import('@/views/inv-common-data-menus/inv-03/index'),
        name: 'Inv-menu-03',
        meta: { title: 'Інвертер №3' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://energystorage.com.ua/smart-power-engineering/',
        meta: { title: 'сайт SPE', icon: 'link' }
      }
    ]
  },
  // {
  //   path: '/login',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'user',
  //       name: 'logout',        
  //       //logout(),
  //       path: '/vue-admin-template/user/logout',
  //       //component: () => import('@/views/login/index'),
  //       meta: { title: 'Log Out', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const role = roles()
console.log('role: ' + role)

const router = createRouter()

// router.beforeEach(() => {
//   // console.log(store.getters.username)
//   role = store.getters.role
// }
// )

// const role = this.$store.user.state.role

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export function roles(){
  const userStore =  store
}



// router.beforeEach(async (to, from, next) => {
//   // const store = await import('@/store')  //await the store 
//   const role = store  //store with namespaced modules
// }
// )



// console.log(store.getters.username)

export default router 
// export default {
//   router 
// }





// export default {
//   router,
//   computed: {
//     username() {
//       return this.$store.user.state.username
//     }
//   }
// } 
