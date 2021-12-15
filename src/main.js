import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

import { createRouter , createWebHistory } from 'vue-router' 
import Home from './components/Home.vue'
import Book from './components/Book.vue'
import Pakages from './components/Pakages.vue'
import Services from './components/Services.vue'
import Gallery from './components/Gallery.vue'
import Review from './components/Review.vue'
import Contacts from './components/contacts.vue'


const router = createRouter({
    history:createWebHistory(),
    routes :[
        {path:'/',component:Home},
        {path:'/home',component:Home},
        {path:'/book',component:Book},
        {path:'/packages',component:Pakages},
        {path:'/services',component:Services},
        {path:'/gallery',component:Gallery},
        {path:'/review',component:Review},
        {path:'/contacts',component:Contacts}
    ]
})


import {createStore} from 'vuex'
const store = createStore({
    state(){
        return{
            isLogined :false,
            indexPack:0,
            packSelected:[],
            allPack:[
                {
                    id:0,
                    cityname:'mumbai'
                },
                {
                    id:1,
                    cityname:'paris'
                },
                {
                    id:2,
                    cityname:'huwaei'
                },
                {
                    id:3,
                    cityname:'eyept'
                },
                {
                    id:4,
                    cityname:'tokyo'
                },
                {
                    id:5,
                    cityname:'dubai'
                },
            ]
        }
    },
    mutations:{
        setPack(state,idPack){
            let temp = {
                id:state.indexPack,
                cityname:state.allPack[idPack].cityname
            };
            state.packSelected.push(temp);
            console.log(state.packSelected);
        }
    }

})

app.use(store)
app.use(router)
app.mount('#app');
