<template>
  <div class="bigsBox">
<!--    header-->
    <div class="top">
      <div class="stick">
        <span class="arrow" @click="fun()"><</span>
        <div class="arrowTitle">全部商品</div>
      </div>
    </div>
<!--    nav-->
    <div class="middle">
      <div class="allproduct">
  <!--    left-->
        <div class="left">
          <Slidetitle></Slidetitle>
        </div>
  <!--      right-->
        <div class="right">
          <Sort></Sort>
          <div class="rightbottom">
  <!--          子组件渲染-->
            <router-view></router-view>

          </div>
        </div>
      </div>
    </div>
<!--foot-->
    <div class="botton">
      <ShopFooter></ShopFooter>
    </div>
  </div>
</template>

<script>
  import Slidetitle from "../components/store/allproduct/slidetitle/slidetitle"
  import Sort from "../components/store/allproduct/slidetitle/sort"
  import ShopFooter from "../componrnts/shop/shopFooter"
export default {
    components:{
      Slidetitle,
      Sort,
      ShopFooter
      // Productshow
    },
  data() {
    return {
      brr: []
    }
  },

  created(){
    // this.axios({
    //   url:"/link/data",
    //   method:"get",
    // }).then((ok)=>{
    //   this.brr=ok.data.books;
    //   console.log(ok)
    // })
  },
  methods:{
    fun() {
      this.$router.go(-1)
    }
  }

}
</script>

<style scoped>
  .bigsBox{
    height: 100%;
    background-color: #f1f1f3;
    width: 100%;
    display: -webkit-flex;
    flex-direction: column;
    overflow: hidden;
  }
  .stick{
    background-color: white;
    font-size: .2rem;
    height:.5rem;
    line-height: .5rem;
    position: fixed;
    width: 100%;
  }
  .arrow{
    float: left;
    margin-left: .14rem;
    font-weight: bolder;
    font-size: .2rem
  }
  .arrowTitle{
    text-align: center;
    font-size: .22rem;
    font-weight: bolder;
  }
  .allproduct{

    display: flex;
    margin-top: 0.58rem;
    margin-bottom: .58rem;
  }
  .rightbottom{
    margin-left:.07rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 6.67rem;
    overflow: auto;
    margin-right: .07rem;
  }
  .left{
    width: 26%;
  }
  .right{
    width: 74%;
  }
  .middle{
    -webkit-flex:1;
    overflow-y: auto;
    flex-shrink: 0;
    width: 100%;
  }
  .botton{
    position: fixed;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid lightgray;
  }
</style>
