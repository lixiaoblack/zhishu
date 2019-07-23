<template>
  <div class="body">
    <p class="header">
      <span>返回</span>
      <span class="el-icon-link"></span>
    </p>
    <div class="content">
      <img :src="arr.listen_" />
      <div class="right">
        <p style="font-size:0.15rem;font-weight:600; margin-bottom:12px">
          <span>{{arr.listen_subtitle}}</span>
          <span>{{arr.listen_author}}解读</span>
        </p>

        <p style="font-size:12px; color: #ccc;margin-top:0.2rem">
          <span>{{arr.listen_audio_time}}</span>
         
        </p>
      </div>
    </div>
    <div class="like">
      <p style="font-size:.2rem;font-weight:600;">猜你喜欢</p>
      <ListenL v-for="(v,i) in likes" :key=i :data="v"></ListenL>
    </div>
    <p>{{arr}}</p>
  </div>
</template>
<script>
import  ListenL from "../../components/Ebook/listenL";
export default {
    components:{
        ListenL
    },
    data(){
    return{
        id:null,
        likes:[],
        arr:{}
    }
    },
    beforeRouteEnter(to, from, next) {
    
    next((d) => {
      d.id =JSON.parse(to.query.id);
    });
  },
  created() {
     this.axios.get("/listen").then(ok=> {
           let val=ok.data.listen;
          //console.log(val)
          val.map(v=>{
              if(v.listen_class_id ==0){
                  
                this.likes.push(v)

              }else if(v.listen_id==this.id){
                this.arr=v
              }
              return this.arr
          });
          
           
  })
  },
};
</script>
<style scoped>
.body {
  font-size: 0.13rem;
  padding: 0 0.12rem;
}
.header {
  display: flex;
  justify-content: space-between;
}
</style>
