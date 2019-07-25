<template>
    <div class="box">
        <div class="close">
            <div @click="fun()">×</div>
        </div>
        <div class="login">
            <span class="spancs">找回密码</span>
            <div class="divcs">
                <span class="dscs top">
                    <input id="phoneId" :class="dool ? 'usercss': 'usercss xiahuared'" type="text" name="username" placeholder="请输入用户名" v-model="loginname" @blur="fun2()">
                    <!-- <span class="uscs">{{y}}</span> -->
                </span>
                <span class="dscs">
                    <input class="usercs" type="email" placeholder="请输入邮箱账号" name="useremail" v-model="loginemail">
                    <input class="inios" type="button" value="获取验证码" @click="fun3()">
                </span>

                <span class="dscs top">
                    <input class="usercss" type="number" placeholder="请输入邮箱验证码" v-model="logincode">
                </span>
                <span class="dscs">
                    <input class="usercs" type="password" name="password" placeholder="请输入您的新密码" v-model="loginpwd">
                    <input type="submit" :disabled="btnbooll" :class="btnbooll ? 'inios inss' : 'inios'"  @click="onlogin()" value="修改密码">
                </span>
            </div>

            <div class="main">
                <span @click="fun4()">
                    <!-- <a href="#denglu"> -->
                        账号登录
                    <!-- </a> -->
                </span>
                <span @click="fun5()">
                    返回首页
                </span>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            loginname:"",//注册页面用户名//判断输入框的值是否符合用户名规则
            loginpwd:"",//密码
            loginemail:"",//邮箱
            logincode:"",//输入的验证码
            emailcode:"",//邮箱的验证码
            
            dool:true,//判断是否符合用户名规则的真假
            btnbooll:true,//判断输入框内是否有值的真假
            y:''//异步判断注册的用户名是否已存在
        }
    },
    methods:{
        
        fun(){//编程式跳转
            this.$router.push({
                path: "/user",
            });
        },
        fun2(){//判断用户名规则合法，，，同时异步检测用户名是否存在
            var a=/^[a-zA-Z_][a-zA-Z0-9_]{5,15}$/
            if(a.test(this.loginname)==true&&this.loginname!=""){
                this.namecode="1";
                this.dool=true;
                this.axios({
                    url:"http://39.107.105.57:8084/user/findUser",
                    method:"get",
                    data:{
                        username:this.loginname
                    }
                }).then((ok)=>{
                    // console.log(ok);
                })
            }else{
                alert("该用户名尚未注册")
                this.namecode="0";
                this.dool=false;
            }
        },
        fun3(){
            this.axios({
                url:"http://39.107.105.57:8084/user/findUserByName",
                method:"post",
                params:{
                    username:this.loginname,
                    useremail:this.loginemail
                }
            }).then((ok)=>{
                console.log(ok)
            })
        },
        fun4(){
            this.$router.push({
                path: "/register",
            });
        },
        fun5(){
            this.$router.push({
                path: "/home",
            });
        },
        onlogin(){//修改密码
            this.axios({
                url:"http://39.107.105.57:8084/user/uptPassWord",//post请求下地址为http:ip地址：端口号
                method:"post",
                params:{
                    code:this.logincode,
                    username:this.loginname,
                    password:this.loginpwd
                } 
            }).then((ok)=>{
                console.log(ok);
                if(ok.data.queryResult.anInt==0){
                    alert("验证码输入错误");
                }else{
                    alert("恭喜您，密码修改成功！");
                    // location.href="#denglu";
                    this.$router.push("/register");
                }
                
            })
        }
    },
    watch:{// 监听按钮
        loginname(){
            if(this.namecode=="1"&&this.loginname!=""&&this.loginpwd!=""&&this.loginemail!=""&&this.logincode!=""){
                this.btnbooll=false
            }else{
                this.btnbooll=true
            }
        },
        loginpwd(){
            if(this.namecode=="1"&&this.loginname!=""&&this.loginpwd!=""&&this.loginemail!=""&&this.logincode!=""){
                this.btnbooll=false
            }else{
                this.btnbooll=true
            }
        },
        loginemail(){
            if(this.namecode=="1"&&this.loginname!=""&&this.loginpwd!=""&&this.loginemail!=""&&this.logincode!=""){
                this.btnbooll=false
            }else{
                this.btnbooll=true
            }
        }, 
        logincode(){
            if(this.namecode=="1"&&this.loginname!=""&&this.loginpwd!=""&&this.loginemail!=""&&this.logincode!=""){
                this.btnbooll=false
            }else{
                this.btnbooll=true
            }
        }
    },
        

}
</script>
<style scoped>
.box{
    /* overflow: auto; */
    margin: 2px;
    font-size: 0.6rem;
    display: flex;
    flex-flow: wrap;
}
.login{
    display: flex;
    flex-flow: wrap;
    background: #f7f7f8;
    /* overflow: hidden; */
}
.close{
    font-size: 0.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    margin: 0;
    padding: 0;
}
.spancs{
    line-height: 0.5rem;
    height: 0.5rem;
    margin: 0;
    margin-left: 6px;
    margin-top: 0.1rem;
    padding: 0;
    font-size: 0.24rem;
}
.divcs{
    display: flex;
    flex-flow:wrap;
    justify-content: space-around;
}
.divcs .dscs{
    display: flex;
    width: 90%;
    margin: 4px;
}
.divcs .top{
    margin-top: 0.4rem;
}
.usercs{
    display: flex;
    width: 100%;
    border:0px;
    outline:0;
    margin: 6px;
    padding: 4px;
    border-bottom:1px solid hsl(240, 72%, 69%);
    background-color: #f7f7f8;
    text-align: left;
    font-size: 0.16rem;
}
.usercss{
    display: flex;
    width: 65%;
    border:0px;
    outline:0;
    margin: 6px;
    padding: 4px;
    border-bottom:1px solid #000;
    background-color: #f7f7f8;
    text-align: center;
    border-radius: 0.2rem;
    font-size: 0.16rem;
    text-shadow:gray 2px 2px 10px;
}
.inios{
    padding: 0.1rem;
    width:30%;
    background-color:sandybrown;
    color: #fff;
    border-radius: 12px;
    font-size: 0.17rem;
    outline:none;
    border:0px;
}
.inss{
    background-color:#bcbcce;
}
.main{
    display: flex;
    justify-content:space-around;
    width: 100%;
    margin-top: 0.5rem;   
    font-size: 0.2rem;
}
/* .main span{ */
   /* text-shadow:gray 2px 4px 4px; */
/* } */
.xiahua{
    border-bottom:3px solid green;
}
.xiahuared{
    border-bottom: 3px solid red;
    /* background-color:#f7f7f8; */
}

</style>
