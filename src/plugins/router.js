import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
const Login = () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue')
const About = () => import(/* webpackChunkName: "About" */ '@/views/About.vue')
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },{
      path: '/about',
      name: 'about',
      component: About,
      meta: { requiresAuth: true },
    },
  ]
})
// 判断是否需要登录
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.login) {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

export default router