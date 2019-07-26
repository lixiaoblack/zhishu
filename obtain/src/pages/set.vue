<template>
<div>
    <div class="box">
        <div class="header">
            <i @click="fun()">×</i>
            <span>设置</span>
        </div>
        <div class="divcs">
            <div class="divitem diva">
                <p>
                    <span>账号/绑定设置</span>
                    <i>></i>
                </p>
            </div>
            <div class="divitem divb">
                <p>
                    <span>推送消息设置</span>
                    <i>></i>
                </p>
            </div>
            <span class="spana">开启后，将收到精选的内容推送和活动通知</span>
            <div class="divitem">
                <p>
                    <span>播放音质选择</span>
                    <i>></i>
                </p>
            </div>
            <div class="divitem">
                <p>
                    <span>软件升级</span>
                    <i>></i>
                </p>
            </div>
            <div class="divitem">
                <p>
                    <span>清楚缓存</span>
                    <i>></i>
                </p>
            </div>
            <div class="divitem">
                <p>
                    <span>关于我们</span>
                    <i>></i>
                </p>
            </div>
            <p v-if="userbool"></p>
            <div v-else class="divitem" @click="esc()">
                <p>
                    <span>退出登录</span>
                    <i>></i>
                </p>
            </div>
            <div class="footer">
            <span>服务使用协议   隐私协议</span>
            </div>
        </div>
    </div>

</div>
</template>
<script>
import{ NavBar, Icon}from "vant";
import { Dialog } from 'vant';
export default {
    compoents:{
        [NavBar.name]:NavBar,
        [Icon.name]:Icon,
        [Dialog.Component.name]:Dialog.Component
    },
    data(){
        return{
            userbool:true,
            username:""
        }
    },
    methods:{
        fun(){
            this.$router.go(-1);
        },
        esc(){
            // if(confirm("确定要退出吗？")){//如果是true ，那么就把页面转向home
            //     localStorage.removeItem("用户名")
            //     this.$toast.success("用户已退出！");
            //     this.$router.push("/home");
			// }else{  
			// }
            // localStorage.
            Dialog.confirm({
                title: '您确定要退出吗？'
            }).then(() => {
                // on confirm
                localStorage.removeItem("用户名")
                this.$router.push("/user");
            }).catch(() => {
                // on cancel
            });
        }
    },
    created() {
        let ls = localStorage;
        if(ls.getItem("用户名")){
            this.userbool = false;
        }else{
            this.userbool = true;
        }
    },
    
}
</script>
<style scoped>
.box{
    font-size: 20px;
    background-color: #f7f7f8;
}
.header{
    display: flex;
    text-align: left;
    background-color: #fff;
}
.header i{
    font-size: 28px;
}
.header span{
    margin-left: 40%;
    text-align: left;
}
.divcs{
    margin-top: 20px;
}
.divitem{
    margin-top: 10px;
    display: flex;
    font-size: 14px;
    background-color: #fff;
    padding: 2px 10px;
}
.divitem p{
    height: 0.6rem;
    line-height: 0.6rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.divb{
    border-top: 1px solid #ccc;
    margin-top: 0;
}
.spana{
    font-size: 12px;
    padding: 2px 10px;
}
.footer{
    font-size:12px;
    text-align: center;
    height: 1rem;
    line-height: 1.2rem;
}
</style>
