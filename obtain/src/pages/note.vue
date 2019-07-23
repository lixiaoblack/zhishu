<template>
    <div class="flex">
        <div>
            <Xqnav :title="this.$route.query.title" @zipao="jieshou"></Xqnav>
        </div>
        <div class="flexone">
            <div class="top">
                <div class="topz">
                    <img class="imga" :src="arr.imga">
                    <div class="hs">
                        <h4>{{arr.namea}}</h4>
                        <span>{{arr.time}}</span>
                    </div>
                </div>
            </div>
            <p class="divp">{{arr.txt}}</p>
            <div class="bottom">
                <div class="pinglun">
                    <img :src="arr.imgb" alt="">
                    <h4>{{arr.nameb}}</h4>
                </div>
                <p @click="funa()" v-if="bool">+ 关注</p>
            </div>
            <p class="divpa">{{arr.txta}}</p>
            <div>
                <div class="book">
                    <img :src="arr.imgc" alt="">
                    <div>
                        <h4>{{arr.title}}</h4>
                        <h5>{{arr.author}}</h5>
                    </div>
                </div>
            </div>
            <div class="num">
                <span class="spana">{{arr.transmit}}</span><span class="yuan">转发</span>
                <span class="spana">{{shu}}</span><span>赞</span>
            </div>
            <ul class="good">
                <li><img class="img1" @click="func()" src="../../static/tu/r/a7/a_l.png" alt=""><span>转发</span></li>
                <li><img class="img1" src="../../static/tu/r/a7/a_i.png" alt=""><span>评论</span></li>
                <li @click="funb()"><img id="imgc" :src="goods?'../../../static/tu/r/f/aaa.png':'../../../static/tu/r/f/aac.png'" alt=""><span>赞</span></li>
            </ul>
        </div>
        <div class="dibu">
            <p>写评论</p>
        </div>
        <div v-if="fixeda">
            <div  @click="func()" class="fixedb"></div>
            <div class="boxb">
                <ul>
                    <li>
                        <img src="../../static/tu/r/a7/a_j.png" alt="">
                        分享
                    </li>
                </ul>
                <p @click="func()">取消</p>
            </div>
        </div>
        <div class="fixeds" v-if="fixed">
            <img src="../../static/tu/r/a/a6.jpg" alt="">
            已关注
        </div>
    </div>
</template>

<script>
import Xqnav from './../components/specialxq/xqnav'
export default {
    methods:{
        func(){
            this.fixeda=!this.fixeda
        },
        jieshou(val){
            this.fixeda=val
        },
        funb(){
            this.goods=!this.goods
            if(this.goods==true){
                this.shu--
            }else if(this.goods==false){
                this.shu++
            }
        },
        funa(){
            this.bool=false
            this.fixed=true
            setTimeout(() => {
                this.fixed=false
            },600);
        },
    },
    components:{
        Xqnav
    },
    data() {
        return {
            arr:{},
            fixeda:false,
            goods:true,
            shu:Number,
            bool:true,
            fixed:false,
        }
    },    
    created() {
        this.axios({
            url:"/mock/data",
            methods:"get"
        }).then((ok)=>{
            console.log(ok.data.knowledge)
            ok.data.knowledge.forEach((v,i)=>{
                if(this.$route.query.num==v.id){
                    this.arr=v;
                }
            })
        })
        this.shu=this.$route.query.shu
        this.goods=this.$route.query.tai
        this.bool=this.$route.query.bol
    },
}
</script>

