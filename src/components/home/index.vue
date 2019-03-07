<template>
  <div class="app-index">
    <header class="index-header">
      <h4 class="top-text">一小时达</h4>
      <div class="tap-menu">
        <span class="nav-left" @click="btn_left"></span>
        <ul class="nav-wrap" :style="{ marginLeft: marginLeft + 'px'}" @click="nav_show">
          <li class="nav_show">全部</li>
          <li>水果</li>
          <li>蔬菜</li>
          <li>肉蛋</li>
          <li>速冻</li>
          <li>酒饮</li>
          <li>乳品</li>
          <li>零食</li>
        </ul>
        <span class="nav-right" @click="btn_right">></span>
      </div>
    </header>
    <ul class="index-main">
      <li class="main-item">
        <div class="item-container">
          <div class="item-left">
            <img src="../../../static/img/apple.png" />
          </div>
          <div class="item-right">
            <div class="item-text">
              <h3>这是水果1</h3>
              <p>这是水果介绍</p>
              <div>
                &yen;
                <span>18</span>
              </div>
            </div>
            <div class="cart-btn">
              <button class="el-button" v-if="clickShow==true" @click="handleShow">
                <a><span class="mui-icon-extra mui-icon-extra-cart"></span></a>
              </button>
              <div class="my-input-number" v-if="clickShow==false">
                <a id="icon-minus" @click="minusCount"><span class="mui-icon mui-icon-minus"></span></a>
                <span class="inputText" v-text="count">{{count}}</span>
                <a id="icon-plus" @click="addCount"><span class="mui-icon mui-icon-plus"></span></a>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      moved: 0,
      marginLeft: -27,
      clickShow: true,
      count: 1
    }
  },
  methods: {
    btn_left () {
      if (this.moved > 0) {
        this.moved--
      } else {
        this.moved = 0
      }
      this.marginLeft = -70 * this.moved - 27
    },
    btn_right () {
      if (this.moved < 3) {
        this.moved++
      } else {
        this.moved = 3
      }
      this.marginLeft = -70 * this.moved - 27
    },
    nav_show (e) {
      var lis = e.target.parentElement.children
      for (var li of lis) {
        li.className = ''
      }
      e.target.className = 'nav_show'
    },
    handleShow () {
      if (this.clickShow === true) {
        this.clickShow = false
      } else {
        this.clickShow = true
      }
    },
    addCount () {
      this.count++
      console.log(this.count)
    },
    minusCount () {
      if (this.count > 1) {
        this.count--
      } else {
        this.count = 1
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .app-index{
    position: relative;
    top: -60px;
    left:0;
  }
  .index-header{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #fff;
    z-index: 100
  }
  .index-header .top-text{
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    color: #2c3e50;
  }
  .index-header .tap-menu{
    height: 39px;
    width: 100%;
    position: relative;
    border: 1px solid #dcdfe6;
    background: transparent;
    background-color: #f5f7fa;
    border-bottom: 1px solid #e4e7ed;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.12);
  }
  .index-header .tap-menu .nav-left,.index-header .tap-menu .nav-right{
    display: inline-block;
    width: 12px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    background: #ffa;
  }
  .index-header .tap-menu .nav-right{
    left: 363px;
  }
  .index-header .tap-menu .nav-wrap{
    width: 600px;
    height: 39px;
    margin:0 0 0 -27px;
    float: left;
    white-space: nowrap;
    overflow: hidden;
  }
  .index-header .tap-menu .nav-wrap .tt{
    margin-left: -54px;
  }
  .index-header .tap-menu .nav-wrap li{
    height: 40px;
    width: 70px;
    float: left;
    padding: 0 20px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 500;
    list-style: none;
    font-size: 14px;
    color: #909399;
  }
  .index-header .tap-menu .nav-wrap li.nav_show{
    background: #fff;
    color: #409eff;
    border: 1px solid #dcdfe6;
    border-width: 0 1px 0 1px;
    transition: all 0.3s;
  }
  .index-main{
    width: 100%;
    overflow-x: hidden;
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
    top: 95px;
  }
  .index-main .main-item{
    width: 100%;
  }
  .index-main .main-item .item-container{
    height: 130px;
    width: 100%;
    border-bottom: 1px solid #e4e7ed;
    background-color: #fff;
  }
  .index-main .main-item .item-container .item-left{
    display: inline-block;
    vertical-align: center;
    width: 40%;
    height: 100%;
    float: left;
  }
  .index-main .main-item .item-container .item-left img{
    height: 80%;
    transform: translateY(10%);
  }
  .index-main .main-item .item-container .item-right{
    height: 100%;
    width: 60%;
    text-align: left;
    padding-left: 10px;
    font-size: 14px;
    display: inline-block;
    vertical-align: middle;
    position: relative;
  }
  .index-main .main-item .item-container .item-right .item-text{
    position: absolute;
    line-height: 30px;
    top :10%;
  }
  .index-main .main-item .item-container .item-right .item-text h3{
    font-size: 16px;
  }
  .index-main .main-item .item-container .item-right .item-text p{
    color: #2c3e50;
  }
  .index-main .main-item .item-container .item-right .item-text>div>span{
    font-size: 18px;
    color: #409eff;
    font-weight: 600;
  }
  .index-main .main-item .item-container .item-right .cart-btn{
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
  .index-main .main-item .item-container .item-right .cart-btn .el-button{
    width: 55px;
    height: 55px;
    background-color: #94c1ef;
    border-color: #94c1ef;
    border-radius: 50%;
    padding: 12px;
  }
  .index-main .main-item .item-container .item-right .cart-btn .my-input-number{
    position: absolute;
    width: 60px;
    bottom: 13px;
    right: 4px;
  }
  .index-main .main-item .item-container .item-right .cart-btn .my-input-number a>span{
    display: inline-block;
    width: 18px;
    height: 18px;
  }
  .index-main .main-item .item-container .item-right .cart-btn .my-input-number .inputText{
    display: inline-block;
    width: 7px;
    height: 14px;
    text-align: center;
    line-height: 14px;
    margin-left: 5px;
  }
</style>
