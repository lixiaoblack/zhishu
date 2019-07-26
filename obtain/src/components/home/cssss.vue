<template>
    <div class="boxs">
        <img :src="imgUrl">
        <div class="css">
            <h3>{{title}}</h3>
            <p>{{txt}}</p>
        </div>        
    </div>
</template>

<script>
export default {
    props:{
        title:String,
        txt:String,
        imgUrl:String,
    },
}
</script>

<style scoped>
.boxs{
    display:flex;
    padding:.15rem .15rem .15rem 0;
    margin-left: .15rem;
    border-top: .5px solid #9999;
}
.boxs img{
    width:.32rem;
    height:.43rem;
    margin:.05rem;
}
.css h3{
    font-size: .15rem;
    line-height: .3rem;

}
.css p{
    font-size: .12rem;
    color:#9999;
    width:3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: .16rem;
}
</style>
