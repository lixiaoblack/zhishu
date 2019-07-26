<template>
  <div class="body">
    <div v-if="bool">
      <Loading></Loading>
    </div>
    <div v-else>
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
          <p v-if="isShow" style="color:#ed742f">{{arr.listenPrice}}得到贝</p>
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
          <img src="../../../static\ebookImg\logo2.jpg" alt />
        </p>
      </section>
      <p style="font-size:.15rem,font-weight:600;margin:.22rem .25rem 0 .11rem">支付方式</p>
      <div class="pay">
        <p style="line-height:.5rem;">
          <span>余额</span>
          <span style="color:#ed742f">{{lastmoney}}得到贝</span>
          <span style="color:#ed742f">(不足支付)</span>
        </p>
        <p
          style="width:.65rem; height:.3rem; border-radios:5px; color:white; background:#ed742f;line-height:.3rem; text-align: center"
          @click="pay()"
        >充值</p>
      </div>
      <ol style="padding:.2rem;color:#ccc;">
        <li>您将购买的商品为虚拟内容服务，购买后不支持退订。转让请斟酌确认</li>
        <li>购买后可在已购区查看和使用</li>
      </ol>
      <footer>{{arr.listenSprice}}得到贝/确认支付</footer>
    </div>
  </div>
</template>
<script>
// import { Checklist } from "mint-ui";
// Vue.component(Checklist.name, Checklist);
import Loading from "../../components/loading";
export default {
  components: {
    Loading
  },

  data() {
    return {
      id: null,
      isShow: true,
      arr: {},
      check: false,
      bool: true,
      lastmoney:Number
    };
  },
  beforeRouteEnter(to, from, next) {
    next(d => {
      d.id = JSON.parse(to.query.id);
    });
  },
  created() {
    this.axios.get("http://39.107.105.57:8084/listen/laodAll").then(ok => {
      let val = ok.data.queryResult.list;
      val.map(item => {
        if (item.listenId == this.id) {
          this.arr = item;
        }
        return this.arr;
      });
       if (ok.data.queryResult.list) {
        this.bool = false;
      } else {
        this.bool = true;
      }
    });
     let ls=localStorage
      this.axios({
        url:"http://39.107.105.57:8084/user/findUserMoney",
        method:"post",
        params:{
          id:Number(ls.getItem("用户名"))
        }
      }).then(ok=>{
        this.lastmoney=ok.data.queryResult.adouble
      })
  },
  methods: {
    skipPrev() {
      this.$router.go(-1);
    },
    checkStatus() {
      this.isShow = !this.isShow;
    },
    pay() {
      this.$router.push({ path: "/rechargemoney" });
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
.secIsShow {
  display: flex;
  justify-content: space-between;
  color: #7f5b39;
}
section {
  margin: 0.1rem;
  background: #f3e4bd;
  padding: 0.15rem 0.1rem 0.1rem;
  font-size: 0.14rem;
}
section img {
  margin-top: 0.2rem;
  width: 3.35rem;
  height: 0.9rem;
}
span {
  display: inline;
}
.pay {
  display: flex;
  justify-content: space-between;
  margin: 0 0.16rem;
  background: white;
  padding: 0 0.2rem;
  align-items: center;
}
footer {
  height: 50px;
  background: #f3b989;
  color: white;
  font-size: 0.15rem;
  text-align: center;
  line-height: 50px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
