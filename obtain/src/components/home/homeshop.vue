<template>
    <div class="homeshop"  @click="go(v)">
        <img :src="imgUrl">
        <span>{{title}}</span>
        <span>￥{{price}}</span>
    </div>
</template>

<script>
export default {
    props:{
        imgUrl:String,
        title:String,
        price:String,
        v:Object
    },
    methods: {
        go(title){
            this.$router.push({name:'CommodityDetails',query:{content:title}});
        }
    },
}
</script>

<style scoped>
    .homeshop img{
        width: .77rem;
        height: .77rem;
        margin-top: .1rem
    }
    .homeshop span:nth-of-type(1){
        color: #333333;
        font-size: .12rem;
        width: .77rem;
        margin-top: 6px;
        margin-bottom: 6px;
        line-height: .12rem;
    }
    .homeshop span:nth-of-type(2){
        color: #ff6b00;
        font-size: 12px;
        width: .77rem;
        padding-bottom: 8px;
    }
    .homeshop{
        float: left;
        font-size: 12px;
        background: #ffffff;
        padding: 5px 19px 0;
    }
</style>
