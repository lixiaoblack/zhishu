<template>
    <div>
        <div class="howmuch">
            共188个内容
        </div>

        <div class="shuju"></div>
        <div class="shuju"></div>
        <div class="shuju"></div>
        <div class="shuju"></div>
        <div class="shuju"></div>
        <div class="shuju"></div>
        <div class="shuju"></div>
        <div class="shuju"></div>
        <div class="shuju"></div>
        <div class="shuju"></div>

       <router-link to=""><Allclassify></Allclassify></router-link>
    </div>
</template>


<script>
import Allclassify from '../../components/allclassify'
export default {
    components:{
        Allclassify
    }
}
</script>

<style scoped>
.howmuch{
    height: .5rem;
    border-bottom: 1px solid #e5e5e5;
    line-height: .5rem;
    margin-left: 15px;
}
.shuju{
    background: green;
    height: .8rem;
    margin-left: 10px;
    margin-top: 10px;
}
</style>
