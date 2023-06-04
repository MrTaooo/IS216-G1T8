<template>
<div class="planner">
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

    <div v-if="isError" class="alert alert-danger d-flex align-items-center" role="alert">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div>
            {{this.errorMsg}}
        </div>
    </div>

    <div class="d-flex justify-content-center text-center p-3" style="color: #004e86; font-weight: bold;">
        <div class="row">
            <div class="col-md-4 col-sm-6 my-1">
                START: &nbsp; <input type="date" v-model="start" :min="today" @change="restart">
            </div>
            <div class="col-md-4 col-sm-6 my-1">
                END: &nbsp; <input type="date" v-model="end" :min="this.start" @change="restart">
            </div>
            <div class="col-md-4 mt-3">
                <button class="btn plannerBtn" @click="plan">
                    <i class="fa-solid fa-plane"></i> Plan
                </button>
            </div>
        </div>
    </div>

    <div v-if="isSave" class="alert alert-success alert-dismissible">
        <strong>Saved successfully!</strong> <i class="fa-solid fa-download"></i>
    </div>

    <div class="container-fluid mt-3" v-if="this.display && !this.isError">
        <div class="row">
            <div class="col-xl-4 col-lg-6 rounded m-1 order-xl-last" style="background-color: white">
                <div class="row py-2">
                    <span style="color: #004e86; font-weight: bold;"><i class="fa-solid fa-heart"></i> FAVOURITES</span>
                    <div class="col-md-6 my-1">
                        <button class="btn attractionBtn w-100" @click="attrAdd()" :style="[isAttraction ? {'background':'#2b5d81', 'color':'white'} : {'border':'1px solid black'}]">
                            <i class='fas fa-umbrella-beach'></i> Attraction
                        </button>
                    </div>
                    <div class="col-md-6 mb-1">
                        <button class="btn restaurantBtn w-100" @click="resAdd()" :style="[isRestaurant ? {'background':'#2b5d81', 'color':'white'} : {'border':'1px solid black'}]">
                            <i class="fas fa-utensils"></i> Restaurant
                        </button>
                    </div>
                    <div class="col-md-6 mb-1">
                        <button class="btn hotelBtn w-100" @click="hotelAdd()" :style="[isHotel ? {'background':'#2b5d81', 'color':'white'} : {'border':'1px solid black'}]">
                            <i class="fas fa-bed"></i> Hotel
                        </button>
                    </div>
                    <div class="col-md-6 mb-1">
                        <button class="btn shopBtn w-100" @click="shopAdd()" :style="[isShop ? {'background':'#2b5d81', 'color':'white'} : {'border':'1px solid black'}]">
                            <i class="fas fa-shopping-cart"></i> Shop
                        </button>
                    </div>
                    <div class="col-md-6 mb-1">
                        <button class="btn drinkBtn w-100" @click="drinkAdd()" :style="[isDrink ? {'background':'#2b5d81', 'color':'white'} : {'border':'1px solid black'}]">
                            <i class="fas fa-glass-martini-alt"></i> Drink
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button class="btn cafeBtn w-100" @click="cafeAdd()" :style="[isCafe ? {'background':'#2b5d81', 'color':'white'} : {'border':'1px solid black'}]">
                            <i class="fas fa-coffee"></i> Café
                        </button>
                    </div>
                    <div class="col-md-12 mt-0">
                        <button @click="clear" class="btn btn-link shadow-none float-end" style="color: #646465;">Clear</button>
                        <!-- <button @click="filter" class="btn btn-link shadow-none float-end" style="color: #004e86;">Filter</button> -->
                    </div>
                    <hr>
                    <div class="col overflow-auto mt-2" style="height:400px;">
                        <div class="row mb-2" v-for="category in this.favCopy" :key="category">
                            <fav :place="category" :start="this.start" :days="this.days" :hotel="this.isHotelAdd" :hotelName="this.hotelName" :added="this.added" @select="select" @add="add" @remove="remove" @edit="edit"></fav>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="this.images.length > 0" class="col rounded m-1 order-xl-last overflow-auto vh-100 d-none d-md-none d-lg-block d-xl-block d-xxl-block" style="background-color: white">
                <div class="row py-2">
                    <div class="col-12" v-if="this.images.length > 1">
                        <img :src="image1" class="mainImg">
                    </div>
                    <div class="col-4" v-if="this.images.length > 1">
                        <img :src="image2" class="gallery">
                    </div>
                    <div class="col-4" v-if="this.images.length > 1">
                        <img :src="image3" class="gallery">
                    </div>
                    <div class="col-4" v-if="this.images.length > 1">
                        <img :src="image4" class="gallery">
                    </div>
                    <div class="col-4" v-if="this.images.length > 1">
                        <img :src="image5" class="gallery">
                    </div>
                    <div class="col-4" v-if="this.images.length > 1">
                        <img :src="image6" class="gallery">
                    </div>
                    <div class="col-4" v-if="this.images.length > 1">
                        <img :src="image7" class="gallery">
                    </div>
                    <div class="col-4" v-if="this.images.length > 1">
                        <img :src="image8" class="gallery">
                    </div>
                    <div class="col-4" v-if="this.images.length > 1">
                        <img :src="image9" class="gallery">
                    </div>
                    <div class="col-4" v-if="this.images.length > 1">
                        <img :src="image10" class="gallery">
                    </div>
                    <div class="col mt-1">
                        <div class="card-body">
                            <p class="card-title">
                                <i v-if="this.selected.type == 'Tourist Attraction'" class='fas fa-umbrella-beach fa-xs'></i>
                                <i v-else-if="this.selected.type == 'Restaurant'" class="fas fa-utensils fa-xs"></i>
                                <i v-else-if="this.selected.type == 'Hotel'" class="fas fa-bed fa-xs"></i>
                                <i v-else-if="this.selected.type == 'Shop'" class="fas fa-shopping-cart fa-xs"></i>
                                <i v-else-if="this.selected.type == 'Drink'" class="fas fa-glass-martini-alt fa-xs"></i>
                                <i v-else class="fas fa-coffee fa-xs"></i>
                            </p>
                            <strong class="p-0" style="font-size:14px;">{{this.selected.name}}</strong>
                            <p style="font-size:12px;">{{this.selected.address}}</p>
                            <table class="table table-hover text-center w-75" v-if="this.selected.operating.length > 0" style="font-size: 14px;">
                                <thead>
                                    <tr>
                                        <th>Day</th>
                                        <th>Operating Hours</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="day in this.selected.operating" :key="day">
                                        <td>{{day.split(':')[0]}}</td>
                                        <td>
                                            {{day.split(':').splice(1,).join(':').split(',')[0]}}
                                            <br>
                                            {{day.split(':').splice(1,).join(':').split(',')[1]}}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="this.images.length > 0" class="col rounded m-1 order-xl-last d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none" style="background-color: white">
                <div class="row mt-3">
                    <div class="col-8">
                        <div class="card-body">
                            <p class="card-title">
                                <i v-if="this.selected.type == 'Tourist Attraction'" class='fas fa-umbrella-beach fa-xs'></i>
                                <i v-else-if="this.selected.type == 'Restaurant'" class="fas fa-utensils fa-xs"></i>
                                <i v-else-if="this.selected.type == 'Hotel'" class="fas fa-bed fa-xs"></i>
                                <i v-else-if="this.selected.type == 'Shop'" class="fas fa-shopping-cart fa-xs"></i>
                                <i v-else-if="this.selected.type == 'Drink'" class="fas fa-glass-martini-alt fa-xs"></i>
                                <i v-else class="fas fa-coffee fa-xs"></i>
                            </p>
                            <strong class="p-0" style="font-size:14px;">{{this.selected.name}}</strong>
                            <p style="font-size:12px;">{{this.selected.address}}</p>
                            <table class="table table-hover text-center w-75" v-if="this.selected.operating.length > 0" style="font-size: 14px;">
                                <thead>
                                    <tr>
                                        <th>Day</th>
                                        <th>Operating Hours</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="day in this.selected.operating" :key="day">
                                        <td>{{day.split(':')[0]}}</td>
                                        <td>
                                            {{day.split(':').splice(1,).join(':').split(',')[0]}}
                                            <br>
                                            {{day.split(':').splice(1,).join(':').split(',')[1]}}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-4">
                        <img :src="image1" alt="" class="card-img-top">
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6 overflow-auto vh-100 m-1" style="font-size:14px;">
                <div class="row mb-3" v-if="this.addedNames.length > 0">
                    <div class="col">
                        <button class="btn float-end rounded-pill save" style="font-size:14px;" @click="save">
                            Save Itinerary <i class="fa-solid fa-floppy-disk"></i>
                        </button>
                    </div>
                </div>
                <div class="row" v-for="index in this.days+1" :key="index">
                    <div class="container mb-3 rounded" style="border: 1px solid #2b5d81;">
                        <div class="row head">
                            <strong>{{addDays(index)}}</strong>
                        </div>
                        <div class="row">
                            <span v-for="i in this.addedNames" :key="i">
                                <span v-if="this.addedType[i.name] == 'Hotel'">
                                    <i class="fas fa-bed fa-xs"></i>
                                    {{i.name}}
                                </span>

                                <span v-if="i.date == addDays(index)">
                                    <i v-if="this.addedType[i.name] == 'Tourist Attraction'" class='fas fa-umbrella-beach fa-xs'></i>
                                    <i v-else-if="this.addedType[i.name] == 'Restaurant'" class="fas fa-utensils fa-xs"></i>
                                    <i v-else-if="this.addedType[i.name] == 'Shop'" class="fas fa-shopping-cart fa-xs"></i>
                                    <i v-else-if="this.addedType[i.name] == 'Drink'" class="fas fa-glass-martini-alt fa-xs"></i>
                                    <i v-else class="fas fa-coffee fa-xs"></i>
                                    {{i.name}}
                                </span>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import fav from '../components/fav.vue'
