<template>
    <div class="content">
      <div class="img">
            <img src="../../../static/img/loading.gif">
          
      </div>
    </div>
</template>
<script>
export default {
    data(){
            return {
                val:JSON.parse(this.$route.query.id) 
            }
    },
   created() {
    // console.log(this.val)
        this.$router.push({
        name: "BOOKDEL",
        query: { id: JSON.stringify(this.val) }
      })
   }
   }
</script>
<style scoped>
.img{
    position: absolute;
    top: 40%;
    left: 40%;
}
</style>