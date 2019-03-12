<template>
    <div class="cart">
        <header>
            <h3>我的购物车</h3>
        </header>
        <div class="empty-wrap">您还没有添加任何商品哦~</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    header{
        position: fixed;
        top: 0;
        left: 0;
        text-align: center;
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #eee;
        background-color: #fff;
        z-index: 999;
        font-size: 14px;
    }
</style>