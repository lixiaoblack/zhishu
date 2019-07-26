<template>
    <div>
        <div class="cardlist" @click="topayfor()">
           <div class="top">
                <div class="left" style="margin-right:.355rem">
                    <span class="price" style="margin-bottom:.17rem"><strong>5</strong>元</span>
                    <span style="font-size:.15rem;color: #999999">满5.01可用</span>
             </div>
             <div class="rgiht">
                    <h2 style="font-size:.225rem;margin-bottom:.17rem" >{{data.title}}</h2>
                    <span class="validity" style="font-size:.15rem;color: #999999">有效期至：2019.10.14</span>
                     <!-- <p class="icon" style="font-size:.17rem"><i class="el-icon-success"></i></p> -->
                </div>
           </div>
           <div class="bottom">
               <p style="font-size:.15rem;color: #999999">全场通用&nbsp;&nbsp;&nbsp;<span style="font-size:.15rem; display:inline;color: #999999">（电子书和实体商品除外）</span></p>
               <span style="font-size:.15rem ;padding-top:7px;" class="el-icon-arrow-right"></span>
           </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:["data"],
    methods: {
        topayfor(){
            //  this.$router.push("/givefriend")
            this.$router.go(-1)
        }
    },
    computed: {

    },
}
</script>
<style scoped> 

.nousecard{
    display: flex;
   justify-content: space-between;
    padding: 0 .16rem;
    width: 3.43rem;
    height: .5rem;
    line-height: .5rem;
    background: #ffffff;
    margin: 0 auto;
    margin-bottom: .15rem;
}



.cardlist{
    padding: 0 .16rem;
    width: 3.45rem - 0.32rem;
    height: 1.24rem;
    background: #f7f7f8;
    margin-bottom: .15rem;
}
.left .price{
    color:#f2503a;
    font-size: .15rem;

}
.price strong{
    font-size: .25rem;
    color:#f2503a;
}
.cardlist .top{
    display: flex;
    margin-bottom: .17rem;
}
.cardlist .bottom{
    display: flex;
}
.cardlist .bottom{
    border-top: 1px  #999999 dashed;
    display: flex;
    height: .25rem;
    justify-content: space-between;
    line-height: .25rem;
    padding-top: 10px;
}
</style>

