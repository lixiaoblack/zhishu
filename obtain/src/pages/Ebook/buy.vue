<template>
  <div class="body">
    <header>
      <p class="el-icon-close" style="font-size:.18rem;color:#909090;" @click="skipPrev()"></p>
      <p style="text-align:center; font-size:.18rem; margin-left:1.26rem">结算台</p>
    </header>
    <div class="title">
      <img :src="arr.listenImgUrl" alt />
      <div>
        <p style="margin-bottom:.18rem; display:flex;font-weight:600">
          <span>{{arr.listenSubtitle}}</span>|
          <span>{{arr.listenAuthor}}解读</span>
        </p>
        <p v-if="isShow" style="color:#ed742f">{{arr.listenSprice}}得到贝</p>
        <p v-else style="color:#ffc794">会员有效期内免费听</p>
      </div>
    </div>
    <section>
      <div @click="checkStatus" class="secIsShow">
        <p>听书福利:</p>
          <p v-if="isShow">未选择</p>
          <p v-else>已选择</p>
      </div>
      <p>
        <img src="../../../static\ebookImg\logo2.jpg" alt="">
      </p>
    </section>
    <p style="font-size:.13rem,font-weight:600;">支付方式</p>
  </div>
</template>
<script>
// import { Checklist } from "mint-ui";
// Vue.component(Checklist.name, Checklist);
export default {
   
         
     
  data() {
     
     
    return {
      id: null,
      isShow: true,
      arr: {},
      check: false,
     
    };
  },
  beforeRouteEnter(to, from, next) {
    next(d => {
      d.id = JSON.parse(to.query.id);
    });
  },
  created() {
    this.axios.get("/listen").then(ok => {
      let val = ok.data.listen;
      val.map(item => {
        if (item.listenId == this.id) {
          this.arr = item;
        }
        return this.arr;
      });
    });
  },
  methods: {
    skipPrev() {
      this.$router.go(-1);
    },
    checkStatus() {
      this.isShow = !this.isShow;
    }
  }
};
</script>
<style scoped>
.body {
  font-size: 0.12rem;
}
header {
  display: flex;
  padding: 0.15rem 0.19rem;
  background: white;
}
.title img {
  width: 0.51rem;
  height: 0.7rem;
  margin-right: 0.12rem;
}
.title {
  margin: 0.1rem;
  background: white;
  padding: 0.15rem 0.12rem;
  display: flex;
}
.secIsShow{
  display: flex;
  justify-content: space-between;
  color: #7f5b39;
}
section{
  margin: .1rem;
  background: #f3e4bd;
  padding: .15rem .1rem .1rem;
  font-size: .14rem;
}
section img{
  margin-top:.2rem;
  width: 3.35rem;
  height: .9rem;
}
</style>
