<template>
    <div>
        <div class="righttop">
        <router-link to="/classify/medicalhealth/quanbu" class="rig">全部</router-link>
        <router-link to="/classify/medicalhealth/aizheng" class="rig">癌症</router-link>
         <router-link to="/classify/medicalhealth/jiangkang" class="rig">健康养生</router-link>
         <router-link to="/classify/medicalhealth/jiyin" class="rig">基因编程</router-link>
          <router-link to="/classify/medicalhealth/yixue" class="rig">医学</router-link>  
            <router-link to="/classify/medicalhealth/shengming" class="rig">生命科学</router-link>
          </div> 
        <router-view></router-view>
    </div>
</template>


<script>
export default {
    created() {
        this.$router.push("/classify/medicalhealth/quanbu");
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
