<template>
    <div class="box">
        <div class="close">
            <div @click="fun()">×</div>
        </div>
        <div class="login">
            <div id="zhuce">
                <span class="spancs">用户名注册</span>
                <div class="divcs">
                    <input id="phoneId" :class="dool ? 'usercs': 'usercs xiahuared'" type="text" name="username" placeholder="用户名为6-16位，以字母开头" v-model="loginname" @mouseleave="fun2()">

                    <input class="passcs" type="password" name="password" placeholder="请输入密码" v-model="loginpwd">

                    <span>
                        <input class="inios" type="email" placeholder="请输入邮箱账号" name="useremail" v-model="loginemail">
                        <input class="in" type="submit" value="获取验证码">
                    </span>

                    <span>
                        <input class="inios" type="number" placeholder="请输入验证码" v-model="logincode"> 
                        <!-- <input class="ins" type="submit" value="点击注册"> -->
                        <button  :disabled="btnbooll" :class="btnbooll ? 'ins inss' : 'ins'"  @ckick="onlogin()" >点击注册</button>
                    </span>
                </div>

                <div class="main">
                    <span><a href="#denglu">账号登录</a></span>
                    <span><a href="##">忘记密码？</a></span>
                </div>
            </div>
            <div id="denglu">
                <span class="spancs">用户名登录</span>
                <div  class="divcs">
                    <input id="userId" :class="dool ? 'usercs': 'usercs xiahuared'" type="text" name="username" placeholder="请输入用户名"  @mouseleave="fun2()" v-model="username">

                    <input class="passcs" type="password" name="userpass" placeholder="请输入密码" v-model="userpwd">

                    <div class="ins-i">
                        <input class="ins-1" type="submit" value="登录" @click="onregister()">
                    </div>
                </div>

                <div class="main">
                    <span><a href="#zhuce">注册账号</a></span>
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

            username:"",//登录页面用户名
            userpwd:"",//密码

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
            }else{
                this.namecode="0";
                this.dool=false;
            }
        },
        onregister(){//用户名登录
            var param=new URLSearchParams();
            param.append({"username":this.username,"userpwd":this.userpwd});
                this.axios({
                url:"/user/loginUser",
                method:"post",
                data:param// post发送数据的时候使用data属性
            }).then((ok)=>{
                console.log(ok);
                if(ok == 1){
                    alert("登录成功！");
                    this.$router.push("/index");
                }else if(ok==0){
                    alert("用户名或密码不正确，请重新登录！");
                }

            })
        },  
        onlogin(){//用户注册
            if(this.logincode == this.emailcode){
                var param=new URLSearchParams();
                param.append({"loginname":this.loginname,"loginpwd":this.loginpwd,"loginemail":this.loginemail});
                    this.axios({
                    url:"http://39.107.105.57:8084/post",//post请求下地址为http:ip地址：端口号
                    method:"post",
                    data:param // post发送数据的时候使用data属性
                }).then((ok)=>{
                    console.log(ok);
                    alert("注册成功，请登录！");
                    let ls = localStorage;
                    ls.setItem("用户名",this.loginname)
                    location.href="#denglu";
                })
            }else{
                alert("验证码不正确！")
            }
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
        },
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
    height: 0.5rem;
    margin: 0;
    padding: 0;
}
.close div{
    padding-left: 10px;
    line-height: 0.5rem;
    width: 0.5rem;
    height: 0.5rem;
}
.login{
    /* background: #f7f7f8; */
    height: 3.9rem;
    overflow: hidden;
}
#zhuce,#denglu{
    height: 3.9rem;
}
.spancs{
    margin: 0;
    margin-top: 4px;
    margin-left: 4px;
    padding: 0;
    font-size: 28px;
    text-shadow:gray 2px 2px 6px;
}
.divcs{
    display: flex;
    flex-direction:column;
}
.divcs span{
    display: flex;
    justify-content: space-around;
    margin: 4px;
}
.usercs,.passcs{
    text-shadow:gray 12px 12px 6px;
	box-shadow:4px 4px 10px gray;   
    background-color:antiquewhite;
    border-radius: 16px;
    border:0px;
    border-bottom:1px solid #000;   
    outline:0;
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
    width: 46%;
    border:0px;
    outline:0;
    border-bottom:1px solid #000;
    margin: 6px;
    padding: 4px;
    background-color: #f7f7f8;
}
.in{
    width:24%;
    height: 0.3rem;
    background-color:sandybrown;
    color: #fff;
    border-radius: 12px;
}
.ins{
    width: 24%;
    height: 0.4rem;
    background-color:sandybrown;
    color: #fff;
    border-radius: 12px;
}
.inss{
    background-color:#ccc;
}
.ins-i{
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin: 20px 0;
}
.ins-1{
    margin-top: 16px;
    width: 80%;
    outline:0;
    height: 0.4rem;
    background-color:sandybrown;
    color: rgb(255, 249, 249);
    border-radius: 12px;
    font-size: 16px;
}
.main{
    margin-top: 40px;   
    font-size: 16px;
    display: flex;
    justify-content: space-around;
}
.main span{
   text-shadow:gray 2px 4px 4px;
}
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
