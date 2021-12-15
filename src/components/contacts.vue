<template>
    <!-- contact section -->
           <section class="contact" id="contact">
            <h1 class="heading">
                <span>c</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span>t</span>
            </h1>
            <div class="row">

                <div class="image">
                    <img src="images/contact-img.svg">
                </div>
                <form action="">
                    <div class="inputBox">
                        <input type="text" placeholder="name">
                        <input type="email" placeholder="email">
                    </div>
                    <div class="inputBox">
                        <input type="number" placeholder="number">
                        <input type="text" placeholder="subject">
                    </div>
                    <textarea placeholder=" message" name="" id="" cols="30" rows="10"></textarea>
                    <input type="submit" class="btn" value="send message">
                </form>
            </div>

           </section>
           <!-- contact section end -->
</template>

<script>
export default{
    
}
</script>


<style scoped>
.contact .row{
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: center;
}
.contact .row .image{
    flex: 1 1 35rem;
}
.contact .row .image img{
    width: 100%;
}
.contact .row form{
    flex: 1 1 50rem;
    padding: 2rem;
    box-shadow: 0 1rem 2rem rgba(0, 0,0, .1);
    border-radius: .5rem;
}
.contact .row form .inputBox{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.contact .row form .inputBox input{
    width: 49%;
    margin: 1rem 0;
    padding: 1rem;
    font-size: 1.7rem;
    color: #333;
    background: #f7f7f7;
    text-transform: none;
}

.contact .row form textarea{
    height: 15rem;
    resize: none;
    width: 100%;
    margin: 1rem 0;
    padding: 1rem;
    font-size: 1.7rem;
    color: #333;
    background: #f7f7f7;
    text-transform: none;
}
</style>