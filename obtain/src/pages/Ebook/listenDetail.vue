<template>
  <div class="body">
    <p class="header">
      <span>返回</span>
      <span class="el-icon-link"></span>
    </p>
    <div class="overflow">
      <header>
        <div class="content">
          <img :src="arr.listenImgUrl" />
          <div class="right">
            <p style="font-size:0.15rem;font-weight:600; margin-bottom:12px">
              <span>{{arr.listenSubtitle}}</span> |
              <span>{{arr.listenAuthor}}解读</span>
            </p>
            <!-- 音频简介 -->
            <div>
              <p v-if="cut">
                <span>{{sub}}...</span>
                <span class="el-icon-caret-bottom" @click="isShow ()"></span>
              </p>
              <p v-else class="display:flex; justify-content: space-between;">
                <span>{{arr.listenAudioIntro}}</span>
                <span class="el-icon-caret-top" @click="isShow()"></span>
              </p>
            </div>
            <p style="font-size:12px; color: #ccc;margin-top:0.2rem">
              <span>{{arr.listenAudioTime}}</span>
            </p>
          </div>
        </div>
      </header>
      <!-- 音频人简介 -->
      <section>
        <div class="secAll">
          <div class="secLeft">
            <img
              :src="arr.listenAuthorPhoto"
              alt
              style="width:.35rem;height:.35rem; margin-right:.12rem"
            />
            <div>
              <p>{{arr.listenAuthor}}</p>
              <p style="color:#9c9c9c">
                <span class="el-icon-microphone"></span>
                <span>解读人</span>
              </p>
            </div>
          </div>
          <p style="color:#9c9c9c">共解读{{arr.listenCount}}本</p>
        </div>
      </section>
      <!-- 内容简介 -->

      <div>
        <div class="edit1">
          <p style="font-size:.2rem;font-weight:600;border-left:7px solid #f17327;">音频简介</p>

          <div v-if="contentShow">
            <p style="font-size:0.13rem;color:#8d8d8d;padding:0 .12rem">{{subContent}}</p>
            <p class="open" @click="content_Show()">
              查看详情
              <i class="el-icon-caret-bottom"></i>
            </p>
          </div>
          <div v-else>
            <p style="font-size:0.13rem;color:#8d8d8d;padding:0 .12rem">{{arr.listenContent}}</p>
            <p @click="content_Show()" class="open">
              收起
              <i class="el-icon-caret-top"></i>
            </p>
          </div>
        </div>
      </div>
      <!-- 猜你喜欢 -->
      <div class="like">
        <p style="font-size:.2rem;font-weight:600;border-left:7px solid #f17327;">猜你喜欢</p>
        <ListenL v-for="(v,i) in listenLike" :key="i" :data="v"></ListenL>
      </div>
    </div>
    <footer>
      <p @click="buy(arr)">
        <span>购买</span>
        <span style="color:#f17327">{{arr.listenSprice}}得到贝</span>
      </p>
      <p>加入VIP免费听</p>
    </footer>
  </div>
</template>
<script>
import ListenL from "../../components/Ebook/listen_like";
export default {
  components: {
    ListenL
  },
  data() {
    return {
      id: null,
      likes: [],
      arr: {},
      cut: true,
      contentShow: true
    };
  },
  beforeRouteEnter(to, from, next) {
    next(d => {
      d.id = JSON.parse(to.query.id);
    });
  },
  created() {
    this.axios.get("/listen").then(ok => {
      let val = ok.data.listen;
      //console.log(val)
      this.likes = val.filter(item => {
        return item.listenType == "猜你喜欢";
      });
      val.map(item => {
        if (item.listenId == this.id) {
          this.arr = item;
        }
        return this.arr;
      });
    });
  },
  computed: {
    sub() {
      return (
        this.arr.listenAudioIntro && this.arr.listenAudioIntro.substr(0, 20)
      );
    },
    listenLike() {
      let nernew = this.likes;
      return nernew.slice(0, 3);
    },
    subContent() {
      return this.arr.listenContent && this.arr.listenContent.substr(0, 50);
    }
  },
  methods: {
    isShow() {
      this.cut = !this.cut;
    },
    content_Show() {
      this.contentShow = !this.contentShow;
    },
     buy(val){
         this.$router.push({name:"Buy",query:{id:JSON.stringify(val.listenId)}})
       }
  }
};
</script>
<style scoped>
.body {
  font-size: 0.13rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.like {
  background: white;
}
header {
  background: #eef5ff;
}
.header {
  display: flex;
  justify-content: space-between;
  line-height: 0.35rem;
  align-items: center;
  color: #a5a5a5;
  font-size: 0.14rem;
  padding: 0.12rem;
  background: #eef5ff;
}
.content {
  display: flex;
  padding-bottom: 0.39rem;
}
.content img {
  width: 85px;
  height: 105px;
  margin-right: 0.12rem;
}
span {
  display: inline;
}
.secAll {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px dashed #9c9c9c;
  border-radius: 5px;
  padding: 0.12rem 0.2rem;
}
.secLeft {
  display: flex;
}
section {
  padding: 0.12rem;
  background: white;
}

.open {
  color: #f17327;
  font-size: 0.12rem;
  text-align: center;
}
.edit1 {
  background: white;
}
footer p {
  width: 50%;
}
footer {
  display: flex;
  height: 50px;
}
footer p:nth-child(1) {
  background: #eef5ff;
  text-align: center;
  line-height: 50px;
}
footer p:nth-child(2) {
  background: #f17327;
   text-align: center;
  line-height: 50px;
  color: white;
}
.overflow{
 
  /* display: flex;
  flex-direction: column; */
  flex: 1;
  overflow-y: auto;
}

</style>
