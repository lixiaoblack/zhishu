<template>
    <div class="box">
        <Nav></Nav>
        <div class="footer" v-if="bool">
            <Subject v-for="(v,i) in arr" :key="i" :img="v.courseTitleImgurl" :title="v.courseSubtitle" :time="v.courseUpdateTime" :num="v.courseClassId"></Subject>
        </div>
        <div v-else class="load">
            <Load></Load>
        </div>
    </div>
</template>

<script>
import Nav from '../components/special/nav'
import Subject from '../components/special/subject'
import Load from '../components/load'
export default {
    components:{
        Nav,
        Subject,
        Load
    },
    data() {
        return {
            arr:[],
            bool:false,
        }
    },

    created() {
        this.axios({
            url:"http://39.107.105.57:8084/Course/findHomePage",
            method:"post"
        }).then((ok)=>{
            this.arr=ok.data.queryResult.list
             if(this.arr!=[]){
                setTimeout(() => {
                    this.bool=true
                }, 500);
               
            }else{
                this.bool=false
            }
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
    background:#f8f9fa;
    display: flex;
    flex-direction: column;

}
.footer{
    flex:1;
    width:100%;
    overflow-y:auto; 
}
</style>
