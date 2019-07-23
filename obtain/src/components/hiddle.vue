<template>
    <div>
        <div class="hidder">
            <router-link to="/home" class="left">
                <img src="../../static/tu/r/a/left.jpg" alt="">
                <span>返回</span>
            </router-link>
            <b>分类</b>
        </div>

             
     
    </div>
</template>
<script>
export default {
        
}
</script>
<style scoped>
.hidder{
    height: 0.6rem;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom:1px solid #e5e5e5;
    z-index: 2;
    background: white;
    box-sizing: border-box;

}
.left{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0px;
    
}
.left span{
    font-size: 14px;
    color: #666666;
   
}
img{
    width: 0.12rem;
    height: 0.14rem;
     margin-left: 10px;
     color: #666666;
}

b{
    font-size: .18rem;
    margin: 0 auto;
}




</style>
