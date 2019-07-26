<template>
  <div class="aa">
      <Load v-if="bool"></Load>
      <div v-else class="showbox" @click="go(v)" v-for="(v,i) in brr" :key="i">
        <img v-lazy="v.courseImgurl"/>
        <div class="name">{{v.courseSubtitle}}</div>
        <div class="notice">{{v.courseSummary}}</div>
        <div class="priceAdd">
          <div class="price">¥{{v.courseSprice}}</div>
<!--          <span class="shopSprice">¥{{v.shopSprice}}</span>-->
        </div>
      </div>
  </div>
</template>

<script>
  import Load from '../slidetitle/loading'
    export default {
      components: {
        Load
      },
      data() {
        return {
          brr: '',
          bool: "true",
        }
      },
      created() {
        this.axios({
          url: "http://39.107.105.57:8084/Course/findByAbility?college=%E5%95%86%E5%AD%A6%E9%99%A2",
          method: "post",
        }).then((ok) => {
          this.brr = ok.data.queryResult.list;
          this.bool = false;
          console.log(ok)
        });
      },
      methods: {
        go(title) {
          this.$router.push({name: 'CommodityDetails', query: {content: title}});
        }
      }
    }
</script>

<style scoped>
  .showbox{
    width: 1.29rem;
    height:2.3rem;
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
    height: .18rem;
    margin: 2px 5px;
    font-size: .14rem;
    line-height: .18rem;
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
