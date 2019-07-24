<template>
    <div @click="funa()">
        <div class="fixed" v-if="bool">
            <Nav blank="目录"></Nav>
        </div>
        <div class="swiper-container" ref="slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(v,i) in slides" :key="i">
                    <img :src="v.img_url"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Nav from './../components/special/nav'
    import 'swiper/dist/css/swiper.css'
    import Swiper from 'swiper'
export default {
    name: "Slider",
    props:{
        src:String,
        name:String
    },
    components:{
        Nav
    },
    data() {
        return {
            bool:false,
            slides:[
                    {id:1,img_url:'../../static/tu/lb/r1.png'},
                    {id:2,img_url:'../../static/tu/lb/r2.png'},
                    {id:3,img_url:'../../static/tu/lb/r3.png'},
                    {id:4,img_url:'../../static/tu/lb/r4.png'},
                    {id:5,img_url:'../../static/tu/lb/r5.png'},
                    {id:6,img_url:'../../static/tu/lb/r6.png'},
                    {id:7,img_url:'../../static/tu/lb/r7.png'},
                    {id:8,img_url:'../../static/tu/lb/r8.png'},
                    {id:9,img_url:'../../static/tu/lb/r9.png'},
                    {id:10,img_url:'../../static/tu/lb/r10.png'},
                    {id:11,img_url:'../../static/tu/lb/r11.png'},
                    {id:12,img_url:'../../static/tu/lb/r12.png'},
                    {id:13,img_url:'../../static/tu/lb/r13.png'},
                    {id:14,img_url:'../../static/tu/lb/r14.png'},
                ],
        }
    },
    mounted(){
        new Swiper (this.$refs.slider, {
            loop: false,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            // 如果需要滚动条
            // scrollbar: '.swiper-scrollbar',
        })
    },
    methods: {
        funa(){
            this.bool=!this.bool
        }
    },
}
</script>

<style scoped>
    .fixed{
        position:fixed;
        top:0;
        left:0;
        width:100%;
        z-index: 20;
    }
    img{
        width: 100%;
        height: 100%;
    }
</style>
