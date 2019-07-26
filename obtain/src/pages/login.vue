<template>
    <div class="box">
        <div class="close"> 
            <div @click="fun()">×</div>
        </div>
        <div v-if="loading"><img class="boximg" src="../../static/tu/user/loading.gif" alt=""></div>
        <div v-else>
            <div class="login">
                <span class="spancs">用户名注册</span>
                <div class="divcs">
                    <div class="dscs top">
                        <input id="phoneId" :class="dool ? 'usercss': 'usercss xiahuared'" type="text" name="username" placeholder="用户名为6-16位，以字母开头" v-model="loginname" @blur="fun2()">
                    </div>
                    <div class="dscs">
                        <input class="usercss" type="password" name="password" placeholder="请输入密码" v-model="loginpwd">
                    </div>

                    <span class="dscss top">
                        <input class="usercs" type="email" placeholder="请输入邮箱账号" name="useremail" v-model="loginemail">
                        <input class="inios" type="button" value="获取验证码" @click="fun3()">
                    </span>

                    <span class="dscss">
                        <input class="usercs" type="number" placeholder="请输入验证码" v-model="logincode"> 
                        <!-- <input class="ins" type="submit" value="点击注册"> -->
                        <input type="submit" :disabled="btnbooll" :class="btnbooll ? 'inios inss' : 'inios'"  @click="onlogin()" value="请点击注册">
                    </span>
                </div>

                <div class="main">
                    <span @click="fun4()">
                        <!-- <a href="#denglu"> -->
                            账号登录
                        <!-- </a> -->
                    </span>
                    <span @click="fun5()">忘记密码？</span>
                </div>
            </div>
            <div class="footer">
                <p>点击按钮即表示您同意并愿意遵守知书</p>
                <p>
                    <a href="##">《使用协议》</a>和<a href="##">《隐私协议》</a>
                </p>
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
            loading:true,
            y:''//异步判断注册的用户名是否已存在
        }
    },
    created(){
        let that=this
        setTimeout(function(){
            that.loading=false
        },500)
    },
    methods: {
        fun(){//编程式跳转
            this.$router.push({
                path: "/user",
            });
        },
        fun2(){//判断用户名规则合法，，，同时异步检测用户名是否存在
            
            var a=/^[a-zA-Z_][a-zA-Z0-9_]{5,15}$/
            if(a.test(this.loginname)==true){
                this.namecode="1";
                this.dool=true;  
            }else{
                this.namecode="0";
                this.dool=false;
            }
            if(this.loginname!=""){
                // console.log(this.loginname)
                this.axios({
                    url:"http://39.107.105.57:8084/user/findUser",//检测用户名是否存在接口
                    method:"get",
                    params:{
                        username:this.loginname
                    }
                }).then((ok)=>{
                    console.log("123")
                    console.log(ok);
                    if(ok.data.queryResult.anInt=="1"){
                        let red=document.querySelector("#phoneId")
                        red.style.borderBottom="3px solid red"
                        this.$toast.fail("账户已存在")
                    }else{
                        let red=document.querySelector("#phoneId")
                        red.style.borderBottom=""
                    }
                })
            }
        },
        fun3(){
            var b=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
            if(this.loginemail==""){
                this.$toast.fail("请输入邮箱");
            }else if(!b.test(this.loginemail)){
                this.$toast.fail("请正确输入");
            }else{
            this.axios({
                url:"http://39.107.105.57:8084/user/registerUser",
                method:"post",
                params:{
                    username:this.loginname,
                    password:this.loginpwd,
                    useremail:this.loginemail
                }
            }).then((ok)=>{
                console.log(ok)
            })
            }
        },
        fun4(){
            this.$router.push({
                path: "/register",
            });
        },
        fun5(){
            this.$router.push({
                path: "/forget",
            });
        },
        onlogin(){//用户注册
            this.axios({
                url:"http://39.107.105.57:8084/user/checkCode",//post请求下地址为http:ip地址：端口号
                method:"post",
                params:{
                    code:this.logincode
                } 
            }).then((ok)=>{
                console.log(ok);
                console.log(ok.data)
                if(ok.data.message=="code查询到用户，修改status为1，注册成功"){
                    this.$toast.success("注册成功，请登录！");
                    let ls = localStorage;
                    ls.setItem("用户名",this.loginname)
                    // location.href="#denglu";
                    this.$router.push("/register");
                }else{
                    this.$toast.success("注册失败，请重新注册！");
                    this.loginname = "";
                    this.loginpwd = "";
                    this.loginemail = "";
                }
                
                
            },(err)=>{
                console.log(err)
            })
        },
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
.boximg{
    width: 100%;
}
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
    justify-content: space-around;
    width: 100%; 
    margin: 4px;
}
.divcs .dscss{
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 4px;
}
.divcs .top{
    margin-top: 0.3rem;
}
.usercs{
    display: flex;
    width: 60%;
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
    width: 80%;
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
    width:40%;
    padding: 0.1rem;
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
    margin-top: 0.4rem;  
    margin-bottom: 0.4rem; 
    font-size: 0.2rem;
}
/* .main span{ */
   /* text-shadow:gray 2px 4px 4px; */
/* } */
.footer{
    background: #f7f7f8;
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
    text-align: center;
    font-size: 0.15rem;
}
.footer p{
    margin-bottom:10px;
}
.xiahua{
    border-bottom:3px solid green;
}
.xiahuared{
    border-bottom: 3px solid red;
    /* background-color:#f7f7f8; */
}
</style>
