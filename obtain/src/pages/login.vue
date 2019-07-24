<template>
    <div class="box">
        <div class="close">
            <div @click="fun()">×</div>
        </div>
        <div class="login">
            <div id="zhuce">
                <span class="spancs">用户名注册</span>
                <div class="divcs">
                    <div class="dscs1">
                        <input id="phoneId" :class="dool ? 'usercs': 'usercs xiahuared'" type="text" name="username" placeholder="用户名为6-16位，以字母开头" v-model="loginname" @blur="fun2()">

                        <input class="passcs" type="password" name="password" placeholder="请输入密码" v-model="loginpwd">
                    </div>

                    <span class="dscs">
                        <input class="inios" type="email" placeholder="请输入邮箱账号" name="useremail" v-model="loginemail">
                        <input class="in" type="button" value="获取验证码" @click="fun3()">
                    </span>

                    <span class="dscs">
                        <input class="inios" type="number" placeholder="请输入验证码" v-model="logincode"> 
                        <!-- <input class="ins" type="submit" value="点击注册"> -->
                        <button  :disabled="btnbooll" :class="btnbooll ? 'ins inss' : 'ins'"  @click="onlogin()" >点击注册</button>
                    </span>
                </div>

                <div class="main">
                    <span @click="fun4()">
                        <!-- <a href="#denglu"> -->
                            账号登录
                        <!-- </a> -->
                    </span>
                    <span><a href="##">忘记密码？</a></span>
                </div>
            </div>
        </div>
        <div class="footer">
            <p>点击按钮即表示您同意并愿意遵守知书</p>
            <p>
                <a href="">《使用协议》</a>和<a href="">《隐私协议》</a>
            </p>
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
        }
    },
    methods: {
        fun(){//编程式跳转
            this.$router.push({
                path: "/user",
            });
        },
        fun2(){//判断用户名规则合法
            var a=/^[a-zA-Z_][a-zA-Z0-9_]{5,15}$/
            if(a.test(this.loginname)==true){
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
                this.namecode="0";
                this.dool=false;
            }
        },
        fun3(){
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
        },
        fun4(){
            this.$router.push({
                path: "/register",
            });
        },
        onlogin(){//用户注册
            this.axios({
                url:"http://39.107.105.57:8084/user/checkCode",//post请求下地址为http:ip地址：端口号
                method:"post",
                params:{
                    code:this.logincode
                } // post发送数据的时候使用data属性
            }).then((ok)=>{
                console.log(ok);
                console.log(ok.data)
                if(ok.data.message=="code查询到用户，修改status为1，注册成功"){
                    alert("注册成功，请登录！");
                    let ls = localStorage;
                    ls.setItem("用户名",this.loginname)
                    // location.href="#denglu";
                    this.$router.push("/register");
                }else{
                    alert("注册失败，请重新注册！");
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
.box{
    /* overflow: auto; */
    margin: 2px;
}
.close{
    font-size: 40px;
    height: 0.3rem;
    margin: 0;
    padding: 0;
}
.close div{
    padding-left: 10px;
    line-height: 0.3rem;
    width: 0.5rem;
    height: 0.3rem;
}
.login{
    background: #f7f7f8;
    height: 4.6rem;
    /* overflow: hidden; */
}
#zhuce,#denglu{
    height: 4.6rem;
}
.spancs{
    line-height: 1rem;
    height: 1rem;
    margin: 0;
    margin-left: 4px;
    padding: 0;
    font-size: 28px;
    text-shadow:gray 2px 2px 6px;
}
.divcs{
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
}
.divcs .dscs1{
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
}
.divcs .dscs{
    width: 80%;
    display: flex;
    margin: 4px;
}
.usercs,.passcs{
    text-shadow:gray 6px 6px 10px;
    /* box-shadow:4px 4px 10px gray;    */
    background-color:#f7f7f8;
    border-radius: 16px;
    border:0px;
    border-bottom:1px solid #000;   
    outline:0;
    height: 0.2rem;
    width: 80%;
    margin:10px 20px;
    padding:6px;
    text-align: center;
/* -webkit-appearance:none;
  -moz-appearance: none; */
}
.usercs{
    margin-top: 40px;
}
.passcs{
    margin-bottom:40px;
}
.inios{
    width: 70%;
    border:0px;
    outline:0;
    border-bottom:1px solid #000;
    margin: 6px;
    padding: 4px;
    background-color: #f7f7f8;
}
.in{
    width:30%;
    height: 0.3rem;
    background-color:sandybrown;
    color: #fff;
    border-radius: 12px;
}
.ins{
    width: 30%;
    height: 0.4rem;
    background-color:sandybrown;
    color: #fff;
    border-radius: 12px;
}
.inss{
    background-color:#bcbcce;
}
.ins-i{
    width:100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin: 20px 0;
}
.ins-1{
    margin-top: 16px;
    width: 70%;
    outline:0;
    height: 0.4rem;
    background-color:sandybrown;
    color: rgb(255, 249, 249);
    border-radius: 12px;
    font-size: 16px;
}
.ins-2{
    background-color:#bcbcce;
}
.main{
    margin-top: 40px;   
    font-size: 16px;
    display: flex;
    justify-content: space-around;
}
/* .main span{ */
   /* text-shadow:gray 2px 4px 4px; */
/* } */
.footer{
    background: #f7f7f8;
    display: flex;
    flex-flow: column;
    text-align: center;
    font-size: 12px;
}
.footer p{
    margin-bottom:10px;
}
.xiahua{
    border-bottom:3px solid green;
}
.xiahuared{
    border-bottom: 5px solid red;
}
</style>
