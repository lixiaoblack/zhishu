<template>
    <div class="cir">
        <div class="left">
            <p>{{title}}</p>
            <p>{{conment}}</p>
            <p style="display:flex;margin-top:8px">
                <span style="margin-right:8px">{{price}}得到贝</span>
            </p>
        </div>
        <img :src="imgUrl">
    </div>
</template>

<script>
export default {
    props:{
        title:String,
        conment:String,
        price:Number,
        imgUrl:String
    }
}
</script>

<style scoped>
    .cir{
        font-size: 12px;
        display: flex;
        margin-left: .15rem;
        margin-right: .15rem;
        padding: 15px;   
        background: #fff;
    }
    .left{
        margin-top: 10px;
    }
    .left p{
        line-height: .25rem;
        text-indent: 12px;
    }
    .left p:nth-child(1){
        width: 2rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #333333
    }
    .left p:nth-child(2){
        width: 2rem;
        color: #878c97
    }
    .left p:nth-child(3){
        color: #ff6b00;
        font-size: .11rem;
    }
    img{
        width:.83rem;
        height: 1.1rem;
        border-radius: 8px;
        margin-left: .15rem;
    }
</style>
