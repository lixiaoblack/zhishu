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
          <img :src="details.books_details.author_img" />
          <div class="position">
            <h2 class="banner-title">{{details.books_details.banner_title}}</h2>
            <p class="banner-summary">{{details.books_details.banner_summary}}</p>
          </div>
        </div>
        <div class="classabout">
          <div class="left">
            <span class="spanleft">{{details.interface.class_num}}讲</span>
            <p class="smalltitle">总讲数</p>
          </div>
          <div class="right">
            <span class="spanright">{{details.interface.study_peoples}}人</span>
            <p class="smalltitle">加入学习</p>
          </div>
        </div>
        <div class="content">
          <p class="section_one">
            <span class="teacher_intro">{{details.books_details.teacher_intro}}</span>
            <span class="teacher_info">{{details.books_details.teacher_info}}</span>
          </p>
          <p class="section_two">
            <span class="course_feature">{{details.books_details.course_feature}}</span>
            <span class="course_feature_intro_I">{{details.books_details.course_feature_intro_I}}</span>
            <span class="course_feature_intro_II">{{details.books_details.course_feature_intro_II}}</span>
          </p>
        </div>
        <div class="course_outline">
          <h2 class="course_outline_title">{{details.books_details.course_outline}}</h2>
          <div class="nowlisten"></div>
        </div>
        <div class="purchaseattention">
          <h2 class="purchase_attention">{{details.books_details.purchase_attention}}</h2>
          <ol style="margin-bottom:.6rem;">
            <li v-for="(v,i) in details.books_details.purchase_attention_item" :key="i">{{v}}</li>
          </ol>
        </div>
      </div>
        <Bottombar :data="details"></Bottombar>
    </div>
  
  </div>
</template>
<script>
import Bottombar from "../components/bottombar";
import Loading from "../components/loading";
export default {
  data() {
    return {
      details: {},
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
      this.$router.go(-1);
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
          // 请求对应字段的数据
           this.axios({
                url:'/link/data',
                method:'get'
            }).then((ok)=>{
                // 遍历数据
                // console.log(ok.data)
                ok.data.total.map(v=>{
                    if( v.interface.courseId==this.id){
                             this.details=v
                    }
                    return this.details
                }),
                  ok.data.nenglixueyuan.map(v=>{
                    if( v.interface.courseId==this.id){
                             this.details=v
                    }
                    return this.details
                }),
                    ok.data.shangxueyuan.map(v=>{
                    if( v.interface.courseId==this.id){
                             this.details=v
                    }
                    return this.details
                }),
                    ok.data.kexuexueyuan.map(v=>{
                    if( v.interface.courseId==this.id){
                             this.details=v
                    }
                    return this.details
                }),
                    ok.data.shiyexueyuan.map(v=>{
                    if( v.interface.courseId==this.id){
                             this.details=v
                    }
                    return this.details
                }),
                    ok.data.renwensheke.map(v=>{
                    if( v.interface.courseId==this.id){
                             this.details=v
                    }
                    return this.details
                }),
                    ok.data.zhengzaigengxin.map(v=>{
                    if( v.interface.courseId==this.id){
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
  font-size: 0.2rem;
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
.top {
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
  color: #373737;
  line-height: 0.22rem;
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
}
.course_feature_intro_II {
  font-size: 0.15rem;
  color: #373737;
  margin-bottom: 0.285rem;
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
ol li {
  font-size: 0.15rem;
  color: #616161;
  letter-spacing: 3px;
  /* margin-bottom:  */
}
</style>

