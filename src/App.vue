<template>
<div id="app">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
       <!-- header section -->
        <header>
            <a href="#" class="logo"><span>T</span>ravel</a>

            <nav class="navbar">
                    <router-link to="/home">home</router-link>
                    <router-link to="/book">book</router-link>
                    <router-link to="/packages">packages</router-link>
                    <router-link to="/services">services</router-link>
                    <router-link to="/gallery">gallery</router-link>
                    <router-link to="/review">review</router-link>
                    <router-link to="/contacts">contact</router-link>
                    <!-- <a href="#home">Home</a>
                    <a href="#book" >book</a>
                    <a href="#pakages" >pakages</a>
                    <a href="#services" >services</a>
                    <a href="#gallery" >gallery</a>
                    <a href="#review" >review</a>
                    <a href="#contact" >contact</a> -->
            </nav>
            <div class="icons">
                <i class="fas " :class="[{'fa-times': showSearchbar},{'fa-search': !showSearchbar} ]" 
                id="search-btn" @click="showSearchbar =! showSearchbar"></i>
                <i class="fas fa-user " id="login-btn" @click="showLoginform = true"></i>
                <i class="fas fa-cart-arrow-down" @click="showShopcart =! showShopcart"></i>
            </div>

            <form action="" class="search-bar-container" v-if="showSearchbar">
                <input type="search" id="search-bar" placeholder="search here ...">
                <label for="search-bar"  class="fas fa-search "></label>
            </form>
            <ShopCart v-if="showShopcart"></ShopCart>
        </header>
        <!-- header section end -->
    
  <login-form v-if="showLoginform" @exit-form="closeForm()"></login-form>
  <router-view></router-view>
  <Brands></Brands>
  <Footer></Footer>

  </div>
</template>

<script>
import loginForm from './components/loginForm.vue'
import ShopCart from './components/ShopCart.vue'
import Brands from './components/Brands.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data(){
    return{
      showSearchbar:false,
      showLoginform : false,
      showShopcart :false
    }
  },
  components: {
    loginForm,
    Brands,
    Footer,
    ShopCart
  },
  methods:{
    closeForm(){
        this.showLoginform = false;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');
*{
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    outline: none;
    box-sizing: border-box;
    border: none;
    text-transform: capitalize;
    transition: all .2s ease;
}

*::selection{
    background: var(--orange);
    color: #fff;
}
html{
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-padding-top: 6rem;
    scroll-behavior: smooth;
}
section{
    padding: 2rem 9%;
}
#app{
    padding-top:30px;
}
.btn{
    display: inline-block;
    margin-top: 1rem;
    background: #ffa500;
    color: #fff;
    padding: .8rem 3rem;
    border: .2rem solid #ffa500;
    cursor: pointer;
    font-size: 1.7rem;
    border-radius: 5px;
}
.btn:hover{
    background: rgba(255,165,0,.2);
    color: #ffa500;
}
header{
    position: fixed;
    top: 0;left: 0;right: 0;
    background: #333;
    z-index: 1000;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: 2rem 9%;
}

header .logo{
    font-size: 2.5rem;
    font-weight: bolder;
    color: #fff;
    text-transform: uppercase;
}
header .logo span{
    color: #ffa500;
}
header .navbar a{
    color: #fff;
    font-size: 2rem;
    padding: 0 .8rem;
}
header .navbar a:hover{
    color: #ffa500;
}
header .icons i{
    font-size: 2.5rem;
    color: #fff;
    cursor: pointer;
    margin-right:2rem ;
}
header .icons i:hover{
    color: #ffa500;
}
header .search-bar-container{
    position: absolute;
    top:100%;
    left: 0;right: 0;
    padding: 1.5rem 2rem;
    background: #333;
    display: flex;
    align-items: center;
    border-top: .1rem solid rgba(255,255,255,.2);
    z-index: 1001;
}
header .active{
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
header .search-bar-container #search-bar{
    width: 100%;
    padding:1rem;
    text-transform: none;
    color: #333;
    font-size: 1.7rem;
    border-radius: .5rem;
}

header .search-bar-container label{
    color: #fff;
    cursor: pointer;
    font-size: 3rem;
    margin-left: 1.5rem;
}
header .search-bar-container label:hover{
    color: #ffa500;
}
.heading{
    text-align: center;
    padding: 2.5rem 0;
}
.heading span{
    font-size: 3.5rem;
    background: rgba(255,165,0,.2);
    color: #ffa500;
    border-radius: .5rem;
    padding: .2rem 1rem;
    text-transform: uppercase;
}
.heading span.space{
    background: none;
}
header .navbar .router-link-active{
    color: #ffa500;
}
</style>
