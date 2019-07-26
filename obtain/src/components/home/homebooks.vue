<template>
    <div class="all">
        <div class="allTop">
            <p>电子书独家首发</p><router-link to="/eBook"><span>全部</span></router-link>
        </div>
        <div class="flot" @click="skip(sss)">
            <img :src="imgUrl">    
            <div>
                <p>《{{subtitle}}》</p>
                <span class="over">{{courseFeatureIntroI}}</span>
                <span>21分44秒</span>
            </div>
            <span class="price">{{booksSprice}}得到贝</span>
        </div>
        <div class="goodBook">
            <p class="goods">新书上架</p>
            <div @click="skip(sss)" v-for="(v,i) in bookDArr" :key="i">
                <img :src="v.bookImgUrl"> 
                <span class="titleS">{{v.bookSubtitle}}</span>
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
        imgUrl:String,
        sss:Object
    },
    data() {
        return {
            bookDArr:[]
        }
    },
    methods: {
        skip(val){
           this.$router.push({name:"BOOKDEL",query:{id:JSON.stringify(val.bookId)}})
       }
    },
    created() {
        this.axios({
            url:"http://39.107.105.57:8084/findAll",
            method:"get"
        }).then((ok)=>{
            // console.log(ok)
            for(var i=0; i<3; i++){
                this.bookDArr.push(ok.data.queryResult.list[parseInt(Math.random()*40)])
            }
        })
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
        line-height: .24rem;
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
        height: 1.1rem;
        border-radius: 8px;
    }
    .goodBook div{
        float: left;
        margin-right: .3rem;
    }
    .goodBook div:nth-last-of-type(1){
        margin-right: 0;
    }
    .goods{
        font-size: .13rem;
        margin-bottom: .17rem;
    }
    .titleS{
        width: .88rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 8px 0;
        text-indent: 8px;
    }
    .flot .over{
        height: .42rem;
        overflow: hidden;
    }
</style>
