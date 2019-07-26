<template>
    <div class="box">
        <div class="close">
            <div @click="fun()">×</div>
        </div>
        <div class="login">
            <span class="spancs">用户登录</span>
            <div  class="divcs">
                <span class="dscs top">
                    <input id="userId" :class="dool ? 'usercss': 'usercss xiahuared'" type="text" name="username" placeholder="请输入用户名或邮箱"  @blur="fun2()" v-model="username">
                </span>
                <span class="dscs top">
                    <input class="usercss" type="password"  name="userpass" placeholder="请输入密码" v-model="userpwd">
                </span>

                <span class="ins">
                    <input  :disabled="btnbooll" :class="btnbooll ? 'inios inss' : 'inios'" type="button" value="登录" @click="onregister()">
                </span>
            </div>

            <div class="main">
                <span @click="fun4()">
                    <!-- <a href="#zhuce"> -->
                        注册账号
                    <!-- </a> -->
                </span>
                <span @click="fun5()">忘记密码？</span>
            </div>
            <div class="footer">
                <p>点击按钮即表示您同意并愿意遵守知书</p>
                <p>
                    <a href="">《使用协议》</a>和<a href="">《隐私协议》</a>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:"",//登录页面用户名
            userpwd:"",//密码

            dool:true,//判断是否符合用户名规则的真假
            btnbooll:true,//判断输入框内是否有值的真假
        }
    },
    methods:{
        fun(){
            this.$router.push({
                path: "/user",
            });
        },
        fun2(){//判断用户名规则合法
            var a=/^[a-zA-Z_][a-zA-Z0-9_]{5,15}$/
            var b=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
            if(a.test(this.username)==true||b.test(this.username)==true&&this.loginname!=""){
                this.namecode="1";
                this.dool=true;
                this.axios({
                    url:"http://39.107.105.57:8084/user/findUser",
                    method:"get",
                    data:{
                        username:this.loginname
                    }
                }).then((ok)=>{
                })
            }else{
                this.namecode="0";
                this.dool=false;
            }
        },
        fun4(){
            this.$router.push({
                path: "/login",
            });
        },
        fun5(){
            this.$router.push({
                path: "/forget",
            });
        },
        onregister(){//用户名登录
            let ls = localStorage;
            var a=/@/
            if(a.test(this.username)){
                this.axios({
                url:"http://39.107.105.57:8084/user/loginUser",
                method:"post",
                params:{
                    useremail:this.username,
                    password:this.userpwd
                } 
            }).then((ok)=>{
                if(ok.data.message == "操作成功！"){
                    this.$toast.success("登录成功！");
                    ls.setItem("用户名",ok.data.queryResult.user.username)
                    this.$router.push("/home");
                }else{
                    this.$toast.success("登录失败！");
                }

            })
             }else{
                this.axios({
                url:"http://39.107.105.57:8084/user/loginUser",
                method:"post",
                params:{
                    username:this.username,
                    password:this.userpwd
                }
                
                }).then((ok)=>{
                if(ok.data.message == "操作成功！"){
                    let ls = localStorage;
                    ls.setItem("用户名",ok.data.queryResult.user.id)
                    this.$toast.success("登录成功！");
                    this.$router.push("/home");
                }else{
                    this.$toast.success("登录失败！");
                }

                })
            }
            
        }
    },
    watch:{
        username(){
            if(this.namecode=="1"&&this.username!=""&&this.userpwd!=""){
                this.btnbooll=false
            }else{
                this.btnbooll=true
            }
        },
        userpwd(){
            if(this.namecode=="1"&&this.username!=""&&this.userpwd!=""){
                this.btnbooll=false
            }else{
                this.btnbooll=true
            }
        }
    }
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
.ins{
    width:100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin: .1rem 0;
}
.inios{
    margin-top: 16px;
    width: 70%;
    outline:0;
    height: 0.4rem;
    background-color:sandybrown;
    color: rgb(255, 249, 249);
    border-radius: 12px;
    font-size: .08rem;
    border: 0px;
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
