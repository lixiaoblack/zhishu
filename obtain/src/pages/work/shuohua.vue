<template>
    <div>
        <div class="howmuch">
            共{{length}}个内容
        </div>
        <div>
            <div class="zujian" v-for="(v,i) in ElectBook" :key="i">        
                   <Electbook  @click.native="funa(v)" :bookSubtitle="v.bookSubtitle" :booKeditRecomend="v.booKeditRecomend" :bookAuthor="v.bookAuthor" :url="v.bookImgUrl" classify="电子书"></Electbook>
            </div>
            <div class="zujian" v-for="(v,i) in AllClassIfy" :key="i+11111">
                <Allclassify  @click.native="funb(v)" :courseTitle="v.courseTitle" :courseTeacherIntro="v.courseTeacherIntro" :bookAuthor="v.bookAuthor" :courseId="v.courseId" :courseSprice="v.courseSprice" :url="v.courseImgurl" classify="课堂"></Allclassify>
            </div>
            <div class="zujian" v-for="(v,i) in LisBook" :key="i+22222">
                <Lisbook  @click.native="func(v)" :listenSubtitle="v.listenSubtitle" :listenContent="v.listenContent" :listenAudioTime="v.listenAudioTime" :url="v.listenImgUrl" classify="听书"></Lisbook>
            </div>     
        </div>
        
    </div>
</template>


<script>
import Allclassify from '../../components/allclassify'
import Electbook from '../../components/electbook'
import Lisbook from '../../components/lisbook'


export default {
    components:{
        Allclassify,
        Electbook,
        Lisbook
    },
    data(){
        return{
            ElectBook:[],
            AllClassIfy:[],
            LisBook:[],
            length:Number,
        }
    },
     created(){

        fetch("http://39.107.105.57:8084/findS2",{
        method:"POST",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded"
        },
        body:"classification=说话沟通",
        }).then(res=>{
        res.json().then(data=>{
            console.log(data) 
            this.length=data.length
            data.forEach((v,i)=>{
                if(v.queryResult.list[0].type==0){
                    this.ElectBook.push(v.queryResult.list[0])
                }else if(v.queryResult.list[0].type==1){
                    this.LisBook.push(v.queryResult.list[0])
                }else if(v.queryResult.list[0].type==2){
                    this.AllClassIfy.push(v.queryResult.list[0])
                }
            })
        })
     
       
})
    
     },
      methods:{
         funa(val){
            this.$router.push({path:"/EbookDetail",query:{id:JSON.stringify(val.bookId)}})
         },
         funb(val){
            this.$router.push({path:"/details",query:{id:JSON.stringify(val.courseClassId)}})
         },
         func(val){
            this.$router.push({path:"/listenDetail",query:{id:JSON.stringify(val.listenId)}})
         }
     }
}
</script>

<style scoped>
.howmuch{
    height: .5rem;
    border-bottom: 1px solid #e5e5e5;
    line-height: .5rem;
    margin-left: 15px;
    font-size:.14rem;
    color: darkseagreen;
}
</style>