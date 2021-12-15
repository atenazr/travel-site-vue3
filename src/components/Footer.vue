<template>
    <!-- footer section -->
            <section class="footer">
                <div class="box-container">

                    <div class="box">
                        <h3>about us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             iusto neque non nesciunt dolorum impedit, deleniti officiis earum cupiditate a quas dolor.
                        </p>
                    </div>
                    <div class="box">
                        <h3>branch location</h3>
                        <a href="#">india</a>
                        <a href="#">USA</a>
                        <a href="#">japan</a>
                        <a href="#">france</a>
                    </div>

                    <div class="box">
                        <h3>quick links</h3>
                        <router-link to="/home">home</router-link>
                    <router-link to="/book">book</router-link>
                    <router-link to="/packages">packages</router-link>
                    <router-link to="/services">services</router-link>
                    <router-link to="/gallery">gallery</router-link>
                    <router-link to="/review">review</router-link>
                    <router-link to="/contacts">contact</router-link>
                    </div>

                    <div class="box">
                        <h3>follow us</h3>
                        <a href="#">facebook</a>
                        <a href="#">instagram</a>
                        <a href="#">twitter</a>
                        <a href="#">linkdin</a>
                    </div>
                </div>
                <h1 class="credit">copied by ati from <span>mr.web designer</span> all rights reserved !</h1>
            </section>
            <!-- footer section end -->
</template>

<script>
export default{
    
}
</script>

<style scoped>
.footer{
    background: #333;
}

.footer .box-container{
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
}

.footer .box-container .box{
    padding: 1rem 0;
    flex: 1 1 20rem;
}

.footer .box-container .box h3{
    font-size: 2.5rem;
    padding: .7rem 0;
    color: #fff;
}

.footer .box-container .box p{
    font-size: 1.5rem;
    padding: .7rem 0;
    color: #eee;
}

.footer .box-container .box a{
    display: block;
    font-size: 1.5rem;
    padding: .7rem 0;
    color: #fff;
}

.footer .box-container .box a:hover{
    color: #ffa500;
    text-decoration: underline;
}

.footer .credit{
    text-align: center;
    padding: 2rem 1rem;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: normal;
    color: #fff;
    border-top: .1rem solid rgba(255,255,255,.2);
} 

.footer .credit span{
    color: #ffa500;
}


</style>