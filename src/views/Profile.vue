<template>
<section class="h-100 gradient-custom-2">
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

    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-9 col-xl-7">
                <div class="card">
                    <div class="rounded-top text-white d-flex flex-row" style="background-color: #000; height:200px;">
                        <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
                            <img src="../assets/male-img.webp" alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2" style="width: 150px; z-index: 1">
                        </div>
                        <div class="ms-5" style="margin-top: 120px;">
                            <h5>Andy Horwitz</h5>
                            <p>New York</p>
                        </div>
                    </div>
                    <div class="p-4 text-black" style="background-color: #f8f9fa;">
                        <div class="d-flex justify-content-end text-center py-1">
                            <div>
                                <p class="mb-1 h5">{{like}}</p>
                                <p class="small text-muted mb-0">Liked</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-4 text-black" style="vertical-align: middle;">
                        <p class="lead fw-normal mb-1">About</p>
                        <div class="p-2" style="background-color: #f8f9fa;">
                            <p><strong>Occupation: </strong> Web Developer</p>
                            <p style="margin-bottom: 0px; padding-bottom: 0px;"><strong>Hobbies: </strong> Loves to travel </p>
                        </div>

                        <div class="mt-4">
                            <p class="lead fw-normal mb-1">My Itinerary</p>
                            <div class="card">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img :src="this.hotel.image" class="img-fluid rounded-start" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">{{this.hotel.name}}</h5>
                                            <p class="card-text m-0" style="font-size: 14px;"><small class="text-muted">{{this.hotel.address}}</small></p>
                                            <p class="m-0" style="font-size: 14px;"><strong>Duration: </strong>{{this.hotel.start}} - {{this.hotel.end}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="list-group">
                            <ul v-for="date of this.dates" :key="date" class="list-group-item d-flex justify-content-between align-items-start">
                                <ol>
                                    <li v-for="item of this.names[date]" :key="item">{{item}}</li>
                                </ol>
                                <span class="badge bg-primary rounded-pill">{{date}}</span>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Profile',
    data() {
        return {
            itinerary: {},
            hotel: {},
            dates: [],
            monthsShort: {
                Jan: '01',
                Feb: '02',
                Mar: '03',
                Apr: '04',
                May: '05',
                Jun: '06',
                Jul: '07',
                Aug: '08',
                Sep: '09',
                Oct: '10',
                Nov: '11',
                Dec: '12',
            },
            like: 0,
            names: {}
        }
    },
    created() {
        fetch("https://smart-2e77b-default-rtdb.asia-southeast1.firebasedatabase.app/itinerary.json")
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            }).then((data) => {
                for (let i in data) {
                    let item = data[i]
                    // console.log(item)
                    if (item.type == "Hotel") {
                        this.hotel.name = item.name
                        this.hotel.address = item.address
                        this.hotel.image = item.image
                        let startDate = item.date[0].split(' ')
                        this.hotel.start = startDate[2] + ' ' + startDate[1] + ' ' + startDate[3]
                        let len = item.date.length
                        let endDate = item.date[len - 1].split(' ')
                        this.hotel.end = endDate[2] + ' ' + endDate[1] + ' ' + endDate[3]
                    } else {
                        let year = item.date[0].split(' ')[3]
                        let mth = this.monthsShort[item.date[0].split(' ')[1]]
                        let day = item.date[0].split(' ')[2]
                        if (Object.keys(this.itinerary).indexOf(item.date) == -1) {
                            this.itinerary[item.date] = [{
                                name: item.name,
                                address: item.address,
                                image: item.image,
                                date: new Date(year, mth, day)
                            }]
                        } else {
                            this.itinerary[item.date].push({
                                name: item.name,
                                address: item.address,
                                image: item.image,
                                date: new Date(year, mth, day)
                            })
                        }
                    }
                }
                this.dates = Object.keys(this.itinerary).sort((a, b) => Number(a.date) - Number(b.date))
                for (let date of this.dates) {
                    this.names[date] = []
                    for (let i in this.itinerary[date]) {
                        this.names[date].push(this.itinerary[date][i].name)
                    }
                    this.names[date].sort();
                }
            })

        fetch("https://smart-2e77b-default-rtdb.asia-southeast1.firebasedatabase.app/places.json")
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            }).then((data) => {
                this.like = Object.keys(data).length
            })
    }
}
</script>

<style scoped>
.card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
</style>
