// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//0.1引入vuex
import Vuex from 'vuex'
//0.2注册vuex组件
Vue.use(Vuex)
//0.3创建store
var store=new Vuex.Store({
  state:{
    cartCount:sessionStorage.getItem("cartCount")||0 //共享数据：购物车中商品数量
  },
  mutations:{
    //购物车中数据加1  点击商品详情[加入购物车]
    increment(state){
      state.cartCount++;
    },
    //显示购物车列表时
    updateCount(state,count){
      state.cartCount=count;
      sessionStorage.setItem("cartCount",count);
    }
  },
  getters:{
    //获取购物车中数量方法
    getCartCount:function(state){
      return state.cartCount
    }
  }
})
// 1.引入mint-ui样式文件
import 'mint-ui/lib/style.css'
// 2.引入mui库样式文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
// 3.引入axios库
import axios from 'axios'
Vue.config.productionTip = false
// 将axios库配置vue实例对象中
Vue.prototype.axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
