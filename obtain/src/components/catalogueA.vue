<template>
    <div class="boxa">
        <h3>{{title}}</h3>
        <ul>
            <CatalogueB v-for="(v,i) in arr" :key="i" :txta="v.txta" :bool="v.bool"></CatalogueB>
        </ul>
    </div>
</template>

<script>
import CatalogueB from './catalogueB'
export default {
    components:{
        CatalogueB
    },
    props:{
        title:String,
        txt:Array
    },
    data(){
        return {
            arr:[]
        }
    },

    created() {
        this.arr=this.txt
    },
}
</script>

<style scoped>
.boxa{
    margin-left:15px;
    padding-bottom: 10px;
    border-bottom:.5px solid #9999; 
}
.boxa h3{
    font-size: .16rem;
    line-height: .4rem;
    margin-top: 5px;
}
</style>
