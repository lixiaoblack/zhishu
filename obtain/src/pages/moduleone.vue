<template >
<div>
    <div class="close" @click="fun()">×</div>
    <div class="box">
        <p>全部订单</p>
    </div>
    <div class="divbox" v-for="(v,i) in dingdan" :key="i">
        <img class="divimg" :src="v.img">
        <div class="divcs">
            <p>{{v.text}}</p>
            <span>{{v.zhifu}}</span>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            dingdan:[],
            
        }
    },
    created(){
        
        this.axios({
            url:'/user/data',
            method: 'get'
        }).then((ok)=>{
            console.log(ok.data)
            this.dingdan = ok.data.user[1].dingdan

        })
    },
    methods: {
        fun(){//编程式跳转
            this.$router.push({
                path: "/user",
            });
        },
    },
    beforeRouteEnter (to, from, next) {
        let ls = localStorage;
        if(ls.getItem("用户名")){
            next()
        }else{
            next("/register")
        }
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
    line-height: 100px ;
    padding: 10px;
    height: 0.8rem;
    background-color: rgba(255, 102, 0, 0.856);
}
.divbox{
    display: flex;
    align-items: center;
    padding: 10px;
}
.divimg{
    width: 60px;
    height: 60px;
}
.divcs{
    height: 0.9rem;
    display: flex;
    flex-flow: column;
    /* align-items: center; */
    padding-left: 10px;
}
.divcs p{
    width: 100%;
    font-size: 20px;
    padding-top: 20px;
}
.divcs span{
    font-size: 16px;
}
</style>
