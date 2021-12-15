<template>
    <div class="box">
                    <img :src="srcImg" alt="">
        <div class="content">
                        <h3><i class="fas fa-map-marker-alt"></i>{{ title }}</h3>
                        <p> sit ametpisicing elit. Qui laboriosam ratione et illum pariatur perspiciatis error nostrum reiciendis mollitia deleniti omnis quibusdam, itaque quo quia tempore nisi fuga quae modi?</p>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <div class="price">$90.00 <span>$120.00</span></div>
                        <a href="#" class="btn" @click="increasePack(idPack)">book now</a>
        </div>
    </div>
</template>



<script>

export default{
    props:['srcImg','title','idPack'],
    methods:{
       increasePack(idPack){
           this.$store.commit('setPack',idPack);
       } 
    }
}
</script>

<style scoped>
.box{
    flex: 1 1 30rem;
    border-radius: .5rem;
    overflow: hidden;
    box-shadow: 0 1rem 2rem rgba(0, 0,0, .1);
}

.box img{
    height: 25rem;
    width: 100%;
    object-fit: cover;
}
.box .content{
    padding: 2rem;
}
.box .content h3{
    font-size: 2rem;
    color: #333;
}
.box .content h3 i{
    color: #ffa500;
    margin-right: 1rem;
}
.box .content p{
    font-size: 1.7rem;
    color: #666;
    padding: 1rem 0;
}
.box .content .stars i{
    font-size: 1.7rem;
    color: #ffa500;
}
.box .content .price{
    font-size: 2rem;
    color: #333;
    padding-top: 1rem;
}
.box .content .price span{
    font-size: 1.5rem;
    color: #666;
    text-decoration: line-through;
}
</style>