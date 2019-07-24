<template>
    <div class="search">
        <input v-model="issue_content" type="search" placeholder="如何用手机拍出高赞大片" class="intSearch" @input="funa()"><span @click="funb()" style="display:inline-block">搜索</span><span @click="cancel()" style="display:inline-block">取消</span>
        <div class="serch_result" v-show="serch_result_issue">
            <li v-for="item in searchData" :key="item.length">
            {{ item.name }}
            </li>
        </div>
        <img src="../../static/tu/r/a7/a1j.png" class="imgSearch">
        <div v-show="boll">
            <div class="history">
                <div class="left">
                    <img src="../../static/tu/r/f/a9l.png"><span>我</span>
                </div>
                <img src="../../static/tu/r/f/a9k.png" class="guanbi">
            </div>
            <div class="history">
                <div class="left">
                    <img src="../../static/tu/r/f/a9l.png"><span>啥事</span>
                </div>
                <img src="../../static/tu/r/f/a9k.png" class="guanbi">
            </div>
            <div class="history">
                <div class="left">
                    <img src="../../static/tu/r/f/a9l.png"><span>我的</span>
                </div>
                <img src="../../static/tu/r/f/a9k.png" class="guanbi">
            </div>
            <span class="end">清除搜索记录</span>
        </div>
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
</template>

<script>
export default {
    data() {
        return {
            issue_content:"",//输入框中的内容
            serch_result_issue:false,//控制搜索的问题显示隐藏
            serch_result:[
                {name:"我是谁?"},
                {name:"我是谁事实上"},
                {name:"我是谁阿大声大声大声"},
                {name:"萨达是大肆宣传 恤"},
                {name:"暗示等暗示等暗示等阿萨啊"},
                {name:"暗示等暗示等暗示等阿萨啊"},
                {name:"暗示等暗示等暗示等阿萨啊"},
                {name:"暗示等暗示等暗示等阿萨啊"},
                {name:"暗示等暗示等暗示等阿萨啊"},
                {name:"暗示等暗示等暗示等阿萨啊"},
                {name:"暗示等暗示等暗示等阿萨啊"},  
                {name:"暗示等暗示等暗示等阿萨啊"},
                {name:"暗示等暗示等暗示等阿萨啊"},
                {name:"暗示等暗示等暗示等阿萨啊"}

            ],
            boll:true
        }
    },
    methods: {
        cancel(){
            this.$router.go(-1)
        },
        funa(){
            if(this.issue_content.length>0){
                this.serch_result_issue = true;
            }else{
                this.serch_result_issue = false
            }
            this.boll=fasle
        },
        funb(){
            this.$router.push({path:"/searchitem"})
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
        }
    }
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
        width: 2.85rem;
        height: 0.36rem;
        border-radius: 8px;
        border:0px;
        padding-left: 0.35rem;
        background: #f0f0f0;
        outline:none;
        margin-left: 0.15rem;
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
    }
    .hot img{
        width: .16rem;
        height: .16rem;
    }
    .hot{
        padding: 5px;
        background: #ccc;
        display: flex;
        width: 26%;
        float: left;
        border-radius: 8px;
        margin-right:8px;
        margin-left: 5px;
        margin-top: .2rem;
        font-size: 11px;
        opacity: .8;
    }
    .hotspan{
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
    .serch_result{
        text-indent:.2rem;
    }
</style>
