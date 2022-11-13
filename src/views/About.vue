<template>
<!-- Top Page (Animation + Logo + Button) start-->
<div class="About">
    <div>
        <div class="container-fluid stage text-center vh-100 vw-100">
            <div class='text-center' v-motion-pop-visible>
                <div class='animate__bounceIn animate__animated animate__slow'>
                    <div class=''>
                        <img class="img-fluid w-25" src="../assets/aboutUs/images/travelSGLogo.svg" alt="">
                    </div>
                    <router-link :to="{name: 'Login'}" class="btn col-6 col-md-4 col-lg-3 mt-3">
                        Click here to Login
                    </router-link>
                    <br>
                    <router-link :to="{name: 'Register'}" class="btn col-6 col-md-4 col-lg-3 mt-3">
                        Click here to Sign up
                    </router-link>
                </div>
            </div>
            <div class="sky">
                <div class="cloud"></div>
                <div class="cloud"></div>
            </div>
            <div class="train">
                <div class="wagon"></div>
                <div class="wagon"></div>
                <div class="wagon"></div>
                <div class="locomotive">
                    <div class="cabin"></div>
                    <div class="motor"></div>
                    <div class="chimney">
                        <div class="smoke"></div>
                    </div>
                    <div class="light"></div>
                </div>
            </div>
        </div>
        <!-- Top Page (Animation + Logo + Button) end-->
        <!-- container for quote start-->
        <div style="background-color: #a0c6d9;">
            <div class='container-fluid text-center mx-auto py-5 py-3 px-2' v-motion-fade-visible>
                <h1 class=''>Your All-in-one Solution to Navigate Around Singapore!</h1>
            </div>
            <!-- container for quote end-->
            <!-- container with 3 desc start-->
            <div class='container mb-5 mx-3 mx-auto'>
                <div class='row align-items-center my-5 justify-content-center' v-motion-slide-visible-left>
                    <div class='col-sm-4 col-md-4 col-lg-3 col-12 text-center'>
                        <img src='../assets/aboutUs/icons/trip_planner.svg' class='img-fluid' style='width: 50%;'>
                    </div>
                    <div class='col-sm-8 col-md-7 col-lg-7 col-12  paddingresponsive'>
                        <h4 class="my-5">Plan Your Trip Ahead With Us</h4>
                    </div>
                </div>
                <div class='row align-items-center my-5 justify-content-center' v-motion-slide-visible-left>
                    <div class='col-sm-4 col-md-4 col-lg-3 col-12 text-center'>
                        <img src='../assets/aboutUs/icons/live_update.svg' class='img-fluid' style='width: 50%;'>
                    </div>
                    <div class='col-sm-8 col-md-7 col-lg-7 col-12  paddingresponsive'>
                        <h4 class="my-5">Get the Latest Information on Singapore's Transportation System</h4>
                    </div>
                </div>
                <div class='row align-items-center my-5 justify-content-center' v-motion-slide-visible-left>
                    <div class='col-sm-4 col-md-4 col-lg-3 col-12 text-center'>
                        <img src='../assets/aboutUs/icons/discover.svg' class='img-fluid' style='width: 50%;'>
                    </div>
                    <div class='col-sm-8 col-md-7 col-lg-7 col-12  paddingresponsive'>
                        <h4 class="my-5">Find Local Guides and Discover New Possibilities.</h4>
                    </div>
                </div>
            </div>
            <!-- container with 3 desc end-->
            <!-- container with 5 features start-->
            <div class='container-fluid mx-auto pb-5'>
                <div class='row pink text-center my-5 featurebox' v-motion-fade-visible>
                    <h1>- Features -</h1>
                </div>
                <div id='features' class='row justify-content-center'>
                    <div class="card col-sm-4 col-lg-2 m-3 cardStyle" v-motion-slide-visible-top>
                        <div class='col-6 mx-auto'>
                            <img class="card-img-top pt-3 pb-1" src="../assets/aboutUs/icons/plan.svg" alt="Card image cap">
                        </div>
                        <div class="card-body ">
                            <h3 class="card-title text-center titleresponsive"><b>Trip Planner</b></h3>
                            <p class="card-text textresponsive">
                                <li>Research destinations and activities</li>
                                <li>Create your customised travel bucket list</li>

                            </p>
                        </div>
                    </div>
                    <div class="card col-sm-4 col-lg-2 m-3 cardStyle" v-motion-slide-visible-top>
                        <div class='col-6 mx-auto'>
                            <img class="card-img-top pt-3 pb-1" src="../assets/aboutUs/icons/navigation.svg" alt="Card image cap">
                        </div>
                        <div class="card-body">
                            <h3 class="card-title text-center titleresponsive"><b>Navigation</b></h3>
                            <p class="card-text textresponsive">
                                <ul>
                                    <li>Get the fastest route to your destination</li>
                                </ul>
                            </p>
                        </div>
                    </div>

                    <div class="card col-sm-4 col-lg-2 m-3 cardStyle" v-motion-slide-visible-top>
                        <div class='col-6 mx-auto'>
                            <img class="card-img-top pt-3 pb-1" src="../assets/aboutUs/icons/train.svg" alt="Card image cap">
                        </div>
                        <div class="card-body">
                            <h3 class="card-title text-center titleresponsive"><b>MRT Map</b></h3>
                            <p class="card-text textresponsive">
                                <ul>
                                    <li>Interactive MRT and LRT Map</li>
                                    <li>Explore MRT and LRT rail routes in Singapore</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div class="card col-sm-4 col-lg-2 m-3 cardStyle" v-motion-slide-visible-top>
                        <div class='col-6 mx-auto'>
                            <img class="card-img-top pt-3 pb-1" src="../assets/aboutUs/icons/bus.svg" alt="Card image cap">
                        </div>
                        <div class="card-body ">
                            <h3 class="card-title text-center titleresponsive"><b>Bus Arrival</b></h3>
                            <p class="card-text textresponsive">
                                <li>Get real-time arrival timing of buses at the nearby bus stops</li>
                            </p>
                        </div>
                    </div>
                    <div class="card col-sm-4 col-lg-2 m-3 cardStyle" v-motion-slide-visible-top>
                        <div class='col-6 mx-auto'>
                            <img class="card-img-top pt-3 pb-1" src="../assets/aboutUs/icons/merlion.svg" alt="Card image cap">
                        </div>
                        <div class="card-body ">
                            <h3 class="card-title text-center titleresponsive"><b>Local Discovery</b></h3>
                            <p class="card-text textresponsive">
                                <li>Uncover interesting and iconic spots on your trip</li>
                                <li>Find different and fun activities</li>
                            </p>
                        </div>
                    </div>
                    <!-- <div class="card col-sm-4 col-lg-2 m-3 cardStyle" data-aos="fade-in" data-aos-offset="550"
                    data-aos-duration="500" data-aos-anchor=".featurebox">
                    <div class='col-6 mx-auto'>
                        <img class="card-img-top pt-3 pb-1" src="/images/chat.png" alt="Card image cap">
                    </div>
                    <div class="card-body ">
                        <h3 class="card-title text-center titleresponsive">Chat Bot</h3>
                        <p class="card-text textresponsive">
                            <li>Ask Jaime</li>
                        </p>
                    </div>
                </div> -->
                </div>
            </div>
        </div>
        <!-- container with 5 features end-->
        <hr class="m-0">
        <div class='container-fluid' id="bottomPage">
            <div class='col-9 offset-2 col-sm-6 offset-sm-6'>
                <div class='col-sm-9 mb-5'>
                    <h1 style="color:white;" v-motion-pop-visible>
                        Get Onboard Now! <br> Registration Is Free and Easy.</h1>
                    <router-link :to="{name: 'Register'}" class="btn col-12 col-md-12 col-lg-9 mt-3" v-motion-fade-visible>
                        Register
                    </router-link>
                </div>

                <div class="col-sm-9">
                    <div class="row align-items-center col-md-12 col-lg-9">
                        <h4 style="color: white;" class="my-0 col-sm-12 col-md-9">Already have an account?</h4>
                        <router-link :to="{name: 'Login'}" class="btn col col-sm-12 col-md-3 mt-3" v-motion-fade-visible>
                            Login
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'About',
}
</script>

