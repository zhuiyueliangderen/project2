// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 1.引入mint-ui样式文件
import 'mint-ui/lib/style.css'
// 2.引入mui库样式文件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
// 3.引入axios库
import axios from 'axios'
Vue.config.productionTip = false
// 将axios库配置vue实例对象中
Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
