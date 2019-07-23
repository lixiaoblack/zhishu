<template>
    <div>
        <div class="righttop">
        <router-link to="/classify/family/quanbu" class="rig">全部</router-link>
        <router-link to="/classify/family/qingzi" class="rig">亲子关系</router-link>
         <router-link to="/classify/family/ertong" class="rig">儿童健康</router-link>
         <router-link to="/classify/family/youer" class="rig">幼儿教育</router-link>
          </div> 
        <router-view></router-view>
    </div>
</template>


<script>
export default {
    created() {
        this.$router.push("/classify/family/quanbu");
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
