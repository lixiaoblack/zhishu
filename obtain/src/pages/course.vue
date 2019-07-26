<template>
    <div class="bigBox">
      <header>
          <div class="topback" >
                <span class="arrow" @click="tohome()">
                    <i class="el-icon-arrow-left"></i>返回</span>
                <span class="total">{{text}}</span>
          </div>
            <div class="firstnav">
                    <span @click="fun1()" :style="bool1?'color:#ff6b00':'color:black'">默认</span>
                    <span @click="fun2()" :style="bool2?'color:#ff6b00':'color:black'">最多学习</span>
                    <span @click="fun3()" :style="bool3?'color:#ff6b00':'color:black'">最新上架</span>
                <span style="color:#e5e5e5">|</span>
                <span>隐藏购买
                    <el-switch
                        v-model="value2"
                        active-color="#ff6b00" 
                        inactive-color="#e5e5e5">
                        </el-switch>
                </span>
            </div>
      </header>
    <section class="section">
        <div class="big">
            <div class="secondnav">
                <div v-for="(v,i) in arr" :key="i">
                    <!-- <router-link :to="v.url"> -->
                        <span class="top" :style="v.color?'color:#ff6b00':'color:black'" @click="changetext(i)">{{v.content}}</span>
                    <!-- </router-link>   -->
                </div>
                
                <!-- <router-link to="/course/nenglixueyuan">
                     <span  class="top"  @click="changetext($event)">能力学院</span>
                </router-link>
                <router-link to="/course/shangxueyuan">
                    <span  class="top"  @click="changetext($event)">商学院</span>
                </router-link>
                <router-link to="/course/kexuexueyuan">
                     <span  class="top"  @click="changetext($event)">科学学院</span>
                </router-link>
                <router-link to="/course/shiyexueyuan">
                      <span class="bottom"  @click="changetext($event)">视野学院</span>
                </router-link>
                <router-link to="/course/renwensheke">
                     <span class="bottom"  @click="changetext($event)">人文社科</span>
                </router-link>
                <router-link to="/course/zhengzaigengxin">
                      <span class="bottom"  @click="changetext($event)">正在更新</span>
                </router-link> -->
        </div>
       </div>
        <router-view></router-view>
    </section>
    </div>
</template>
<script>
import Course from '../components/course'
export default {
    components:{
    //    Course
    },
    data(){
        return {
            value1: true,
            value2: true,
            text:'全部',
            bool1:true,
            bool2:false,
            bool3:false,
            title:"101",
            linkUrl:"/course/total",
            linkName:"Total",
            arr:[
                {content:"全部",url:"/course/total",name:"Total",color:true},
                {content:"能力学院",url:"/course/nenglixueyuan",name:"Nenglixueyuan",color:false},
                {content:"商学院",url:"/course/shangxueyuan",name:"Shangxueyuan",color:false},
                {content:"科学学院",url:"/course/kexuexueyuan",name:"Kexuexueyuan",color:false},
                {content:"视野学院",url:"/course/shiyexueyuan",name:"Shiyexueyuan",color:false},
                {content:"人文社科",url:"/course/renwensheke",name:"Renwensheke",color:false},
                {content:"正在更新",url:"/course/zhengzaigengxin",name:"Zhengzaigengxin",color:false},
            ]
        }
    },
    methods:{
        tohome(){
            this.$router.push("/home")
        },
        changetext(num){
           this.text=this.arr[num].content;
           this.$router.push({name:this.arr[num].name,query:{title:this.title}})
           this.linkUrl = this.arr[num].url;
           this.linkName = this.arr[num].name;
           for(let i = 0;i<this.arr.length;i++){
               if(i == num ){
                   this.arr[i].color = true;
               }else{
                   this.arr[i].color = false;
               }
           }
        },
        fun1(){
            this.bool1 = true;
            this.bool2 = false;
            this.bool3 = false;
            this.title = "101";
            this.$router.push({name:this.linkName,query:{title:this.title}})
        },
        fun2(){
            this.bool1 = false;
            this.bool2 = true;
            this.bool3 = false;
            this.title = "102";
            this.$router.push({name:this.linkName,query:{title:this.title}})
        },
        fun3(){
            this.bool1 = false;
            this.bool2 = false;
            this.bool3 = true;
            this.title = "103";
            this.$router.push({name:this.linkName,query:{title:this.title}})
        },
    },
}


</script>
<style scoped>
a{
 color: #666666;
}
.bigBox{
    font-size: .16rem;
}
header{
    background: #ffffff;
    position: fixed;
    top: 0;
    width: 100%;
    height: 1.02rem;
}
.section{
    margin-top: 1.02rem;
}
.topback{
     padding: 0 .16rem;
    height:.5rem; ;
     line-height: .5rem;
    font-size: .14rem;
}
.topback .arrow{
    color: #999999;
    margin-right: .9rem;
}
.topback .total{
    color: #050505;
    font-weight: bolder;
    position: absolute;
    top:0;
    left: 1.6rem;
    
}
.firstnav{
    display: flex;
    justify-content: space-between;
    padding: 0 .16rem;
    line-height: .5rem;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    font-size: .14rem;
}
.secondnav{
      display: flex;
      font-size: .14rem;
      flex-wrap: wrap;
      flex-shrink: 0;
}
.secondnav span{
    margin-bottom: .11rem;
    margin-right: .2rem;
}
.secondnav:nth-child(3){
      margin-right: 0;
}
.thirdnav a{
    display: block;
    float: left;
}
.thirdnav{
    font-size: .14rem;
    margin-top: .11rem;
}
.thirdnav span{
    margin-right: .335rem;
    margin-top: .11rem;
}
.big{
    padding: .16rem;
}

.router-link-active{
     color:#ff6b00;
}
</style>

