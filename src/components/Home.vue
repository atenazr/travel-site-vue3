<template>
  <div>
        <!-- home section -->
           <section class="home" id="home">
               <div class="content">
                <h3>adventure is wortwhile</h3>
                <p>discover new places with us,adventure awaits</p>
                <a href="#" class="btn">discover more</a>
               </div>

               <div class="controls">
                  <span class="vid-btn" @click="setSrc(0)" :class="[{'active' : sources[0].selectS}]"></span>
                   <span class="vid-btn" @click="setSrc(1)" :class="[{'active' : sources[1].selectS}]"></span>
                   <span class="vid-btn" @click="setSrc(2)" :class="[{'active' : sources[2].selectS}]"></span>
                   <span class="vid-btn" @click="setSrc(3)" :class="[{'active' : sources[3].selectS}]"></span>
                   <span class="vid-btn" @click="setSrc(4)" :class="[{'active' : sources[4].selectS}]"></span>
               </div>

               <div class="video-container">
                   <video :src="setSource"  id="video-slider" loop autoplay muted></video>
               </div>
           </section> 
        <!-- end home section -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      sources:[
        {src:"images/vid-1.mp4",selectS:true},
        {src:"images/vid-2.mp4",selectS:false},
        {src:"images/vid-3.mp4",selectS:false},
        {src:"images/vid-4.mp4",selectS:false},
        {src:"images/vid-5.mp4",selectS:false}
      ],
      indexSrc:0
    }
  },
  methods:{
    setSrc(num){
      this.setFalse();
      this.indexSrc = num;
      this.sources[this.indexSrc].selectS = true;
    },
    setFalse(){
      for (let i = 0; i < 5; i++) {
          this.sources[i].selectS = false;
        }
      }
  },
  computed:{
  setSource(){
    return this.sources[this.indexSrc].src
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    position: relative;
    z-index: 0;
}
.home .content{
    text-align: center;
}
.home .content h3{
    font-size: 4.5rem;
    color: #fff;
    text-transform: uppercase;
    text-shadow: 0 .3rem .5rem rgba(0, 0,0, .1);
}
.home .content p{
    font-size: 2.5rem;
    color: #fff;
    padding: .5rem 0;
}
.home .video-container video{
    position: absolute;
    top: 0;left: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.home .controls{
    padding: 1rem;
    border-radius: 5rem;
    background: rgba(0, 0,0, .7);
    position: relative;
    top: 10rem;
}
.home .controls .vid-btn{
    height: 2rem;
    width: 2rem;
    display: inline-block;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    margin: 0 .5rem;
}
.home .controls .vid-btn.active{
    background: #ffa500;
}
</style>