import {
    addItinerary
} from '/firebase.js'

export default {
    name: 'Planner',
    components: {
        fav
    },
    data() {
        return {
            start: "",
            end: "",
            errorMsg: "",
            isError: false,
            display: false,
            days: 0,
            fav: [],
            selected: "",
            images: [],
            infoClicked: [],
            isAttraction: false,
            isRestaurant: false,
            isHotel: false,
            isShop: false,
            isDrink: false,
            isCafe: false,
            favCopy: [],
            added: [],
            addedNames: [],
            addedType: {},
            isHotelAdd: false,
            hotelName: "",
            isSave: false
        }
    },
    methods: {
        plan() {
            if (this.start == "" && this.end == "") {
                this.isError = true
                this.errorMsg = "Please fill in the START and END dates for your trip."
            } else if (this.start == "") {
                this.isError = true
                this.errorMsg = "Please fill in the START date for your trip."
            } else if (this.end == "") {
                this.isError = true
                this.errorMsg = "Please fill in the END date for your trip."
            } else {
                let endDate = new Date(this.end)
                let startDate = new Date(this.start)
                this.days = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
                if (this.days < 0) {
                    this.isError = true
                    this.errorMsg = "Invalid date inputs"
                } else {
                    this.isError = false
                    this.display = true
                }
            }
        },
        restart() {
            if (this.addedNames.length > 0) {
                let endDate = new Date(this.end)
                let startDate = new Date(this.start)
                this.days = (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
                this.added = []
                this.addedNames = []
                this.addedType = {}
                this.isHotelAdd = false
                this.hotelName = ""
                this.isSave = false
            }
        },
        add(data) {
            let date = data[1]
            let result = data[0]
            let name = result.name
            let image = ""
            if (result.image != '../assets/noImg.jpg'){
                image = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${result.image[0]}&key=.....EnterGoogleAPIKeyHere.....`
            }
            else{
                image = result.image
            }
            this.added[name] = [{
                date: date,
                name: result.name,
                place: result.place,
                address: result.address,
                lat: result.lat,
                lng: result.lng,
                type: result.type,
                operating: result.operating,
                image: image
            }]
            this.addedType[result.name] = result.type
            this.addedNames.push({
                name: name,
                date: date
            })

            if (result.type == "Hotel") {
                this.isHotelAdd = true
                this.hotelName = name
                let temp = []
                for (let i = 0; i < this.days + 1; i++) {
                    temp.push(this.addDays(i))
                }
                this.added[name][0].date = temp
                // this.added[name].date = temp
                // console.log(this.added[name].date)
            }

            // console.log(this.addedNames)
            // console.log(this.added)
        },
        edit(data) {
            // console.log(data)
            let placeName = data[0]
            let date = data[1]
            for (let name in this.addedNames) {
                let nameObj = this.addedNames[name]
                if (nameObj.name == placeName) {
                    nameObj.date = date
                }
            }
            this.added[placeName][0].date = date
            // console.log(this.added)
        },
        remove(data) {
            for (let idx in this.addedNames) {
                let nameObj = this.addedNames[idx]
                if (data == nameObj.name) {
                    let type = this.added[nameObj.name][0].type
                    if (type == "Hotel") {
                        this.isHotelAdd = false
                        this.hotelName = ""
                    }
                    this.addedNames.splice(idx, 1)
                    delete this.added[nameObj.name]
                }
            }
            // console.log(this.added)
        },
        save() {
            for (let i in this.added) {
                let place = this.added[i][0]
                addItinerary(place)
            }
            this.isSave = true
        },
        addDays(day) {
            let startDate = new Date(this.start)
            startDate.setDate(startDate.getDate() + day - 1)
            return startDate.toString().slice(0, 15)
        },
        select(data) {
            this.count = 0
            this.images = []
            this.selected = data
            if (typeof this.selected.image === 'object') {
                for (let i of this.selected.image) {
                    this.images.push(i)
                }
            } else {
                this.images.push(this.selected.image)
            }
            // console.log(this.selected)
        },
        attrAdd() {
            this.isAttraction = true
            this.isRestaurant = false
            this.isHotel = false
            this.isShop = false
            this.isDrink = false
            this.isCafe = false
            this.favCopy = []
            for (let i of this.fav) {
                if (i.type == 'Tourist Attraction') {
                    this.favCopy.push(i)
                }
            }
        },
        resAdd() {
            this.isRestaurant = true
            this.isAttraction = false
            this.isHotel = false
            this.isShop = false
            this.isDrink = false
            this.isCafe = false
            this.favCopy = []
            for (let i of this.fav) {
                if (i.type == 'Restaurant') {
                    this.favCopy.push(i)
                }
            }
        },
        hotelAdd() {
            this.isHotel = true
            this.isRestaurant = false
            this.isAttraction = false
            this.isShop = false
            this.isDrink = false
            this.isCafe = false
            this.favCopy = []
            for (let i of this.fav) {
                if (i.type == 'Hotel') {
                    this.favCopy.push(i)
                }
            }
        },
        shopAdd() {
            this.isShop = true
            this.isRestaurant = false
            this.isAttraction = false
            this.isHotel = false
            this.isDrink = false
            this.isCafe = false
            this.favCopy = []
            for (let i of this.fav) {
                if (i.type == 'Shop') {
                    this.favCopy.push(i)
                }
            }
        },
        drinkAdd() {
            this.isDrink = true
            this.isRestaurant = false
            this.isAttraction = false
            this.isHotel = false
            this.isShop = false
            this.isCafe = false
            this.favCopy = []
            for (let i of this.fav) {
                if (i.type == 'Drink') {
                    this.favCopy.push(i)
                }
            }
        },
        cafeAdd() {
            this.isCafe = true
            this.isRestaurant = false
            this.isAttraction = false
            this.isHotel = false
            this.isShop = false
            this.isDrink = false
            this.favCopy = []
            for (let i of this.fav) {
                if (i.type == 'Cafe') {
                    this.favCopy.push(i)
                }
            }
        },
        clear() {
            this.isCafe = false
            this.isRestaurant = false
            this.isAttraction = false
            this.isHotel = false
            this.isShop = false
            this.isDrink = false
            this.favCopy = this.fav
        }
    },
    computed: {
        today() {
            return new Date().toISOString().split('T')[0]
        },
        isAdded(name) {
            if (this.addedNames.indexOf(name) != -1) {
                return true
            } else {
                return false
            }
        },
        image1() {
            return `
                https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${this.images[0]}&key=.....EnterGoogleAPIKeyHere.....
                `
        },
        image2() {
            return `
                https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${this.images[1]}&key=.....EnterGoogleAPIKeyHere.....
                `
        },
        image3() {
            return `
                https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${this.images[2]}&key=.....EnterGoogleAPIKeyHere.....
                `
        },
        image4() {
            return `
                https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${this.images[3]}&key=.....EnterGoogleAPIKeyHere.....
                `
        },
        image5() {
            return `
                https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${this.images[4]}&key=.....EnterGoogleAPIKeyHere.....
                `
        },
        image6() {
            return `
                https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${this.images[5]}&key=.....EnterGoogleAPIKeyHere.....
                `
        },
        image7() {
            return `
                https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${this.images[6]}&key=.....EnterGoogleAPIKeyHere.....
                `
        },
        image8() {
            return `
                https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${this.images[7]}&key=.....EnterGoogleAPIKeyHere.....
                `
        },
        image9() {
            return `
                https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${this.images[8]}&key=.....EnterGoogleAPIKeyHere.....
                `
        },
        image10() {
            return `
                https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${this.images[9]}&key=.....EnterGoogleAPIKeyHere.....
                `
        }
    },
    created() {
        fetch("https://smart-2e77b-default-rtdb.asia-southeast1.firebasedatabase.app/places.json")
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            }).then((data) => {
                for (let d in data) {
                    // console.log(data[d])
                    let result = data[d]
                    let temp = {}
                    temp['type'] = result.type
                    temp['place'] = result.placeId
                    temp['name'] = result.name
                    temp['operating'] = result.operating
                    temp['image'] = result.image
                    temp['address'] = result.address
                    temp['lat'] = result.lat
                    temp['lng'] = result.lng
                    this.fav.push(temp)
                }
                this.favCopy = this.fav.map((x) => x);
            })
    }
}
</script>

<style scoped>
.planner {
    background: #d1e0e7;
}

.plannerBtn {
    border: 1px solid black;
    height: 30px;
    text-align: center;
    padding-top: 2px;
}

.plannerBtn:hover,
.plannerBtn:active,
.head,
.attractionBtn:hover,
.restaurantBtn:hover,
.hotelBtn:hover,
.shopBtn:hover,
.drinkBtn:hover,
.cafeBtn:hover,
.searchBtn:hover,
.searchBtn:active {
    background: #2b5d81;
    color: white;
}

.save:hover,
.save:active {
    background: #E05060;
    color: white;
}

.save {
    color: #E05060;
    border: 1px solid #E05060;
}

.btn-link {
    text-decoration: none;
}

.btn-link:hover {
    text-decoration: underline;
    font-weight: bold;
}

.card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.gallery {
    width: 100%;
    height: 100px;
    object-fit: cover;
    margin-top: 2px;
}

.mainImg {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.card-title .fas {
    color: #2b5d81;
    border: 1px solid #2b5d81;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 3px;
    padding-right: 3px;
    border-radius: 50%;
}
</style>
