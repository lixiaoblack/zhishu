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
            this.$router.go(-1);
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
</style>
