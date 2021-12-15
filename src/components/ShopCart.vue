<template>
    <section id="shop-cart" class="shop-cart">
        <div class="box-container">
            <h3>already shop</h3>
            <div class="pack-selected">
                <div class="pack" v-for="(item,index) in items"
                :key="index">
                <h4>{{ item.cityname}}</h4>
                </div>
            </div>
            <a href="#" class="btn">continue</a>
        </div>

    </section>
</template>

<script>
export default{
    data(){
        return{
            items:[]
        }
    },
    mounted(){
        this.items = this.$store.state.packSelected;
    }

}
</script>

<style scoped>
.shop-cart{
    border:2px solid #ffa500;
    width: 30%;
    background: #333;
    position:absolute;
    top: 73px;left:70%;right:0;
    /* z-index: 1000; */
    border-radius: 5px; 
}
.shop-cart .box-container{
    text-align: center;
}
.shop-cart h3{
    color: #666;
    font-size: 1.8rem;
    border-bottom: 1px solid whitesmoke;
    margin: 5px;
    text-align: center;
}
.shop-cart .pack-selected{
    margin: 5px;
}
.shop-cart .pack{
    text-align: center;
    list-style: none;
    font-size: 1.5rem;
    color: #999;
    margin-bottom: .6rem;
}
</style>