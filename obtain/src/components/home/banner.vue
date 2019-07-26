<template>
    <div class="block">
        <div class="swiper-container" ref="slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(v,i) in imgArr" :key="i">
                    <router-link :to="{name:'Specialxq',params:{id:v.courseClassId}}">
                        <img :src="v.courseTitleImgurl" class="imgs"/>
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
    props:{
        imgArr:Array
    },
    mounted(){
        new Swiper (this.$refs.slider, {
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            paginationClickable :true,
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
        })
    }
}
</script>

<style scoped>
    .imgs{
        width: 3.45rem;
        height:1.15rem;
        margin-left: 0.15rem;
        margin-top: 0.58rem;
    }
    
</style>
