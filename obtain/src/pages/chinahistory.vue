<template>
    <div>
        <div class="righttop">
        <router-link to="/classify/chinahistory/quanbu" class="rig">全部</router-link>
        <router-link to="/classify/chinahistory/xiashangzhou" class="rig">夏商周</router-link>
         <router-link to="/classify/chinahistory/wenjin" class="rig">魏晋</router-link>
         <router-link to="/classify/chinahistory/songdai" class="rig">宋代</router-link>
          <router-link to="/classify/chinahistory/mingdai" class="rig">明代</router-link>  
            <router-link to="/classify/chinahistory/tangdai" class="rig">唐代</router-link>
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
        this.$router.push("/classify/chinahistory/quanbu");
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