<style scoped>
/* Login or Sign-up button */
.btn {
    /* background-color:  #e05060; */
    background-color: #e05060;
    color: white;

}

.btn:hover {
    background-color: #b26d75;
    color: white;
    border: 3px solid white
}

h4 {
    font-family: sans-serif;
}

h1 {
    color: #f6ddcb;
    font-family: sans-serif;
}

.cardStyle {
    background-color: #d9f2ff;
    border: 4px solid white;
}

h3 {
    font-family: sans-serif;

}

li {
    font-family: sans-serif;
}

/* Responsive Layout */
@media screen and (max-width: 1280px) {
    li {
        font-size: 0.9rem;
    }

    .titleresponsive {
        font-size: 1.4rem;
    }
}

@media screen and (max-width: 1080px) {
    li {
        font-size: 0.8rem;
    }
}

@media screen and (max-width: 960px) {
    li {
        font-size: 0.9rem;
    }
}

@media screen and (max-width: 576px) {
    li {
        font-size: 1rem;
    }

    .paddingresponsive {
        padding-right: 64px;
        padding-left: 64px;
    }

}

/* OVERALL TRAIN ANIMATION - start */
body {
    font-family: sans-serif;
}

html,
body,
.ground {
    height: 100%;
}

.stage {
    background-color: #cce6fd;
    /* The following will stop the page from scrolling! */
    /* overflow: hidden; */
    animation: dayTime 40s linear infinite;
}

