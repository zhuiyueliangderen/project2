import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    /* { path: '/',name: 'HelloWorld',component: HelloWorld}, */
    {path: '/', redirect: '/Home'},
    {path: '/Home', component: Home}
  ]
})
