<template>
    <div class="smallBox">
        <div class="top">
            <div class="topz">
                <img class="imga" :src="imga">
                <div class="hs">
                    <h4>{{namea}}</h4>
                    <span>{{time}}</span>
                </div>
            </div>
            <img class="imgb" @click="func()" src="../../../static/tu/r/a7/a8g.png" alt="">
        </div>
        <div class="footer">
            <p class="footp" @click="fund()">{{txt}}</p>
            <div class="bottom">
                <div class="pinglun">
                    <img :src="imgb" alt="">
                    <h4>{{nameb}}</h4>
                </div>
                <p @click="funa()" v-if="bool">+ 关注</p>
            </div>
            <h3 @click="fund()">{{txta}}</h3>
            <div>
                <div class="book">
                    <img :src="imgc" alt="">
                    <div>
                        <h4>{{title}}</h4>
                        <h5>{{author}}</h5>
                    </div>
                </div>
            </div>
            <ul class="good">
                <li @click="func()"><img class="img1" src="../../../static/tu/r/a7/a_l.png" alt=""><span>{{transmit}}</span></li>
                <li><img class="img1" src="../../../static/tu/r/a7/a_i.png" alt=""><span>{{comment}}</span></li>
                <li @click="funb()"><img id="imgc" :src="goods?'../../../static/tu/r/f/aaa.png':'../../../static/tu/r/f/aac.png'" alt=""><span>{{num}}</span></li>
                <!-- <img src="../../../static/tu/r/a7/aac.png" alt=""> -->
            </ul>
        </div>
        <div class="fixed" v-if="fixed">
            <img src="../../../static/tu/r/a/a6.jpg" alt="">
            已关注
        </div>
        <div v-if="fixeda">
            <div  @click="func()" class="fixedb"></div>
            <div class="boxb">
                <ul>
                    <li>
                        <img src="../../../static/tu/r/a7/a_j.png" alt="">
                        分享
                    </li>
                </ul>
                <p @click="func()">取消</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bool:true,
            fixed:false,
            goods:true,
            fixeda:false,
            num:this.good
        }
    },
    methods: {
        funa(){
            this.bool=false
            this.fixed=true
            setTimeout(() => {
                this.fixed=false
            },600);
        },
        funb(){
            this.goods=!this.goods
            if(this.goods==true){
                this.num--
            }else if(this.goods==false){
                this.num++
            }
        },
        func(){
            this.fixeda=!this.fixeda
        },
        fund(){
            this.$router.push({path:'/note',query:{num:this.id,title:"笔记详情",shu:this.num,tai:this.goods,bol:this.bool}})
        }
    },
    props:{
        id:String,
        namea:String,
        time:String,
        txt:String,
        nameb:String,
        txta:String,
        title:String,
        author:String,
        transmit:String,
        comment:String,
        good:Number,
        imga:String,
        imgb:String,
        imgc:String
    }
}
</script>

<style scoped>
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
.smallBox{
    background: white;
    margin-bottom:10px;
}
.img1{
    margin-top: 7px;
    margin-right: 4px;
}
.good{
    width: 100%;
    display:flex;
    margin-top: 10px;
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
    font-size: .15rem;
    color:#b6b6b6;
    margin-top: 7px;
}
.good img{
    width: .2rem;
    height: .2rem;
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
    width:2.8rem;
    height: .48rem;
    border-radius: 5px;
    background:#f7f7f8;
    padding: .1rem;
    display: flex;
}
.footer h3{
    font-size: .14rem;
    line-height: .27rem;
    font-weight: 350;
    padding: .1rem .05rem .05rem 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
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
    padding-top:10px;
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
.footer{
    padding:0 .1rem 0 .64rem;
}
.footp{
    font-size: .15rem;
    line-height: .3rem;
    border-bottom: .5px solid #9999;
    padding-bottom: 10px;
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
.imgb{
    width: .2rem;
    height: .2rem;
    margin-top:5px;
}
</style>
