<template>
  <div>
    <div class="header">
      <p :class="val.icon"></p>
      <p class="title">{{val.title}}</p>
    </div>

    <ul>
      <Host v-for="(v,i) in arr" :key="i" :data="v"></Host>
    </ul>
  </div>
</template>
<script>
import Host from "../../components/Ebook/hotList";

export default {
  components: {
    Host
  },
  data() {
    return {
      arr: [{}],
      val: {},
      type: ""
    };
  },
  created() {
    // var param=new URLSearchParams();
    // param.append("books",this.val.title)
  
      this.axios({
        url: "http://39.107.105.57:8084/findType",
        method: "post",
        params: {
          books: "精选书单"
        }
      }).then(ok => {
        this.arr = ok.data.queryResult.list;
       
      });
    
  },
  beforeRouteEnter(to, from, next) {
    next(d => {
      d.val = JSON.parse(to.query.val);
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
