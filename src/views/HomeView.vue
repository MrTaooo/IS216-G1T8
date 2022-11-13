<template>
<div class="home">
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

    <div class="container">
        <div class="row pt-4">
            <div class="col">
                <span style="color: #004e86;" class="text-center fw-bold">
                    <i v-if="sort=='alphabet'" class="fas fa-sort-alpha-down"></i>
                    <i v-else class="fas fa-sort-amount-down"></i>
                    SORT BY: &nbsp;&nbsp;
                </span>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="alphabet" v-model="sort" value="alphabet" @change="filter">
                    <label class="form-check-label" for="alphabet">
                        Alphabet
                    </label>
                </div>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="popularity" v-model="sort" value="popularity" @change="filter">
                    <label class="form-check-label" for="popularity">
                        Popularity
                    </label>
                </div>
            </div>

            <div class="col wrapper">
                <div class="search-input" :class='{active:this.keyword}'>
                    <input type="text" placeholder="Singapore" v-model="keyword" @keyup="search" @keyup.enter="enter">
                    <div class="autocomBox" v-if="this.searchResult.length>0">
                        <li v-for="searchWord in this.searchResult" :key="searchWord" @click="selSearch(searchWord)">
                            {{searchWord[0]}}
                        </li>
                    </div>
                    <div class="icon">
                        <i class="fas fa-search" @click="displaySearch"></i>
                    </div>
                </div>
            </div>

            <div class="row mb-1">
                <div class="col">
                    <span style="color: #004e86;" class="fw-bold mb-1">
                        <i class="fa-solid fa-filter"></i>
                        FILTER BY:
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-2 col-md-4 col-sm-6 mb-1">
                    <button class="btn attractionBtn w-100" @click="attrAdd('tourist+attraction')" :style="[isAttraction ? {'background':'#2b5d81', 'color':'white'} : {'border':'1px solid black'}]">
                        <i class='fas fa-umbrella-beach'></i> Attraction
                    </button>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 mb-1">
                    <button class="btn restaurantBtn w-100" @click="resAdd('restaurant')" :style="[isRestaurant ? {'background':'#2b5d81', 'color':'white'} : {'border':'1px solid black'}]">
                        <i class="fas fa-utensils"></i> Restaurant
                    </button>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 mb-1">
                    <button class="btn hotelBtn w-100" @click="hotelAdd('hotel')" :style="[isHotel ? {'background':'#2b5d81', 'color':'white'} : {'border':'1px solid black'}]">
                        <i class="fas fa-bed"></i> Hotel
                    </button>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 mb-1">
                    <button class="btn shopBtn w-100" @click="shopAdd('shopping')" :style="[isShop ? {'background':'#2b5d81', 'color':'white'} : {'border':'1px solid black'}]">
                        <i class="fas fa-shopping-cart"></i> Shop
                    </button>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 mb-1">
                    <button class="btn drinkBtn w-100" @click="drinkAdd('drink')" :style="[isDrink ? {'background':'#2b5d81', 'color':'white'} : {'border':'1px solid black'}]">
                        <i class="fas fa-glass-martini-alt"></i> Drink
                    </button>
                </div>
                <div class="col-lg-2 col-md-4 col-sm-6 mb-1">
                    <button class="btn cafeBtn w-100" @click="cafeAdd('cafe')" :style="[isCafe ? {'background':'#2b5d81', 'color':'white'} : {'border':'1px solid black'}]">
                        <i class="fas fa-coffee"></i> Café
                    </button>
                </div>
                <div class="col mt-0">
                    <button @click="clear" class="btn btn-link shadow-none float-end" style="color: #646465;">Clear</button>
                    <button @click="filter" class="btn btn-link shadow-none float-end" style="color: #004e86;">Filter</button>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 my-3" v-if="this.display">
                    <attraction :name="this.select[0]" :place="this.select[1]" class="h-100"></attraction>
                </div>
                <div class="col-lg-4 my-3" v-else v-for="attraction in result" :key="attraction">
                    <attraction :name="attraction.name" :place="attraction.place" :type="attraction.type" class="h-100"></attraction>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import Attraction from '../components/attraction.vue'

