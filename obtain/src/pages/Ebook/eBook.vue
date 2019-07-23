<template>
  <div>
    <header>
      <span>返回</span>
      <span>电子书</span>
      <p @click="skipTryread(recently)" style="display:flex"><span style="font-size:.12rem;">{{recently.title}}</span><i :class="recently.icon"></i></p>
      
    </header>
     <p style="font-size:0.16rem">搜索框</p>
    <nav>
       
         <OPEN v-for= "(v,i) in nav" :key= "i" :data= "v"></OPEN>
     
    </nav>
        <div class="box">
           <h4>电子书独家特价</h4>
            <ALLBOOK :data= "arr[0]"></ALLBOOK>
        </div>
        <div class="bookType">
            <p class="cation">
                <span>新书上架</span>
                <span @click="skipGb(nav[2])">查看全部 ></span>
            </p>
            <ul class="list">
                <BOOK v-for= "(v,i) in newBook" :key= "i" :data= "v" style="margin:0.1rem"></BOOK>
            </ul>
            
        </div>
        <div class="bookType">
            <p class="cation">
                <span>精选书单</span>
                <span @click="skipGb(nav[1])">查看全部 ></span>
            </p>
            <ul class="list">
                <BOOK v-for= "(v,i) in goodBook" :key= "i" :data= "v"></BOOK>
            </ul>
            
        </div>
         <div class="bookType">
            <p class="cation">
                <span>限时特价</span>
                <span @click="skipGb(nav[0])">查看全部 ></span>
            </p>
            <ul class="list">
                <BOOK v-for= "(v,i) in Discount" :key= "i" :data= "v"></BOOK>
            </ul>
            
        </div>
         <div class="bookType">
            <p class="cation">
                <span>最近试读</span>
                <span>查看全部 ></span>
            </p>
            <ul class="recently">
                <BOOK v-for= "(v,i) in recent" :key= "i" :data= "v"></BOOK>
            </ul>
            
        </div>
         <div class="bookType">
            <p class="cation">
                <span>热门分类</span>
                <span @click="skipGb(nav[3])">查看全部 ></span>
            </p>
            <ul class="nav">
               <Nav></Nav>
            </ul>
            
        </div>
        <div class="bookType">
            <p class="cation">
                <span >猜你喜欢</span>
              
                <span @click="skipGb()">查看全部 ></span>
            </p>
            <ul class="list">
                <BOOK v-for= "(v,i) in Discount" :key= "i" :data= "v"></BOOK>
            </ul>
            
        </div>
        <div class="bookType">
            <p class="cation">
                <span>全部书籍</span>
                <span>按销量</span>
            </p>
            <ul class="all" v-if="arr.length>0">
                <ALLBOOK v-for= "(v,i) in arr" :key= "i" :data= "v" ></ALLBOOK>
            </ul>
            
        </div>
  </div>
</template>
<script>
import TryRead from "../../components/Ebook/try-read";
import BOOK from "../../components/Ebook/book";
import  Nav from "../../components/Ebook/nav1";
import  ALLBOOK from "../../components/Ebook/allBook";
import  OPEN from "../../components/Ebook/open";
export default {
    components:{
        TryRead,
        BOOK,
        Nav,
        ALLBOOK,
        OPEN

    },
  data() {
    return {
        arr:[{}],
        nav:[
            {title:"限时特价",icon:"el-icon-notebook-2",path:"/goodbook"},
             {title:"精选好书",icon:"el-icon-reading",path:"/goodbook"},
              {title:"新书上架",icon:"el-icon-notebook-1",path:"/goodbook"},
              {title:"分类",icon:"el-icon-document",path:"/classify/psychology"},
             
        ],
        recently:  {title:"最近阅读",icon:"el-icon-discover",path:"/goodbook"}
        
    };
  },
   methods: {
       
      skipTryread(v){
           this.$router.push({path:v.path,query:{val:JSON.stringify(v) }})
      },
        skipGb(v){
          this.$router.push({path:v.path,query:{val:JSON.stringify(v)}})
      }
   },
  computed: {
      goodBook(){
          let gb=[];
          this.arr.map(v=>{
              if(v.bookType=="精选书单"){
                 gb.push(v)
              }
               
             
          })
          
           return gb.slice(0,3)
      },
       newBook(){
          let gb=[];
          this.arr.map(v=>{
              if(v.bookType=="新书上架"){
                 gb.push(v)
              }
               
             
          })
          
           return gb.slice(0,6)
      },
       Discount(){
          let gb=[];
          this.arr.map(v=>{
              if(v.bookType=="限时特价"){
                 gb.push(v)
              }
               
             
          })
          
           return gb.slice(0,3)
      },
      recent(){
           let gb=[];
          this.arr.map(v=>{
              if(v.bookType=="最近试读"){
                 gb.push(v)
              }
               
             
          })
          
           return gb.slice(0,8)
      },
      like(){
          let gb=[];
          this.arr.map(v=>{
              if(v.bookType=="猜你喜欢"){
                 gb.push(v)
              }
               
             
          })
          
           return gb.slice(0,3)
      },
      //查看全部跳转
    
  },
  created() {
       this.axios.get("/jsondata/abc").then(ok=> {
           this.arr=ok.data.EBook
           
       })
  },
};
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  font-size: 0.16rem;
   padding: 0.12rem 0.12rem;
}

nav{
    display: flex;
    justify-content: space-between;
    padding: .3rem 0.12rem 0.3rem;
}
h4{
    font-size: 0.2rem;
    font-weight: 600;
    line-height: 0.4rem;
    
}
.content{
    margin:0.1rem 0 0 0 ;
    padding: 0.12rem;
    border: 1px solid #f1f1f1;
    display: flex;
}
.content img{
    width: 0.8rem;
    height: 1.05rem;

}
.box{
     padding: 0 0.16rem;
    
}
.right{
    margin-left: .11rem;
}
.cation{
    display: flex;
    justify-content: space-between;
    margin: 0.1rem 0;
   
 
}
.cation span:first-child{
     font-size: 0.2rem;
    font-weight: 600;
   
}
.cation span:last-child{
     font-size: 12px;
     color: #636363;
   
}
.bookType{
    padding: 0.16rem;
}
.list{
    display: flex;
  justify-content: space-between;
    flex-wrap: wrap;
    
   
}
.recently{
    display: flex;
    flex: 1;
    overflow-x: auto;
   
}
.size{
    font-size: 0.25rem;
    color: #636363;
     text-align: center;
}
.title{
    font-size: 0.11rem;
    color: #636363;
    text-align: center;
}
</style> 
