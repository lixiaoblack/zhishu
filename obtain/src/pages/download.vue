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
        },
    }
}
</script>
<style scoped>
    .divcs{
        display: flex;
        font-size: .3rem;
    }
    .left{
        width:10%;
    }
    .right{
        display: flex;
    }
    .right div{
        margin-left: 0.4rem;
    }
</style>
