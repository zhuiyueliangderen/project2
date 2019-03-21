<template>
  <div id="app">
    <!--占位符用来显示其他组件-->
    <router-view/>
    <!--添加公共组件tabbar-->
    <nav class="mui-bar mui-bar-tab" v-if="footerShow">
      <router-link to="/Home" class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/Mycart" class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">{{$store.getters.getCartCount}}
          </span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <!--<router-link to="/Login" class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>-->
      <a class="mui-tab-item" href="#tabbar-with-map" @click="jumpMy">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      footerShow: true
    }
  },
  watch: {
    $route(to,from) {
      if (this.$route.path === '/Login' || '/Register') {
        this.footerShow = false;
      } else {
        this.footerShow = true;
      }
      if (this.$route.path === '/' || this.$route.path === '/Mycart'||this.$route.path === '/Home') {
        this.footerShow = true;
      }
    }
  },
  methods:{
    jumpMy(e){
      e.preventDefault();
      this.$router.push("/Login");
    }
  }
}
</script>

<style>
body,html{
  height: 100%;
}
html{
  font-size: 14px;
  color: #ccc;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
}
/* #app .mui-bar .mui-bar-tab{
   z-index: 100;
}*/
.mui-bar-tab .mui-tab-item-tao.mui-active {
    color: #007aff;
 }
.mui-bar-tab .mui-tab-item-tao {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-tao .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-tao .mui-icon.mui-tab-label {
   font-size:11px;
   display:block;
   overflow:hidden;
   text-overflow:ellipsis;
}
</style>
