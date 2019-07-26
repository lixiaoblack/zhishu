<template>
    <div class="body">
      <div class="header">
         
                <p :class="val.icon"></p>
                <p class="title">{{val.title}}</p>
          
         
           
       </div>
    
        <ul >
             <ListenL v-for="(v,i) in arr" :key="i" :data="v" ></ListenL>
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
     
         this.axios.get("http://39.107.105.57:8084/listen/selsctByListenType",
         {params:{listentype:"精选书单"}}).then(ok=> {
         console.log(ok.data.queryResult.list)
              this.arr=ok.data.queryResult.list
         
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
.body{
  padding: 0 .12rem;
}
</style>
