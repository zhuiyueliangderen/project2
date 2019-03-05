<template>
  <div class="app-index">
    <header class="index-header">
      <h4 class="top-text">一小时达</h4>
      <div class="tap-menu">
        <span class="nav-left" @click="btn_left"></span>
        <ul class="nav-wrap" ref="UL" :style='{margin-left:marginLeft+'px'}'>
          <li>全部</li>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      moved: 0,
      marginLeft: -27
    }
  },
  methods: {
    btn_left () {
    },
    btn_right () {
      console.log(111)
      this.moved++
      console.log(this.moved)
      this.marginLeft = -70 * this.moved - 27
      // console.log(this.$refs.UL.style.marginLeft)
      // this.$refs.UL.style.marginLeft = -70 * this.moved - 27
      // console.log(this.$refs.UL.style.marginLeft)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-header{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #fff;
  }
  .index-header .top-text{
    height: 45px;
    line-height: 45px;
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
    color: #2c3e50;
  }
</style>
