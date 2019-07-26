<template>
    <div>
        <div class="divcs">
            <div class="left" @click="fun()">
                ×
            </div>
            <div class="right">
                <div>
                    <router-link to="/download/downloads">已下载</router-link>
                </div>
                <div>
                    <router-link to="/download/downloaditem">下载中</router-link>
                </div>
            </div> 
        </div>
        <div class="middle">
            <!-- <img src="../../static/tu/user/yixiazai.png" alt=""> -->
            <router-view></router-view>
        </div>
        
        
    </div>
</template>
<script>
export default {
    methods:{
        
        fun(){//编程式跳转
            this.$router.push({
                path: "/user",
            });
        }
    },
    beforeRouteEnter (to, from, next) {
        let ls = localStorage;
        if(ls.getItem("用户名")){
            next()
        }else{
            next("/register")
        }
    }
}
</script>
<style scoped>
    .divcs{
        display: flex;
        font-size: .24rem;
    }
    .left{
        width:10%;
    }
    .right{
        display: flex;
    }
    .right div{
        margin-left: 0.5rem;
    }
    /* .middle img{
        width: 100%;
    } */
</style>
