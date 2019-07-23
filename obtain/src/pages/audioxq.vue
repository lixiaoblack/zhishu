<template>
    <div class="audioxq">
        <p>第770期|怎么应对复杂性挑战</p>
        <img src="../../static/image/lun_01.jpg">
        <div>
            <div class="icon iconOne">
                <img src="../../static/tu/r/a7/v2.png">
                <span>定时关闭</span>
            </div>
            <div class="icon iconTwo">
                <img src="../../static/tu/r/a7/v1.png"> 
                <span>倍速播放</span>
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
        <img :src="playBoll?'../../static/tu/r/a7/ahi.png':'../../static/tu/r/a7/ah0.png'" class="play" @audio="funcc">
        <!-- <img src="../../static/tu/r/a7/v0.png"> -->
        
    </div>
</template>

<script>
import Audioitem from '../components/home/audioitem'
export default {
    components:{
        Audioitem
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
            playBoll:true 
        }
    },
    methods: {
        fufun(css){
            this.boll=css
        },
        funcc(val){
            this.playBoll=val
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
    .audioxq img:nth-child(2){
        height: 1.84rem;
        width: 1.4rem;
        border-radius: 8px;
        margin: 0 auto
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
        margin-left: 8px;
    }
    .icon span{
        color:#999999;
        font-size: .11rem;
    }
    .audioitem{
        margin-top: 1.5rem;
    }
</style>