<style scoped>
.fixeds img{
    margin:10px auto;
    width:.26rem;
    height:.19rem;
}
.fixeds{
    width:2rem;
    border-radius: 7px;
    border:1px solid black;
    opacity: .75;
    background:white;
    position:fixed;
    top:50%;
    left:50%;
    margin-left:-1.06rem;
    margin-top:-0.46rem;
    line-height: .32rem;
    text-align: center; 
    font-size:.15rem;
}
.flex{
    height: 100%;
    display: flex;
    flex-direction: column;
}
.flexone{
    flex:1;
    overflow-y: auto;
}
.dibu{
    background: #9999;
    padding:5px 10px;
}
.dibu p{
    width: 3.5rem;
    font-size: .15rem;
    line-height: .33rem;
    background: white;
    padding-left:5px ;
    color:#9999;
    border: .5px solid black;
}
.img1{
    margin-top: 7px;
    margin-right: 4px;
}
.good{
    width: 100%;
    display:flex;
    padding-top: 10px;
    border-top:.5px solid #9999;
}
.good li{
    width:33.3%;
    display: flex;
    justify-content: center;
}
#imgc{
    width: .35rem;
    height: .35rem;
}
.good span{
    font-size: .13rem;
    margin-top: 7px;
}
.good img{
    width: .2rem;
    height: .2rem;
}

.num .yuan{
    margin-right: 15px;
}
.spana{
    margin-top:3px;
}
.num{
    padding-left: 15px;
    display: flex;
}
.num span{
    font-size: .17rem;
    font-weight: 600;
    margin-right: 5px;
}
.book h4{
    font-size: .13rem;
    margin-bottom: .01rem;
    width: 1.7rem;
}
.book h5{
    font-size: .11rem;
    color:#b6b6b6;
    font-weight: 100;
}
.book img{
    width:.36rem;
    height:.48rem;
    margin-right: .2rem;
}
.book{
    /* width:100%; */
    height: .48rem;
    border-radius: 5px;
    background:#f7f7f8;
    padding: .1rem;
    display: flex;
    margin:15px; 
}
.divpa{
    font-size: .14rem;
    line-height: .27rem;
    font-weight: 350;
    padding: .1rem 10px .05rem 10px;
}
.bottom p{
    font-size: .15rem;
    line-height: .3rem;
    color:#ff6b00;
    font-weight: 600;
}
.bottom{
    display: flex;
    justify-content: space-between;
    padding:10px 10px 0 10px;
}
.pinglun{
    display:flex;
}
.pinglun img{
    width: .3rem;
    height: .3rem;
    border-radius: 50%;
}
.pinglun h4{
    font-size: .14rem;
    letter-spacing: .01rem;
    margin: .05rem 0 0 .07rem;
}
.divp{
    font-size: .15rem;
    line-height: .3rem;
    border-bottom: .5px solid #9999;
    padding:0 15px 10px 15px;
}
.topz{
    display: flex;
}
.top{
    display: flex;
    justify-content: space-between;
    padding: .2rem .15rem .1rem .15rem;
}
.hs{
    display:flex;
    flex-direction: column;
}
.imga{
    margin-right:.1rem;
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    
}
.top h4{
    font-size: .14rem;
    margin-bottom:.03rem;
    letter-spacing: .01rem;
}
.top span{
    font-size: .11rem;
    color:#b6b6b6;
}
.boxb{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
}
.fixedb{
    height: 100%;
    width: 100%;
    background:black;
    opacity: .5;
    position: fixed;
    bottom: 0;
    left:0;
}
.boxb ul li{
    width: 100%;
    height:.5rem;
    line-height: .5rem;
    background:white;
    font-size:.15rem;
    display:flex;
    padding-left:20px;
    border-bottom: 1px solid #9999;
}
.boxb li img{
    width: .2rem;
    height: .25rem;
    margin-right:25px;
    margin-top: 10px;
}
.boxb p{
    width: 100%;
    height:.5rem;
    background:white;
    line-height: .5rem;
    width: 100%;
    color:orange;
    font-size:.15rem;
    text-align: center;
}
.fixed img{
    margin:10px auto;
    width:.26rem;
    height:.19rem;
}
.fixed{
    width:2rem;
    border-radius: 7px;
    border:1px solid black;
    opacity: .75;
    background:white;
    position:fixed;
    top:50%;
    left:50%;
    margin-left:-1.06rem;
    margin-top:-0.46rem;
    line-height: .32rem;
    text-align: center; 
    font-size:.15rem;
}
</style>
