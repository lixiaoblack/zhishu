<template>
   <div>
        <div class="righttop">
        <router-link to="/classify/economics/quanbu" class="rig">全部</router-link>
        <router-link to="/classify/economics/shichang" class="rig">市场经济</router-link>
         <router-link to="/classify/economics/hongguan" class="rig">宏观经济学</router-link>
         <router-link to="/classify/economics/jinrong" class="rig">金融银行与货币</router-link>
          <router-link to="/classify/economics/zhidu" class="rig">制度经济学</router-link>  
          </div> 
        <router-view></router-view>
    </div>
</template>


<script>
export default {

    created() {
        this.$router.push("/classify/economics/quanbu");
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
    line-height: .35rem;
}
.rig{
    margin-right: 10px;
     color: #6d6d6d;
}
.rig.router-link-active{
    color:red;
}
</style>
