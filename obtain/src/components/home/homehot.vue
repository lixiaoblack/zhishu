<template>
    <div class="block">
        <div class="swiper-container" ref="slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(v,i) in imgArr" :key="i">
                    <router-link :to="v.link">
                    <img :src="v.imgUrl" class="imgs"/>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import Swiper from 'swiper'
export default {
    name:"banner",
    data() {
        return {
            imgArr:[
                {id:"1",imgUrl:"../../../static/image/hot_01.png",link:'/course/total'},
                {id:"2",imgUrl:"../../../static/image/hot_02.png",link:'/listen'},
                {id:"3",imgUrl:"../../../static/image/hot_03.png",link:'/eBook'},
            ]
        }
    },
    mounted(){
        new Swiper (this.$refs.slider, {
            loop: true,
            effect :'coverflow',
            slidesPerView: 2,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            // 如果需要分页器
            // pagination: '.swiper-pagination',
            // paginationClickable :true,
        })
    }
}
</script>

<style scoped>
    .imgs{
        width: 2rem;
        height:2rem;
    }
    
</style>
