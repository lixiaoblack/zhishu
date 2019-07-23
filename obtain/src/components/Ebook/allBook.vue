<template>
  <div>
    
     <li class="content" @click="skip(data)">
                  <img :src="data.bookImgUrl" />
                <div class="right">
                    <p style="font-size:0.15rem;font-weight:600; margin-bottom:12px">{{data.bookSubtitle}}</p>
                    <p style="font-size:0.11rem; color:#828282; line-height:.18rem">{{data.bookIntro}}</p>
                    <p style="float:right">
                        <span class="read" @click.stop="tryBook()">试读</span>
                    </p>
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
           this.$router.push({name:"BOOKDEL",query:{id:JSON.stringify(val.bookId)}})
       },
        tryBook(){
      this.$router.push({name:"ReadBook"})
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
  margin-right: 0.12rem;
}
h4 {
  font-size: 0.2rem;
  font-weight: 600;
  line-height: 0.4rem;
}
 .read{
        width: 0.75rem;
        line-height: .3rem;
        background: #f4f3f1;
        color:#e1793c;
        border-radius: 0.15rem ;
        font-size: .13rem;
        text-align: center;
        font-weight: 600; 
    }
</style>
