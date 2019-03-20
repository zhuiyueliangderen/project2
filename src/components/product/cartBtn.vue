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
export default {
    data(){
        return {
            //count: 1
        }
    },
    props: ["index","countList"],
    methods:{
        addCount (e) {
            var span=e.target.parentElement.previousElementSibling;
            span.innerHTML++;
        },
        minusCount (e) {
            var span=e.target.parentElement.nextElementSibling;
            if (span.innerHTML > 1) {
                span.innerHTML--
                
            } else {
                span.innerHTML = 1
            }
        }
    },
    created(){
        //this.count=countList[index];
        //console.log(this.index);
        //console.log(this.countList);
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