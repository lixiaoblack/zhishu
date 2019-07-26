<template>
    <div class="payForContent">
        <div class="header">
            订单支付
            <span @click="fun()">X</span>
        </div>
        <div class="middle">
            <p>订单金额</p>
            <div class="total">
                <div class="totalLeft">
                    <img width="25px" src="../../../static/tu/r/f/atf.png" alt="">
                    <span>合计</span>
                </div>
                <span class="price">{{price|divide}}元</span>
            </div>
        </div>
        <div class="middle">
            <p>支付方式</p>
            <div class="total">
                <div class="totalLeft">
                    <img width="25px" src="../../../static/tu/r/f/a_4.png" alt="">
                    <span>微信</span>
                </div>
                <van-radio-group v-model="radio">
                    <van-radio name="1"></van-radio>
                </van-radio-group>
            </div>
            <div class="total">
                <div class="totalLeft">
                    <img width="25px" src="../../../static/tu/r/f/a_2.png" alt="">
                    <span>支付宝</span>
                </div>
                <van-radio-group v-model="radio">
                    <van-radio name="2"></van-radio>
                </van-radio-group>
            </div>
        </div>
        <div class="footer">
            <p @click="good()">
                ￥{{price|divide}}/确认支付
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        price:Number,
    },
    filters:{
        divide(val){
            return val/100
        }
    },
    data() {
        return {
            radio: '1',
            sonText:false
            
        }
    },
    methods: {
        fun(){
            this.$emit("son",this.sonText)
        },
        good(){
            setTimeout(() => {
                this.$toast.success('支付成功');
            }, 2000);
        }
    },
}
</script>

<style scoped>
    .payForContent{
        width: 100%;
        font-size: .14rem;
        background: #F6F6F6;
        height: 100%;
    }
    .header{
        padding: .05rem 0rem;
        text-align: center;
        position: relative;
        border-bottom: 1px solid #EFEFEF;
    }
    .header span{
        position: absolute;
        top: .05rem;
        right: .1rem;
        color: #999999;
    }
    .middle p{
        padding: .1rem .1rem;
    }
    .total{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .1rem .1rem;
        background: white;
    }
    .totalLeft{
        display: flex;
        align-content: center;
    }
    .totalLeft span{
        padding-left: .1rem;
        font-size: .16rem;
    }
    .price{
        color: #E38D55;
    }
    .footer{
        padding: 0rem .2rem;
    }
    .footer p{
        text-align: center;
        padding: .15rem 0rem;
        background: #FD813B;
        color: white;
        border-radius: 10px;
        margin-top: .2rem;
    }
</style>
