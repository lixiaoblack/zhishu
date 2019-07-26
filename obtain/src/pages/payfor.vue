<template>
    <div id="content">
        <div class="topback" >
                <span class="arrow" @click="todetails()">
                <i class="el-icon-close"></i></span>
                <span class="total">结算台</span>
        </div>
        <div class="top">
            <div class="left">
                <img :src="data.courseImgurl">
            </div>
            <div class="right">
                <h2 class="booksname">{{data.courseSubtitle}}</h2>
                <span class="price"><strong class="num">{{data.courseSprice}}</strong>得到贝/份</span>
            </div>
        </div>
        <div class="card">
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
        <div class="payformethod">
            <span style="color:#050505;font-size: .22rem;">支付方式 <strong>:</strong></span>
        </div>
          <div class="alipay">
                <div class="handle">
                    <div class="left">
                        <span class="balance">余额</span> &nbsp;
                        <span class="unit"><strong>{{lastmoney}}</strong>得到贝</span>&nbsp;
                        <span class="nomoney" style="color:#f36f27;font-size:.2rem">{{payForMoney}}</span>
                    </div>
                    <div class="right"   @click="torechargemoney()">
                        <span style="font-size:.2rem">充值</span>
                    </div>
                </div>
            </div>
            <div class="attention">
                <ul>
                    <li><strong>▪</strong>购买后可在365天内赠送给任意好友，过期商品将无法再被领取</li>
                    <li><strong>▪</strong>你即将购买的商品为虚拟服务,购买后不支持退订、转让、退还、请酌情确认。</li>
                </ul>
             </div>
            <div class="bottombar" @click="payfor()">
                 <span style="font-size:.2rem;color:#ffffd4;">{{data.courseSprice}}</span><span style=" font-size: .17rem;color:#ffffd4;">得到贝</span><span style="font-size:.2rem;color:#ffffd4;margin:0 .1rem">/</span><span style="font-size:.2rem;color:#ffffd4;">确认支付</span>
            </div>
    </div>
</template>
<script>
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
             num:-5,
            //  data:this.$route.query.id,
            chosenCoupon: -1,
            coupons: [coupon,coupon1,coupon2],
            disabledCoupons: [coupon2],
            showList: false,
              data:{},
            bool:true,
            lastmoney:Number,
            payForBool :true,
            payForMoney:"",
        }
    },
        created(){
        // 请求对应字段的数据   获取当前用户账户的余额
        let ls=localStorage
           this.axios({
                 //    接口
                 url:'http://39.107.105.57:8084/user/findUserMoney',
                //  对应字段   key唯一    val不定
                params:{
                    id:Number(ls.getItem("用户名"))
                },
                method:'post'
            }).then((ok)=>{
              this.lastmoney=ok.data.queryResult.adouble
            })
    },
    watch: {
        data(val) {
        if (val != {}) {
            this.bool = false;
        } else {
            this.bool = true;
        }
     },
    //  当前账户余额不足判断
         lastmoney(val){
       if(this.lastmoney < this.data.courseSprice){
            // this.$toast.success('亲,您的余额支撑不起你的野心,请先去多多充钱,再来挥霍');
            this.payForBool = false;
            this.payForMoney = "余额不足"
            // this.$router.push("/rechargemoney")
       }else{
            this.payForBool = true;
            this.payForMoney = "余额充足"
       }
     }
  },
      beforeRouteEnter(to, from, next) {
    next(d => {
      d.data = JSON.parse(to.query.id);
    });
  },
    methods: {
        todetails(){
            this.$router.go(-1)
        },
        toyouhuiquan(){
             this.$router.push("/youhuiquan")
        },
        // 下边的支付  钱不够也得判断
        payfor(){
            // payforbool用来判断余额是否充足
             if(this.payForBool === false){
                this.$toast.success('亲,您的余额支撑不起你的野心,请先去多多充钱,再来挥霍');
                 this.$router.push("/rechargemoney")
            }else{
                // 从localstorage获取登录用户信息
             let ls=localStorage
            //  向后台发送请求   获取当前用户账户信息   发送id money 两个字段  当前要花费的金额    从数据库减掉
            this.axios({
                url:'http://39.107.105.57:8084/user/findUserJian',
                params:{
                    // 当前用户
                    id:Number(ls.getItem("用户名")),
                    // 当前用户要花费的钱
                    money:this.data.courseSprice
                },
                method:'post'
                }).then((ok)=>{
                 })
                alert("支付成功");
                this.$router.go(-2);
            }
        
           },
        torechargemoney(){
             this.$router.push("/rechargemoney")
        },
          onChange(index) {
            this.showList = false;
            this.chosenCoupon = index;
    },
        onExchange(code) {
            this.coupons.push(this.coupons[code]);
        },
    },
  
}
</script>
<style scoped>
.topback{
     padding: 0 .16rem;
    height:.5rem; ;
     line-height: .5rem;
    font-size: .17rem;
    position: relative;
}
.topback .arrow{
    color: #999999;
    position: absolute;
    left: .16rem;
    font-size: .22rem;
    font-weight: bolder;
}
.topback .total{
    color: #050505;
    font-weight: bolder;
    text-align: center;
}
.right .booksname{
    letter-spacing: 2px;
   font-size: .17rem;
    color: #2c2c2c;
     line-height: .25rem;
}
.right .price{
     color: #f36f27;
    font-size: .08rem;
      letter-spacing: 1px;
     line-height: .25rem;
     margin-top: .05rem;
}
.top{
    margin:10px 10px auto;
    }
.top .left{
     margin-right: .2rem;
}
.top .left img{
    width: .525rem;
    height: .69rem;
}
.right{
    padding-top:  .11rem;
}
.top{
    display: flex;
    border-bottom: 2px dashed #e7e7e7;
    padding-bottom: .25rem;
}
.card{
    display: flex;
    justify-content: space-between;
     margin:12px 10px .17rem;
}
.payformethod{
    margin:12px 10px .17rem;
}

.alipaymethods{
    font-size: .16rem;
    margin-left: 10px;
}
.handle .left .logo img{
    width: .44rem;
    height: .44rem;
}
.handle .left span,.handle .right span{
    font-size: .16rem;
}
.handle .left{
    display: flex;
    line-height: .5rem;
    font-size: .34rem;
}
.handle{
    display:flex;
    box-sizing: border-box;
    justify-content: space-around;
     margin-top: .215rem;
    line-height: .25rem;
}
.handle .right{
    font-size: .3rem;
    color: #fefcff;
    width: .765rem;
    height: .32rem;
    text-align: center;
    background: #ff6808;
    border-radius: 4px;
    padding: 0;
    padding-top: .1rem;
}
.left .unit{
    color: #ea762d;
}
.attention{
    margin-top: .26rem;
}
.attention ul li{
    list-style: disc;
    font-size: .16rem;
    color: #939393;
      margin-left: 10px;
      line-height: .24rem;
}
.bottombar{
    height: .5rem;
    width: 100%;
    background: #f3b989;
    position: fixed;
    bottom: 0;
    display: flex;
    text-align: center;
    justify-content: center;
    line-height: .5rem;
}
</style>
