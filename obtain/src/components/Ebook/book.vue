<template>
  <div>
    <li class="box" @click="skip(data)">
      <p>
        <img :src="data.bookImgUrl" />
      </p>
      <p class="title">{{data.bookSubtitle}}</p>

      <p v-if="data.bookType=='新书上架'" style=" text-align: center; color: #636363;">24小时内</p>
      <div v-else-if="data.bookType=='精选好书'">
        <p style=" text-align: center;color:#636363;">{{data.bookSprice}}得到贝</p>
      </div>
      <div v-else-if="data.bookType=='限时特价'">
        <p class="dis">{{data.bookSprice}}得到贝</p>
        <p class="dis1">{{data.bookSprice}}得到贝</p>
      </div>
      <div v-else-if="data.bookType=='最近试读'">
        <p style="text-align: center; color: #636363;">{{data.bookTime}}</p>
        <p style="text-align: center; color: #636363;">已读{{data.bookSprice}}%</p>
      </div>
    </li>
  </div>
</template>
<script>
export default {
  props: ["data"],
   methods: {
       skip(val){
           this.$router.push({name:"BOOKDEL",query:{id:JSON.stringify(val.bookId)}})
       }
   },
};
</script>
<style scoped>

li{
  list-style: none;
}

.box img {
  width: 0.85rem;
  height: 1.2rem;
}
.title {
  font-size: 0.12rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 0.85rem;
  text-align: center;
  line-height: 0.21rem;
  margin-top: 8px;
}
.box {
  font-size: 0.12rem;
}
.dis{
  font-size:0.11rem;
   color: #636363;
     text-align: center;
    text-decoration: line-through;
}
.dis1{
  font-size:0.11rem;
   color: #ff8529;
     text-align: center;
}
</style>