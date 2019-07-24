<template>
  <div>
    <div class="header">
      <p style="margin-right:.8rem;font-size:.15rem" @click="skipPrev()">返回</p>
      <p :class="val.icon" style="margin-top:.05rem"></p>
      <p class="title">{{val.title}}</p>
    </div>
    <section>
      <Author data="kangdun"></Author>
      <Author data="小白"></Author>
       <Author data="小黑"></Author>

    </section>
  </div>
</template>
<script>
import Author from "../../components/Ebook/author";
export default {
  components: {
    Author
  },
  data() {
    return {
      arr: [{}],
      val: {},
      type: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    next(d => {
      d.val = JSON.parse(to.query.val);
      d.type = to.query.type;
    });
  },
  created() {
    this.axios.get("/listen").then(ok => {
      this.arr = ok.data.listen;
    });
  },
  methods: {
    skipPrev(){
      this.$router.go(-1)
    }
  },
};
</script>
<style scoped>
.header p:nth-child(2) {
  font-size: 0.3rem;
}
.header {
  padding:.16rem;
  font-size: 0.25rem;
  display: flex;
 
  padding-top: 0.2rem;
}
section {
  margin: 0.1rem;
}
</style>
