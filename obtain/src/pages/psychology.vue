<template>
    <div>
        <div class="righttop">
            <router-link to="/classify/psychology/quanbu" class="rig">全部</router-link>
            <router-link to="/classify/psychology/xinli" class="rig">心理治疗</router-link>
            <router-link to="/classify/psychology/jiaolv" class="rig">焦虑</router-link>
            <router-link to="/classify/psychology/shehui" class="rig">社会心理学</router-link>  
            <router-link to="/classify/psychology/xingwei" class="rig">行为心理学</router-link>
        </div> 
        <router-view></router-view>
    </div>
</template>


<script>
export default {
    created() {
        this.$router.push("/classify/psychology/quanbu");
    },
}
</script>

<style scoped>
.righttop{
    margin-top: 6px;
    display:flex;
    overflow-x: auto;
    flex-wrap:wrap;
    flex-shrink: 0;
    border-bottom: 1px solid #e5e5e5;
    margin-left: 15px;
    height: .6rem;
}
.rig{
    margin-right: 10px;
     color: #6d6d6d;
}
.rig.router-link-active{
    color:red;
}
</style>
