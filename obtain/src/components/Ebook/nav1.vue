<template>
    <div>
        <ul class="list">
            <li v-for="(v,i) in list" :key="i" @click="clickListItem(i)">{{v.title}}</li>
        </ul>
    </div>
</template>
<script>
export default {
     data() {
    return {
       
        list:[
            {"title":"心理学","path":"/classify/psychology"},
            {"title":"学院","path":"/classify/school"},
              {"title":"经济学","path":"/classify/economics"},
                {"title":"家庭亲子","path":"/classify/family"},
                  {"title":"职场","path":"/classify/workplace"},
                    {"title":"社会学","path":"/classify/sociology"},
                      {"title":"金融","path":"/classify/finance"},
                       {"title":"历史","path":"/classify/history"},
                        {"title":"中国历史","path":"/classify/chinahistory"},
                        {"title":"医学与健康","path":"/classify/medicalhealth"},
                            {"title":"管理学","path":"/classify/management"},
                            {"title":"艺术","path":"/classify/art"},
        ]
    };
  },
  methods: {
      clickListItem(i){
          this.$router.push(this.list[i].path)
      }
  },
}
</script>
<style scoped>
.list{
    display: flex;
    flex-wrap: wrap;
}
.list li{
        font-size: 0.12rem;
        line-height: 0.33rem;
        padding:0 0.1rem;
        background: #f9f9f9;
        margin-right: 0.1rem;
        margin-top: 0.15rem;
        list-style: none ;
}
</style>
