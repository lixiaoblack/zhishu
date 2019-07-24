<template>
    <div class="box">
        <nav id="navcs"  :class="dool ? 'navcs navcss' : 'navcs'" class="navcs">
            <img src="../../static/tu/user/saoyisao.png">
            <span></span>
            <img src="../../static/tu/user/shezhi.png" class="set" @click="set()">
        </nav>
        <div class="diva maincs" >
            <span @click="login()">注册/登录</span>
        </div>
        <div class="divb maincs" id="divb">
            <span>我关注的人</span>
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
                <div class="flexcs" v-for="(v,i) in arra" :key="i" @click="zhanghu(v.url)" @touchstart="anxia()" @touchend="tanqi()">
                    <User  :imgurl="v.imgurl" :text="v.text" :url="v.url"></User>
                </div>
            </div>
        </div>
        <div class="divcs margin">
            <div class="divup">
                <img class="gang" src="../../static/tu/user/henggang.png">
                <span class="spancs">我的内容</span>
            </div>
            <div class="flex">
                <div class="flexcs" v-for="(v,i) in arrb" :key="i" @click="neirong(v.url)" @touchstart="anxia()" @touchend="tanqi()">
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
                <div class="flexcs" v-for="(v,i) in arrc" :key="i" @click="xuexi(v.url)" @touchstart="anxia()" @touchend="tanqi()">
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
    </div>
</template>

<script>
import User from '../components/user/useritem'
export default {
    components:{
        User,
    },
    methods: {
        anxia(){
            let userarr=document.querySelectorAll(".flexcs")
            console.log(userarr)
            userarr[index].style.background="red"
        },
        tanqi(){
            let userarr=document.querySelectorAll(".flexcs")
            console.log(userarr)
            userarr[index].style.background=""
        },
        zhanghu(url){
            this.$router.push("/moduleone/"+url)
        },
        neirong(url){
            this.$router.push("/moduletwo/"+url)
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
            console.log(scrollTop)
            scrollTop > offsetTop ? this.dool = true : this.dool =false
        },
    }, 
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
    },
    created() {
        let ls = localStorage;
        let username = ls.getItem("用户名")
        this.axios({
            url:"",
            method:"get",
            data:{
                userName:username
            }
        }).then((ok)=>{
            this.user = ok.data
        })
    },
    data(){
        return{
            arra:[
                {imgurl:"../../static/tu/user/zhanghu.gif",text:"账户",url:"../pages/home"},
                {imgurl:"../../static/tu/user/dingdan.gif",text:"订单",url:"dingdan"},
            ],
            arrb:[
                {imgurl:"../../static/tu/user/biji.gif",text:"笔记",url:"../pages/home"},
                {imgurl:"../../static/tu/user/lishi.png",text:"历史",url:"lishi"},
                {imgurl:"../../static/tu/user/xiazai.gif",text:"下载",url:"xiazai"},
                {imgurl:"../../static/tu/user/shoucang.gif",text:"收藏",url:"shoucang"},
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
            zhengshu:[]
        }
    }
}
</script>

<style scoped>
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
}
.navcss{
    background-color: #fff;
}
.navcs img{
    width: 10%;
    height: 20%;
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
    border-top:1px solid #ccc;
    font-size: 12px;
    height: 0.6rem;
    line-height: 0.6rem;
    background-color:rgba(255, 102, 0, 0.856);
}
.divb span:first-child{
    border-right: 1px solid #ccc ;
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
