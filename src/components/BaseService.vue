<template>
     <div class="box">
                    <i class="fas" :class="nameIcon" ></i>
                    <h3> {{ title }}</h3>
                    <p>Lorem, ipsum dolor sit ametpisicing elit. Et odit eaque error dolores quam cum saepe est laborum labore distinctio in neque sit,
                         nobis ea quae enim excepturi quas quasi.</p>
    </div>
</template>

<script>
export default{
    props:[
        'nameIcon',
        'title'
    ]
}
</script>


<style scoped>
.box{
    flex: 1 1 30rem;
    border-radius: .5rem;
    padding: 1rem;
    text-align: center;
}
.box i{
    padding: 1rem;
    font-size: 5rem;
    color: #ffa500;
}
.box h3{
    font-size: 2.5rem;
    color: #333;
}
.box p{
    font-size: 1.5rem;
    color: #666;
    padding: 1rem 0;
}
.box:hover{
    box-shadow: 0 1rem 2rem rgba(0, 0,0, .1);
}
</style>