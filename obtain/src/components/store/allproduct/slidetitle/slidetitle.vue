<template>
  <div class="item">
    <div class="addbox">
<!--      方式一：遍历data属性取值数据-->
      <div @indexs="indexs" class="box" v-for="(v,i) in arr" @click="fun(i)" :key="i"  :class="{active : active ==i}">
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
            {title:"新品上市",url:"/allproduct/newproduct"},
            {title:"七夕送礼",url:"/allproduct/gift"},
            {title:"得到文库",url:"/allproduct/stores"},
            {title:"家庭藏书",url:"/allproduct/book"},
            {title:"衍生品",url:"/allproduct/relations"},
            {title:"商务出行",url:"/allproduct/business"},
            {title:"办公好物",url:"/allproduct/office"},
            {title:"商务茶礼",url:"/allproduct/tea"},
            {title:"亲子读物",url:"/allproduct/reader"},
            {title:"日本直采",url:"/allproduct/japan"}
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
  .item{
    /*overflow-y: auto;*/
  }
  .box{
    width: 1rem;
    height: .75rem;
    font-size: .17rem;
    line-height: .75rem;
    text-align: center;
    background-color: white;
    color: #0f0f0f;
    -webkit-flex-shrink: 0;
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
