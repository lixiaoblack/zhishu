<template>
    <div>
        <li @click="funa()" v-if="this.bool">{{txta}}</li>
        <li @click="funb()" v-else>{{txta}}</li>
        <div class="fixed" v-if="fixed">
            请购买后阅读
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
           fixed:false
        }
    },
    props:{
        txta:String,
        bool:Boolean
    },
    methods: {
        funa(){
            this.$router.push({path:"/read"})
        },
        funb(){
            this.fixed=true
            setTimeout(()=>{
                this.fixed=false
            },600)
        }
    },

}
</script>

<style scoped>
li{
    font-size: .15rem;
    color: #666;
    line-height: .38rem;
}
.fixed{
    width:2rem;
    height: .5rem;
    border-radius: 7px;
    border:1px solid black;
    opacity: .75;
    background:white;
    position:fixed;
    top:50%;
    left:50%;
    margin-left:-1.06rem;
    margin-top:-0.46rem;
    line-height: .5rem;
    text-align: center; 
    font-size:.15rem;
}
</style>
