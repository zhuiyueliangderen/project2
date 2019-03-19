<template>
  <div class="app-index">
    <header class="index-header">
      <h4 class="top-text">一小时达</h4>
      <div class="tap-menu">
        <span class="nav-left" @click="btn_left">
          <a><span class="mui-icon mui-icon-arrowleft"></span></a>
        </span>
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
        <span class="nav-right" @click="btn_right">
          <a><span class="mui-icon mui-icon-arrowright"></span></a>
        </span>
      </div>
    </header>
    <ul class="index-main">
      <li class="main-item" v-for="(tmp,index) in myList2" :key="index">
        <div class="item-container">
          <div class="item-left">
            <img :src="'/static/' + tmp.pic_href" ref="pic">
          </div>
          <div class="item-right">
            <div class="item-text">
              <h3>{{tmp.pname}}</h3>
              <p>这是水果介绍</p>
              <div>
                &yen;
                <span>{{tmp.price}}</span>
              </div>
            </div>
            <btn-box :pname="pname" :index="index" :img_src="img_src" :price="price" :pid="pid"></btn-box>
          </div>
        </div>
      </li>
    </ul>
    <p>没有更多商品了，敬请期待！</p>
  </div>
</template>

<script>
// 注册子组件右侧button部分
import btn from './indexBtn.vue'
export default {
  data () {
    return {
      moved: 0,
      marginLeft: -27,
      myList: [],
      myList2: [],
      type: '',
      /*父组件传递给子组件的值  产品名称，图片地址，价格，产品编号，对应的下标 */
      pname: [],
      index: 0,
      img_src: [],
      price:[],
      pid:[]
    }
  },
  components: {
    'btn-box': btn
  },
  created () {
    this.getproList();
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
    getproList () {
      var url = 'http://127.0.0.1:3000/product_list'
      this.axios.get(url).then((result) => {
        this.myList = result.data.result
        this.myList2 = this.myList
        for(var i=0;i<this.myList2.length;i++){
          this.pname.push(this.myList2[i].pname);
          this.img_src.push(this.myList2[i].pic_href);
          this.price.push(this.myList2[i].price);
          this.pid.push(this.myList2[i].pid);
        }
      })
    },
    nav_show (e) {
      var lis = e.target.parentElement.children
      for (var li of lis) {
        li.className = ''
      }
      e.target.className = 'nav_show'
      this.type = e.target.innerHTML
      if (this.type === '全部') {
        this.myList2 = this.myList
      } else {
        this.myList2 = []
        for (var item of this.myList) {
          if (this.type === item.type) {
            this.myList2.push(item)
          }
        }
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .app-index{
    position: relative;
    left:0;
    min-height: 1945px;
  }
  .index-header{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #fff;
    z-index: 100;
    min-height: 94px
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
    background: #f5f7fa;
  }
  .index-header .tap-menu .nav-left a span.mui-icon,.index-header .tap-menu .nav-right a span.mui-icon{
    width: 10px;
    margin-left:-15px;
  }
  .index-header .tap-menu .nav-right{
    left: 348px;
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
    min-height: 1900px;
    overflow-x: hidden;
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
    top: 95px;
    overflow-y: scroll;
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
  .app-index>p{
    margin: 0 auto;
    text-align: center;
    position: absolute;
    left: 30%;
    bottom: 0;
  }
</style>
