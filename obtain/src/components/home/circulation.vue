<template>
    <div class="cir">
        <div class="left">
            <p>挖洞挖到撒大大暗示等暗示等暗示等阿萨 啊实打实大师的我的娃</p>
            <p>ad撒大声道萨达萨达萨达暗示等啊实打实萨达撒</p>
            <p style="display:flex">
                <span style="margin-right:8px">4.99得到贝</span>
                <span>时长:25分46秒</span>
            </p>
        </div>
        <img src="../../../static/image/lun_01.jpg">
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .cir{
        font-size: 12px;
        display: flex;
        margin-left: .15rem;
        margin-right: .15rem;
        padding: 15px;   
        background: #fff;
    }
    .left{
        margin-top: 10px;
    }
    .left p{
        line-height: .25rem;
    }
    .left p:nth-child(1){
        width: 2rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #333333
    }
    .left p:nth-child(2){
        width: 2rem;
        color: #878c97
    }
    .left p:nth-child(3){
        color: #ff6b00;
        font-size: .11rem;
    }
    img{
        width:.83rem;
        height: 1.1rem;
        border-radius: 8px;
        margin-left: .15rem;
    }
</style>
