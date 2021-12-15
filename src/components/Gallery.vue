<template>
    
        <!-- gallery section -->
           <section class="gallery" id="galery">

            <h1 class="heading">
                <span>g</span>
                <span>a</span>
                <span>l</span>
                <span>l</span>
                <span>e</span>
                <span>r</span>
                <span>y</span>
            </h1>

            <div class="box-container">
                
                <!-- <div class="box">
                    <img src="images/g-1.jpg" alt="">
                    <div class="content">
                        <h3>amazing places</h3>
                        <p> sit ilique, nobis qui nemo repudiandae excepturi consectetur et eveniet error? Vero asperiores id </p>
                        <a href="#" class="btn">see more</a>
                    </div>
                </div>

                <div class="box">
                    <img src="images/g-2.jpg" alt="">
                    <div class="content">
                        <h3>amazing places</h3>
                        <p> sit ilique, nobis qui nemo repudiandae excepturi consectetur et eveniet error? Vero asperiores id </p>
                        <a href="#" class="btn">see more</a>
                    </div>
                </div>

                <div class="box">
                    <img src="images/g-3.jpg" alt="">
                    <div class="content">
                        <h3>amazing places</h3>
                        <p> sit ilique, nobis qui nemo repudiandae excepturi consectetur et eveniet error? Vero asperiores id </p>
                        <a href="#" class="btn">see more</a>
                    </div>
                </div>

                <div class="box">
                    <img src="images/g-4.jpg" alt="">
                    <div class="content">
                        <h3>amazing places</h3>
                        <p> sit ilique, nobis qui nemo repudiandae excepturi consectetur et eveniet error? Vero asperiores id </p>
                        <a href="#" class="btn">see more</a>
                    </div>
                </div>

                <div class="box">
                    <img src="images/g-5.jpg" alt="">
                    <div class="content">
                        <h3>amazing places</h3>
                        <p> sit ilique, nobis qui nemo repudiandae excepturi consectetur et eveniet error? Vero asperiores id </p>
                        <a href="#" class="btn">see more</a>
                    </div>
                </div>


                <div class="box">
                    <img src="images/g-6.jpg" alt="">
                    <div class="content">
                        <h3>amazing places</h3>
                        <p> sit ilique, nobis qui nemo repudiandae excepturi consectetur et eveniet error? Vero asperiores id </p>
                        <a href="#" class="btn">see more</a>
                    </div>
                </div>


                <div class="box">
                    <img src="images/g-7.jpg" alt="">
                    <div class="content">
                        <h3>amazing places</h3>
                        <p> sit ametpismilique, nobis qui nemo repudiandae excepturi consectetur et eveniet error? Vero asperiores id </p>
                        <a href="#" class="btn">see more</a>
                    </div>
                </div>


                <div class="box">
                    <img src="images/g-8.jpg" alt="">
                    <div class="content">
                        <h3>amazing places</h3>
                        <p>Lorem pisicinemo repudiandae excepturi consectetur et eveniet error? Vero asperiores id </p>
                        <a href="#" class="btn">see more</a>
                    </div>
                </div>


                <div class="box">
                    <img src="images/g-9.jpg" alt="">
                    <div class="content">
                        <h3>amazing places</h3>
                        <p> sit ilique, nobis qui nemo eveniet error? Vero asperiores id </p>
                        <a href="#" class="btn">see more</a>
                    </div>
                </div> -->

                <Base-gallery v-for="item in items" :key="item.id"
                    :srcimage="item.srcImg"></Base-gallery>

            </div>
           </section>
        <!-- gallery section end -->
</template>

<script>
import BaseGallery from './BaseGallery.vue'
export default{
    components:{
        BaseGallery
    },
    data(){
        return{
            items:[
            {
                id:0,
                srcImg:"images/g-1.jpg"
            },
             {
                id:1,
                srcImg:"images/g-2.jpg"
            },
             {
                id:2,
                srcImg:"images/g-3.jpg"
            },
             {
                id:3,
                srcImg:"images/g-4.jpg"
            },
             {
                id:5,
                srcImg:"images/g-5.jpg"
            },
             {
                id:6,
                srcImg:"images/g-6.jpg"
            },
             {
                id:7,
                srcImg:"images/g-7.jpg"
            },
             {
                id:8,
                srcImg:"images/g-8.jpg"
            },
             {
                id:9,
                srcImg:"images/g-9.jpg"
            },
        ]
        }
    }
}
</script>




<style scoped>
.gallery .box-container{
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}
</style>