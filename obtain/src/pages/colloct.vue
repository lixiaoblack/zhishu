<template>
    <div>
        <div class="divcs">
            <div class="left" @click="fun()">×</div>
            <div class="right">
                <span>收藏</span>
            </div>
        </div>
        <div class="divss">
            <img src="../../static/tu/user/shoucang.png" alt="">
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
    margin-left: 0.7rem;
}
.right span{
    margin-left: 0.5rem;
}
.divss img{
    width: 100%;

}
</style>
