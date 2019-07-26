<template>
    <div class="boxa">
      <div class="nav">
          <img  @click="func()" src="../../static/tu/r/f/ad6.png">
          <span  @click="func()">返回</span>
          <p>扫码</p>
      </div>
        <video ref="video" width="100%" height="500" autoplay class="video"></video>
          <div class="left"></div>
          <div class="right"></div>
          <div class="top"></div>
          <div class="bottom"></div>
    </div>
</template>   
<script>
export default {
  data () {
    return {

    }
  },
  created(){
    // 调用摄像头
      // H5调用电脑摄像头API
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(success => {
        // 摄像头开启成功
        this.$refs['video'].srcObject = success
        // 实时拍照效果
        this.$refs['video'].play()
      }).catch(error => {
        console.error('摄像头开启失败，请检查摄像头是否可用！')
      })
  },
  methods:{
     func(){
        this.$router.go(-1)
      },
  }
}
</script>

<style scoped>
p{
    width:1.9rem;
    float:left;
    font-size:.16rem;
    margin: 0 auto;
    position:absolute;
    left: 24%;
    top:.15rem;
    font-weight: 400px;
    text-align: center;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    color: white;
  }
.boxa{
  width: 100%;
  height: 100%;
}
.video{
  margin-top:60px;
}
.top{
  width: 50%;
  height: 2.2rem;
  background: black;
  opacity: .5;
  position: fixed;
  left: 25%;
  top: 0;
}
.bottom{
  width: 50%;
  height: 2.7rem;
  background: black;
  opacity: .5;
  position: fixed;
  left: 25%;
  bottom: 0;
}
.left{
  width: 25%;
  height: 100%;
  background: black;
  opacity: .5;
  position: fixed;
  left: 0;
  top: 0;
}
.right{
  width: 25%;
  height: 100%;
  background: black;
  opacity: .5;
  position: fixed;
  right: 0;
  top: 0;
}
.nav{
      height: .17rem;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background:black;
      padding: .15rem 0 .15rem .15rem;
      z-index: 30;
}
.nav img{
    width:.1rem;
    height:.17rem;
    float: left;
    margin-right: 5px;
}
.nav span{
    font-size:.14rem;
    float:left;
    color:white;
}

</style>