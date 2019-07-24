<template>
    <div class="all">
        <div class="allTop">
            <p>每天听本书</p><router-link to="/listen"><span>全部</span></router-link>
        </div>
        <div class="flot" @click="skip(data)">
            <img :src="imgUrl">    
            <div>
                <p>{{subtitle}}</p>
                <span>{{courseFeatureIntroI}}</span>
                <span>{{time}}</span>
            </div>
            <span class="price">{{booksSprice}}得到贝</span>
        </div>
        <div class="goodBook" @click="skip(data)">
            <p class="goods">精选书单</p>
            <img :src="imgUrl"> 
            <div>
                <p>{{subtitle}}</p>
                <span class="courseI">{{courseFeatureIntroI}}</span>
                <div style="margin-right:8px">共3本</div><div>1.2万人看过</div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props:{
        subtitle:String,
        courseFeatureIntroI:String,
        booksSprice:Number,
        time:String,
        imgUrl:String,
        data:Object
    },
    methods: {
         skip(val){
           this.$router.push({name:"ListenDetail",query:{id:JSON.stringify(val.listenId)}})
       },
    },
}
</script>

<style scoped>
    .all{
        float: left;
        font-size: 12px;
        margin-left: 0.15rem;
        margin-right: .15rem;
        margin-top: .22rem;
        background: #ffffff;
        padding: 0 10px;
    }
    .allTop{
        clear: both;
        line-height: .52rem;
        height: .52rem;
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: .15rem;
    }
    .allTop p{
        float: left;
        font-size: .17rem;
    }
    .allTop span{
        float: right;
        font-size: .14rem;
        color: #ff6b00;
    }
    .flot{
        float: left;
        padding-bottom: .15rem;
        margin-bottom: .15rem;
        border-bottom: 1px solid #e5e5e5;
        width: 100%;
    }
    .flot p{
        font-size: .14rem;
        margin-bottom: .11rem;
    }
    .flot span{
        font-size: .12rem;
        color:#858585;
        display: block;
        line-height: .20rem;
    }
    .flot img{
        width:.83rem;
        height: 1.1rem;
        float: left;
        border-radius: 8px;
        margin-right: .12rem;
    }
    .flot .price{
        float: right;
        color: #ff6b00;
    }
    .goodBook img{
        width:.83rem;
        height: .83rem;
        float: left;
        border-radius: 8px;
        margin-right: .12rem;
    }
    .goodBook div p{
        font-size: .14rem;
        margin-bottom: .11rem;
    }
    .goodBook div span{
        font-size: .12rem;
        color:#858585;
        display: block;
        margin-bottom: .06rem;
    }
    .goodBook div div{
        display: inline-block;
        color: #888d98;
    }
    .goods{
        clear: both;
        font-size: .13rem;
        margin-bottom: .17rem;
    }
    .courseI{
        width: 2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }
    .goodBook{
        padding-bottom: .36rem;
    }
</style>
