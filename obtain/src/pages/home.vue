<template>
    <div>
        <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        </van-pull-refresh> -->
        <Search></Search>
        <Banner></Banner>
        <Imgspan :newarr="classArr"></Imgspan>
        <div v-for="(v,i) in navArr" :key="i" class="nav"> 
            <router-link :to="v.link">
                 <img :src="v.imgUrl">
                <span>{{v.title}}</span>
            </router-link>
        </div>
        <div v-for="(v, u) in audios" :key="u+111">
            <Audio :theUrl="v.url" :theControlList="v.controlList" style="border-radius:.1rem"/>
        </div>
        <Homelisten v-for="(v,i) in listenArr" :key="i+4444" :data="listenArr[0]" :subtitle="listenArr[0].listenSubtitle" :courseFeatureIntroI="listenArr[0].listenPublisherIntro" :booksSprice="listenArr[0].listenSprice" :time="listenArr[0].listenAudioTime" :imgUrl="listenArr[0].listenImgUrl" style="border-radius:.1rem"></Homelisten>
        <Circulation style="margin-top:7.1rem;border-radius:.1rem"></Circulation>
        <Homebooks v-for="(v,i) in bookArr" :key="i+3333" :sss="bookArr[0]" :subtitle="bookArr[0].bookSubtitle" :courseFeatureIntroI="bookArr[0].bookPublisherIntro" :booksSprice="bookArr[0].bookSprice" :imgUrl="bookArr[0].bookImgUrl" style="border-radius:.1rem"></Homebooks>
        <Circulation style="margin-top:4.3rem;border-radius:.1rem"></Circulation>
        <div class="allTop" style="border-radius:.1rem .1rem 0 0">
            <p>每天听节课</p><router-link to="/course"><span>全部</span></router-link>
        </div>
        <div class="course">
        <Homecourse  :data="v" v-for="(v,i) in courseArr" :key="i+1111" :imgUrl="courseArr[0].books_details.author_img" :title="courseArr[0].books_details.banner_title" :txtOne="courseArr[0].books_details.course_feature_intro_II" :txtTwo="courseArr[0].books_details.teacher_info" :people="courseArr[0].books_details.now_listening[0].listen_peoples" :num="courseArr[0].interface.class_num" :price="courseArr[0].interface.books_sprice" style="border-radius:0 0 .1rem .1rem"></Homecourse>
        </div>
        <Circulation style="margin-top:3.9rem;border-radius:.1rem"></Circulation>
        <div class="allTop" style="marginTop:0.2rem;border-radius:.1rem .1rem 0 0">
            <p>实物商城</p><router-link to="/shop"><span>全部</span></router-link>
        </div>
        <div style="marginLeft:0.15rem">
            <Homeshop v-for="(v,i) in shopArr" :key="i+22222" :v="v" :imgUrl="shopArr[0].shopImgurl" :title="shopArr[0].shoptitle" :price="shopArr[0].saleSprice" style="border-radius:0 0 .1rem .1rem"></Homeshop>
        </div>
        <Circulation style="margin-top:2rem;border-radius:.1rem"></Circulation>
        <Circulation style="margin-top:.2rem;border-radius:.1rem"></Circulation>
        <Circulation style="margin-top:.2rem;border-radius:.1rem"></Circulation>
        <Circulation style="margin-top:.2rem;border-radius:.1rem"></Circulation>
        <Circulation style="margin-top:.2rem;border-radius:.1rem"></Circulation>
        <Circulation style="margin-top:.2rem;border-radius:.1rem"></Circulation>
        <Circulation style="margin-top:.2rem;border-radius:.1rem"></Circulation>
        <Circulation style="margin-top:.2rem;border-radius:.1rem"></Circulation>
        <Circulation style="margin-top:.2rem;border-radius:.1rem"></Circulation>
        <div style="height:.6rem"></div>
        <Bot ona="发现" class="bot"></Bot>
    </div>
</template>