export default {
    name: 'HomeView',
    components: {
        Attraction
    },
    data() {
        return {
            attractions: ['tourist+attraction', 'restaurant', 'hotel', 'shopping', 'drink', 'cafe'],
            saved: "",
            clicked: [],
            result: [],
            all: "",
            isAttraction: false,
            isRestaurant: false,
            isHotel: false,
            isShop: false,
            isDrink: false,
            isCafe: false,
            sort: "alphabet",
            keyword: "",
            searchResult: [],
            select: [],
            display: false,
            // collection: {
            //     'Attraction': [],
            //     'Restaurant': [],
            //     'Hotel': [],
            //     'Shop': [],
            //     'Drink': [],
            //     'Cafe': []
            // }
        }
    },
    created() {
        for (let attr of this.attractions) {
            // console.log(attr)
            this.load(attr)
        }
        // for (let i in this.collection){
        //     console.log(this.collection[i])
        // }
        // console.log(this.result)
    },
    methods: {
        // save(fav) {
        //     // fetch('/smart-2e77b-default-rtdb-export.json')
        //     // .then((response) => {
        //     //     if (response.ok){
        //     //         return response.json()
        //     //     }
        //     // })
        //     // .then((data) => {
        //     //     console.log(data)
        //     //     const dataResult = []

        //     //     dataResult.push({
        //     //         value: null,
        //     //         text: ""
        //     //     })
        //     // })

        //     // writePlaceData(fav)
        //     writeUserData(fav)
        //     console.log(fav)
        // },
        search() {
            this.searchResult = []
            for (let word of this.all) {
                if (word.name.toLowerCase().includes(this.keyword.toLowerCase())) {
                    this.searchResult.push([word.name, word.place])
                }
            }
            // console.log(this.searchResult)
        },
        enter() {
            this.search()
            this.keyword = this.searchResult[0][0]
            this.select = this.searchResult[0]
            this.displaySearch()
        },
        selSearch(selWord) {
            this.keyword = selWord[0]
            this.select = selWord
            // console.log(selWord)
        },
        displaySearch() {
            this.display = true
            this.searchResult = []
        },
        attrAdd(selected) {
            if (this.isAttraction) {
                this.isAttraction = false
                this.clicked.splice(this.clicked.indexOf(selected), 1)
            } else {
                this.isAttraction = true
                this.clicked.push(selected)
            }
        },
        resAdd(selected) {
            if (this.isRestaurant) {
                this.isRestaurant = false
                this.clicked.splice(this.clicked.indexOf(selected), 1)
            } else {
                this.isRestaurant = true
                this.clicked.push(selected)
            }
        },
        hotelAdd(selected) {
            if (this.isHotel) {
                this.isHotel = false
                this.clicked.splice(this.clicked.indexOf(selected), 1)
            } else {
                this.isHotel = true
                this.clicked.push(selected)
            }
        },
        shopAdd(selected) {
            if (this.isShop) {
                this.isShop = false
                this.clicked.splice(this.clicked.indexOf(selected), 1)
            } else {
                this.isShop = true
                this.clicked.push(selected)
            }
        },
        drinkAdd(selected) {
            if (this.isDrink) {
                this.isDrink = false
                this.clicked.splice(this.clicked.indexOf(selected), 1)
            } else {
                this.isDrink = true
                this.clicked.push(selected)
            }
        },
        cafeAdd(selected) {
            if (this.isCafe) {
                this.isCafe = false
                this.clicked.splice(this.clicked.indexOf(selected), 1)
            } else {
                this.isCafe = true
                this.clicked.push(selected)
            }
        },
        filter() {
            this.result = []
            if (this.clicked.length > 0) {
                for (let click of this.clicked) {
                    this.load(click)
                }
            } else {
                for (let attr of this.attractions) {
                    this.load(attr)
                }
            }
            // console.log(this.result)
        },
        clear() {
            this.result = []
            this.clicked = []
            for (let attr of this.attractions) {
                this.load(attr)
            }
            this.isAttraction = false
            this.isRestaurant = false
            this.isShop = false
            this.isHotel = false
            this.isDrink = false
            this.isCafe = false
            this.sort = "alphabet"
            this.keyword = ""
            this.display = false
        },
        load(place) {
            let url = "http://localhost:8080/one/maps/api/place/textsearch/json?query=singapore" + place + "&key=AIzaSyD1ZWK4NHuagmG09Q1f6__-bJoPAf2xBXQ"
            axios.get(url)
                .then((response) => {
                    // console.log(response.data.results)
                    let places = response.data.results
                    // console.log(places)
                    for (let p of places) {
                        let temp = {}
                        temp['name'] = p.name
                        temp['place'] = p.place_id
                        temp['rating'] = p.user_ratings_total
                        temp['type'] = place
                        this.result.push(temp)
                    }
                    if (this.sort == 'alphabet') {
                        this.result.sort((a, b) => a.name.localeCompare(b.name))
                    } else {
                        this.result.sort((a, b) => b.rating - a.rating)
                    }
                    if (this.all == "") {
                        this.all = this.result
                    }

                    // if (place == 'tourist+attraction' && this.collection['Attraction'].length == 0) {
                    //     for (let place of places) {
                    //         this.collection['Attraction'].push(place.place_id)
                    //     }
                    // } else if (place == "restaurant" && this.collection['Restaurant'].length == 0) {
                    //     for (let place of places) {
                    //         this.collection['Restaurant'].push(place.place_id)
                    //     }
                    // } else if (place == "hotel" && this.collection['Hotel'].length == 0) {
                    //     for (let place of places) {
                    //         this.collection['Hotel'].push(place.place_id)
                    //     }
                    // } else if (place == "shopping" && this.collection['Shop'].length == 0) {
                    //     for (let place of places) {
                    //         this.collection['Shop'].push(place.place_id)
                    //     }
                    // } else if (place == "drink" && this.collection['Drink'].length == 0) {
                    //     for (let place of places) {
                    //         this.collection['Drink'].push(place.place_id)
                    //     }
                    // } else if (place == "cafe" && this.collection['Cafe'].length == 0) {
                    //     for (let place of places) {
                    //         this.collection['Cafe'].push(place.place_id)
                    //     }
                    // }

                    // console.log(this.all)
                })
                .catch(error => {
                    error.message
                })
        }
    }
}
</script>

<style scoped>
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

.searchBtn {
    border: 1px solid gray;
}

.home {
    background: #d1e0e7;
}

.btn-link {
    text-decoration: none;
}

.btn-link:hover {
    text-decoration: underline;
    font-weight: bold;
}

.wrapper {
    width: 100%;
}

.wrapper .search-input {
    position: relative;
    background-color: white;
    width: 95%;
    border-radius: 5px;
    box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.12);
}

.search-input input {
    height: 40px;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 0 60px 0 20px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
}

.search-input .icon {
    height: 40px;
    width: 40px;
    line-height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    text-align: center;
    font-size: 20px;
    color: #2b5d81;
    cursor: pointer;
    padding-right: 20px;
}

.search-input .autocomBox {
    padding: 10px;
    max-height: 280px;
    overflow-y: auto;
    opacity: 0;
    pointer-events: none;
}

.search-input.active .autocomBox {
    padding: 10px 8px;
    opacity: 1;
    pointer-events: auto;
}

.autocomBox li {
    list-style: none;
    padding: 8px 12px;
    width: 100%;
    cursor: default;
    border-radius: 3px;
    display: none;
}

.search-input.active .autocomBox li {
    display: block;
}

.autocomBox li:hover {
    background: #efefef;
}
</style>
