<template>
    <div class="content">
        <div class="fixed">
               <div class="topback" >
                <span class="arrow" @click="toback()">
                <i class="el-icon-arrow-left"></i>返回</span>
                <span class="total">我的账户</span>
            </div>
        </div>
           <div class="end">
                 <div class="nowcount" style="margin:0 auto">
              <div class="money">
                  <span class="nowmoney"><strong class="num" style="font-size:.3rem;">{{origincount}}</strong>得到贝</span>
              </div>
              <p class="state">▪得到贝仅用于付费内容</p>
          </div>
          <div class="payfor">
              <h5 class="title" style="font-weight:normal;color:#a2a2a2;font-size:.2rem;margin-bottom:.2rem;padding: 0 .16rem;">充值</h5>
              <div class="selectlist" style="display:flex;justify-content:space-around;flex-wrap:wrap;">
                  <div @click="buysix()"  class="list_I" :style="boola?'width:1.04rem;height:.63rem;border:2px solid #ed742f;border-radius:7px;text-align:center;margin-bottom:.12rem':'width:1.04rem;height:.63rem;border:2px solid #ed742f;border-radius:7px;text-align:center;margin-bottom:.12rem;background:orange'">
                      <p :style="boola?'font-size:.16rem;color:#ed742f;font-weight:bolder;margin-top:.15rem;margin-bottom:.01rem':'font-size:.16rem;color:white;font-weight:bolder;margin-top:.15rem;margin-bottom:.01rem'">6得到贝</p>
                      <p :style="boola?'font-size:.12rem;color:#ed742f;font-weight:bolder':'font-size:.12rem;color:white;font-weight:bolder'">6元</p>
                  </div>

                   <div @click="buysixeight()" class="list_I" :style="boolb?'width:1.04rem;height:.63rem;border:2px solid #ed742f;border-radius:7px;text-align:center;margin-bottom:.12rem':'width:1.04rem;height:.63rem;border:2px solid #ed742f;border-radius:7px;text-align:center;margin-bottom:.12rem;background:orange'">
                      <p :style="boolb?'font-size:.16rem;color:#ed742f;font-weight:bolder;margin-top:.15rem;margin-bottom:.01rem':'font-size:.16rem;color:white;font-weight:bolder;margin-top:.15rem;margin-bottom:.01rem'">68得到贝</p>
                      <p :style="boolb?'font-size:.12rem;color:#ed742f;font-weight:bolder':'font-size:.12rem;color:white;font-weight:bolder'">68元</p>
                  </div>
                   <div @click="buyeight()" class="list_I" :style="boolc?'width:1.04rem;height:.63rem;border:2px solid #ed742f;border-radius:7px;text-align:center;margin-bottom:.12rem':'width:1.04rem;height:.63rem;border:2px solid #ed742f;border-radius:7px;text-align:center;margin-bottom:.12rem;background:orange'">
                      <p :style="boolc?'font-size:.16rem;color:#ed742f;font-weight:bolder;margin-top:.15rem;margin-bottom:.01rem':'font-size:.16rem;color:white;font-weight:bolder;margin-top:.15rem;margin-bottom:.01rem'">88得到贝</p>
                      <p :style="boolc?'font-size:.12rem;color:#ed742f;font-weight:bolder':'font-size:.12rem;color:white;font-weight:bolder'">88元</p>
                  </div>
                   <div @click="buytwozeroeight()" class="list_I" :style="boold?'width:1.04rem;height:.63rem;border:2px solid #ed742f;border-radius:7px;text-align:center;margin-bottom:.12rem':'width:1.04rem;height:.63rem;border:2px solid #ed742f;border-radius:7px;text-align:center;margin-bottom:.12rem;background:orange'">
                      <p :style="boold?'font-size:.16rem;color:#ed742f;font-weight:bolder;margin-top:.15rem;margin-bottom:.01rem':'font-size:.16rem;color:white;font-weight:bolder;margin-top:.15rem;margin-bottom:.01rem'">208得到贝</p>
                      <p :style="boold?'font-size:.12rem;color:#ed742f;font-weight:bolder':'font-size:.12rem;color:white;font-weight:bolder'">208元</p>
                  </div>
                   <div @click="buythreeeight()" class="list_I" :style="boole?'width:1.04rem;height:.63rem;border:2px solid #ed742f;border-radius:7px;text-align:center;margin-bottom:.12rem':'width:1.04rem;height:.63rem;border:2px solid #ed742f;border-radius:7px;text-align:center;margin-bottom:.12rem;background:orange'">
                      <p :style="boole?'font-size:.16rem;color:#ed742f;font-weight:bolder;margin-top:.15rem;margin-bottom:.01rem':'font-size:.16rem;color:white;font-weight:bolder;margin-top:.15rem;margin-bottom:.01rem'">388得到贝</p>
                      <p :style="boole?'font-size:.12rem;color:#ed742f;font-weight:bolder':'font-size:.12rem;color:white;font-weight:bolder'">388元</p>
                  </div>
                   <div  @click="buynineeight()" class="list_I" :style="boolf?'width:1.04rem;height:.63rem;border:2px solid #ed742f;border-radius:7px;text-align:center;margin-bottom:.12rem':'width:1.04rem;height:.63rem;border:2px solid #ed742f;border-radius:7px;text-align:center;margin-bottom:.12rem;background:orange'">
                      <p :style="boolf?'font-size:.16rem;color:#ed742f;font-weight:bolder;margin-top:.15rem;margin-bottom:.01rem':'font-size:.16rem;color:white;font-weight:bolder;margin-top:.15rem;margin-bottom:.01rem'">998得到贝</p>
                      <p :style="boolf?'font-size:.12rem;color:#ed742f;font-weight:bolder':'font-size:.12rem;color:white;font-weight:bolder'">998元</p>
                  </div>
              </div>
              <div class="makesure" @click="zhifu()"  style="text-align:center;background:#ed742f;width:3.2rem;line-height:.49rem;height:.49rem;border-radius:7px;padding: 0 .16rem;margin:0 auto;margin-top:.35rem;margin-bottom:.34rem;">
                  <p style="font-size:.19rem;color:#fef7f1">确认支付</p>
              </div>
              <div class="attention">
                  <ol>
                      <li>1.得到贝可用于直接购买App内虚拟内容（不含实物产品,线下课）;</li>
                      <li>2.IOS系统和其他系统的得到余额只能在相应系统使用,不能互通使用;</li>
                      <li>3.得到贝为虚拟币,充值后的得到贝不会过期,但无法体现或转赠他人;</li>
                  </ol>
              </div>
          </div>
           </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            origincount:"0.00",
            changecolor:true,
            boola:true,
            boolb:true,
            boolc:true,
            boold:true,
            boole:true,
            boolf:true,
        }
    },
    methods: {
        toback(){
            this.$router.go(-1)
        },
        zhifu(){
            alert("支付成功"),
            this.$router.push("/home")
        },
        buysix(){
           this.boola=false
           this.boolb=true
           this.boolc=true
           this.boold=true
           this.boole=true
           this.boolf=true
           if(this.boola==true){
               this.origincount="0.00"
           }else{
               this.origincount="6.00"
           }
        },
         buysixeight(){
           this.boola=true
           this.boolb=false
           this.boolc=true
           this.boold=true
           this.boole=true
           this.boolf=true
           if(this.boolb==true){
               this.origincount="0.00"
           }else{
               this.origincount="68.00"
           }
        },
         buyeight(){
           this.boola=true
           this.boolb=true
           this.boolc=false
           this.boold=true
           this.boole=true
           this.boolf=true
           if(this.boolc==true){
               this.origincount="0.00"
           }else{
               this.origincount="88.00"
           }
        },
        buytwozeroeight(){
           this.boola=true
           this.boolb=true
           this.boolc=true
           this.boold=false
           this.boole=true
           this.boolf=true
           if(this.boold==true){
               this.origincount="0.00"
           }else{
               this.origincount="208.00"
           }
        },
         buythreeeight(){
           this.boola=true
           this.boolb=true
           this.boolc=true
           this.boold=true
           this.boole=false
           this.boolf=true
           if(this.boole==true){
               this.origincount="0.00"
           }else{
               this.origincount="388.00"
           }
        },
        buynineeight(){
           this.boola=true
           this.boolb=true
           this.boolc=true
           this.boold=true
           this.boole=true
           this.boolf=false
           if(this.boolf==true){
               this.origincount="0.00"
           }else{
               this.origincount="998.00"
           }
        },
    },
}
</script>
<style scoped>
.content{
    height: 100%;
    display: flex;
    flex-direction: column;
}
.end{
    flex:1;
    overflow-y: auto;
}
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
}
.topback .total{
    color: #676767;
    font-weight: bolder;
    text-align: center;
}
.nowcount{
   text-align: center;
}
.money{
    margin-top: .285rem;
    margin-bottom: .1rem;
    letter-spacing: 1px;
}
.money .nowmoney{
    font-size: .175rem;
    font-weight: bold;
     letter-spacing: 1px;
}
.nowcount .state{
    font-size: .115rem;
    color: #f16f35;
    font-weight: bold;
     letter-spacing: 1px;
     margin-bottom: .43rem;
}
.attention ol li{
     padding: 0 .16rem;
    margin-bottom: .25rem;
    font-size: .14rem;
    color:#999999;
    letter-spacing: 3px;
}

</style>

