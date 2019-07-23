<template >
<div>
    <div class="close" @click="fun()">×</div>
    <div class="box">
        <p>{{xunzhang.title}}</p>
    </div>
    <div class="divbox">
        <div class="divcs" v-for="(v,i) in xunzhang.name" :key="i">
            <img :src="v.img">
            <span>{{v.txt}}</span>
        </div>
    </div>

</div>
</template>
<script>
export default {
    data(){
        return{
            xunzhang:[],
            idurl:""
        }
    },
    created(){
        this.idurl=this.$route.params.id
        this.axios({
            url:'/user/data',
            method: 'get'
        }).then((ok)=>{
            
            var Xunzhang = ok.data.xuexi.filter((v,i)=>{
                if(v.id==this.idurl){
                    return v.name
                }
            })
            this.xunzhang=Xunzhang[0]
            console.log(this.xunzhang)
        })
    },
    methods: {
        fun(){//编程式跳转
            this.$router.push({
                path: "/user",
            });
        },
    }
}
</script>
<style scoped>
.close{
    font-size: 40px;
    height: 0.5rem;
    margin: 0;
    padding: 0;
}
.box{
    font-size: 24px;
    line-height: 160px ;
    padding: 10px;
    height: 1.2rem;
    background-color: rgba(255, 102, 0, 0.856);
}
.divbox{
    margin-top: 30px;
    display: flex;
    flex-flow:wrap;
    justify-content: space-around;
}
.divcs{
    margin: 10px;
    width: 40%;
    display: flex;
    flex-flow:column;
    font-size: 16px;
    text-align: center;
    align-items:center;
}
.divcs img{
    display: inline-block;
    width: 80px;
    height: 60px;
}
</style>
