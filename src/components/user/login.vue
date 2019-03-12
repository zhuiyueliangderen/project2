<template>
    <div class="app-login">
        <header>
            <a><span class="mui-icon mui-icon-arrowleft"></span></a>
            <h3>
                登录
            </h3>
        </header>
        <main>
            <div class="login">
                <form class="el-form">
                    <div class="el-form-item">
                        <span>用户名：</span>
                        <input type="text" placeholder="请输入3-12位字符">
                    </div>
                    <div class="el-form-item">
                        <span>密码：</span>
                        <input type="password" placeholder="请输入6位字符">
                    </div>
                    <div class="el-form-item">
                        <span class="account">没有账号？</span>
                        <a>立即注册</a>
                    </div>
                    <div class="el-form-item">
                        <button>登录</button>
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
<style>
    #app .app-login{
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
        height: 300px;
        top: 30%;
        left: 10%;
    }
    main .login form .el-form-item span{
        display: inline-block;
        width: 56px;
    }
    main .login form .el-form-item input{
        width: 228px;
    }
    main .login form .el-form-item button{
        width: 200px;
        height: 40px;
        margin:50px 0 0 50px;
        background-color: #94c1ef;
    }
    main .login form .el-form-item:nth-child(3){
        text-align: right;
    }
    main .login form .el-form-item .account{
        width: 70px;
    }
</style>
