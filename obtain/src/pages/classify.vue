<template>
    <div class="content">
      <Hiddle></Hiddle>  

      <div class="section">
        <div class="left">
          <router-link to="/classify/psychology" class="look">心理学</router-link>
          <router-link to="/classify/school/" class="look">学院</router-link>
          <router-link to="/classify/family" class="look">家庭亲子</router-link>
          <router-link to="/classify/sociology" class="look">社会学</router-link>
          <router-link to="/classify/history" class="look">历史</router-link>
          <router-link to="/classify/chinahistory" class="look">中国历史</router-link>
          <router-link to="/classify/art" class="look">艺术</router-link>
          <router-link to="/classify/finance" class="look">金融学</router-link>
          <router-link to="/classify/management" class="look">管理学</router-link>
          <router-link to="/classify/workplace" class="look">职场</router-link>
          <router-link to="/classify/medicalhealth" class="look">医学与健康</router-link>
          <router-link to="/classify/economics" class="look">经济学</router-link>
        </div>
              <!-- <Left></Left> -->
        <div class="subje">
          <router-view></router-view>
        </div>
  
      </div>
 
    </div>
</template>

<script>
  import  Hiddle from '../components/hiddle'
export default {
    components:{
     Hiddle,
    },
} 
</script>

<style scoped>
.content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  font-size: .16rem;
  background:white;
}
.section{
  width: 100%;
  flex: 1;
  display: flex;
}
.left{
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  overflow-y: auto;
  height: 100%;
  width: 1.3rem;
} 
.look{
  line-height: .6rem;
  color: #666666;
  text-indent: 10px;
  display: flex;
  align-items: center;
}


.subje{
  width: 100%;
  overflow-y: auto;
  height: 100%;
}

.router-link-active{
  background: white;
  color:red;
  border-left: 5px solid red;
}
</style>
