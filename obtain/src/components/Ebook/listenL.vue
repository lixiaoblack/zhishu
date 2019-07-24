<template>
  <div>
    <li class="box" @click="skip(data)">
      <p>
        <img :src="data.listenImgUrl" />
      </p>
      <p class="title">{{data.listenSubtitle}}</p>
      <p style=" text-align: center; color: #636363;">{{data.listenAuthor}}解读</p>

      <div v-if="data.listen_class_id==1">
        <p style=" text-align: center; color: #636363;">24小时内</p>
        <p style=" text-align: center;color:#ed742f;">{{data.listenSprice}}得到贝</p>
      </div>
    </li>
  </div>
</template>
<script>
export default {
  props: ["data"],
  methods: {
    skip(val) {
      this.$router.push({
        name: "ListenDetail",
       query:{id:JSON.stringify(val.listenId)}
      });
    }
  }
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
.dis {
  font-size: 0.11rem;
  color: #636363;
  text-align: center;
  text-decoration: line-through;
}
.dis1 {
  font-size: 0.11rem;
  color: #ff8529;
  text-align: center;
}
</style>