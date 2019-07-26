<template>
    <div>
        <Search></Search>
        <div style="height:.35rem"></div>
        <div class="box">
            <p>课程</p>
            <Csss v-for="(v,i) in arrCourse[0]" :key="i" :imgUrl="v.courseImgurl" :txt="v.courseFeatureIntroI" :title="v.courseSubtitle" @click.native="courses(v)"></Csss>
        </div>
        <div class="box">
            <p>电子书</p>
            <Csss v-for="(v,i) in arrBook[0]" :key="i+111" :imgUrl="v.bookImgUrl" :txt="v.bookContent" :title="v.bookSubtitle" @click.native="books(v)"></Csss>
        </div>
        <div class="box">
            <p>听书</p>
            <Csss v-for="(v,i) in arrListen[0]" :key="i+222" :imgUrl="v.listenImgUrl" :txt="v.listenAudioIntro" :title="v.listenSubtitle" @click.native="listens(v)"></Csss>
        </div>
    </div>
</template>

<script>
import Csss from './../components/home/cssss'
import Search from '../components/home/search'
export default {
    components:{
        Csss,
        Search
    },
    data() {
        return {
            arr:[],
            arrCourse:[],
            arrBook:[],
            arrListen:[]
        }
    },
    methods: {
        courses(val){
            this.$router.push({path:"/details",query:{id:JSON.stringify(val.courseClassId)}})
            console.log("sss")
        },
        books(val){
            this.$router.push({path:"/EbookDetail",query:{id:JSON.stringify(val.bookId)}})
        },
        listens(val){
            this.$router.push({path:"/EbookDetail",query:{id:JSON.stringify(val.listenId)}})
        }
    },
    created() {
        this.arr=this.$route.query.id
        console.log(this.arr)
        this.arrCourse.push(this.arr[1].queryResult.list)
        if(this.arrCourse.length>3){
            for(var i=0; i<3; i++){
                this.arrCourse.push(this.arr[1].queryResult.list[i])
            }
        }
        this.arrBook.push(this.arr[0].queryResult.list)
        if(this.arrBook.length>3){
            for(var i=0; i<3; i++){
                this.arrBook.push(this.arr[0].queryResult.list[i])
            }
        }
        this.arrListen.push(this.arr[2].queryResult.list)
        if(this.arrListen.length>3){
            for(var i=0; i<3; i++){
                this.arrListen.push(this.arr[2].queryResult.list[i])
            }
        }
        
        console.log(this.arrCourse)
        console.log(this.arrBook)
        console.log(this.arrListen)
    },
    
}
</script>

<style scoped>
.box{
    background:white;
    margin-top:.2rem;
}
.box p{
    font-size: .14rem;
    line-height: .3rem;
    /* width: 100%; */
    margin-left: .15rem;
}
</style>
