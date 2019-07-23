<template>
    <div>
      <div class="header">
         
                <p :class="val.icon"></p>
                <p class="title">{{val.title}}</p>
          
         
           
       </div>
    
        <ul >
             <ListenL v-for="(v,i) in arr" :key="i" :data="v" style="margin:0.1rem"></ListenL>
        </ul>
    </div>
</template>
<script>
import ListenL from "../../components/Ebook/listen_like"

export default {
    components:{
        ListenL,
       
       
    },
     data() {
    return {
        arr:[{}],
        val:{},
      type:""
    };
  },
    created() {
     
         this.axios.get("/listen").then(ok=> {
         
              this.arr=ok.data.listen
         
           })
         
    
      
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
