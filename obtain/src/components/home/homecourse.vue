<template>
    <div class="all" @click="todetails(data)">
        <img :src="imgUrl">
        <span>{{title}}</span>
        <span>{{txtOne}}</span>
        <span class="txtTwo">{{txtTwo}}</span>
        <span>{{people}}</span>
        <span>{{num}}讲/{{price}}得到贝</span>
        <!-- <img src="../../../static/img/tu.jpg">
        <span>少时诵诗书</span>
        <span>少时诵诗书少时诵诗书少时诵诗书</span>
        <span>少时诵诗书少</span>
        <span>1212人加入学习</span>
        <span>21讲/23.00得到贝</span> -->
    </div>
</template>

<script>
export default {
    props:{
        imgUrl:String,
        title:String,
        txtOne:String,
        txtTwo:String,
        people:Number,
        num:Number,
        price:Number,
        data:Object
    },
    methods: {
        todetails(val){
            this.$router.push({path:"/details",query:{id:JSON.stringify(val.courseClassId)}})
        }
    },
}
</script>

<style scoped>
    .all{
        float: left;
        font-size: 12px;
        background: #ffffff;
        padding: 5px 11px 10px;
    }
    .all img{
        height: .84rem;
        width: 1.5rem;
        border-radius: 8px;
    }
    .all span:nth-of-type(1){
        color: #333333;
        font-size: .13rem;
        margin-top: 6px;
    }
    .all span:nth-of-type(2){
        color: #666666;
        font-size: .12rem;
        width: 1.5rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .all span:nth-of-type(3){
        color: #878c97;
        font-size: .11rem;
    }
    .all span:nth-of-type(4){
        color: #878c97;
        font-size: .11rem;
    }
    .all span:nth-of-type(5){
        color: #ff6b00;
        font-size: .11rem;
    }
    .all span{
        line-height: .18rem;
    }
    .txtTwo{
        width: 1.5rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis
    }
</style>
