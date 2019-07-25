<template>
  <div class="item">
    <div class="addbox">
<!--      方式一：遍历data属性取值数据-->
      <div class="box" v-for="(v,i) in arr" @click="fun(i)" :key="i"  :class="{active : active ==i}">
                <router-link :to="v.url">
                  <span>{{v.title}}</span>
                </router-link>
<!--                //获取子组件传递的参数-->
<!--                <router-view @indexs="indexs"></router-view>-->
      </div>
    </div>
  </div>
</template>

<script>
  // import Slidetitleson from "./slidetitleson"
    export default {
    components:{
      // Slidetitleson
    },
      data(){
        return {

          arr:[
            {title:"全部",url:"/allproduct/newproduct"},
            {title:"最近更新",url:"/allproduct/gift"},
            {title:"商学院",url:"/allproduct/stores"},
            {title:"人文社科",url:"/allproduct/book"},
            {title:"能力学院",url:"/allproduct/relations"},
            {title:"视野学院",url:"/allproduct/business"},
            {title:"科学学院",url:"/allproduct/office"},
            {title:"经济学院",url:"/allproduct/relations"},
            {title:"自然学院",url:"/allproduct/business"},
            {title:"社科学院",url:"/allproduct/office"}
          ],
          active:'',
        }
      },
      methods:{
        fun(i){
          this.active = i;

        },
        //将子组件传递的参数赋值给active
          indexs(num){
            this.active=num;
        }
      }
    }
</script>

<style scoped>
  .addbox{
    width: 1rem;
    height: 6.65rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  .box{
    width: 1rem;
    height: .75rem;
    font-size: .14rem;
    line-height: .75rem;
    text-align: center;
    background-color: white;
    color: #0f0f0f;
    flex-shrink: 0;
  }
  span{
    color: #0f0f0f;
  }
  .active {
    background: #f1f1f3;
  }
  .active a span{
    color: #ff6800;
  }
  .addbox:first-child{
    background: #f1f1f3;
    color:#ff6800;
  }
</style>
