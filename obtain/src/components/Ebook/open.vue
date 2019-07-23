<template>

  <div>
    <div @click="skip(data)">
            <p style=" font-size: 0.25rem; color: #636363; text-align: center;"><i :class="data.icon"></i></p>
            <p class="title">{{data.title}}</p>
        </div>
        
  </div>
</template>
<script>
export default {
  data(){
    return{
     
    }
  },
  props: ["data"],
  methods: {
    skip(v){
           this.$router.push({path:"/goodbook",query:{val:JSON.stringify(v)}})
       }
  },
 
};
</script>
<style scoped>
.size{
    font-size: 0.25rem;
    color: #636363;
     text-align: center;
}
.title{
    font-size: 0.11rem;
    color: #636363;
    text-align: center;
}
</style>
