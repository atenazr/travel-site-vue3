<template>
     <div class="login-form-container">
            <i class="fa fa-times" id="form-close" @click="exitForm()"></i>
            <form action="">
                <h3>login</h3>
                <input type="email" class="box" placeholder="enter your email !">
                <input type="password" class="box" placeholder="enter your password !">
                <input type="submit" class="btn" value="login now">
                <input type="checkbox" id="remember">
                <label for="remember">remember me</label>
                <p>forget password?<a href="#">click here</a></p>
                <p>don`t have an account?<a href="#">register now!</a></p>
            </form>
        </div>
</template>


<script>
export default {
    emits:[
       'exit-form'
    ],
    methods:{
        exitForm(){
            this.$emit("exit-form");
        }
    }

}
</script>

<style>
.login-form-container{
    position: fixed;
    top:0;left: 0;
    min-height: 100vh;
    width: 100%;
    background: rgba(0, 0,0, .7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
}
.login-form-container.active{
    top: 0;
}
.login-form-container form{
    margin: 2rem;
    padding: 1.5rem 2rem;
    border-radius: .5rem;
    background: #fff;
    width: 50rem;
}
.login-form-container form h3{
    font-size: 3rem;
    color: #444;
    text-transform: uppercase;
    text-align: center;
    padding: 1rem 0;
}
.login-form-container form .box{
    width: 100%;
    padding: 1rem;
    font-size: 1.7rem;
    color: #333;
    margin: .6rem 0;
    border: .1rem solid rgba(0, 0,0, .3);
    text-transform: none;
}
.login-form-container form .box:focus{
    border-color: #ffa500;
}
.login-form-container form #remember{
    margin: 2rem 0;
}
.login-form-container form label{
    font-size: 1.5rem;
}
.login-form-container form .btn{
    display: block;
    width: 100%;
}
.login-form-container form p{
     padding: .5rem 0;
     font-size: 1.5rem;
     color: #666;
}
.login-form-container form p a{
    color: #ffa500;
}
.login-form-container form p a:hover{
    color: #333;
    text-decoration: underline  ;
}
.login-form-container #form-close{
    position: absolute;
    top: 2rem;right: 3rem;
    font-size: 5rem;
    color: #fff;
    cursor: pointer;
}


</style>