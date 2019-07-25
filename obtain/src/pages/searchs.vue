<template>
    <div class="search">
        <input v-model="issue_content" type="search" placeholder="如何用手机拍出高赞大片" class="intSearch" @input="funa()"><span @click="funb()" style="display:inline-block">搜索</span><span @click="cancel()" style="display:inline-block">取消</span>
        <div class="serch_result" v-show="serch_result_issue">
            <div v-if="bollCourse">
                <span style="text-indent:.1rem">课程</span>
                <li v-for="item in searchData" :key="item.length">
                {{ item.courseSubtitle }}
                </li>
            </div>
            <div v-if="bollBook">
                <span>电子书</span>
                <li v-for="item in searchDataBook" :key="item.length">
                {{ item.bookSubtitle }}
            </li>
            </div>
            <div v-if="bollListen">
                <span style="text-indent:.1rem">听书</span>
                <li v-for="item in searchDataListen" :key="item.length">
                {{ item.listenSubtitle }}
                </li>
            </div>
        </div>
        <img src="../../static/tu/r/a7/a1j.png" class="imgSearch">
        <div v-if="boll">
            <div class="history" v-for="(v,i) in historyArr" :key="i">
                <div class="left">
                    <img src="../../static/tu/r/f/a9l.png"><span>{{v.bookSubtile}}</span>
                </div>
                <img src="../../static/tu/r/f/a9k.png" class="guanbi" @click="delOne($event)">
            </div>
            <span class="end" @click="func($event)" v-if="bollDel">清除搜索记录</span>
        </div>
        <div v-if="bollHot">
            <p style="margin-top:4px;font-size:16px;padding-left:0.15rem;border-top: 6px solid #dde1e7;padding-top:12px">热门搜索</p>
            <div style="margin-left:.12rem">
                <div class="hot">
                <img src="../../static/tu/r/f/a9m.png"><span>三大打算sad</span>
                </div>
                <div class="hot">
                    <img src="../../static/tu/r/f/a9m.png"><span>三大打算sad</span>
                </div>
                <div class="hot">
                    <img src="../../static/tu/r/f/a9m.png"><span>三大打算sad</span>
                </div>
                <span class="hotspan">阿斯顿撒旦撒大声</span>
                <span class="hotspan">阿萨飒撒大大大大声道暗示等啥事飒的</span>
                <span class="hotspan">阿萨飒啊实打实大大声飒的</span>
                <span class="hotspan">阿萨飒是大大大飒的</span>
                <span class="hotspan">曹盛</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            issue_content:"",//输入框中的内容
            serch_result_issue:false,//控制搜索的问题显示隐藏
            serch_result:[
                // {name:"我是谁?"},
                // {name:"我是谁事实上"},
                // {name:"我是谁阿大声大声大声"},
                // {name:"萨达是大肆宣传 恤"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},  
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"}
            ],
            serch_resultBook:[
                // {name:"我是谁?"},
                // {name:"我是谁事实上"},
                // {name:"我是谁阿大声大声大声"},
                // {name:"萨达是大肆宣传 恤"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},  
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"}
            ],
            serch_resultListen:[
                // {name:"我是谁?"},
                // {name:"我是谁事实上"},
                // {name:"我是谁阿大声大声大声"},
                // {name:"萨达是大肆宣传 恤"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},  
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"},
                // {name:"暗示等暗示等暗示等阿萨啊"}
            ],
            boll:true,
            historyArr:[],
            bollHot:true,
            bollDel:true,
            bollCourse:true,
            bollBook:true,
            bollListen:true
        }
    },
    methods: {
        cancel(){
            this.$router.push({path:'/home'})
        },
        funa(){
            this.axios({
            url:"http://39.107.105.57:8084/findByNameOrAuthor",
            method:"post",
            params:{mh:this.issue_content}
            }).then((ok)=>{
                console.log(ok)
                this.serch_result=ok.data[1].queryResult.list
                console.log(this.serch_result)
                this.serch_resultBook=ok.data[0].queryResult.list
                console.log(this.serch_resultBook)
                this.serch_resultListen=ok.data[2].queryResult.list
                console.log(this.serch_resultListen)
            })
            if(this.issue_content.length>0){
                this.serch_result_issue = true;
            }else{
                this.serch_result_issue = false;
            }
            this.bollHot=false;
            this.boll=false;
            if(this.issue_content.length==0){
                this.bollHot=true;
                this.boll=true;
            }
            if(this.serch_result.length==0){
                this.bollCourse=false
            }else{
                this.bollCourse=true
            }
            if(this.serch_resultBook.length==0){
                this.bollBook=false
            }else{
                this.bollBook=true
            }
            if(this.serch_resultListen.length==0){
                this.bollListen=false
            }else{
                this.bollListen=true
            }
            
        },
        funb(){
            this.$router.push({path:"/searchitem"})
            this.axios({
                url:"http://39.107.105.57:8084/addHistory",
                method:"post",
                params:{add:this.issue_content,add2:''}
            }).then((ok)=>{
                console.log(ok)
            })
            this.axios({
            url:"http://39.107.105.57:8084/findByNameOrAuthor",
            method:"get",
            params:{mh:this.issue_content}
            }).then((ok)=>{

            })
        },
        func(e){
            e.target.parentElement.remove()
            this.bollDel=false
            this.axios({
                url:"http://39.107.105.57:8084/deleteAll",
                method:"delete",
            }).then((ok)=>{
                console.log(ok)
            })
        },
        delOne(e){
            e.target.parentElement.remove()
            this.axios({
                url:"http://39.107.105.57:8084/deleteHistory",
                method:"delete",
                params:{name:e.target.previousElementSibling.firstElementChild.nextElementSibling.innerHTML}
            }).then((ok)=>{
                console.log(ok)
            })
        }
    },
    computed: {
        searchData() {
            var issue_content = this.issue_content;
            if (issue_content) {
                return this.serch_result.filter(function(product) {
                return Object.keys(product).some(function(key) {
                    return String(product[key]).toLowerCase().indexOf(issue_content) > -1
                })
                })
            }
            return this.products;
        },
        searchDataBook() {
            var issue_content = this.issue_content;
            if (issue_content) {
                return this.serch_resultBook.filter(function(product) {
                return Object.keys(product).some(function(key) {
                    return String(product[key]).toLowerCase().indexOf(issue_content) > -1
                })
                })
            }
            return this.products;
        },
        searchDataListen() {
            var issue_content = this.issue_content;
            if (issue_content) {
                return this.serch_resultListen.filter(function(product) {
                return Object.keys(product).some(function(key) {
                    return String(product[key]).toLowerCase().indexOf(issue_content) > -1
                })
                })
            }
            return this.products;
        }
    },
    created() {
        
        this.axios({
            url:"http://39.107.105.57:8084/getHistory",
            method:"get",
        }).then((ok)=>{
            console.log(ok)
            this.historyArr=ok.data.queryResult.list
            if(this.historyArr.length>0){
                this.bollDel=true
            }else{
                this.bollDel=false
            }
        })
        
    },
}
</script>


