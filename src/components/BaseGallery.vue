<template>
    <div class="box">
                    <img :src="srcimage" alt="">
                    <div class="content">
                        <h3>amazing places</h3>
                        <p> sit ilique, nobis qui nemo repudiandae excepturi consectetur et eveniet error? Vero asperiores id </p>
                        <a href="#" class="btn">see more</a>
                    </div>
                </div>
</template>


<script>
export default{
    props:[
        'srcimage'
    ]
}
</script>


<style scoped>
.box{
    overflow: hidden;
    box-shadow: 0 1rem 2rem rgba(0, 0,0, .1);
    border: 1rem solid #fff;
    border-radius: .5rem;
    flex: 1 1 30rem;
    height: 25rem;
    position: relative;
}
.box img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.box .content{
    position: absolute;
    top: -100%;left: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    background: rgba(0, 0,0, .7);
    padding: 2rem;
    padding-top: 5rem;
}
.box:hover .content{
    top: 0;
}
.box .content h3{
    font-size: 2.5rem;
    color: #ffa500;

}
.box .content p{
    font-size: 1.5rem;
    color: #eee;
    padding: .5rem 0;
}
</style>