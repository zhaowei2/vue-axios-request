import Vue from 'vue'
import Router from 'vue-router'
import store from './../store/index'
Vue.use(Router)
if(sessionStorage.getItem('token')){
  console.log(111)
  store.commit('set_token', sessionStorage.getItem('token'))
}
const constantRouterMap = [
    {
        path: '/',
        redirect: '/login',
        hidden: true
    },
    { // 登录模块
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/views/login'),
        hidden: true
    },{
      path:'/layout/home',
      name: 'home',
      component:()=>import ('@/views/HelloWorld')
    }
]
export default new Router({
    routes:constantRouterMap
})