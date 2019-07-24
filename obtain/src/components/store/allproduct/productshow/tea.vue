<template>
<!--  <div class="aa">-->
  <div class="showbox" >
    <img :src="imgurl"/>
    <div class="name">{{content}}</div>
    <div class="notice"></div>
    <div class="price">{{price}}</div>
    <div class="sale"></div>
  </div>
<!--  </div>-->
</template>

<script>
    export default {
      props:{
        imgurl:String,
        content:String,
        price:String
      },
      data() {
        return {
          value: 4
        }
      }
    }
</script>

<style scoped>
  .showbox{
    width: 1.25rem;
    height:2.5rem;
    background-color: white;
    border-radius: 6px;
    margin-top: .1rem;
  }
  img{
    width: 1.25rem;
    height: 1.5rem;
    background-color: #0f0f0f;
  }
  /*.aa{*/
  /*  display: flex;*/
  /*}*/
  .name{
    font-size: .18rem;
    height: .25rem;
    text-overflow: ellipsis;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    margin: 0 5px;
    color: #151513;
  }
  .notice{
    height: .25rem;
    margin: 0 5px;
  }
  .price{
    font-size: .15rem;
    height: .25rem;
    margin: 0 5px;
    color: #ff6800;;
  }
  .sale{
    height: 0.25rem;
    margin: 0 5px;
  }
</style>
