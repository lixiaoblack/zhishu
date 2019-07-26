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
        },
    }
}
</script>
<style scoped>
.divcs{
    display: flex;
    font-size: .2rem;
}
.left{
    width:10%;
}
.right{
    display: flex;
    margin-left: 0.7rem;
}
.right span{
    margin-left: 0.6rem;
}
.divss img{
    width: 100%;

}
</style>
