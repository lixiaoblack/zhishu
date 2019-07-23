<template>
    <div>
      <div class="header">
         
                <p :class="val.icon"></p>
                <p class="title">{{val.title}}</p>
          
          
           
       </div>
        <ul>
            <Host v-for= "(v,i) in arr" :key= "i" :data= "v"></Host>
        </ul>
    </div>
</template>
<script>
import Host from "../../components/Ebook/hotList"

export default {
    components:{
        Host,
       
       
    },
     data() {
    return {
        arr:[],
        val:{},
        type:{}
    };
  },
    created() {
      if(this.type=="ebook"){
         this.axios.get("/jsondata/abc").then(ok=> {
           this.arr=ok.data.EBook
           
       })
      }else if(this.type=="listen"){
          this.axios.get("/listen").then(ok=> {
           this.arr=ok.data.listen
          })
      }
      
  },
  beforeRouteEnter(to, from, next) {
    next((d) => {
      d.val =JSON.parse (to.query.val);
      d.type=to.query.type
    });
  }
}
</script>
<style scoped>
.header i{
    font-size: .3rem;
}
.header{
   text-align: center;
   font-size:.25rem;
   display: flex;
 justify-content: center;
 padding-top: .2rem;
 
}
.title{
    font-size: .2rem;
    font-weight: 600;
}
</style>
