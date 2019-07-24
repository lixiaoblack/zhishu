<template>
  <div>
    
     <li class="content" @click="skip(data)">
                  <img :src="data.bookImgUrl" />
                <div class="right">
                    <p style="font-size:0.15rem;font-weight:600; margin-bottom:12px">{{data.bookSubtitle}}</p>
                    <p style="font-size:0.11rem; color:#828282; line-height:.18rem">{{data.bookIntro}}</p>
                    <p style="float:right" v-if="data.bookType=='限时特价'">
                        
                        <span class="dis">{{data.bookSprice}}得到贝</span>
                                <span class="dis1">{{data.bookSprice}}得到贝</span>
                        <TryRead></TryRead>
                    </p>
                </div>
     </li>
            
        
  </div>
</template>
<script>
import TryRead from "../../components/Ebook/try-read";
export default {
  /////购买组件
  components: {
    TryRead
  },
   props: ["data"],
   methods: {
       skip(val){
           this.$router.push({name:"BOOKDEL",query:{id:JSON.stringify(val.bookId)}})
       }
   },
};
</script>
<style scoped>
.box {
  padding: 0 0.16rem;
}
.content {
  margin: 0.1rem 0 0 0;
  padding: 0.12rem;
 
  display: flex;
}
.content img {
  width: 80px;
  height: 105px;
  margin-right: 0.14rem;
}
h4 {
  font-size: 0.2rem;
  font-weight: 600;
  line-height: 0.4rem;
}
.dis{
  font-size:0.11rem;
   color: #636363;
    
    text-decoration: line-through;
}
.dis1{
  font-size:0.11rem;
   color: #ff8529;
    
}
</style>
