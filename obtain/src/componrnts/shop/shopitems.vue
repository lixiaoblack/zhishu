<template>
    <div class="itemsBox">
        <img :src="imgSrc" alt="" >
        <p class="goods-title">{{goodsTitle}}</p>
        <span class="goods_intro">{{goodsIntro}}</span>
        <div class="price">
            <span class="integer">￥{{integer}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        imgSrc:String,
        goodsTitle:String,
        goodsIntro:String,
        integer:Number,
        bigPrice:String,
        time:String
    }
}
</script>

<style scoped>
    .itemsBox{
        display: flex;
        flex-direction: column;
        background: white;
        padding-bottom: .1rem;
    }
    .goods-title{
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: .14rem;
        margin: 2px;
        text-indent: 4px;
    }
    .goods_intro{
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: .12rem;
        color: #9999A6;
        text-indent: 4px;
    }
    .price{
        display: flex;
        align-items: baseline;
        margin: 4px 0px;
    }
    .integer{
        font-size: .16rem;
        color: #FF803A;
    }
    .delete-line-price{
        font-size: .12rem;
        color: #D7D7D7;
        margin-left: .1rem;
        text-decoration: line-through;
    }
    .time{
        background: #FF803A;
        color: white;
        font-size: .12rem;
        border-radius: 2px;
        width: 28%;
        text-align: center;
        margin-left: 8px;
    }
    .itemsBox img{
        width: 100%;
        height: 2.25rem;
    }
</style>
