<template>
    <div class="all">
        <div class="zuobian">
            <h2>{{listenSubtitle}}</h2>
            <h3>{{listenContent}}</h3>
            <h5>时长：{{listenAudioTime}}</h5>
        </div>
        <div class="smallBox">
            <div class="imgBox">
                <img :src="url" alt="">
                <p class="floatBox">{{classify}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        listenSubtitle:String,
        listenContent:String,
        listenAudioTime:String,
        url:String,
        classify:String
    }
}
</script>

<style scoped>
    .all{
        display: flex;
        align-items: center;
        height: 1.3rem;
        margin:0px 15px ;
        border-bottom: 1px solid #e5e5e5; 
         position: relative;
    }
    img{
        width:.7rem;
        height:1rem;
        margin-left:10px;
    }
    .imgBox{
        position:relative;
        height: 1rem;
    }
    .floatBox{
        position: absolute;
        right: 4px;
        bottom:4px;
        font-size: .12rem;
        background: grey;
        color: white;
        border-radius: 2px;
    }

 .zuobian{
     width: 100%;
 }
    h2{
         height:.24rem;
         overflow: hidden;
         font-size:16px;
         font-weight:600;
         color:black
    }
   h3{
    height: .38rem;
    overflow: hidden;
    font-size:14px;
    margin-top:5px;
    font-weight:400;
    color:#666666;
    line-height:.2rem;
 }
 h5{
     font-size: 12px;
     margin-top:20px;
     margin-top:10px;
     font-weight:500;
     color: forestgreen;
 }
    </style>