/*CLOUDS*/

.sky {
    position: relative;
}

.cloud {
    margin: 5% 0 0 100%;
    position: relative;
}

.cloud:before,
.cloud:after {
    position: absolute;
    content: '';
}

.cloud,
.cloud:before,
.cloud:after {
    background: #fff;
    border-radius: 50%;
    border: 25px solid #fff;
    width: 0.5%;
    overflow: visible;
}

.cloud:before {
    top: -35px;
    right: -60px;
    border-width: 30px;
}

.cloud:after {
    bottom: -25px;
    right: -95px;
    border-width: 28px;
}

.sky .cloud:nth-child(1) {
    -webkit-animation: wind 80s infinite;
    animation: wind 80s infinite;
}

.sky .cloud:nth-child(2) {
    -webkit-animation: wind 150s infinite;
    animation: wind 150s infinite;
}

.stage:after {
    content: ' ';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    border-top: 3px solid #205c6b;
    border-bottom: 3px dashed #205c6b;
}

/*TRAIN*/

.train {
    position: absolute;
    bottom: 10px;
    width: 310px;
    z-index: 1;
}

.wagon,
.cabin,
.chimney {
    border-radius: 4px 4px 0 0;
    border-top: 4px solid #ffc928;
}

.wagon,
.motor {
    border-bottom: 2px solid #ffc928;
}

.wagon,
.locomotive {
    display: inline-block;
    width: 70px;
    height: 55px;
    background-color: #e04f60;
    position: relative;
}

/*WHEELS*/

.wagon:before,
.wagon:after,
.motor:before,
.motor:after,
.cabin:after {
    content: ' ';
    color: #fff;
    padding: 6px;
    position: absolute;
    border-radius: 46%;
    border: 6px solid #333;
    bottom: -10px;
    background-color: #666;
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;
}

.wagon:before {
    left: 6px;
}

.wagon:after {
    right: 6px;
}

.motor:before {
    left: 32px;
}

.motor:after {
    right: 4px;
}

.cabin:after {
    bottom: -50px;
    padding: 8px;
    left: 3px;
}

/*LOCOMOTIVE*/

.locomotive {
    background-color: transparent;
}

.locomotive .cabin {
    width: 58px;
    height: 35px;
    background-color: #e04f60;
    position: relative;
    z-index: 1;
    border-radius: 8px 8px 0 0;
}

/*locomotive window*/

.locomotive .cabin:before {
    content: ' ';
    width: 25px;
    height: 18px;
    position: absolute;
    top: 10px;
    left: 15px;
    border-radius: 3px;
    border: 3px solid pink;
    background-color: #f1f1f1;
}

.locomotive .motor {
    display: inline-block;
    width: 85px;
    height: 40px;
    background-color: #e04f60;
    position: relative;
    border-radius: 0 8px 0px 0px;
}

.locomotive .chimney {
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #e04f60;
    right: -6px;
    bottom: 10px;
    -webkit-animation: puf 4s 2;
    animation: puf 4s 2;
}

.locomotive .light {
    content: " ";
    position: absolute;
    right: -10px;
    bottom: 0;
    border-radius: 50%;
    border: 3px solid pink;
}

.train {
    -webkit-animation: voyage 20s linear infinite;
    animation: voyage 20s linear infinite;
}

/*ANIMATIONS*/

@-webkit-keyframes dayTime {
    0% {
        background-color: #cce6fd;
    }

    50% {
        background-color: #252645;
    }

    100% {
        background-color: #cce6fd;
    }
}

@keyframes dayTime {
    0% {
        background-color: #cce6fd;
    }

    50% {
        background-color: #252645;
    }

    100% {
        background-color: #cce6fd;
    }
}

@-webkit-keyframes puf {
    0% {
        bottom: 0px
    }

    25% {
        bottom: -1px;
    }

    100% {
        bottom: 5px;
    }
}

@keyframes puf {
    0% {
        bottom: 0px
    }

    25% {
        bottom: -1px;
    }

    100% {
        bottom: 5px;
    }
}

@-webkit-keyframes wind {
    0% {
        right: 0;
    }

    100% {
        right: 110%;
    }
}

@keyframes wind {
    0% {
        right: 0;
    }

    100% {
        right: 110%;
    }
}

@-webkit-keyframes voyage {
    0% {
        left: -310px;
    }

    100% {
        left: 100%;
    }
}

@keyframes voyage {
    0% {
        left: -310px;
    }

    100% {
        left: 100%;
    }
}

@-webkit-keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

/* OVERALL TRAIN ANIMATION - end */

#bottomPage {
    background-image: url('../assets/aboutUs/images/aboutUsPoster.svg');
    background-size: cover;
    background-position: top;
    padding-bottom: 300px;
    padding-top: 100px;
}
</style>
