<template>
<div class="container-fluid">
    <nav class="shadow navbar navbar-expand-lg sticky-top" style="background-color: #a0c6d9">
        <div class="container-fluid">
            <div class='mx-md-2 overflow-visible hover-zoom'>
                <router-link :to="{name: 'Home'}">
                    <img class="img-fluid" style="position: relative; left: 30%;" src='../assets/TravelSGIcon.svg' width=80 height=80>
                </router-link>
            </div>

            <button class="navbar-toggler mx-1 border-0 hover-color " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarScroll">
                <ul id='navBarIcons' class="navbar-nav ms-auto" style="--bs-scroll-height: 100px; position: relative; right:2%;">
                    <li id="home" class="nav-item mx-3">
                        <router-link :to="{name: 'Home'}" class="nav-link px-2 hover-color">
                            <img src="../assets/house-door.svg" alt="Bootstrap" width="32" height="32">
                            <span class='d-sm-inline d-md-inline d-lg-none my-auto mx-3 navItem-text'>Home</span>
                            <span class='d-none d-xl-inline navItem-text'>Home</span>
                        </router-link>
                    </li>

                    <li id="planner" class="nav-item mx-3">
                        <router-link :to="{name: 'Planner'}" class="nav-link px-2 hover-color">
                            <img src="../assets/journal-bookmark.svg" alt="Bootstrap" width="32" height="32">
                            <span class='d-sm-inline d-md-inline d-lg-none my-auto mx-3 navItem-text'> Planner</span>
                            <span class='d-none d-xl-inline navItem-text'>Planner</span>
                        </router-link>
                    </li>

                    <li id="navigation" class="nav-item mx-3">
                        <router-link :to="{name: 'Navigation'}" class="nav-link px-2 hover-color">
                            <img src="../assets/trip_planner.svg" alt="Bootstrap" width="32" height="32">
                            <span class='d-sm-inline d-md-inline d-lg-none my-auto mx-3 navItem-text'> Navigation </span>
                            <span class='d-none d-xl-inline navItem-text'>Navigation</span>
                        </router-link>
                    </li>

                    <li id="chat" class="nav-item mx-3">
                        <router-link :to="{name: 'MRT'}" class="nav-link px-2 hover-color">
                            <img src="../assets/train-front.svg" alt="Bootstrap" width="32" height="32">
                            <span class='d-sm-inline d-md-inline d-lg-none my-auto mx-3 navItem-text '>MRT</span>
                            <span class='d-none d-xl-inline navItem-text'>MRT</span>
                        </router-link>
                    </li>

                    <li id="chat" class="nav-item mx-3">
                        <router-link :to="{name: 'Bus'}" class="nav-link px-2 hover-color">
                            <img src="../assets/bus.svg" alt="Bootstrap" width="32" height="32">
                            <span class='d-sm-inline d-md-inline d-lg-none my-auto mx-3 navItem-text '>Bus</span>
                            <span class='d-none d-xl-inline navItem-text'>Bus</span>
                        </router-link>
                    </li>

                    <li class="nav-item mx-3 dropdown">
                        <a class="nav-link px-2 hover-color dropdown-toggle" data-bs-toggle="dropdown">
                            <img src="../assets/person.svg" alt="Bootstrap" width="32" height="32">
                            <span class='d-sm-inline d-md-inline d-lg-none my-auto mx-3 navItem-text '>Profile</span>
                            <span class='d-none d-xl-inline navItem-text'>Account</span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end rounded2 themebg border border-0 shadow">
                            <li id="profile">
                                <router-link :to="{name: 'Profile'}" class="dropdown-item hover-color navItem-text">
                                    Profile
                                </router-link>
                            </li>
                            <li id="logout">
                                <router-link :to="{name: 'About'}" class="dropdown-item hover-color navItem-text" @click="handleSignOut">
                                    Log Out
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="row">
        <div class="col-8">
            <br>
            <p id="mapimage">Take a look at the
                <a href="https://scyt01.github.io/Train-Stations-in-Singapore/originalTrainMap.html" target="_blank">
                    <strong>Train Station Map image</strong>
                </a>
                for more information!<br>
                <strong>Train Operation Hours are usually from 5:30am to around midnight daily.</strong>
            </p>
        </div>
        <div class="col-4" id="festive">
            <br>
            <p>During festive periods, operating hours may change.<br>
                Please check the <a href="https://www.smrt.com.sg" target="_blank"><strong>SMRT</strong></a> website for more information.
            </p>
        </div>
    </div>
    <div class="row" id="interactivemap">
        <iframe src="https://scyt01.github.io/Train-Stations-in-Singapore/interactiveMap.html" width="1270" height="650" frameborder="0"></iframe>
    </div>
</div>
</template>

<script>
</script>

<style scoped>
#festive {
    background-color: orange;
    color: white;
    text-align: center;
}

#mapimage {
    margin-left: 10px;
}

#interactivemap {
    background-color: rgba(209, 224, 231, 255);
    padding: 30px 20px 20px 20px;
}
</style>
