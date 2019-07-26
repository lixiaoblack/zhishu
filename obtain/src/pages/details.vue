<template>
  <div class="content1">
    <div v-if="bool">
         <Loading></Loading>
    </div>
    <div v-else >
      <div class="topback">
          <span class="arrow" @click="tohome()">
               <i class="el-icon-arrow-left"></i>返回
          </span>
      </div>
      <div class="end">
          <div class="top">
              <img :src="details.courseOtherImgurl" />
              <div class="position">
                  <h2 class="banner-title">{{details.courseSubtitle}}</h2>
                  <p class="banner-summary">{{details.courseTitle}}</p>
            </div>
          </div>
          <div class="classabout">
              <div class="left">
                  <span class="spanleft">{{details.courseClassNum}}<span style="display:inline;font-size:.12rem;">讲</span></span>
                  <p class="smalltitle">总讲数</p>
              </div>
              <div class="right">
                  <span class="spanright">{{details.courseStudyPeoples}}<span style="display:inline;font-size:.12rem;">人</span></span>
                  <p class="smalltitle">加入学习</p>
              </div>
          </div>
          <div class="content">
              <p class="section_one">
                  <span class="teacher_intro">老师简介</span>
                  <span class="teacher_info">{{details.courseTeacherIntro}}</span>
              </p>
              <p class="section_two">
                  <span class="course_feature">课程亮点</span>
                  <span class="course_feature_intro_I">1.{{details.courseFeatureIntroI}}</span>
                  <span class="course_feature_intro_II">2.{{details.courseFeatureIntroII}}</span>
            </p>
          </div>
          <div class="course_outline">
              <h2 class="course_outline_title">课程大纲</h2>
              <div class="lookoutline" style="margin:0 auto;font-size:.15rem;color:#f46d11;width:1.7rem;height:.4rem;border-radius:.15rem;font-weight:600;background:#eeeeee;line-height:.4rem;text-align:center;">
                   <h3 @click="lookoutline()"> 查看课程表</h3>
              </div>
          </div>
          <div class="purchaseattention">
              <h2 class="purchase_attention">购买须知</h2>
              <!-- <ol style="margin-bottom:.6rem;">
                 <li v-for="(v,i) in details.coursePurchaseAttention" :key="i">{{v}}</li>
              </ol> -->
              <p style="margin-bottom:.2rem; font-size: 0.15rem;letter-spacing: 3px;font-weight: bolder;color: #353535;" >
                  {{details.coursePurchaseAttention}}
              </p>
                 <p style="margin-bottom:.2rem; font-size: 0.15rem;letter-spacing: 3px;font-weight: bolder;color: #353535;" >
                  {{details.coursePurchaseAttentionTwo}}
              </p>
               <p style="margin-bottom:.7rem; font-size: 0.15rem;letter-spacing: 3px;font-weight: bolder;color: #353535;" >
                  {{details.coursePurchaseAttentionThree}}
              </p>
          </div>
      </div>
        <Bottombar :data="details" :singlemoney="details.courseSprice"></Bottombar>
  </div>
  </div>
