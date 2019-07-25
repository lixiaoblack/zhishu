<template>
    <div class="box">
        <div class="close">
            <div @click="fun()">×</div>
        </div>
        <div class="login">
            <div id="denglu">
                <span class="spancs">用户名登录</span>
                <div  class="divcs">
                    <span class="dscs1">
                        <input id="userId" :class="dool ? 'usercs': 'usercs xiahuared'" type="text" name="username" placeholder="请输入用户名"  @blur="fun2()" v-model="username">

                        <input class="passcs" type="password"  name="userpass" placeholder="请输入密码" v-model="userpwd">
                    </span>

                    <span class="ins-i">
                        <input  :disabled="btnbooll" :class="btnbooll ? 'ins-1 ins-2' : 'ins-1'" type="button" value="登录" @click="onregister()">
                    </span>
                </div>

                <div class="main">
                    <span @click="fun4()">
                        <!-- <a href="#zhuce"> -->
                            注册账号
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
            username:"",//登录页面用户名
            userpwd:"",//密码

            dool:true,//判断是否符合用户名规则的真假
            btnbooll:true,//判断输入框内是否有值的真假
        }
    },
    methods:{
        fun(){
            this.$router.go(-1);
        },
        fun2(){//判断用户名规则合法
            var a=/^[a-zA-Z_][a-zA-Z0-9_]{5,15}$/
            if(a.test(this.username)==true){
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
        fun4(){
            this.$router.push({
                path: "/login",
            });
        },
        onregister(){//用户名登录
            let ls = localStorage;
            console.log(this.username)
            console.log(this.userpwd)
            this.axios({
                url:"http://39.107.105.57:8084/user/loginUser",
                method:"post",
                params:{    // post发送数据的时候使用data属性
                    username:this.username,
                    password:this.userpwd
                }
            }).then((ok)=>{
                console.log(ok);
                if(ok.data.message == "操作成功！"){
                    console.log(ok.data.queryResult.user.id);
                    alert("登录成功！");
                    ls.setItem("用户名",ok.data.queryResult.user.id)
                    this.$router.push("/home");
                }else{
                    alert("登录失败！");
                }

            })
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
    font-size: .16rem;
}
.close{
    font-size: .2rem;
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
    margin-top: 4px;
    margin-left: 4px;
    padding: 0;
    font-size: .14rem;
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
.usercs,.passcs{
    /* box-shadow:4px 4px 10px gray;    */
    background-color:#f7f7f8;
    border-radius: .08rem;
    border:0px;
    border-bottom:1px solid #000;   
    outline:0;
    height: 0.2rem;
    width: 80%;
    margin:10px .1rem;
    padding:6px;
    text-align: center;
/* -webkit-appearance:none;
  -moz-appearance: none; */
}
.usercs{
    margin-top: .2rem;
}
.passcs{
    margin-bottom:.2rem;
}
.ins-i{
    width:100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin: .1rem 0;
}
.ins-1{
    margin-top: .08rem;
    width: 70%;
    outline:0;
    height: 0.4rem;
    background-color:sandybrown;
    color: rgb(255, 249, 249);
    border-radius: 12px;
    font-size: .08rem;
    border: 0px;
}
.ins-2{
    background-color:#bcbcce;
}
.main{
    margin-top: .15rem;   
    font-size: .08rem;
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
