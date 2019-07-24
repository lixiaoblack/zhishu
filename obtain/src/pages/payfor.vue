<template>
    <div id="content">
        <div class="topback" >
                <span class="arrow" @click="todetails()">
                <i class="el-icon-close"></i></span>
                <span class="total">结算台</span>
        </div>
        <div class="top">
            <div class="left">
                <img src="../../static/img/payfor.jpg">
            </div>
            <div class="right">
                <h2 class="booksname">刘晗讲辛普森案</h2>
                <span class="price"><strong class="num">19.90</strong>得到贝/份</span>
            </div>
        </div>
        <div class="card" @click="toyouhuiquan()">
            <span style="color:#050505;font-size: .22rem;">优惠券</span>
            <span style="color:#f36f27;font-size: .22rem;" class="minusnum">{{num}} <strong style="color:#999999;" class="el-icon-arrow-right"></strong> </span>
        </div>
        <div class="payformethod">
            <span style="color:#050505;font-size: .22rem;">支付方式 <strong>:</strong></span>
        </div>
          <div class="alipay">
                    <div class="handle">
                        <div class="left">
                            <span class="balance">余额</span> &nbsp;
                            <span class="unit"><strong>0.00</strong>得到贝</span>&nbsp;
                            <span class="nomoney" style="color:#f36f27;font-size:.2rem">(不足支付)</span>
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
                        <span style="font-size:.2rem;color:#ffffd4;">9.90</span><span style=" font-size: .17rem;color:#ffffd4;">得到贝</span><span style="font-size:.2rem;color:#ffffd4;margin:0 .1rem">/</span><span style="font-size:.2rem;color:#ffffd4;">确认支付</span>
                </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            num:-5
        }
    },
    methods: {
        todetails(){
            this.$router.push("/details")
        },
        toyouhuiquan(){
             this.$router.push("/youhuiquan")
        },
        payfor(){
            alert("支付成功");
            this.$router.push("/home")
        },
        torechargemoney(){
             this.$router.push("/rechargemoney")
        }

    },
}
</script>
<style scoped>
.topback{
     padding: 0 .16rem;
    height:.5rem; ;
     line-height: .5rem;
    font-size: .2rem;
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
