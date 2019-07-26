<template>
    <div>
        <div v-if="bool">
             <Loading></Loading>
        </div>
        <div v-else>
            <Course v-for="(v,i) in totaldata " :key="i" :data="v"></Course>
        </div>
    </div>
</template>
<script>
import Course from '../components/course'
import Loading from "../components/loading";
export default {
    components:{
         Course,
         Loading
    },
     data(){
        return {
            totaldata:[],
            linkTitle:this.$route.query.title,
            bool:true
        }
    },
    created(){
        // 请求对应字段的数据
           this.axios({
                url:'http://39.107.105.57:8084/Course/loadAll',
                method:'get'
            }).then((ok)=>{
                this.totaldata=ok.data.queryResult.list
                if(this.totaldata!=[]){
                    this.bool=false
                }else{
                    this.bool=true
                }
            })
    },
    watch: {
        linkTitle(val){
        }
    },
    
}
</script>
<style scoped>
span{
    font-size: .14rem;
}
</style>