<style scoped>
    .search{
        width: 100%;
        /* position: relative; */
        height: 36px;
        position: fixed;
        top: 0;
        font-size: 12px;
        z-index: 99;
        background: #f7f7f8;
        padding-top: 10px;
    }
    .intSearch{
        width: 2.75rem;
        height: 0.36rem;
        border-radius: 8px;
        border:0px;
        padding-left: 0.35rem;
        background: #f0f0f0;
        outline:none;
        margin-left: 0.15rem;
        font-size: 14px;
    }
    .imgSearch{
        width: 0.16rem;
        height: 0.16rem;
        position:absolute;
        top: 20px;
        left: 0.25rem;
    }
    .search span{
        margin-left: 5px;
        margin-right: 8px;
        font-size: 14px;
    }
    .hot img{
        width: .16rem;
        height: .16rem;
    }
    .search .hot{
        padding: 5px;
        background: #ccc;
        display: flex;
        width: 26%;
        float: left;
        border-radius: 8px;
        margin-right:8px;
        margin-left: 5px;
        margin-top: .2rem;
        opacity: .8;
    }
    .search .hot span{
        font-size: 11px;
    }
    .search .hotspan{
        margin-top: 12px;
        background: #ccc;
        float: left;
        padding: 6px;
        border-radius: 8px;
        font-size: 11px;
        opacity: .8;
    }
    .history{
        display: flex;
        align-items: center;
        padding: .1rem .2rem;
        justify-content: space-between;
        border-bottom: 1px solid #e5e5e5;
    }
    .history span{
        font-size: .12rem;
    }
    .left{
        display: flex;
        align-items: center;
    }
    .history img{
        width: .12rem;
        height: .12rem;
    }
    .end{
        width: 100%;
        text-align: center;
        padding: .15rem 0 ;
        font-size: .14rem;
        color: #999999;
    }
    .serch_result li{
        margin-left: .55rem;
        border-bottom: 1px solid #e5e5e5;
        line-height: .44rem;
        color: #333333;
    }
    .serch_result span{
        line-height: .44rem;
        float: left;
        color: #999999;
    }
    .serch_result{
        padding-left: .15rem;
        margin-top: .1rem;
        font-size: .14rem;
    }
</style>
