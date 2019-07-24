<template>
    <div class="topIcon">
        <van-nav-bar @click-left="onClickLeft" :title="title" left-text="返回" left-arrow>
            <van-icon size="22px" name="shop-o" slot="right" @click="onClickRight()" />
        </van-nav-bar>
    </div>
</template>
    
<script>
export default {
    props:{
        title:String
    },
    methods: {
        onClickLeft() {
            this.$router.push("/shop");
        },
        onClickRight(){
            this.$router.push("/home");
        }
  }
}
</script>

<style scoped>
    .topIcon{
        position: fixed;
        top: 0px;
        width: 100%;
    }
    .van-icon{
        color: #666666;
    }
    .van-nav-bar__text{
        color: #666666;
    }
</style>
