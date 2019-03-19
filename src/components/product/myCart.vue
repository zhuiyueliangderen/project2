<template>
    <div class="cart">
        <header>
            <h3>我的购物车</h3>
        </header>
        <div class="empty-wrap" v-if="handleShow==false">您还没有添加任何商品哦~</div>
        <main class="cart-body" v-if="handleShow==true">
            <div class="wrap">
                <ul class="goods-wrap">
                    <li class="cartGoodsItem" v-for="tmp of cartList">
                        <div class="cart-one-item">
                            <div class="item-left">
                                <img :src="'/static/'+tmp.pic_href">
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
                                <div class="cart-btn">
                                    <div class="my-input-number">
                                        <a id="icon-minus" @click="minusCount"><span class="mui-icon mui-icon-minus"></span></a>
                                        <span class="inputText">{{count}}</span>
                                        <a id="icon-plus" @click="addCount"><span class="mui-icon mui-icon-plus"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>
<script>

export default {
    data () {
        return {
            count: 1,
            id: 0,
            cartList: [],
            handleShow: true
        }
    },
    created (){
        this.cart_list();
    },
    methods: {
        addCount () {
            this.count++
        },
        minusCount () {
            if (this.count > 1) {
                this.count--
            } else {
                this.count = 1
            }
        },
        cart_list () {
            //console.log(1111);
            this.id=sessionStorage.getItem("id");
            //console.log(this.id);
            if(this.id){
                this.handleShow=true;
                var url="http://127.0.0.1:3000/cartList?uid="+this.id;
                this.axios.get(url).then((result)=>{
                    this.cartList=result.data.data;
                    console.log(this.cartList);
                });
            }else{
                this.handleShow=false;
            }
        }
    }
}
</script>
<style>
    .cart{
        background-color: #fff;
        height: 100%;
    }
    header{
        position: fixed;
        top: 0;
        left: 0;
        text-align: center;
        width: 100%;
        border-bottom: 1px solid #eee;
        background-color: #fff;
        z-index: 999;
        
    }
    header h3{
        font-size: 20px;
        margin: 0;
        height: 40px;
        line-height: 40px;
    }
    .empty-wrap{
        position: absolute;
        top:40%;
        width: 100%;
        height: 50px;
        line-height: 50px;
    }
    .cart-body{
        padding: 40px 0 100px 0;
        background-color: #f5f5f5;
    }
    .cart-body .wrap{
        padding-top:10px;
    }
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li{
        list-style-type: none;
    }
    .cart-one-item{
        height: 130px;
        width: 100%;
        border-bottom: 1px solid #e4e7ed;
        background-color: #fff;
    }
    .cart-one-item>div{
        font-size: 14px;
        display: inline-block;
        vertical-align: middle;
    }
    .cart-one-item .item-left{
        width: 40%;
        height: 100%;
        margin-left: -4px;
    }
    .cart-one-item .item-left img{
        height: 80%;
        transform: translateY(10%);
    }
    .cart-one-item .item-right{
        box-sizing: border-box;
        position: relative;
        height: 100%;
        width: 60%;
        text-align: left;
        padding-left: 10px;
    }
    .cart-one-item .item-right .item-text{
        position: absolute;
        line-height: 30px;
        top: 50%;
        transform: translateY(-50%);
    }
    .cart-one-item .item-right .item-text h3{
        font-size: 1.17em;
    }
    .cart-one-item .item-right .item-text span{
        font-size: 18px;
    }
    .cart-btn .my-input-number{
        position: absolute;
        width: 60px;
        bottom: 10px;
        right: 10px;
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