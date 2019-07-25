<template>
    <div class="content">
         <div class="topback">
            <span class="arrow" @click="back()">
                <i class="el-icon-arrow-left"></i>返回
            </span>
        </div>
       <div class="end">
           <div class="img">
                <img src="../../static/img/dagang.jpg">
            </div>
       </div>
    </div>
</template>
<script>
export default {
     data() {
        return {
        show: false
         }
     },
     methods: {
         back(){
             this.$router.go(-1)
         }
  }
}
</script>
<style scoped>
img{
    width: 100%;
}
.content{
    display: flex;
    height: 100%;
    flex-direction: column;
}
.topback {
  padding: 0 0.16rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: .14rem;
  color: #999999;
}
.end{
    flex: 1;
    overflow-y: auto;
}
</style>
