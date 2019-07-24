<template>
    <div class="audioxq">
        <Xqnav style="margin-bottom:12px"></Xqnav>
        <p>第770期|怎么应对复杂性挑战</p>
        <img src="../../static/image/lun_01.jpg">
        <div>
            <div class="icon iconOne">
                <img src="../../static/tu/r/a7/v2.png" @click="funtime()">
                <span>定时关闭</span>
                <ul style="text-align:left" v-if="bolltime">
                    <li>10秒</li>
                    <li>30秒</li>
                    <li>1分钟</li>
                    <li>5分钟</li>
                    <li>10分钟</li>
                </ul>
            </div>
            <div class="icon iconTwo"> 
                <img src="../../static/tu/r/a7/v1.png" @click="funspeed()"> 
                <span>倍速播放</span>
                <ul style="text-align:left" v-if="bollspeed">
                    <li>1倍</li>
                    <li>2倍</li>
                    <li>3倍</li>
                    <li>4倍</li>
                </ul>
            </div>
            <div class="icon iconTwo">
                <img :src="boll?'../../static/tu/r/f/uh.png':'../../static/tu/r/f/ui.png'">
            </div>
        </div>
        <div v-for="(v, i) in audios" :key="i" class="audioitem">
            <Audioitem :theUrl="v.url" :theControlList="v.controlList" @sonpao="fufun"></Audioitem>
        </div>
        <!-- <img src="../../static/tu/r/a7/afq.png" style="clear:both">
        <img src="../../static/tu/r/a7/aft.png"> -->
        <!-- <img :src="playBoll?'../../static/tu/r/a7/ahi.png':'../../static/tu/r/a7/ah0.png'" class="play" @audio="funcc"> -->
        <!-- <img src="../../static/tu/r/a7/v0.png"> -->
        
    </div>
</template>

<script>
import Audioitem from '../components/home/audioitem'
import Xqnav from './../components/specialxq/xqnav'
export default {
    components:{
        Audioitem,
        Xqnav
    },
    data() {
        return {
           audios: [
                {
                url: './static/falling-star.mp3',
                controlList: 'onlyOnePlaying'
                }
            ],
            boll:true,
            playBoll:true,
            bolltime:false,
            bollspeed:false
        }
    },
    methods: {
        fufun(css){
            this.boll=css
        },
        // funcc(val){
        //     this.playBoll=val
        // },
        funtime(){
            this.bolltime=!this.bolltime
            this.bollspeed=false
        },
        funspeed(){
            this.bollspeed=!this.bollspeed
            this.bolltime=false
        }
    },
}
</script>

<style scoped>
    .audioxq{
        text-align: center;
        font-size: 12px;
    }
    .audioxq p{
        font-size: .17rem;
        font-weight: 600;
    }
    .audioxq img:nth-child(3){
        height: 1.84rem;
        width: 1.4rem;
        border-radius: 8px;
        margin: 0 auto;
        margin-top: .3rem;
        margin-bottom: .1rem;
    }
    .play{
        width: .5rem;
        height: .5rem;
        position: fixed;
        top: 3.75rem;
        left: 4px;
        z-index:-1
    }
    .icon{
        text-align: center;
        float: left;
    }
    .iconOne{
        margin-left: 1.1rem;
        margin-right: .2rem;
    }
    .iconTwo{
        margin-right: .1rem;
    }
    .icon img{
        width: .25rem;
        height: .25rem;
        margin-left: 9px;
    }
    .icon span{
        color:#999999;
        font-size: .11rem;
    }
    /* .audioitem{
        margin-top: 1.2rem;
    } */
</style>
