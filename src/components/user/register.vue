<template>
    <div class="app-register">
        <header>
            <a><span class="mui-icon mui-icon-arrowleft"></span></a>
            <h3>
                注册
            </h3>
        </header>
        <main>
            <div class="register">
                <form class="el-form">
                    <div class="el-form-item">
                        <span>用户名</span>
                        <input type="text" placeholder="请输入3-12位字符"/>
                    </div>
                    <div class="el-form-item">
                        <span>密码：</span>
                        <input type="password" placeholder="请输入6位字符">
                    </div>
                    <div class="el-form-item">
                        <span>确认密码：</span>
                        <input type="password" placeholder="请再次输入密码">
                    </div>
                    <div class="el-form-item">
                        <span>手机号码：</span>
                        <input type="password" placeholder="请输入手机号码">
                    </div>
                    <div class="el-form-item">
                        <span class="account">已有账号？</span>
                        <router-link to="/Login">立即登录</router-link>
                    </div>
                    <div class="el-form-item">
                        <button>注册</button>
                    </div>
                </form>
            </div>
        </main>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="">
    #app .app-register{
        position: relative;
        width: 100%;
        min-height: 617px;
    }
    header{
        position: relative;
        height: 50px;
        line-height: 50px;
    }
    header a{
        position: absolute;
        left:0
    }
    header h3{
        position: absolute;
        height: 50px;
        line-height: 50px;
        left: 45%;
        top: 0;
        margin: 0
    }
    main{
        position: absolute;
        width: 80%;
        height: 330px;
        top: 20%;
        left: 10%;
    }
    main .register form .el-form-item span{
        display: inline-block;
        width: 70px;
    }
    main .register form div input{
        width: 214px;
    }
    main .register form .el-form-item:nth-child(5){
        text-align: right;
    }
    main .register form .el-form-item button{
        width: 200px;
        height: 40px;
        margin:50px 0 0 58px;
        background-color: #94c1ef;
    }
</style>
