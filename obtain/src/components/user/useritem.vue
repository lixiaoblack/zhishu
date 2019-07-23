<template>
    <div class="divcs"  @click="click()">
        <router-link :to="url">
            <img class="imgcs" :src="imgurl">
            <p class="pcs">{{text}}</p>
        </router-link>
    </div>
</template>
<script>
export default {
    props:{
        imgurl:String,
        url:String,
        text:String
    }
}
</script>
<style scoped>
.divcs{
    width: 0.935rem;
    height:0.935rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.imgcs:active{
	transform: scale(1.2,1.2);
}
.pcs{
    font-size: 12px;
    text-align: center;
    padding-top: 6px;
}
.imgcs{
    width: 50%;
    margin: 0 auto;
}
</style>
