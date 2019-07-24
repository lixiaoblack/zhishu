<template>
  <div class="body">
   
    <div class="content">
      <img :src="obj.bookImgUrl" />
      <div class="right">
        <p style="font-size:0.15rem;font-weight:600; margin-bottom:12px">{{obj.bookSubtitle}}</p>

        <p class="author">
          <span>作者</span>
          <span>{{obj.bookAuthor}}</span>
          <span>></span>
        </p>
        <p style="font-size:12px; color: #ccc;margin-top:0.2rem" class="date">
          <span>{{obj.bookTime}}</span>|
          <span>{{obj.bookTts}}</span>
        </p>
      </div>
    </div>
    <div class="edit">
      <p>主编推荐语</p>
      <p>{{obj.booKeditRecomend}}</p>
    </div>
    <div class="edit1">
      <p class="edit2">内容简介</p>

      <div v-if="isShow">
        <p style="font-size:0.13rem;color:#8d8d8d">{{sub}}</p>
        <p class="open" @click="open()">查看详情<i class="el-icon-caret-bottom"></i></p>
      </div>
      <div v-else>
        <p style="font-size:0.13rem;color:#">{{obj.bookContent}}</p>
        <p @click="open()" class="open">收起 <i class="el-icon-caret-top"></i></p>
      </div>
    </div>
     <div class="edit1">
      <p class="cation">
                <span>目录   </span>
                <span @click="SkipPages()">查看全部 ></span>
            </p>
            
    </div>
    <div class="edit1">
      <p class="cation">
                <span>出版方   </span>
                <span>查看全部 ></span>
            </p>
            <p style="font-size:.15rem; font-weight:600; line-height:.27rem">{{obj.bookPublisher}}</p>
            <p style="font-size:.13rem; color:#8d8d8d; line-height:.27rem">{{obj.bookPublisherIntro}}</p>
    </div>
    <div class="like">
      <p style="font-size:.2rem;font-weight:600;">猜你喜欢</p>
      <ALLBOOK v-for="(v,i) in likes" :key=i :data="v"></ALLBOOK>
    </div>
   <BottomBar></BottomBar>
  </div>
</template>
<script>
import BottomBar from "../../components/bottombar"
import  ALLBOOK from "../../components/Ebook/allBook";
export default {
  components:{
     ALLBOOK,
     BottomBar
  },
  data() {
    return {
      obj: {},
      isShow: true,
      like:[],
      id:""
    
    };
  },
  methods: {
    open() {
      this.isShow = !this.isShow;
    },
    SkipPages(){
      this.$router.push({path:"/home"})
    }
  },
  computed: {
    sub() {
      return this.obj.bookContent && this.obj.bookContent.substr(0, 50);
    },
    likes(){
       return  this.like.slice(0,3)
    }
  },
  created() {
     this.axios.get("/jsondata/abc").then(ok=> {
           let val=ok.data.EBook;
          
          val.map(v=>{
              if(v.bookType=="猜你喜欢"){
                 this.like.push(v)

              }else if(v.bookId==this.id){
                this.obj=v
              }
              return this.obj
          });
    
      
  
           
  })
  },
  beforeRouteEnter(to, from, next) {
    
    next((d) => {
      d.id =JSON.parse(to.query.id);
    });
  }
};
</script>
<style scoped>
.box {
  padding: 0 0.16rem;
}
.content {
  margin: 0.1rem 0 0 0;
  padding: 0.12rem;

  display: flex;
}
.content img {
  width: 0.8rem;
  height: 1.05rem;
  margin-right: 0.14rem;
}
h4 {
  font-size: 0.2rem;
  font-weight: 600;
  line-height: 0.4rem;
}
.author span:nth-child(1) {
  display: inline;
  color: #ccc;
  background: #f2f2f2;
  padding: 0 5px;
  border-radius: 2px;
  margin-right: 0.2rem;
}
.author span:nth-child(2) {
  display: inline;
  font-size: 0.12rem;
color: #ccc;
  margin-right: 1.2rem;
}
.author span:nth-child(3) {
  display: inline;
  color: #ccc;
  font-size: 0.15rem;
}
.edit {
  background: #f9f9f9;
  padding: 0 0.16rem;
}
.edit p:nth-child(1) {
  font-size: 0.2rem;
  line-height: 0.4rem;
}
.edit p:nth-child(2) {
  font-size: 0.15rem;
  line-height: 0.23rem;
  color: #8d8d8d;
}
.edit1 {
  padding: 0.12rem 0.16rem;
}
.edit2 {
  font-size: 0.2rem;
  line-height: 0.4rem;
}

.body {
  font-size: 0.12rem;
}

.contain {
  color: #8d8d8d;
  font-size: 0.12rem;
}
.open {
  color: #8d8d8d;
  font-size: 0.12rem;
  text-align: center;
}
.cation{
    display: flex;
    justify-content: space-between;
    margin: 0.1rem 0;
   border-left:deeppink 7px solid;
 
}
.cation span:first-child{
     font-size: 0.2rem;
    font-weight: 600;
   
}
.cation span:last-child{
     font-size: 12px;
     color: #ed742f;
   
}
.like{
  padding: 0 .16rem;
}
.date span{
display: inline;
}
.bottombar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #e7e7e7;
    width: 3.75rem;
    height: .58rem;
    position: fixed;
    bottom: 0;
    background: #ffffff;
}

.givefriend{
    font-size:.095rem;
      color: #898989;   
}
.freelisten{
      font-size:.16rem;
       color: #5e5e5e;
}
.bottombar span{
    font-size: .16rem;
}
.buy{
    width: 1.51rem;
    height: .395rem;
    line-height: .395rem;
    background: #ea752f;
    border-radius: 15px;
    color: #f5ffff;
    text-align: center;
}
.verticalline{
    color: #e6e6e6;
}
</style>
