<template>
    <div class="footerContent">
        <router-link to="/shop" @click="funa()">
            <div class="item" :style="boola?'color:black':'color:orange'">
                <span class="iconfont icon-store_icon"></span>
                <p>商城</p>
            </div>
        </router-link>
        <router-link to="/allproduct/newproduct" @click="funb()">
            <div class="item" :style="boolb?'color:black':'color:orange'">
                <span class="iconfont icon-all"></span>
                <p>全部商品</p>
            </div>
        </router-link>
        <router-link to="/shopcart" @click="func()">
            <div class="item" :style="boolc?'color:black':'color:orange'">
                <span class="iconfont icon-gouwuche"></span>
                <p>购物车</p>
            </div>
        </router-link>
        <router-link to="/havebuy" @click="fund()">
            <div class="item" :style="boold?'color:black':'color:orange'">
                <span class="iconfont icon-dingdan"></span>
                <p>订单</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            boola:false,
            boolb:true,
            boolc:true,
            boold:true,
        }
    },
    props:{
        title:String
    },
    created() {
        if(this.title=="商城"){
            this.boola=false
            this.boolb=true
            this.boolc=true
            this.boold=true
        }else if(this.title=="全部商品"){
            this.boola=true
            this.boolb=false
            this.boolc=true
            this.boold=true
        }else if(this.title=="购物车"){
            this.boola=true
            this.boolb=true
            this.boolc=false
            this.boold=true
        }else if(this.title=="订单"){
            this.boola=true
            this.boolb=true
            this.boolc=true
            this.boold=false
        }
    },
    
}
</script>

<style scoped>
    .footerContent{
        width: 100%;
        height: .58rem;
        display: flex;
        justify-content: space-around;
        background: white;
        align-items: center;
        flex-direction: row;
    }
    .item{
        text-align: center;
    }
    .iconfont{
        font-size: .18rem;
    }
    a{
        color: #333333;
    }
    p{
      font-size: .15rem;
    }
</style>