<script>
import Search from '../components/home/search'
import Banner from '../components/home/banner'
import Imgspan from '../components/home/imgSpan'
import Homelisten from '../components/home/homelisten'
import Homebooks from '../components/home/homebooks'
import Audio from '../components/home/audio'
import Homecourse from '../components/home/homecourse'
import Homeshop from '../components/home/homeshop'
import Bot from '../components/bottom'
import Circulation from '../components/home/circulation'
export default {
    components:{
        Search,
        Banner,
        Imgspan,
        Homelisten,
        Homebooks,
        Audio,
        Homecourse,
        Homeshop,
        Bot,
        Circulation
    },
    data() {
        return {
            classArr:[
                {imgUrl:"../../static/tu/r/f/a3r.png",title:"课程",link:"/course/total"},
                {imgUrl:"../../static/tu/r/f/a3y.png",title:"听书",link:"/listen"},
                {imgUrl:"../../static/tu/r/f/a3p.png",title:"电子书",link:"/eBook"},
                {imgUrl:"../../static/tu/r/f/a3v.png",title:"商城",link:"/shop"},
                {imgUrl:"../../static/tu/r/f/a3t.png",title:"专题",link:"/special"}
            ],
            navArr:[
                {imgUrl:"../../static/image/nav_01.png",title:"经济学",link:"/classify/economics/quanbu"},
                {imgUrl:"../../static/image/nav_02.png",title:"医学健康",link:"/classify/medicalhealth/quanbu"},
                {imgUrl:"../../static/image/nav_03.png",title:"社会学",link:"/classify/sociology/quanbu"},
                {imgUrl:"../../static/image/nav_04.png",title:"心理学",link:"/classify/psychology/quanbu"},
                {imgUrl:"../../static/image/nav_05.png",title:"家庭亲自",link:"/classify/family/quanbu"},
                {imgUrl:"../../static/image/nav_06.png",title:"社会学",link:"/classify/sociology/quanbu"},
                {imgUrl:"../../static/image/nav_07.png",title:"管理学",link:"/classify/management/quanbu"},
                {imgUrl:"../../static/image/nav_08.png",title:"职场",link:"/classify/workplace/quanbu"},
                {imgUrl:"../../static/image/nav_09.png",title:"历史",link:"/classify/history/quanbu"},
                {imgUrl:"../../static/image/nav_10.png",title:"全部分类",link:"/classify/psychology/quanbu"},
            ],
            listenArr:[],
            bookArr:[],
            courseArr:[],
            shopArr:[],
            audios: [
                {
                url: './static/falling-star.mp3',
                controlList: 'onlyOnePlaying'
                }
            ],
            // count: 0,
            // isLoading: false
        }
    },
    created() {
        this.axios({
            url:"/listen",
            methods:"get"
        }).then((ok)=>{
            for(var i=0; i<1; i++){
                this.listenArr.push(ok.data.listen[i]) 
            }
        })
        this.axios({
            url:"/jsondata/abc",
            methods:"get"
        }).then((ok)=>{
            for(var i=0; i<1; i++){
                this.bookArr.push(ok.data.EBook[i]) 
            }
        })
        this.axios({
            url:"/link/data",
            methods:"get"
        }).then((ok)=>{
            for(var i=0; i<4; i++){
                this.courseArr.push(ok.data.total[i]) 
            }
        })
        this.axios({
            url:"user/shop",
            methods:"get"
        }).then((ok)=>{
            for(var i=0; i<3; i++){
                this.shopArr.push(ok.data.shop[i]) 
            }
        })
    },
    // methods:{
    //     onRefresh() {
    //         setTimeout(() => {
    //             this.$toast('刷新成功');
    //             this.isLoading = false;
    //             this.count++;
    //         }, 500);
    //     }
    // }
}
</script>

<style scoped>
    .nav{
        float: left;
        width: 20%;
        font-size: 12px;
        text-align: center;
        margin-top: .2rem;
    }
    .nav img{
        width: .32rem;
        height: .32rem;
        margin: 0 auto;
        margin-bottom: 10px;
        border-radius: 50%;
    }
    .nav span{
        font-size: .11rem;
        color: #333333;
    }
    .allTop{
        clear: both;
        line-height: .52rem;
        font-size: 12px;
        height: .52rem;
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: .15rem;
        margin: 0 15px;
        padding: 0 10px;
        background: #fff;
        margin-top: 0.2rem;
    }
    .allTop p{
        float: left;
        font-size: .17rem;
    }
    .allTop span{
        float: right;
        font-size: .14rem;
        color: #ff6b00;
    }
    .course{
        margin-left: .15rem;
    }
    .bot{
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>
