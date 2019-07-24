<template>
    <div class="content">
          <div class="topback" >
                <span class="arrow" @click="tohome()">
                <i class="el-icon-arrow-left"></i>返回</span>
          </div>
     <div class="end">
           <Details></Details>
       <Bottombar></Bottombar>
     </div>
    </div>
</template>
<script>
import Details from '../components/details'
import Bottombar from '../components/bottombar'
export default {
    data() {
        return {
            
        }
    },
    components:{
        Details,
        Bottombar
    },
     methods: {
         tohome(){
            this.$router.push("/course")
        }
    },
}
</script>
<style scoped>
.content{
    height: 100%;
    display: flex;
    flex-direction: column;
}
a{
 color: #666666;
}
.topback{
     padding: 0 .16rem;
    height:.5rem; ;
     line-height: .5rem;
    font-size: .2rem;
    position: relative;
}
.end{
    flex: 1;
    overflow-y: auto;
}
.topback .arrow{
    color: #999999;
    position: absolute;
    left: .16rem;
}
</style>

