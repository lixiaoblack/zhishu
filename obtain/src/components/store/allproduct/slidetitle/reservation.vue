<template>
    <div class="reservation">
      <img src="../../../../../static/image/ada.png" alt="">
      <div class="reservationTitle">还没有订单</div>
    </div>
</template>

<script>
    export default {
        name: "residition",
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
                  console.log(data)
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
  img{
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
</style>
