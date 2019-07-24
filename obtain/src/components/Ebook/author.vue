<template>
  <div>
    <div>
      
        <!-- <div>
            <img :src="data.listenAuthorPhoto" alt="">
            <div>
                <p>
                    {{data.listenAuthor}}123
                </p>
                <p><span>{{arr.length}}</span>
                <span>{{data.listenCount}}</span>
                </p>
            </div>
        </div>
      <ul>
        <li class="box" @click="skip(v)" v-for="(v,i)in arr" :key="i">
          <p>
            <img :src="data.listenImgUrl" />
          </p>
          <p class="title">{{data.listenSubtitle}}</p>
        </li>
      </ul> -->
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[{}]
        }
    },
  props: ["data"],
  methods: {
    skip(val) {
      this.$router.push({
        name: "BOOKDEL",
        query: { id: JSON.stringify(val.listenId) }
      });
    }
  },
  created(){
      
  }
};
</script>
<style scoped>
li {
  list-style: none;
}

.box img {
  width: 0.85rem;
  height: 1.2rem;
}
.title {
  font-size: 0.12rem;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 0.85rem;
  text-align: center;
  line-height: 0.21rem;
  margin-top: 8px;
}
.box {
  font-size: 0.12rem;
}
</style>