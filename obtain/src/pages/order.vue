<template>
    <div class="orderContent">
        <TopIcon title="确认订单"></TopIcon>
        <div class="middle">

        </div>
        <div class="top">
            <i class="el-icon-circle-plus-outline"></i>
            <p @click="showPopup">请填写收货地址</p>
        </div>
        <div class="shop">
            <p>店铺名称：商城</p>
            <div class="item" v-for="(v,i) in arr" :key="i">
                <div class="itemTop">
                    <img width="25%" :src="v.courseOtherImgurl" alt="">
                    <div class="itemRight">
                        <p>{{v.courseSubtitle}}</p>
                        <div class="itemEnd">
                            <span>￥ {{v.courseSprice}}</span>
                            <span>x1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bill" @click="fun()">
            <span>发票类型:</span>
            <span>{{total}}></span>
        </div>
        <div class="footer">
            <van-submit-bar
            :price="totalPrice"
            button-text="提交订单"
            @submit="onSubmit"
            />
        </div>
        <van-action-sheet
        v-model="show"
        :actions="actions"
        @select="onSelect"
        />
        <van-popup v-model="bool" position="bottom" :style="{ height: '60%' }">
            <van-address-list
            v-model="chosenAddressId"
            :list="list"
            disabled-text="江浙沪包邮啊亲"
            @add="onAdd"
            @edit="onEdit"
            />
        </van-popup>
        <van-popup v-model="submitBool" position="bottom" :style="{ height: '50%' }">
            <PayFor :price="totalPrice" @son="fun"></PayFor>
        </van-popup>
    </div>
</template>

<script>
import TopIcon from "../componrnts/top"
import PayFor from "../componrnts/shop/payForChart"
export default {
    components:{
        PayFor,
        TopIcon,
        arr:[]
    },
    data() {
        return {
            chosenAddressId: '1',
            list: [
                {
                    id: '1',
                    name: '张三',
                    tel: '13000000000',
                    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                },
                {
                    id: '2',
                    name: '李四',
                    tel: '1310000000',
                    address: '浙江省杭州市拱墅区莫干山路 50 号'
                }
            ],
            arr:[],
            show: false,
            actions: [
                { name: '不要发票' },
                { name: '普通发票' },
            ],
            total:"不要发票",
            bool:false,
            submitBool:false
        }
    },
    created() {
        this.arr = this.$route.query.content;
    },
    methods: {
        onSelect(item) {
            // 点击选项时默认不会关闭菜单，可以手动关闭
            this.show = false;
            this.total = item.name;
        },
        fun(){
            this.show = true;
        },
        showPopup() {
            this.bool = true;
        },
         onAdd() {
        },

        onEdit(item, index) {

        },
        onSubmit(){
            let ls = localStorage
            let idArr = []
            for(let i = 0;i<this.arr.length;i++){
                idArr.push(this.arr[i].courseId);
            }
            this.submitBool = true;
            fetch("http://39.107.105.57:8084/deletShoppingCarAll",{
                method:"POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body:"list[]="+idArr+"&id="+ls.getItem("用户名")
            }).then(res=>{
                // res.json().then(data=>{

                // })
            })
        },
        fun(val){
            this.submitBool = val;
        }
    },
    computed: {
        totalPrice(){
            let num = 0;
            for(let i = 0;i<this.arr.length;i++){
                num += this.arr[i].courseSprice*100
            }
            return num;
        }
    },
}
</script>

<style scoped>
    .middle{
        height: .46rem
    }
    .orderContent{
        height: 100%;
        font-size: .225rem;
        background: #F5F5F5;
    }
    .top{
        display: flex;
        align-items: center;
        padding: .19rem;
        background: white;
        margin-bottom: .1rem;
    }
    .top span{
        color: #FF8C4C;
    }
    .top p{
        font-size: .125rem;
        padding-left: .1rem;
    }
    .shop{
        display: flex;
        background: white;
        padding: 0rem .1rem;
        flex-direction: column;
    }
    .shop p{
        font-size: .13rem;
        color: #6D6D6D;
        padding: .14rem 0rem;
    }
    .itemTop{
        display: flex;
        padding: .15rem 0rem;
        border-top: 1px solid #F0F0F0;

    }
    .itemEnd{
        display: flex;
        justify-content: space-between;
        font-size: .07rem;;
        color: #3C3C3C
    }
    .itemRight p{
        color: #3C3C3C;
    }
    .itemRight{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .bill{
        display: flex;
        justify-content: space-between;
        font-size: .14rem;
        padding: .08rem .08rem;
        background: white;
        border-bottom: 1px solid #F0F0F0;
        margin-top: .1rem;
    }
</style>
