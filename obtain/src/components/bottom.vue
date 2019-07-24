<template>
    <div>
        <ul>
            <router-link to="/home">
                <li @click="funa()"><img :src="boola?'../../static/tu/r/f/ai_.png':'../../static/tu/r/f/aia.png'" alt=""><span :style="boola?'color:black':'color:orange'">发现</span></li>
            </router-link>
            <router-link to="/knowledge">
                <li @click="func()"><img :src="boolc?'../../static/tu/r/f/aid.png':'../../static/tu/r/f/aie.png'" alt=""><span :style="boolc?'color:black':'color:orange'">知识城邦</span></li>
            </router-link>
            <router-link to="/havebuy">
                <li @click="fund()"><img :src="boold?'../../static/tu/r/f/aif.png':'../../static/tu/r/f/aig.png'" alt=""><span :style="boold?'color:black':'color:orange'">已购</span></li>
            </router-link>
            <router-link to="/user">
                <li @click="fune()"><img :src="boole?'../../static/tu/r/f/aih.png':'../../static/tu/r/f/aii.png'" alt=""><span :style="boole?'color:black':'color:orange'">我的</span></li>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            boola:false,
            boolc:true,
            boold:true,
            boole:true,
        }
    },
    props:{
        ona:String,
        onc:String,
        one:String
    },
    methods: {
        funa(){
            this.boola=false
            this.boolb=true
            this.boolc=true
            this.boold=true
            this.boole=true
        },
        funb(){
            this.boola=true
            this.boolb=false
            this.boolc=true
            this.boold=true
            this.boole=true
        },
        func(){
            this.boola=true
            this.boolb=true
            this.boolc=false
            this.boold=true
            this.boole=true
        },
        fund(){
            this.boola=true
            this.boolb=true
            this.boolc=true
            this.boold=false
            this.boole=true
        },
        fune(){
            this.boola=true
            this.boolb=true
            this.boolc=true
            this.boold=true
            this.boole=false
        },
    },
    created() {
        if(this.ona=="发现"){
            this.boola=false
            this.boolb=true
            this.boolc=true
            this.boold=true
            this.boole=true
        }else if(this.onb==""){
            this.boola=true
            this.boolb=false
            this.boolc=true
            this.boold=true
            this.boole=true
        }else if(this.onc=="知识城邦"){
            this.boola=true
            this.boolb=true
            this.boolc=false
            this.boold=true
            this.boole=true
        }else if(this.ond==""){
            this.boola=true
            this.boolb=true
            this.boolc=true
            this.boold=false
            this.boole=true
        }else if(this.one=="我的"){
            this.boola=true
            this.boolb=true
            this.boolc=true
            this.boold=true
            this.boole=false
        }
    },
}
</script>

<style scoped>
ul span{
    font-size: .12rem;
    color: rgba(160, 148, 148, 0.6);
    line-height:.1rem;
}
ul li{
    display: flex;
    flex-direction: column;
    text-align: center;
}
ul li img{
    width:.3rem;
    height:.3rem;
    margin: 0 auto;
}
ul a{
    flex: 1;
    padding: .05rem 0 0 0;
}
ul{
    width: 100%;    
    height:.5rem;
    background: #ffffff;
    display: flex;
    border-top:1px solid #9999;
}
</style>
