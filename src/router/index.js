import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/index.vue'
import Login from '@/components/user/login.vue'
import Register from '@/components/user/register.vue'
import Detail from '@/components/product/detail.vue'
import Mycart from '@/components/product/myCart.vue';
Vue.use(Router)

export default new Router({
  routes: [
    /* { path: '/',name: 'HelloWorld',component: HelloWorld}, */
    {path: '/', redirect: '/Home'},
    {path: '/Home', component: Home},
    {path: '/Login', component: Login},
    {path: '/Register', component: Register},
    {path: '/Detail', component: Detail},
    {path: '/Mycart', component: Mycart}
  ]
})
