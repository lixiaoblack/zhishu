<template>
    <div>
        <div class="righttop">
        <router-link to="/classify/art/quanbu" class="rig">全部</router-link>
        <router-link to="/classify/art/jianzhu" class="rig">建筑</router-link>
         <router-link to="/classify/art/huihua" class="rig">绘画</router-link>
         <router-link to="/classify/art/chuangji" class="rig">传记</router-link>
          <router-link to="/classify/art/sheji" class="rig">设计</router-link>  
            <router-link to="/classify/art/yishushi" class="rig">艺术史</router-link>
          </div> 
        <router-view></router-view>

      <Allclassify></Allclassify>
    </div>
</template>


<script>
  import  Allclassify from '../components/allclassify'
export default {
    components:{
        Allclassify

    },
    created() {
        this.$router.push("/classify/art/quanbu");
    },
}
</script>

<style scoped>
.righttop{
    margin-top: 6px;
    display:flex;
    overflow-x: auto;
    flex-wrap:wrap;
    flex-shrink: 0;
    border-bottom: 1px solid #e5e5e5;
    margin-left: 15px;
    height: .6rem;
}
.rig{
     margin-right:10px;
    color: #6d6d6d;
}
.rig.router-link-active{
    color:red;
}
</style>
