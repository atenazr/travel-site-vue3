<template>
<section class="brand-container">
     <swiper
    :slides-per-view="4"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :autoplay='{
  "delay": 2500,
  "disableOnInteraction": false}'
    virtual
  >
    <swiper-slide v-for="item in items" :virtualIndex="item.id" :key="item.id">
      <img :src="item.src">
    </swiper-slide>
  </swiper>
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
        src:'images/1.jpg',
      },
      {
        id:2,
        src:'images/2.jpg',
      },
      {
        id:3,
        src:'images/3.jpg',
      },
      {
        id:4,
        src:'images/4.jpg',
      },
      {
        id:5,
        src:'images/5.jpg',
      },
      {
        id:6,
        src:'images/6.jpg',
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
<style  scoped>
.brand-container{
    text-align: center;
}
</style>