<template>
    <div class="content">
        <div class="item">
            <span class="iconfont icon-store_icon"></span>
            <p>商城</p>
        </div>
        <div class="item" @click="funa()">
            <span class="iconfont icon-all"></span>
            <p>全部商品</p>
        </div>
        <div class="item">
            <span class="iconfont icon-gouwuche"></span>
            <p>购物车</p>
        </div>
        <div class="item" @click="funb()">
            <span class="iconfont icon-dingdan"></span>
            <p >订单</p>
        </div>
    </div>
</template>

<script>
export default {
  methods:{
    funb() {
      this.$router.push("/havebuy")
    },
    funa() {
      this.$router.push("/allproduct")
    }
  }
}
</script>

<style scoped>
    .content{
        width: 100%;
        height: .58rem;
        display: flex;
        justify-content: space-around;
        background: white;
        align-items: center;
      z-index: 10;
    }
    .item{
        text-align: center;
    }
    .iconfont{
        font-size: .18rem;
    }
  p{
    font-size: .15rem;
  }

</style>
