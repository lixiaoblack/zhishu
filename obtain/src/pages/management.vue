<template>
    <div>
        <div class="righttop">
        <router-link to="/classify/management/quanbu" class="rig">全部</router-link>
        <router-link to="/classify/management/chuangye" class="rig">创业</router-link>
         <router-link to="/classify/management/lingdao" class="rig">领导力</router-link>
         <router-link to="/classify/management/qiye" class="rig">企业竞争力</router-link>
          <router-link to="/classify/management/tuandui" class="rig">团队管理</router-link>  
            <router-link to="/classify/management/zuzhi" class="rig">组织行为</router-link>
          </div> 
        <router-view></router-view>
    </div>
</template>


<script>
export default {
    created() {
        this.$router.push("/classify/management/quanbu");
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
.rig.router-link-active{
    color:red;
}
</style>
