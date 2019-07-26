<template>
    <div class="box">
        <nav id="navcs"  :class="dool ? 'navcs navcss' : 'navcs'" class="navcs">
            <div class="pw">
                <img @click="fun()" :src="dool?'../../static/tu/r/f/aet.png':'../../static/tu/r/f/aeu.png'">
                <span @click="fun()" :style="dool?'color:#666666':'color:white'">扫一扫</span>
            </div>
            <img :src="dool?'../../static/tu/r/f/aev.png':'../../static/tu/r/f/aew.png'" class="set" @click="set()">
        </nav>
        <div v-if="userbool" class="diva maincs" >
            <span @click="login()">注册/登录</span>
        </div>
        <div v-else class="diva maincs" >
            <img class="boximg" src="../../static/tu/user/name.png" alt="">
            <span>您好，{{username}}</span>
        </div>
        <div class="divb maincs" id="divb">
            <span>我关注的人</span>|
            <span>关注我的人</span>
        </div>
        <div class="divc maincs" >
            <span>我的学生证</span>
            <span><img src="">></span>
        </div>
        <div class="divcs margin">
            <div class="divup">
                <img class="gang" src="../../static/tu/user/henggang.png">
                <span class="spancs">我的账户</span>
            </div>
            <div class="flex">
                <div class="flexcs" v-for="(v,i) in arra" :key="i">
                    <router-link to="v.url">
                        <User  :imgurl="v.imgurl" :text="v.text" :url="v.url"></User>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="divcs margin">
            <div class="divup">
                <img class="gang" src="../../static/tu/user/henggang.png">
                <span class="spancs">我的内容</span>
            </div>
            <div class="flex">
                <div class="flexcs" v-for="(v,i) in arrb" :key="i" @click="neirong(v.url)">
                    <User :imgurl="v.imgurl" :text="v.text" :url="v.url"></User>
                </div>
            </div>
        </div>
        <div class="divcs margin">
            <div class="divup">
                <img class="gang" src="../../static/tu/user/henggang.png">
                <span class="spancs">学习成就</span>
            </div>
            <div class="flex">
                <div class="flexcs" v-for="(v,i) in arrc" :key="i" @click="xuexi(v.url)">
                    <User :imgurl="v.imgurl" :text="v.text" :url="v.url"></User>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="help" @click="help()">
                <span>推荐[知书]给好友</span>
                <span>></span>
            </div>
            <div class="help" @click="help()">
                <span>知书荣誉赞助人</span>
                <span>></span>
            </div>
            <div class="help" @click="help()">
                <span>帮助中心</span>
                <span>></span>
            </div>
        </div> 
        <Bot one="我的" class="fixed"></Bot>
    </div>
</template>

<script>
import Bot from '../components/bottom'
import User from '../components/user/useritem'
export default {
    components:{
        User,
        Bot
    },
    methods: {
        neirong(url){
            this.$router.push(url)
        },
        xuexi(url){
            this.$router.push("/modulethree/"+url)
        },
        set(){
            this.$router.push({
                path: "/set",
            });
        },
        login(){
            this.$router.push({
                path:"/login",
            });
        },
        help(){
            this.$router.push({
                path:"/help",
            })
        },
        handleScroll () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            let offsetTop = document.querySelector('#divb').offsetTop
            scrollTop > offsetTop ? this.dool = true : this.dool =false
        },
        fun(){
            this.$router.push({path:"/vidio"})
        }
    }, 
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
    },
    created() {
        let ls = localStorage;
        if(ls.getItem("用户名")){
            this.userbool=false;
                this.axios({
                url:"http://39.107.105.57:8084/user/loginUser",
                method:"post",
                params:{
                    // username:this.username
                    username:ls.getItem("用户名")
                }
            }).then((ok)=>{
                this.username= ok.config.params.username
                // this.username=ls.getItem("用户名")
            })
        }else{
            this.userbool=true
        }
    },
    data(){
        return{
            arra:[
                {imgurl:"../../static/tu/user/zhanghu.gif",text:"账户",url:"/rechargemoney"},
                {imgurl:"../../static/tu/user/dingdan.gif",text:"订单",url:"/moduleone"},
            ],
            arrb:[
                {imgurl:"../../static/tu/user/biji.gif",text:"笔记",url:"/home"},
                {imgurl:"../../static/tu/user/lishi.png",text:"历史",url:"/moduletwo"},
                {imgurl:"../../static/tu/user/xiazai.gif",text:"下载",url:"/download/downloads"},
                {imgurl:"../../static/tu/user/shoucang.gif",text:"收藏",url:"/colloct"},
            ],
            arrc:[
                {imgurl:"../../static/tu/user/shuju.png",text:"数据",url:"../pages/home"},
                {imgurl:"../../static/tu/user/xunzhang.png",text:"勋章",url:"xunzhang"},
                {imgurl:"../../static/tu/user/zhengshu.png",text:"证书",url:"zhengshu"},
                {imgurl:"../../static/tu/user/xuefen.png",text:"学分",url:"../pages/home"},
            ],
            dool:false,
            user:[],
            dingdan:[],
            lishi:[],
            shuju:[],
            xunzhang:[],
            zhengshu:[],
            userbool:true,
            username:""
        }
    },
}
</script>

<style scoped>
.boximg{
    margin: auto 0.13rem;
    width: 0.6rem;
    height: 0.6rem;
}
.fixed{
    position: fixed;
    bottom: 0;
    left:0;
    width:100%; 
}
.navcs span{
    color: white;
    font-size: .16rem;
    margin-top: 7px;
}
.pw{
    display:flex;
    align-items: center;
}
.box{
    height:10rem ;
    background: #f7f7f8;
}
.navcs{
    position:sticky;
    top: 0;
    color: #fff;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    background-color:rgba(255, 102, 0, 0.856);
    padding-bottom: 10px;
    
}
.navcss{
    background-color: #fff;
    border-bottom: .5px solid #9999;
}
.navcs img{
    margin: 10px 10px 0 10px;
    width: .25rem;
}
.maincs{
    display: flex;
    justify-content: space-around;
}
.maincs span{
    width: 50%;
    text-align: center; 
}
.diva span{
    width: 100%;
}
.divc span:first-child{
    text-align: left;
    margin-left: 10px;
}
.divc span:last-child{
    text-align: right;
    margin-right: 10px;
}
.diva:active span,.divb span:active ,.divc:active span{
	transform: scale(1.1,1.1);
}
.diva{
    color: #fff;
    font-size: 24px;
    height: 0.98rem;
    line-height: 0.98rem;
    background-color:rgba(255, 102, 0, 0.856);
}
.divb{
    color: #fff;
    font-size: 14px;
    height: 0.6rem;
    line-height: 0.6rem;
    background-color:rgba(255, 102, 0, 0.856);
}
.divc{
    font-size: 16px;
    height: 0.6rem;
    line-height: 0.6rem;
    background-color: #fff;
    margin-bottom: 6px;
}
.divcs{
    margin:6px 0;
    background-color: #fff;
    height: 1.4rem;
}
.divup{
    margin-left: 10px;
    display: flex;
    height: 0.35rem;
}
.flex{
    display: flex;
}
.margin{
    padding-top: 6px;
}
.spancs{
    font-size: 14px;
    line-height: .35rem;
}
.gang{
    margin-right: 6px;
    display: inline-block;
}
.footer{
    height: 1.8rem; 
}
.help{
    display: flex;
    justify-content: space-between;
    border-top:1px solid #ccc;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 14px;
    background-color: #fff;
}
.help span{
    margin: 4px;
}
.help:first-child{
    border-top: 0;
}
</style>
