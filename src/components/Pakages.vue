<template>
    <!-- packages section -->
           <section class="packages" id="packages">

            <h1 class="heading">
                <span>p</span>
                <span>a</span>
                <span>c</span>
                <span>k</span>
                <span>a</span>
                <span>g</span>
                <span>e</span>
                <span>s</span>
            </h1>
            <div class="box-container">
                 <Base-package  v-for="item in items" 
                 :key="item.id"
                 :title="item.cityname"
                 :srcImg="item.srcimage"
                 :idPack="item.id"></Base-package>
            </div>

           </section>

        <!-- end packages section -->
</template>

<script>
import BasePackage from './BasePackage.vue'
export default{
    components:{
        BasePackage
    },
    data(){
        return{
            items:[
                {
                    id:0,
                    srcimage:'images/p-1.jpg',
                    cityname:'mumbai'
                },
                {
                    id:1,
                    srcimage:'images/p-2.jpg',
                    cityname:'paris'
                },
                {
                    id:2,
                    srcimage:'images/p-3.jpg',
                    cityname:'huwaei'
                },
                {
                    id:3,
                    srcimage:'images/p-4.jpg',
                    cityname:'eyept'
                },
                {
                    id:4,
                    srcimage:'images/p-5.jpg',
                    cityname:'tokyo'
                },
                {
                    id:5,
                    srcimage:'images/p-6.jpg',
                    cityname:'dubai'
                },
            ]
        }
    }
}
</script>


<style scoped>
.packages .box-container{
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}


</style>