<template>
    <div>
        <div class="fixedb"></div>
        <div class="boxb">
            <ul>
                <li>
                    <img src="../../../static/tu/r/a7/a_j.png" alt="">
                    分享
                </li>
            </ul>
            <p>取消</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.boxb{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
}
.fixedb{
    height: 100%;
    width: 100%;
    background:black;
    opacity: .1;
    position: relative;
    position: fixed;
    bottom: 0;
    left:0;
}
.fixedb ul li{
    width: 100%;
    height:.5rem;
    line-height: .5rem;
    background:white;
    font-size:.15rem;
    display:flex;
    padding-left:20px;
    border-bottom: 1px solid #9999;
}
.fixedb li img{
    width: .2rem;
    height: .25rem;
    margin-right:25px;
    margin-top: 10px;
}
.fixedb p{
    width: 100%;
    height:.5rem;
    background:white;
    line-height: .5rem;
    width: 100%;
    color:orange;
    font-size:.15rem;
    text-align: center;
}
</style>
