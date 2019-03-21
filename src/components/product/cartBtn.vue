<template>
    <div class="app-cartBtn">
        <div class="cart-btn">
            <div class="my-input-number">
                <a id="icon-minus" @click="minusCount"><span class="mui-icon mui-icon-minus"></span></a>
                <span class="inputText">{{countList[index]}}</span>
                <a id="icon-plus" @click="addCount"><span class="mui-icon mui-icon-plus"></span></a>
            </div>
        </div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            id:0
        }
    },
    props: ["index","countList","pname","img_src","price","pid"],
    methods:{
        addCount (e) {
            var span=e.target.parentElement.previousElementSibling;
            span.innerHTML++;
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
                    //console.log(result);
                    this.clickShow = false;
                    Toast("添加成功！");
                    this.$store.commit('increment',this.count);
                    return;
                });
            }
        },
        minusCount (e) {
            this.id=sessionStorage.getItem("id");
            var span=e.target.parentElement.nextElementSibling;
            if (span.innerHTML > 1) {
                span.innerHTML--
                var url="http://127.0.0.1:3000/updateCart";
                this.axios.get(url,{
                    params:{
                        pid:this.pid[this.index],
                        uid:this.id
                    }
                }).then((result)=>{
                    var code=result.data.code;
                    if(code==1){
                        Toast("修改成功！");
                    }
                    this.$emit('cart_list');
                });
            } else {
                alert("确定删除吗？");
                var url="http://127.0.0.1:3000/updateCart";
                this.axios.get(url,{
                    params:{
                        pid:this.pid[this.index],
                        uid:this.id
                    }
                }).then((result)=>{
                    var code=result.data.code;
                    if(code==1){
                        Toast("删除成功！");
                    }
                    this.$emit('cart_list');
                });
                //span.innerHTML = 1
            }
        }
    },
    created(){
    }
}
</script>
<style>
    .cart-btn .my-input-number{
        position: absolute;
        width: 65px;
        bottom: 10px;
        right: 10px;
    }
    .cart-btn .my-input-number a{
        display: inline-block;
        width: 23px;
        height: 24px;
    }
    .cart-btn .my-input-number a#icon-plus{
        margin-left:-5px;
    }
    .cart-btn .my-input-number a>span{
        display: inline-block;
        width: 18px;
        height: 18px;
    }
    .cart-btn .my-input-number .inputText{
        display: inline-block;
        width: 18px;
        height: 14px;
        text-align: center;
        line-height: 14px;
        margin-left: -4px;
    } 
</style>