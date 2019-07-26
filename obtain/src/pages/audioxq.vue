<template>
    <div class="audioxq">
        <Xqnav style="margin-bottom:12px"></Xqnav>
        <p>第770期|怎么应对复杂性挑战</p>
        <img src="../../static/ebookImg/ebook-2.jpg">
        <div>
            <div class="icon iconTwo">
                <img :src="boll?'../../static/tu/r/f/uh.png':'../../static/tu/r/f/ui.png'">
            </div>
        </div>
        <div v-for="(v, i) in audios" :key="i" class="audioitem">
            <Audioitem :theUrl="v.url" :theControlList="v.controlList" @sonpao="fufun"></Audioitem>
        </div>
        
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
                url: './static/201907222141120244326370.mp3',
                controlList: 'onlyOnePlaying'
                }
            ],
            boll:true
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
        margin-left: 1.73rem;
    }
    .icon span{
        color:#999999;
        font-size: .11rem;
    }
    /* .audioitem{
        margin-top: 1.2rem;
    } */
</style>
