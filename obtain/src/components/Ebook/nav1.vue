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
            {"title":"文学","path":"/home"},
            {"title":"自然科学","path":"/weinxue"},
              {"title":"哲学","path":"/weinxue"},
                {"title":"职场","path":"/weinxue"},
                  {"title":"心理学","path":"/weinxue"},
                    {"title":"社会学","path":"/weinxue"},
                      {"title":"政治学","path":"/weinxue"},
                       {"title":"历史","path":"/weinxue"},
                        {"title":"中国历史","path":"/weinxue"},
                        {"title":"心理学","path":"/weinxue"},
                            {"title":"社会学","path":"/weinxue"},
                            {"title":"政治学","path":"/weinxue"},
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
