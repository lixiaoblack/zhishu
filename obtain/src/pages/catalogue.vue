<template>
    <div class="box">
        <div>
            <Nav blank="目录"></Nav>
        </div>
        <div class="footer">
            <CatalogueA v-for="(v,i) in arr" :key="i" :title="v.title" :txt="v.txt"></CatalogueA>
        </div>
    </div>
</template>

<script>
import Nav from './../components/special/nav'
import CatalogueA from './../components/catalogueA'
export default {
    data(){
        return {
            arr:[]
        }
    },
    components:{
        CatalogueA,
        Nav
    },
    created() {
        this.axios({
            url:"/mock/data",
            methods:"get"
        }).then((ok)=>{
            this.arr=ok.data.catalogue
        })
    },
}
</script>

<style scoped>
.box{
    display:flex;
    flex-direction: column;
    height: 100%;
}
.footer{
    flex: 1;
    overflow-y: auto; 
}
</style>
