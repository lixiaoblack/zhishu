<template >
<div>
    <div class="close" @click="fun()">×</div>
    <div class="divbox" v-for="(v,i) in lishi" :key="i">
        <p><span></span>{{v.riqi}}</p>
        <div class="divcs">
            <p>{{v.shijian}}</p>
            <span>{{v.text}}</span>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            lishi:[]
        }
    },
    created(){
        
        this.axios({
            url:'/user/data',
            method: 'get'
        }).then((ok)=>{
            console.log(ok.data)
            this.lishi = ok.data.neirong[0].lishi

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
.divbox{
    display: flex;
    flex-flow: column;
    padding: 10px;
}
.divbox>p{
    font-size: 22px;
}
.divbox>p>span{
    display: inline-block;
    width: 10px;
	height: 10px;
	border: 4px solid green;
	border-radius: 50%;
	opacity: 0.5;
    margin-right: 4px;
    margin-left: -6px;
}
.divcs{
    border-left: 1px solid #ccc;
    height: 0.9rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-left: 10px;
}
.divcs p{
    width: 80%;
    font-size: 20px;
    padding-top: 20px;
}
.divcs span{
    font-size: 16px;
}
</style>
