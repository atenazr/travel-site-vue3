<template>
     <section class="book" id="book">
               <h1 class="heading">
                   <span>b</span>
                   <span>o</span>
                   <span>o</span>
                   <span>k</span>
                   <span class="space"></span>
                   <span>n</span>
                   <span>o</span>
                   <span>w</span>
               </h1>

               <div class="row">

                <div class="image">
                    <img src="images/book-img.svg" alt="">
                </div>

                <form action="">
                    <div class="inputBox">
                        <h3>where to</h3>
                        <input type="text" placeholder="place name">
                    </div>
                    <div class="inputBox">
                        <h3>how many</h3>
                        <input type="number" placeholder="number of guests">
                    </div>
                    <div class="inputBox">
                        <h3>arrivals</h3>
                        <input type="date" >
                    </div>
                    <div class="inputBox">
                        <h3>leaving</h3>
                        <input type="date" >
                    </div>
                </form>
               </div>
           </section>
        <!-- end book section -->
</template>



<style scoped>
.book .row{
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
}
.book .row .image{
    flex: 1 1 40rem;
}
.book .row .image img{
    width: 100%;
}
.book .row form{
    flex: 1 1 40rem;
    padding: 2rem;
    box-shadow:0 1rem 2rem rgba(0, 0,0, .1);
    border-radius: .5rem;
}
.book .row form .inputBox{
    padding: .5rem 0;
}
.book .row form .inputBox input{
    width: 100%;
    padding: 1rem;
    border: .1rem solid rgba(0, 0,0, .1);
    font-size: 1.7rem;
    color: #333;
    text-transform: none;
}
.book .row form .inputBox h3{
    font-size: 2rem;
    padding: 1rem 0;
    color: #666;
}
</style>