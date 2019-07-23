<template>
  <div class="addTitle">
    <div class="addTitle_box" v-for="(v,i) in arr" @click="fun(v.title)" :key="i"  :class="{aa : aa == v.title}">
      <router-link :to="v.url">
        <span class="spana">{{v.title}}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          arr:[
            {title:"综合 ▼",url:"/allproduct"},
            {title:"最新 ▼",url:"/allproduct/newproduct"},
            {title:"销量 ▼",url: "/allproduct/stores"},

          ],
          aa:''
        }
      },
      methods:{
        fun(title){
          this.aa = title;
        }
      }
    }
</script>

<style scoped>
  .addTitle{
    height:.6rem;
    display: flex;
    margin-left:.07rem;
    justify-content: space-between;
    text-align: center;
    background-color: white;
    border-radius: 4px;
    margin-right: .07rem;
  }
  .addTitle_box{
    flex: 1;
    text-align: center;
    height:.6rem;
    line-height: .6rem;
  }
  .spana{
    color: #0f0f0f;
    font-size: .18rem;
    display: block;
  }
  .aa a span{
    color: #ff6800;
  }

</style>
