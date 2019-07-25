<template>
    <div>
        <div class="topimg">
            <img src="../../static/img/kexuexueyuan.jpg">
        </div>
        <Course v-for="(v,i) in  kexuexueyuandata " :key="i" :data="v"></Course>
       
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
            kexuexueyuandata:[]
        }
    },
    created(){
        // 请求对应字段的数据
           this.axios({
                 //    接口
                 url:'http://39.107.105.57:8084/Course/findByAbility',
                //  对应字段   key唯一    val不定
                params:{
                    college:"科学学院"
                },
                method:'post'
            }).then((ok)=>{
                this.kexuexueyuandata=ok.data.queryResult.list
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