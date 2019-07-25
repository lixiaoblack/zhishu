<template>
    <div>
        <Course v-for="(v,i) in  totaldata " :key="i" :data="v"></Course>
        {{totaldata.queryResult.list[0].courseSubtitle}}
    </div>
</template>
<script>
import Course from '../components/course'

export default {
    components:{
         Course,
    
    },
     data(){
        return {
          totaldata:[]
        }
    },
    created(){
        // 请求对应字段的数据
        //    this.axios({
        //         url:'/link/data',
        //         method:'get'
        //     }).then((ok)=>{
        //         this.totaldata=ok.data.total
        //     })

        this.axios({
                url:'http://39.107.105.57:8084/Course/findByAbility?college=%E5%95%86%E5%AD%A6%E9%99%A2',
                method:'post'
            }).then((ok)=>{
                this.totaldata=ok.data
            })



    },
}
</script>
<style scoped>

</style>