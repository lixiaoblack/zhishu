<template>
    <div>
        <div class="righttop">
        <router-link to="/classify/sociology/quanbu" class="rig">全部</router-link>
        <router-link to="/classify/sociology/renlei" class="rig">人类史</router-link>
         <router-link to="/classify/sociology/wenhua" class="rig">文化研究</router-link>
         <router-link to="/classify/sociology/quanqiu" class="rig">全球化</router-link>
         <router-link to="/classify/sociology/shehuixinli" class="rig">社会心理与社会行为</router-link>
          <router-link to="/classify/sociology/chengshi" class="rig">城市化</router-link>           
          </div> 
        <router-view></router-view>
        
    </div>
</template>


<script>
export default {

    created() {
        this.$router.push("/classify/sociology/quanbu");
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
