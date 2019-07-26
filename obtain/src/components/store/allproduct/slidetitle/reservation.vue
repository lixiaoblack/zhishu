<template>
    <div class="reservation">
      <div v-if="arrBool">
        <img class="bigImg" src="../../../../../static/image/ada.png" alt="">
        <div class="reservationTitle">还没有订单</div>
      </div>
      <div v-else class="bottom">
        <div class="shop" v-for="(v,i) in arr" :key="i">
          <img :src="v.courseImgurl" alt="">
          <div class="left">
            <p class="bigP">{{v.courseSubtitle}}</p>
            <p class="smallP">{{v.courseSummary}}</p>
          </div>
          <div class="price">
            <p>
              ￥{{v.courseSprice}}
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "residition",
        data() {
          return {
            arr:[],
            arrBool:true,
          }
        },
        created() {
          let ls = localStorage;
          fetch("http://39.107.105.57:8084//chaShoppingCarAll",{
                method:"POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body:"id="+ls.getItem("用户名")
            }).then(res=>{
                res.json().then(data=>{
                  this.arr = data.queryResult.list
                  this.arrBool = false;
                })
            })
        },
    }
</script>

<style scoped>
  .reservation{
    width: 3.75rem;
    height: 5.16rem;
  }
  .bigImg{
    width: .45rem;
    height: .5rem;
    margin: 0 auto;
    padding-top: 1rem;
  }
  .reservationTitle{
    font-size: .14rem;
    text-align: center;
    padding-top: 20px;
  }
  .shop{
    display: flex;
    margin-top: .3rem;
    padding: .08rem;
    border-bottom:1px dashed #888888;
    align-items: center;
  }
  .shop img{
    width: .6rem;
    height: .8rem;
    width: 20%;
  }
  .left{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: .16rem;
    height: .8rem;
    width: 50%;
  }
  .bottom{
    margin-top: .6rem;
  }
  .bigP{
    text-indent: .12rem;
    font-size: .18rem;
  }
  .smallP{
    text-indent: .12rem;
    font-size: .12rem;
    color: #999999;
  }
  .price{
    font-size: .12rem;
    overflow: hidden;
    width: 30%;
  }
  .price p{
    width: 100%;
    text-align: right;
    color: #FFAC13;
  }
</style>
