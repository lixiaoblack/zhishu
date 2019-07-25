<template>
    <div>
        <Search></Search>
        <div style="height:.35rem"></div>
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
    </div>
</template>

<script>
import Csss from './../components/home/cssss'
import Search from '../components/home/search'
export default {
    components:{
        Csss,
        Search
    }
}
</script>

<style scoped>
.box{
    background:white;
    margin-top:.2rem;
}
.box p{
    font-size: .14rem;
    line-height: .3rem;
    /* width: 100%; */
    margin-left: .15rem;
}
</style>
