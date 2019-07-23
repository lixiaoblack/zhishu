<template>
    <div>
        <div class="box">
            <p>课程</p>
            <Csss></Csss>
            <Csss></Csss>
            <Csss></Csss>
        </div>
        <div class="box">
            <p>电子书</p>
            <Csss></Csss>
            <Csss></Csss>
            <Csss></Csss>
        </div>
        <div class="box">
            <p>听书</p>
            <Csss></Csss>
            <Csss></Csss>
            <Csss></Csss>
        </div>
        <div class="box">
            <p>书单</p>
            <Csss></Csss>
            <Csss></Csss>
            <Csss></Csss>
        </div>
    </div>
</template>

<script>
import Csss from './../components/home/cssss'
export default {
    components:{
        Csss
    }
}
</script>

<style scoped>
.box{
    background:white;
    margin-top:.1rem;
}
.box p{
    font-size: .14rem;
    line-height: .3rem;
    width: 100%;
    margin-left: .15rem;
}
</style>