</template>
<script>
import Bottombar from "../components/bottombar";
import Loading from "../components/loading";
export default {
  data() {
    return {
      details:{},
      bool: true,
      id:'',
    };
  },
  beforeRouteEnter(to, from, next) {
    next(d => {
      d.id = JSON.parse(to.query.id);
    });
  },
  components: {
    Bottombar,
    Loading
  },
  methods: {
    tohome() {
      this.$router.push('/course/total');
    },
    lookoutline(){
      this.$router.push("/lookoutline")
    }
  },
  watch: {
    details(val) {
      if (val != {}) {
        this.bool = false;
      } else {
        this.bool = true;
      }
    }

  },
    created() {
             // 请求课程全部数据应字段的数据
           this.axios({
                url:'http://39.107.105.57:8084/Course/loadAll',
                method:'get'
            }).then((ok)=>{
                ok.data.queryResult.list.map(v=>{
                    if(v.courseClassId==this.id){
                             this.details=v
                    }
                    return this.details
                })
            }),
          // 请求能力学院对应字段的数据
           this.axios({
                     //    接口
                 url:'http://39.107.105.57:8084/Course/findByAbility',
                //  对应字段   key唯一    val不定
                params:{
                    college:"能力学院"
                },
                method:'post'
            }).then((ok)=>{
                // 遍历数据
                // console.log(ok.data)
                ok.data.queryResult.list.map(v=>{
                    if(v.courseClassId==this.id){
                             this.details=v
                    }
                    return this.details
                })
            }),
             // 请求商学院对应字段的数据
           this.axios({
               url:'http://39.107.105.57:8084/Course/findByAbility',
                params:{
                    college:"商学院"
                },
                method:'post'
            }).then((ok)=>{
                ok.data.queryResult.list.map(v=>{
                    if(v.courseClassId==this.id){
                             this.details=v
                    }
                    return this.details
                })
            }),
              // 请求科学学院对应字段的数据
           this.axios({
                  url:'http://39.107.105.57:8084/Course/findByAbility',
                params:{
                    college:"科学学院"
                },
                method:'post'
            }).then((ok)=>{
                ok.data.queryResult.list.map(v=>{
                    if(v.courseClassId==this.id){
                             this.details=v
                    }
                    return this.details
                })
            }),
                 // 请求视野学院对应字段的数据
           this.axios({
                    //    接口
                 url:'http://39.107.105.57:8084/Course/findByAbility',
                //  对应字段   key唯一    val不定
                params:{
                    college:"视野学院"
                },
                method:'post'
            }).then((ok)=>{
                ok.data.queryResult.list.map(v=>{
                    if(v.courseClassId==this.id){
                             this.details=v
                    }
                    return this.details
                })
            }),
              // 请求人文社科对应字段的数据
           this.axios({
                    //    接口
                 url:'http://39.107.105.57:8084/Course/findByAbility',
                //  对应字段   key唯一    val不定
                params:{
                    college:"人文社科"
                },
                method:'post'
            }).then((ok)=>{
                ok.data.queryResult.list.map(v=>{
                    if(v.courseClassId==this.id){
                             this.details=v
                    }
                    return this.details
                })
            }),
               // 请求人文社科对应字段的数据
           this.axios({
                    //    接口
                 url:'http://39.107.105.57:8084/Course/findByAbility',
                //  对应字段   key唯一    val不定
                params:{
                    college:"正在更新"
                },
                method:'post'
            }).then((ok)=>{
                ok.data.queryResult.list.map(v=>{
                    if(v.courseClassId==this.id){
                             this.details=v
                    }
                    return this.details
                })
            })
  },
};
</script>
<style scoped>
.content1 {
  height: 100%;
  display: flex;
  flex-direction: column;
}
a {
  color: #666666;
}
.topback {
  padding: 0 0.16rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: .14rem;
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  z-index: 999;
   
}
.end {
  flex: 1;
  overflow-y: auto;
  margin-top: .3rem;
}
.topback .arrow {
  color: #999999;
  position: absolute;
  left: 0.16rem;
}
.top{
  width: 100%-0.205rem;
  height: 2.115rem;
  position: relative;
}
.top img {
  width: 100%;
  height: 2.115rem;
}
.position {
  padding-top: 1.375rem;
  position: absolute;
  bottom: 0.18rem;
  left: 0.21rem;
}
.classabout {
  box-sizing: border-box;
  display: flex;
  background: #f7f7f7;
  font-size: 0.09rem;
  width: 3.745rem;
  height: 0.69rem;
  padding: 0.17rem;
}
.classabout span {
  font-weight: bolder;
  font-size: 0.23rem;
}
.content {
  padding: 0 0.263rem 0 0.2rem;
}
.content span {
  letter-spacing: 3px;
}
.smalltitle {
  color: #8e8d92;
}
.left {
  text-align: center;
  width: 50%;
  border-right: 2px solid #e4e4e4;
}
.right {
  text-align: center;
  width: 50%;
}
.teacher_intro {
  font-size: 0.17rem;
  font-weight: bolder;
  color: #363636;
  line-height: 0.6rem;
}
.teacher_info {
  font-size: 0.15rem;
  color: #343434;
  line-height: 0.22rem;
  font-weight: 600;
}
.course_feature {
  font-size: 0.17rem;
  font-weight: bolder;
  color: #363636;
  line-height: 0.6rem;
}
.course_feature_intro_I {
  font-size: 0.15rem;
  color: #373737;
  margin-bottom: 0.285rem;
    font-weight: 600;
}
.course_feature_intro_II {
  font-size: 0.15rem;
  color: #373737;
  margin-bottom: 0.285rem;
    font-weight: 600;
}
.section_one {
  margin-bottom: 0.25rem;
}
.banner-title {
  font-weight: 600;
  font-size: 0.235rem;
  color: #fff;
  width: 100%;
}
.banner-summary {
  width: 100%;
  padding-top: 0.133333rem;
  font-size: 0.14rem;
  color: #fff;
}
.content {
  border-bottom: 0.1rem solid #f7f7f7;
}
.course_outline {
  padding: 0 0.263rem 0 0.2rem;
}
.course_outline_title {
  font-size: 0.17rem;
  font-weight: bolder;
  color: #363636;
  line-height: 0.6rem;
}
.purchaseattention {
  padding: 0 0.263rem 0 0.2rem;
  border-top: 0.1rem solid #f7f7f7;
}
.purchase_attention {
  font-size: 0.17rem;
  font-weight: bolder;
  color: #363636;
  line-height: 0.6rem;
}
/* ol li {
  font-size: 0.15rem;
  color: #616161;
  letter-spacing: 3px;
  float: left;
} */
</style>

