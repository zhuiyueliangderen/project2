<template>
    <!--首页右侧的购物车按钮部分-->
    <div class="app-indexBtn">
        <div class="cart-btn">
            <button class="el-button" v-if="clickShow==true" @click="handleShow()">
                <a><span class="mui-icon-extra mui-icon-extra-cart"></span></a>
            </button>
            <div class="my-input-number" v-if="clickShow==false">
                <a id="icon-minus" @click="minusCount"><span class="mui-icon mui-icon-minus"></span></a>
                <span class="inputText" v-text="count">{{count}}</span>
                <a id="icon-plus" @click="addCount"><span class="mui-icon mui-icon-plus"></span></a>
            </div>
        </div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data () {
        return {
            clickShow: true,
            count: 1,
            id:0
        }
    },
    props:["pname","index","img_src","price","pid"],
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
        handleShow (e) {
            this.id=sessionStorage.getItem("id");
            if(this.id){
                var url="http://127.0.0.1:3000/addcart";
                this.axios.get(url,
                {
                    params:{
                        pid:this.pid[this.index],
                        pname:this.pname[this.index],
                        pic_href:this.img_src[this.index],
                        price:this.price[this.index],
                        count:1,
                        uid:this.id
                    }
                }).then((result)=>{
                    console.log(result);
                    this.clickShow = false;
                    Toast("添加成功！");
                    this.$store.commit('increment',this.count);
                    return;
                });
            }else{
                Toast("请先登录！");
                this.clickShow = true;
                return;
            }                     
        },
        addCount () {
            this.count++;
            //this.$store.commit('increment',this.count);
            this.handleShow();
        },
        minusCount () {
            if (this.count > 1) {
                this.count--;
                var url="http://127.0.0.1:3000/updateCart";
                this.axios.get(url,{
                    params:{
                        pid:this.pid[this.index],
                        uid:this.id
                    }
                }).then((result)=>{
                    console.log(result);
                });
                //this.handleShow();
            } else {
                this.count = 1
            }
        }
    }
}
</script>
<style>
   .cart-btn{
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
  .cart-btn .el-button{
    width: 55px;
    height: 55px;
    background-color: #94c1ef;
    border-color: #94c1ef;
    border-radius: 50%;
    padding: 12px;
  }
  .cart-btn .my-input-number{
    position: absolute;
    width: 60px;
    bottom: 13px;
    right: 4px;
  }
  .cart-btn .my-input-number a>span{
    display: inline-block;
    width: 18px;
    height: 18px;
  }
  .cart-btn .my-input-number .inputText{
    display: inline-block;
    width: 7px;
    height: 14px;
    text-align: center;
    line-height: 14px;
    margin-left: 5px;
  } 
</style>