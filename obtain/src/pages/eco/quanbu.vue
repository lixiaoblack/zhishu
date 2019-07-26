<template>
    <div>
        <div class="howmuch">
            共{{length}}个内容
        </div>
        <div>
            <div class="zujian"  v-for="(v,i) in ElectBook" :key="i">        
                 <Electbook  @click.native="funa(v)" :bookSubtitle="v.bookSubtitle" :booKeditRecomend="v.booKeditRecomend" :bookAuthor="v.bookAuthor" :url="v.bookImgUrl" classify="电子书"></Electbook>
            </div>
            <div class="zujian"  v-for="(v,i) in AllClassIfy" :key="i+11111">
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
            arr:[],
            ElectBook:[],
            AllClassIfy:[],
            LisBook:[],
            length:Number,
        }
    },
     created(){

        fetch("http://39.107.105.57:8084/findSujectsByName",{
        method:"POST",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded"
        },
        body:"subject=经济学",
        }).then(res=>{
        res.json().then(data=>{
            // for(let i=0;i<data.length;i++){
            //     for(let j=0;j<data[i].queryResult.list.length;j++){
            //         this.arr.push(data[i].queryResult.list[j])
            //     }
            // }
            data.forEach((v,i)=>{
                v.queryResult.list.forEach((a,j)=>{
                    this.arr.push(a)
                })
            })
            this.arr.forEach((v,i)=>{
                if(v.type==0){
                    this.ElectBook.push(v)
                }else if(v.type==1){
                    this.LisBook.push(v)
                }else if(v.type==2){
                    this.AllClassIfy.push(v)
                }

             this.length=this.arr.length
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