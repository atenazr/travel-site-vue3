<template>
<section class="review" id="review">

            <h1 class="heading">
                <span>r</span>
                <span>e</span>
                <span>v</span>
                <span>i</span>
                <span>e</span>
                <span>w</span>
            </h1>
<div class="review-slider">
  <swiper
    :slides-per-view="2"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :autoplay='{
  "delay": 2500,
  "disableOnInteraction": false}'
    virtual
  >
    <swiper-slide v-for="item in items" :virtualIndex="item.id" :key="item.id">
      <div class="box">
                            <img :src="item.srcItem">
                            <h3>hohn deo</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur 
                                adipisicing elit. Natus aperiam reprehenderit
                            aliquid earum tempora iure odio?Voluptatem, sunt.
                            </p>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                        </div> 
    </swiper-slide>
  </swiper>
</div>
</section>
</template>
<script>
import SwiperCore, { Virtual } from "swiper";
import {Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
SwiperCore.use([Virtual]);
SwiperCore.use([Autoplay]);

export default {
  data(){
    return{
      items:[
        {
        id:1,
        srcItem:'images/pic1.png',
      },
      {
        id:2,
        srcItem:'images/pic2.png',
      },
      {
        id:3,
        srcItem:'images/pic3.png',
      },
      {
        id:4,
        srcItem:'images/pic4.png',
      },
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>


<style scoped>
.review .review-slider{
    padding-bottom: 2rem;
}
.review .box{
    padding: 2rem;
    text-align: center;
    box-shadow: 0 1rem 2rem rgba(0, 0,0, .1);
    border-radius: .5rem;
    
}
.review .box img{
    height: 13rem;
    width: 13rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
}
.review .box h3{
    color: #333;
    font-size: 2.5rem;
}
.review .box p{
    color: #666;
    font-size: 1.5rem;
    padding: 1rem 0;
    border-radius: 50%;
}
.review .box .stars i{
    color: #ffa500;
    font-size: 1.7rem;
}
</style>