<template>
  <div class="aa">
  <div class="showbox" @click="fun(v)" v-for="(v,i) in brr" :key="i">
    <img :src="v.shopImgurl"/>
    <div class="name">{{v.shoptitle}}</div>
    <div class="notice">{{v.shopSummary}}</div>
    <div class="priceAdd">
      <div class="price">¥{{v.saleSprice}}</div>
      <span class="shopSprice">¥{{v.shopSprice}}</span>
    </div>
    <div class="sale"></div>
  </div>
  </div>
</template>

<script>
    export default {
      // props:{
      //   imgurl:String,
      //   content:String,
      //   price:String,
      //   shopSummary:String
      // },
      data() {
        return {
          brr:''
        }
      },
      methods: {
        fun(title){
          this.$router.push({name:'CommodityDetails',query:{content:title}});
        }
      },
      created() {
        this.axios({
          url:"user/shop",
          method:"get",
        }).then((ok)=>{
          this.brr=ok.data.shop;
        });
        //往父组件传参
        this.$emit("indexs",1)
      }
    }
</script>

<style scoped>
  .showbox{
    width: 1.29rem;
    height:2.5rem;
    background-color: white;
    border-radius: 6px;
    margin-top: .1rem;
  }
  img{
    width: 1.29rem;
    height: 1.5rem;
    background-color: #0f0f0f;
  }
  .aa{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .aa:nth-child(2n){
    margin-left: 10px;
  }
  .name{
    font-size: .15rem;
    height: .25rem;
    text-overflow: ellipsis;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    margin: 2px 5px;
    color: #333;
  }
  .notice{
    height: 18px;
    margin: 2px 5px;
    font-size: 14px;
    line-height: 18px;
    overflow: hidden;
    color: #999;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .price{
    font-size: .15rem;
    height: .25rem;
    margin-left: 8px;
    width: 20px;
    color: #ff6800;
    line-height: .25rem;
  }
  .sale{
    height: 0.25rem;
    margin: 0 5px;
  }
  .shopSprice{
    font-size: .13rem;
    height: .25rem;
    /*margin: 2px;*/
    color: gray;
    text-decoration: line-through;
    display: block;
    line-height: .25rem;
    margin-right: 8px;
  }
  .priceAdd{
    display: flex;
    justify-content: space-between;
  }
</style>
