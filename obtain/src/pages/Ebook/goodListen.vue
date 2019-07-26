<template>
  <div class="body">
      <div v-if="bool">
      <Loading></Loading>
    </div>
    <div v-else>
    <div class="header">
      <p :class="val.icon"></p>
      <p class="title">{{val.title}}</p>
    </div>

    <ul>
      <ListenL v-for="(v,i) in arr" :key="i" :data="v"></ListenL>
    </ul>
    </div>
  </div>
</template>
<script>
import ListenL from "../../components/Ebook/listen_like";
import Loading from "../../components/loading"
export default {
  components: {
    ListenL,
    Loading
  },
  data() {
    return {
      arr: [{}],
      val: {},
      type: "",
      bool:true
    };
  },
  created() {
    this.axios
      .get("http://39.107.105.57:8084/listen/selsctByListenType", {
        params: { listentype: "新书上架" }
      })
      .then(ok => {
        this.arr = ok.data.queryResult.list;
          if (ok.data.queryResult.list) {
          this.bool = false;
        } else {
          this.bool = true;
        }
      });
  },
  beforeRouteEnter(to, from, next) {
    next(d => {
      d.val = JSON.parse(to.query.val);
      d.type = to.query.type;
    });
  }
};
</script>
<style scoped>
.header i {
  font-size: 0.3rem;
}
.header {
  text-align: center;
  font-size: 0.25rem;
  display: flex;
  justify-content: center;
  padding-top: 0.2rem;
}
.title {
  font-size: 0.2rem;
  font-weight: 600;
}

</style>
