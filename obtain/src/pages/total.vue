<template>
    <div>
        <Course v-for="(v,i) in totaldata " :key="i" :data="v"></Course>
    </div>
</template>
<script>
import Course from '../components/course'
export default {
    components:{
         Course
    },
     data(){
        return {
            totaldata:[],
            linkTitle:this.$route.query.title
        }
    },
    created(){
        // 请求对应字段的数据
           this.axios({
                url:'http://39.107.105.57:8084/Course/loadAll',
                method:'get'
            }).then((ok)=>{
                this.totaldata=ok.data.queryResult.list
            })
    },
    watch: {
        linkTitle(val){
            console.log(val)
        }
    },
    
}
</script>
<style scoped>
span{
    font-size: .14rem;
}
</style>

