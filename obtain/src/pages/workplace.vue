<template>
    <div>
        <div class="righttop">
        <router-link to="/classify/workplace/quanbu" class="rig">全部</router-link>
        <router-link to="/classify/workplace/shuohua" class="rig">说话沟通</router-link>
         <router-link to="/classify/workplace/mubiao" class="rig">目标管理</router-link>
         <router-link to="/classify/workplace/xuexi" class="rig">学习方法</router-link>
          <router-link to="/classify/workplace/shijian" class="rig">时间管理</router-link>  
          </div> 
        <router-view></router-view>
    </div>
</template>


<script>
export default {
    created() {
        this.$router.push("/classify/workplace/quanbu");
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
    margin-right: 10px;
     color: #6d6d6d;
}
.router-link-active{
    color:red;
}
</style>