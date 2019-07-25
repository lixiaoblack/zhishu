<template>
    <div>
{{obj}}
    </div>
</template>
<script>
export default {
    data() {
        return {
           
          
          
            id:null,
            obj:{}
        }
    },
    
    created() {
         this.axios.get("/jsondata/abc").then(ok => {
      let val = ok.data.EBook;

      val.map(v => {
       
       if(v.bookId == this.id) {
            this.obj = v;
       }
         return this.obj
        })
      
      })
   
    },
    beforeRouteEnter(to, from, next) {
    next(d => {
      d.id = JSON.parse(to.query.id);
    });
  }
}
</script>
<style scoped>

</style>

