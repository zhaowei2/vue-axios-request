import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  console.log('2222222')
  if (to.matched.some(r => r.meta.requireAuth)) {   //这里的requireAuth为路由中定义的 meta:{requireAuth:true}，意思为：该路由添加该字段，表示进入该路由需要登陆的
  if (store.state.token) {
    next();
  }
  else {
  next({
  path: '/login',
  query: {redirect: to.fullPath}
  })
  }
  }
  else {
  next();
  }
  })
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
