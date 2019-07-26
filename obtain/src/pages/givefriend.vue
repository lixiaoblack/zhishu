<template>
  <div class="content">
        <div v-if="bool">
      <Loading></Loading>
    </div>
    <div v-else>
      <div class="topback">
        <span class="arrow" @click="tohome()">
          <i class="el-icon-arrow-left"></i>返回
        </span>
        <span class="total">送给好友</span>
      </div>
      <div class="replace"></div>
      <div class="end">
        <div class="section_I">
          <div class="top">
            <div class="left">
              <img :src="data.courseImgurl"/>
            </div>
            <div class="right">
              <h2 class="booksname">{{data.courseSubtitle}}</h2>
              <span class="validity">赠送有效期至：2020.07.17</span>
              <span class="price">
                <strong class="num">{{data.courseSprice}}</strong>得到贝/份
              </span>
            </div>
          </div>
          <div class="add">
            <div class="add-left">
              <span>份数</span>
            </div>
            <div class="add-right">
              <span @click="minus()">-</span>
              <span  ref="message">{{num}}</span>
              <span @click="add()">+</span>
            </div>
          </div>
          <div class="list">
            <p @click="two($event)">2份</p>
            <p @click="five($event)">5份</p>
            <p @click="ten($event)">10份</p>
            <p @click="fifty($event)">50份</p>
          </div>
          <div class="peoplecart">
            <van-coupon-cell
              :coupons="coupons"
              :chosen-coupon="chosenCoupon"
              @click="showList = true"
            />
            <van-popup v-model="showList" position="bottom">
              <van-coupon-list
                :coupons="coupons"
                :chosen-coupon="chosenCoupon"
                :disabled-coupons="disabledCoupons"
                @change="onChange"
                @exchange="onExchange"
              />
            </van-popup>
          </div>
          <div class="alipay">
            <span class="alipaymethods">
              支付方式
              <strong>:</strong>
            </span>
            <div class="handle">
              <div class="left">
                <span class="logo">
                  <img src="../../static/img/money.jpg" alt />
                </span>&nbsp;
                <span class="balance">余额</span> &nbsp;
                <span class="unit">
                  <strong>{{lastmoney}}</strong>得到贝
                </span>&nbsp;
                <span class="nomoney">{{payForMoney}}</span>
              </div>
              <div  class="right chongzhi" @click="torechargemoney()">
                <span>充值</span>
              </div>
            </div>
          </div>
          <div class="attention">
            <ul>
              <li>
                <strong>▪</strong>购买后可在365天内赠送给任意好友，过期商品将无法再被领取
              </li>
              <li>
                <strong>▪</strong>你即将购买的商品为虚拟服务,购买后不支持退订、转让、退还、请酌情确认。
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="payfor">
        <p class="spanlist">
          <span>
            应付：
            <strong>{{totalmoney}}得到贝</strong>
            <i style="color:#939393;"></i>
          </span>
        </p>
        <div class="makesure">
          <span @click="payfor()">确认支付</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from "../components/loading";
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠18元",
  reason: "",
  value: 600,
  name: "弥晓浩倾情放送",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "6",
  unitDesc: "元"
};
const coupon1 = {
  available: 1,
  condition: "无使用门槛\n最多优惠15元",
  reason: "",
  value: 800,
  name: "彭满仓倾情放送",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "8",
  unitDesc: "元"
};
const coupon2 = {
  available: 1,
  condition: "无使用门槛\n最多优惠20元",
  reason: "",
  value: 900,
  name: "孔旭阳倾情放送",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "9",
  unitDesc: "元"
};
export default {
  data() {
    return {
      num: 1,
      minusprice:this.$route.query.numprice,  
      numprice:this.$route.query.numprice,
      data:{},
      bool: true,
      chosenCoupon: -1,
      coupons: [coupon,coupon1,coupon2],
      disabledCoupons: [coupon2],
      showList: false,
      // 选购商品的总共金额
      totalmoney:this.$route.query.num,
      // lastmoney当前账户余额
      lastmoney:Number,
      payForMoney:"",
      payForBool:true,
    };
  },
    created(){
        // 请求对应字段的数据
        // 获取本地存储
        let ls=localStorage
           this.axios({
                 //接口
                 url:'http://39.107.105.57:8084/user/findUserMoney',
                //  对应字段   key唯一    val不定
                params:{
                    id:Number(ls.getItem("用户名"))
                },
                method:'post'
            }).then((ok)=>{
              // 进入givefirend页面  就判断账户余额是否充足
              this.lastmoney=ok.data.queryResult.adouble
              if(this.lastmoney>this.totalmoney){
                this.payForMoney = "可购买";
                this.payForBool = true;
              }else{
                this.payForMoney = "余额不足";
                this.payForBool = false;
              }
            })
    },
    
  components: {
    Loading
  },
  watch: {
    // 监听异步的数据是否请求进来
    data(val) {
      if (val != {}) {
        this.bool = false;
      } else {
        this.bool = true;
      }
    },
    // 余额是否充足的判断
     totalmoney(val){
       if(val > this.lastmoney){
            this.$toast.success('亲,您的余额支撑不起你的野心,请先去多多充钱,再来挥霍');
            this.payForBool = false;
            this.payForMoney = "余额不足"
            // this.$router.push("/rechargemoney")
       }else{
            this.payForBool = true;
            this.payForMoney = "余额充足"
       }
     }
  },
  // 导航守卫-组件内的守卫  进入组件前调动
  beforeRouteEnter(to, from, next) {
    next(d => {
      d.data = JSON.parse(to.query.id);
    });
  },
  methods: {
     toyouhuiquan() {
             this.$router.push({ path: "zengsongyouhuiquan", query: { singleprice: this.singleprice }});
    },
    tohome() {
      this.$router.go(-1);
    },
     onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(this.coupons[code]);
    },
    add() {
      if (this.num > 49) {
        this.num = 50;
      } else{
        this.num++;
        this.totalmoney=(Number(this.data.courseSprice )* this.num).toFixed(2);
      }
      
    },
    minus() {
      if (this.num < 2) {
        this.num = 1;
        this.totalmoney =data.courseSprice;
      } else {
        this.num--;
         this.totalmoney=(Number(this.data.courseSprice )* this.num).toFixed(2);
      }
      
    },
    two(e) {
      // 获取元素样式
      let text = e.target.innerHTML;
      // 去掉最后一个份字   获取数字
      let splicetext = text.substring(0, text.length - 1);
      this.num = Number(splicetext);
      this.totalmoney = (this.data.courseSprice * this.num).toFixed(2);
    },
    five(e) {
      let text = e.target.innerHTML;
      let splicetext = text.substring(0, text.length - 1);
      this.num = Number(splicetext);
     this.totalmoney = (this.data.courseSprice * this.num).toFixed(2);

    },
    ten(e) {
      let text = e.target.innerHTML;
      let splicetext = text.substring(0, text.length - 1);
      this.num = Number(splicetext);
      this.totalmoney = (this.data.courseSprice * this.num).toFixed(2);

    },
    fifty(e) {
      let text = e.target.innerHTML;
      let splicetext = text.substring(0, text.length - 1);
      this.num = Number(splicetext);
      this.totalmoney = (this.data.courseSprice * this.num).toFixed(2);

    },
    torechargemoney() {
      this.$router.push("/rechargemoney");
    },
    // 下边的支付  钱不够也得判断
    payfor() {
      if(this.payForBool === false){
        this.$toast.success('亲,您的余额支撑不起你的野心,请先去多多充钱,再来挥霍');
        this.$router.push("/rechargemoney")
      }else{
        let ls=localStorage
            this.axios({
                url:'http://39.107.105.57:8084/user/findUserJian',
                params:{
                    id:Number(ls.getItem("用户名")),
                    money:this.totalmoney
                },
                  method:'post'
            }).then((ok)=>{
                // console.log(ok)
            })
            this.$toast.success('支付成功');
            this.$router.go(-1);
      }
         
    }
  }
};
</script>
<style scoped>
.content {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.topback {
  padding: 0 0.16rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: .17rem;
  position: fixed;
  top: 0px;
  display: flex;
  width: 100%;
  background: #f7f7f8;
}
.replace{
    height: .5rem;
}
.end {
  flex: 1;
  overflow-y: auto;
  margin-bottom: .8rem;
  
}
.topback .arrow {
  color: #999999;
  left: 0.16rem;
  width: 35%;
}
.topback .total {
  color: #050505;
  font-weight: bolder;
  text-align: center;
    font-size: .14rem;
}
.right .booksname {
  font-size: 0.175rem;
  color: #2c2c2c;
  line-height: 0.25rem;
}
.right .validity {
  font-size: 0.13rem;
  color: #aaaaaa;
  line-height: 0.25rem;
  margin-top: 0.095rem;
  margin-bottom: 0.095rem;
}
.right .price {
  color: #f36f27;
  font-size: 0.08rem;
  line-height: 0.25rem;
}
.right .num {
  color: #f36f27;
  font-size: 0.16rem;
}
.section_I .top {
  display: flex;
}
.top {
  margin: 10px 10px auto;
}
.top .left {
  margin-right: 0.2rem;
}
.top .left img {
  width: 1.021rem;
  height: 1.36rem;
}
.right{
  padding-top: 0.11rem;
   padding-bottom: 0.11rem;
}
.top {
  border-bottom: 1px solid #e7e7e7;
  padding-bottom: 0.125rem;
}

.add {
  display: flex;
  height: 0.1rem;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.2rem;
}
.add-left {
  font-size: 0.17rem;
  margin-left: 10px;
}
.add-right {
  font-size: 0.17rem;
  display: flex;
  width: 60px;
  justify-content: space-between;
  margin-right: 10px;
}
.list p {
  font-size: 0.17rem;
  width: 0.74rem;
  height: 0.285rem;
  border: 2px solid #939393;
  text-align: center;
  border-radius: 0.15rem;
}
.list {
  display: flex;
  justify-content: space-around;
  margin-top: 0.2rem;
  border-bottom: 2px dashed #e7e7e7;
  padding-bottom: 0.2rem;
}
.peoplecart {
  display: flex;
  padding: 0.2rem 0.12rem;
  justify-content: space-between;
}
.peoplecart span {
  font-size: 0.16rem;
}
.peoplecart .selectcard {
  color: #9b9b9b;
}
.alipaymethods {
  font-size: 0.16rem;
  margin-left: 10px;
}
.handle .left .logo img {
  width: 0.44rem;
  height: 0.44rem;
}
.handle .left span,
.handle .right span {
  font-size: 0.16rem;
}
.handle .left {
  display: flex;
  line-height: 0.5rem;
  font-size: 0.34rem;
}
.handle {
  display: flex;
  justify-content: space-around;
  line-height: 0.5rem;
  margin-top: 0.325rem;
}
.handle .right {
  line-height: 0.305rem;
  font-size: 0.34rem;
  color: #fefcff;
  width: 0.765rem;
  height: 0.32rem;
  text-align: center;
  background: #ff6808;
  border-radius: 0.14rem;
}
.handle .right span {
  vertical-align: middle;
}
.left .unit {
  color: #ea762d;
}
.attention ul li {
  list-style: disc;
  font-size: 0.16rem;
  margin-top: 0.27rem;
  color: #939393;
  margin-left: 10px;
}
.payfor {
  display: flex;
  width: 100%;
  height: 0.59rem;
  flex-direction: row;
  justify-content: space-between;
  flex-shrink: 1;
  line-height: 0.59rem;
  background: #f7f7f7;
  position: fixed;
  flex-wrap: nowrap;
  bottom: 0px;
}
.payfor strong {
  color: #ff6808;
}
.payfor .spanlist {
  margin-left: 10px;
}
.payfor span {
  font-size: 0.16rem;
}
.makesure {
  padding-top: 10px;
}

.makesure span {
  width: 1.5rem;
  height: 0.385rem;
  line-height: 0.385rem;
  color: #f5f5f5;
  margin-left: 0.1rem;
  background: #ff6808;
  text-align: center;
  vertical-align: middle;
  border-radius: 0.3rem;
}
</style>

