<template>
    <div>
        <div class="header">
         
                <p :class="val.icon"></p>
                <p class="title">{{val.title}}</p>
          
         <Author :data="夏红"></Author>
           
       </div>
    </div>
</template>
<script>
import Author from "../../components/Ebook/author"
export default {
   components:{
         Author
       },
     data() {
      
    return {
        arr:[{}],
        val:{},
      type:""
    };
  },
    beforeRouteEnter(to, from, next) {
    next((d) => {
      d.val =JSON.parse (to.query.val);
     d.type=to.query.type
    });
  },
  created() {
     
         this.axios.get("/listen").then(ok=> {
         
              this.arr=ok.data.listen
         
           })
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
</style>
