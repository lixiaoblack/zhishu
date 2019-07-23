<template>
  <div class="box">
  <router-link :to="urls">
        <span>{{titles}}</span>
  </router-link>
<!--  <router-view></router-view>-->
  </div>
</template>

<script>
    export default {
      props:{
        titles:String,
        urls:String
      }
    }
</script>

<style scoped>
  .box{
    width: 1rem;
    height: .75rem;
    font-size: .17rem;
    line-height: .75rem;
    text-align: center;
    background-color: white;
  }
  span{
    color: #0f0f0f;
  }

</style>
