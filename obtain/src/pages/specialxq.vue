<template>
    <div class="box">
        <Xqnav :title="arr.courseSubtitle"></Xqnav>
        <div class="ss" v-if="bool">
            <img :src="arr.topImage">
            <img :src="arr.bottomImage" style="margin-top: -1px;">
            <p>{{arr.courseFeatureIntroI}}</p>
            <p>{{arr.courseFeatureIntroII}}</p>
            <p>{{arr.courseTeacherIntro}}</p>
            <p>{{arr.coursePurchaseAttention}}</p>
        </div>
        <div v-else class="load">
            <Load></Load>
        </div>
    </div>
</template>

<script>
import Xqnav from './../components/specialxq/xqnav'
import Load from './../components/load'
export default {
    components:{
        Xqnav,
        Load
    },
    data() {
        return {
            arr:{},
            bool:false
        }
    },
    created(){
        this.axios({
            url:"http://39.107.105.57:8084/Course/findHomePage",
            method:"post",
        }).then((ok)=>{
            console.log(ok.data.queryResult.list)
            ok.data.queryResult.list.forEach((v,i)=>{
                if(v.courseClassId==this.$route.params.id){
                    this.arr=v;
                    if(this.arr!={}){
                        setTimeout(() => {
                            this.bool=true
                        }, 500);
                    
                    }else{
                        this.bool=false
                    }
                }
            })
        })
    },
}
</script>

<style scoped>
.load{
    height:100%;
    width:100%;
    background:#00AEEF;
}
    .box{
        height:100%;
        background:#E4E4E4;
        display: flex;
        flex-direction: column;

    }
    .ss{
        flex:1;
        font-size:24px;
        overflow-y:auto; 

    }
    img{
        width:100%;
    }
    p{
        font-size:.16rem;
        margin: .5rem .25rem .5rem .25rem;
        line-height:.3rem;
    }
</style>
