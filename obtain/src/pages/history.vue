<template>
    <div>
        <div class="righttop">
        <router-link to="/classify/history/quanbu" class="rig">全部</router-link>
        <router-link to="/classify/history/erzhang" class="rig">二战</router-link>
         <router-link to="/classify/history/shijie" class="rig">世界史</router-link>
         <router-link to="/classify/history/wenming" class="rig">文明史</router-link>
          <router-link to="/classify/history/yishu" class="rig">艺术史</router-link>  
          </div> 
        <router-view></router-view>
    </div>
</template>


<script>
export default {
    created() {
        this.$router.push("/classify/history/quanbu");
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
    margin-right: 20px;
     color: #6d6d6d;
}
.rig.router-link-active{
    color:red;
}
</style>
