<template>
  <div>
    
     <li class="content" @click="skip(data)">
                  <img :src="data.listenImgUrl" />
                <div class="right">
                    <p style="font-size:0.15rem;font-weight:600; margin-bottom:12px">{{data.listenSubtitle}}</p>
                    <p style="font-size:0.11rem; color:#828282; line-height:.18rem">{{data.listenAuthorValidity}}</p>
                    <p style="font-size:0.11rem; color:#828282; line-height:.18rem">{{data.listenAudioTime}}</p>
                    <div class="buy">
                      <p  style="font-size:0.11rem; color:#ed742f;">{{data.listenPrice}}得到贝</p>
                      <p class="read" @click.stop="buy(data)">购买</p>
                     
                    </div>
                </div>
     </li>
            
        
  </div>
</template>
<script>
import TryRead from "../../components/Ebook/try-read";
export default {
  components: {
    TryRead
  },
   props: ["data"],
   methods: {
       skip(val){
           this.$router.push({name:"ListenDetail",query:{id:JSON.stringify(val.listenId)}})
       },
       buy(val){
         this.$router.push({name:"Buy",query:{id:JSON.stringify(val.listenId)}})
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
  /* padding: 0.12rem; */
 
  display: flex;
}
.content img {
  width: .8rem;
  height: 1rem;
  margin-right: 0.12rem;
}
h4 {
  font-size: 0.2rem;
  font-weight: 600;
  line-height: 0.4rem;
}

    .dis1{
  font-size:0.11rem;
   color: #ff8529;
  /* float: right; */
}
.buy{
  display: flex;
 margin-left: 1.5rem;
line-height: .3rem;

}
 .read{
        width: 0.75rem;
        line-height: .3rem;
        background: #e1793c;
        color:white;
        border-radius: 0.15rem ;
        font-size: .13rem;
        text-align: center;
        font-weight: 600; 
    }
    
</style>
