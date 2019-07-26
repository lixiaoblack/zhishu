<template>
    <div>
             <div class="contentlist total" @click="todetails(data)">
                <div class="left">
                    <img :src="data.courseImgurl ">
                </div>
            <!-- 父空间不足  不缩小  不换行  -->
            <div class="right" style="display:felx;flex-wrap:nowrap;flex-shrink:0">
                <p class="subtitle">{{data.courseSubtitle}}</p>
                <p class="books_summary">{{data.courseSummary}}</p>
                <p class="author">{{data.courseAuthor}}</p>
                <div class="right_bottom" >
                    <span class="spanleft">{{data.courseClassNum}}讲/{{data.courseSprice}}得到贝</span>
                    <span class="spanright">{{data.courseStudyPeoples}}人加入学习</span>
                </div>
            </div>
        </div>
      
    </div>
</template>
<script>
export default {
    data() {
        return {
            bool:true
        }
    },
    props:["data"],
    methods: {
        todetails(val){
            this.$router.push({path:"/details",query:{id:JSON.stringify(val.courseClassId)}})
          
        }
    },
}
</script>
<style scoped>

.left img{
    width: .84rem;
    height: 1.1rem;
}
.left{
    margin-right: .17rem;
}
.right{
    float: left;
}
.contentlist{
    padding: .15rem;
    display: flex;
    background: #f7f7f8;
}
.subtitle{
    font-size: .15rem;
    font-weight: bold;
    color: #333333;
   
}
.books_summary{
     font-size: .12rem;
     color: #6b6b6b;
     margin-top: .1rem;
}
.author{
    font-size:  .12rem;
    color: #878c97;
       margin-top: .1rem;
}
.right_bottom span{
    float: left;
    display: block;
    margin-top: .28rem;
}
.right_bottom .spanleft{
    margin-right: .545rem;
}
.right_bottom .spanleft{
    font-size: .12rem;
    color:#ff6b00;
       font-weight: bold;
}
.right_bottom .spanright{
    font-size: .12rem;
    color:#878c97;
}
</style>

