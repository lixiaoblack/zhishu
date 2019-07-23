<template>
    <div>
        <div class="righttop">
        <router-link to="/classify/finance/quanbu" class="rig">全部</router-link>
        <router-link to="/classify/finance/licai" class="rig">理财投资方法</router-link>
         <router-link to="/classify/finance/guoji" class="rig">国际金融</router-link>
         <router-link to="/classify/finance/jinrongshi" class="rig">金融史</router-link>
          <router-link to="/classify/finance/jinrongyinhang" class="rig">金融银行</router-link>  
            <router-link to="/classify/finance/jinronggongju" class="rig">金融工具</router-link>
          </div> 
        <router-view></router-view>
    </div>
</template>


<script>
export default {
    created() {
        this.$router.push("/classify/finance/quanbu");
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
