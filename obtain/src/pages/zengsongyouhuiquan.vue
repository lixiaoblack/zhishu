<template>
    <div class="content">
         <div class="topback" >
                <span class="arrow" @click="togivefriend()">
                <i class="el-icon-arrow-left" ></i>返回</span>
                <span class="total">选择优惠券</span>
                <span class="nouse" style="color:#999999;">不可用券</span>
        </div>
        <div class="end">
            <div class="fu">
                <div class="nousecard">
                    <p style="font-size:.17rem">不使用优惠券</p>
                    <p style="font-size:.17rem"><i class="el-icon-success"></i></p>
                </div>
       </div>
           <Zengsongyouhuiquan v-for="(v,i) in arr" :key="i" :data="v"></Zengsongyouhuiquan>
        </div>
    </div>
</template>
<script>
import Zengsongyouhuiquan from '../components/zengsongyouhuiquan'
export default {
    data() {
        return {
            arr:[
                {title:"初来得到用户专享"},
                {title:"以德服人1级奖励"},
                {title:"天天想上1级奖励"},
                {title:"终身学习1级奖励"},
                {title:"初来得到用户专享"},
            ],
            // singleprice:this.$route.query.singleprice
        }
    },
    components:{
      Zengsongyouhuiquan
    },
    methods: {
        togivefriend(){
            this.$router.push("/givefriend")
        }
    },
}
</script>
<style scoped>
.topback{
     padding: 0 .16rem;
    height:.5rem; ;
     line-height: .5rem;
    font-size: .2rem;
    position: relative;
}
.nouse{
    position: absolute;
    right: .15rem;
    top: 0;
}
.topback .arrow{
    color: #999999;
    position: absolute;
    left: .16rem;
    font-size: .22rem;
}
.topback .total{
    color: #050505;
    font-weight:bold;
    text-align: center;
}

.nousecard{
    display: flex;
   justify-content: space-between;
    padding: 0 .16rem;
    width: 3.43rem;
    height: .5rem;
    line-height: .5rem;
    background: #ffffff;
    margin: 0 auto;
    margin-bottom: .15rem;
}
.content{
    height: 100%;
    display: flex;
    flex-direction: column;
}
.end{
    flex: 1;
    overflow-y: auto;
}
</style>

