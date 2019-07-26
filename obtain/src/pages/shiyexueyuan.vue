<template>
    <div>
        <div v-if="bool">
             <Loading></Loading>
        </div>
        <div v-else>
            <div class="topimg">
                 <img src="../../static/img/shiyexueyuan.jpg">
            </div>
             <Course v-for="(v,i) in shiyexueyuandata " :key="i" :data="v"></Course>
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
            shiyexueyuandata:[],
            bool:true
        }
    },
    created(){
        // 请求对应字段的数据
           this.axios({
                  //    接口
                 url:'http://39.107.105.57:8084/Course/findByAbility',
                //  对应字段   key唯一    val不定
                params:{
                    college:"视野学院"
                },
                method:'post'
            }).then((ok)=>{
                this.shiyexueyuandata=ok.data.queryResult.list
                if(this.shiyexueyuandata!=[]){
                    this.bool=false
                }else{
                     this.bool=true
                }
            })
    },
}
</script>
<style scoped>
.topimg img{
    width:3.44rem;
    height:.84rem;
}
.topimg{
       padding: .15rem;
       background: #f7f7f8;
}
</style>