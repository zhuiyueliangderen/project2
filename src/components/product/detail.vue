<template>
    <div class="app-detail">
        <header class="dp-header">
            <a><span class="mui-icon mui-icon-arrowleft"></span></a>
            <h3>商品详情</h3>
        </header>
        <main>
            <img src="../../../static/img/apple.png" />
            <div class="goods-card">
                <h3>这是水果1</h3>
                <p>这是水果介绍</p>
                <span class="goods-price">￥18</span>
            </div>
            <div class="goods-instruction">
                <p>这是水果1的商品详细介绍</p>
                <p>这是水果1的商品详细介绍</p>
                <p>这是水果1的商品详细介绍</p>
                <p>这是水果1的商品详细介绍</p>
                <p>这是水果1的商品详细介绍</p>
            </div>
        </main>
        <footer>
            <button class="el-button">
                <a><span class="mui-icon-extra mui-icon-extra-cart"></span></a>
            </button>
            <button>加入购物车</button>
        </footer>
    </div>
</template>
<script>
import bus from '../../assets/Bus.js';
export default {
    data(){
        return {
            'text':"内容"
        }
    },
    methods: {
        
    },
    created(){
        Bus.$on("myFun",(message)=>{
            this.text=message
        });
    }
}
</script>
<style>
    .app-detail{
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
    .dp-header{
        position: relative;
        text-align: center;
        height: 50px;
        border-bottom: 1px solid #eee;
        line-height: 50px;
    }
    .dp-header a{
        display: inline-block;
        position: absolute;
        top: 0;
        left: 5px;
    }
    .dp-header h3{
        font-size: 1.17em;
        height: 50px;
        line-height: 50px;
    }
    main{
        padding-bottom: 60px;
    }
    main .goods-card{
        border: 1px solid #eee;
        margin: 0 10px;
        line-height: 40px;
    }
    main .goods-card .goods-price{
        display: block;
        height: 40px;
        line-height: 40px;
    }
    main .goods-instruction{
        margin-top: 10px;
        border: 1px solid #eee;
        padding: 10px;
        line-height: 20px;
    }
    footer{
        width: 100%;
        height: 50px;
        position: fixed;
        bottom: 0;
        left: 0;
        border-top: 1px solid #eee;
        background-color: #fff;
    }
    footer .el-button{
        width: 20%;
        position: absolute;
        left: 0;
        padding: 12px 20px;
        border: 0
    }
    footer button:last-child{
        width: 80%;
        height: 50px;
        position: absolute;
        right: 0;
        background-color: #94c1ef;
        color: #fff;
    }
</style>