<template>
     <!-- services section -->
           <section class="services" id="services">
            <h1 class="heading">
                <span>s</span>
                <span>e</span>
                <span>r</span>
                <span>v</span>
                <span>i</span>
                <span>c</span>
                <span>e</span>
                <span>s</span>
            </h1>
            <div class="box-container">
                
                <!-- <div class="box">
                    <i class="fas fa-hotel"></i>
                    <h3>affordable hotels</h3>
                    <p>Lorem, ipsum dolor sit ametpisicing elit. Et odit eaque error dolores quam cum saepe est laborum labore distinctio in neque sit,
                         nobis ea quae enim excepturi quas quasi.</p>
                </div>

                <div class="box">
                    <i class="fas fa-utensils"></i>
                    <h3>food and drinks</h3>
                    <p>Lorem, ipsum dolor sit ametpisicing elit. Et odit eaque error dolores quam cum saepe est laborum labore distinctio in neque sit,
                         nobis ea quae enim excepturi quas quasi.</p>
                </div>

                <div class="box">
                    <i class="fas fa-bullhorn"></i>
                    <h3>safty guide</h3>
                    <p>Lorem, ipsum dolor sit ametpisicing elit. Et odit eaque error dolores quam cum saepe est laborum labore distinctio in neque sit,
                         nobis ea quae enim excepturi quas quasi.</p>
                </div>

                <div class="box">
                    <i class="fas fa-globe-asia"></i>
                    <h3>around the world</h3>
                    <p>Lorem, ipsum dolor sit ametpisicing elit. Et odit eaque error dolores quam cum saepe est laborum labore distinctio in neque sit,
                         nobis ea quae enim excepturi quas quasi.</p>
                </div>

                <div class="box">
                    <i class="fas fa-plane"></i>
                    <h3>fastest travel</h3>
                    <p>Lorem, ipsum dolor sit ametpisicing elit. Et odit eaque error dolores quam cum saepe est laborum labore distinctio in neque sit,
                         nobis ea quae enim excepturi quas quasi.</p>
                </div>
                <div class="box">
                    <i class="fas fa-hiking"></i>
                    <h3>adventures</h3>
                    <p>Lorem, ipsum dolor sit ametpisicing elit. Et odit eaque error dolores quam cum saepe est laborum labore distinctio in neque sit,
                         nobis ea quae enim excepturi quas quasi.</p>
                </div> -->


                <Base-service v-for="item in items"
                :key="item.id"
                :nameIcon="item.classIcon"
                :title="item.titleBox"></Base-service>
            </div>
           </section>
        <!-- end services section  -->

</template>

<script>
import BaseService from './BaseService.vue'
export default{
    components:{
        BaseService
    },
    data(){
        return{
            items:[
                {
                    id:0,
                    classIcon:'fa-hotel',
                    titleBox:'affordable hotels'
                },
                 {
                    id:1,
                    classIcon:'fa-utensils',
                    titleBox:'food and drinks'
                },
                 {
                    id:2,
                    classIcon:'fa-bullhorn',
                    titleBox:'safty guide'
                },
                 {
                    id:3,
                    classIcon:'fa-globe-asia',
                    titleBox:'around the world'
                },
                 {
                    id:4,
                    classIcon:'fa-plane',
                    titleBox:'fastest travel'
                },
                 {
                    id:5,
                    classIcon:'fa-hiking',
                    titleBox:'adventures'
                },
            ]
        }
    }

}
</script>



<style scoped>
.services .box-container{
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}


</style>