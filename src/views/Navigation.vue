<template>
<div class="navigation">
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

    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <table class="main table table-hover table-responsive mt-3">
                    <thead class="align-middle" style="background: #e050619d; color: white;">
                        <tr>
                            <th>{{this.today}}</th>
                            <td>
                                <span style="font-size: 14px;">{{this.weather.temp}} &#8451;</span>
                                <img :src="image" style="height: 60px;" class="m-0; p-0;">
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="justify-content-center" @click="selectHotel">
                            <td>
                                <h3>Lodging <i class="fas fa-bed fa-xs"></i></h3>
                            </td>
                            <td class="align-middle">
                                <strong>{{this.hotel}}</strong>
                            </td>
                        </tr>
                        <tr v-for="place in this.places" :key="place">
                            <td colspan="2" @click="select(place)">
                                <i v-if="place.type == 'Tourist Attraction'" class='fas fa-umbrella-beach fa-xs'></i>
                                <i v-else-if="place.type == 'Restaurant'" class="fas fa-utensils fa-xs"></i>
                                <i v-else-if="place.type == 'Shop'" class="fas fa-shopping-cart fa-xs"></i>
                                <i v-else-if="place.type == 'Drink'" class="fas fa-glass-martini-alt fa-xs"></i>
                                <i v-else class="fas fa-coffee fa-xs"></i>
                                {{place.name}}
                                <span class="text-muted float-end" style="font-size:10px; margin-left:25px;">{{place.type}}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="col mt-3" v-if="this.address!=''">
                <h3>{{this.selected}}</h3>
                <strong>Address:</strong> {{this.address}}
                <br>
                <strong v-if="this.operating">Operating Hours:</strong> {{this.operating}}
                <GoogleMap api-key=".....EnterGoogleMapAPIKeyHere....." style="width: 100%; height: 25vh; padding-bottom: 50px;" :center="{ lat: placeLat, lng: placeLng }" :zoom="15">
                    <Marker :options="{ position: { lat: placeLat, lng : placeLng }, label: { color: '#000000', fontWeight: 'bold', fontSize: '14px', text: this.selected }}" />
                </GoogleMap>
                <div v-for="direction in this.directions" :key="direction">
                    <p v-if="typeof direction === 'object'">
                        <span>
                            <strong>{{direction.instructions}}</strong> <br>
                            <span class="badge" :style="{'background':direction.color, 'color':direction.text_color}"> {{direction.name}}</span>
                            <p>Origin: {{direction.origin}}</p>
                            <p>Destination: {{direction.destination}}</p>
                            <p>Number of Stops: {{direction.num}}</p>
                        </span>
                    </p>
                    <p v-else>
                        <strong>{{direction}}</strong>
                    </p>
                </div>
            </div>
        </div>

        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Spin a Wheel</button>

        <div class="row mt-1" v-if="this.rolling==false && this.spinned">
            <h3 style="color: #e050619d">{{this.spinned}}</h3>
            <GoogleMap api-key=".....EnterGoogleMapAPIKeyHere....." style="width: 100%; height: 25vh; padding-bottom: 50px;" :center="{ lat: spinLat, lng: spinLng }" :zoom="15">
                <Marker :options="{ position: { lat: spinLat, lng : spinLng }, label: { color: '#000000', fontWeight: 'bold', fontSize: '14px', text: this.spinned }}" />
            </GoogleMap>
            <div v-for="step in this.steps" :key="step">
                <p v-if="typeof step === 'object'">
                    <span>
                        <strong>{{step.instructions}}</strong> <br>
                        <span class="badge" :style="{'background':step.color, 'color':step.text_color}"> {{step.name}}</span>
                        <p>Origin: {{step.origin}}</p>
                        <p>Destination: {{step.destination}}</p>
                        <p>Number of Stops: {{step.num}}</p>
                    </span>
                </p>
                <p v-else>
                    <strong>{{step}}</strong>
                </p>
            </div>
        </div>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header" style="background: #a0c6d9; z-index:1;">
                <div class="row">
                    <select class="form-select" v-model="type" @change="display">
                        <option selected :value="this.most">{{this.most}}</option>
                        <option :value="this.second">{{this.second}}</option>
                    </select>
                </div>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div class="row">
                    <div class="col">
                        <div class="wheel-wrapper">
                            <div class="wheel-pointer" @click="onClickRotate">
                                Start
                            </div>
                            <div class="wheel-bg" :class="{freeze: freeze}" :style="`transform: rotate(${wheelDeg}deg)`">
                                <div class="prize-list">
                                    <div class="prize-item-wrapper" v-for="(item,index) in prizeList" :key="index">
                                        <div class="prize-item" :style="`transform: rotate(${(360/ prizeList.length) * index}deg)`">
                                            <div class="prize-name" style="font-size: 8px;">
                                                {{ item.name }}
                                            </div>
                                            <div class="prize-icon">
                                                <img :src="item.icon" style="width:50px; height:50px;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p class="spinned" v-if="this.rolling==false && this.spinned">{{this.spinned}}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>
</template>

<script>
import {
    GoogleMap,
    Marker,
    CustomMarker
} from "vue3-google-map"

export default {
    name: 'Navigation',
    components: {
        GoogleMap,
        Marker,
        CustomMarker
    },
    data() {
        return {
            itinerary: {},
            weather: {},
            today: "",
            hotel: "",
            lat: null,
            lng: null,
            myLat: null,
            myLng: null,
            address: "",
            operating: [],
            selected: "",
            track: {},
            itinerary: {},
            type: "",
            most: "",
            second: "",
            result: [],
            freeze: false,
            rolling: false,
            wheelDeg: 0,
            prizeNumber: 8,
            prizeListOrigin: [],
            placeLat: null,
            placeLng: null,
            spinned: "",
            spinResult: {},
            spinLat: null,
            spinLng: null,
            directions: [],
            steps: []
        }
    },
    methods: {
        myLocation() {
            this.$getLocation()
                .then((coordinates) => {
                    this.myLat = coordinates.lat
                    this.myLng = coordinates.lng
                    axios.get(`http://localhost:8080/one/maps/api/directions/json?origin=${this.myLat},${this.myLng}&destination=${this.spinLat},${this.spinLng}&mode=transit&key=.....EnterGoogleAPIKeyHere.....`)
                        .then(response => {
                            let data = response.data.routes[0].legs[0]
                            this.spinDirection = {}
                            // console.log(data)
                            this.spinDirection.start = data.start_address
                            this.spinDirection.end = data.end_address
                            let steps = []
                            for (let step of data.steps) {
                                // console.log(step)
                                if (step['travel_mode'] != "TRANSIT") {
                                    steps.push(step.html_instructions)
                                } else {
                                    let temp = {}
                                    temp['instructions'] = step.html_instructions
                                    temp['origin'] = step.transit_details.departure_stop.name
                                    temp['destination'] = step.transit_details.arrival_stop.name
                                    console.log(temp)

                                    temp['num'] = step.transit_details.num_stops
                                    temp['name'] = step.transit_details.line.name
                                    temp['color'] = step.transit_details.line.color
                                    temp['text_color'] = step.transit_details.line.text_color
                                    steps.push(temp)
                                }
                            }
                            this.steps = steps
                            console.log(steps)
                        })
                        .catch(error => {
                            error.message
                        })
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        selectLocation() {
            this.$getLocation()
                .then((coordinates) => {
                    this.myLat = coordinates.lat
                    this.myLng = coordinates.lng
                    axios.get(`http://localhost:8080/one/maps/api/directions/json?origin=${this.myLat},${this.myLng}&destination=${this.placeLat},${this.placeLng}&mode=transit&key=.....EnterGoogleAPIKeyHere.....`)
                        .then(response => {
                            let data = response.data.routes[0].legs[0]
                            this.spinDirection = {}
                            // console.log(data)
                            this.spinDirection.start = data.start_address
                            this.spinDirection.end = data.end_address
                            let directions = []
                            for (let step of data.steps) {
                                // console.log(step)
                                if (step['travel_mode'] != "TRANSIT") {
                                    directions.push(step.html_instructions)
                                } else {
                                    let temp = {}
                                    temp['instructions'] = step.html_instructions
                                    temp['origin'] = step.transit_details.departure_stop.name
                                    temp['destination'] = step.transit_details.arrival_stop.name
                                    console.log(temp)

                                    temp['num'] = step.transit_details.num_stops
                                    temp['name'] = step.transit_details.line.name
                                    temp['color'] = step.transit_details.line.color
                                    temp['text_color'] = step.transit_details.line.text_color
                                    directions.push(temp)
                                }
                            }
                            this.directions = directions
                            // console.log(steps)
                        })
                        .catch(error => {
                            error.message
                        })
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        select(place) {
            this.selectLocation()
            this.selected = place.name
            for (let i in this.itinerary) {
                if (this.itinerary[i].name == this.selected) {
                    this.address = this.itinerary[i].address
                    let day = this.today.slice(0, 3) + "day"
                    let temp = {}
                    for (let opr of this.itinerary[i].operating) {
                        let oprSplit = opr.split(':')
                        let oprHrs = oprSplit.splice(1, ).join(':')
                        temp[oprSplit[0]] = oprHrs
                    }
                    this.operating = temp[day]
                    this.placeLat = this.itinerary[i].lat
                    this.placeLng = this.itinerary[i].lng
                }
            }
        },
        selectHotel() {
            this.selectLocation()
            let temp = {}
            for (let place in this.itinerary) {
                if (this.itinerary[place].type == "Hotel") {
                    temp.name = this.itinerary[place].name
                    temp.type = this.itinerary[place].type
                    temp.lng = this.itinerary[place].lng
                    temp.lat = this.itinerary[place].lat
                    temp.operating = this.itinerary[place].operating
                }
            }
            this.select(temp)
        },
        display() {
            this.$getLocation()
                .then((coordinates) => {
                    this.lat = coordinates.lat
                    // this.lat = 1.2655
                    this.lng = coordinates.lng
                    // this.lng = 103.8239
                    let type = (this.type.split(' ').join('+')).toLowerCase()
                    let url = `http://localhost:8080/one/maps/api/place/nearbysearch/json?location=${this.lat}%2C${this.lng}&radius=1500&type=${type}&key=.....EnterGoogleAPIKeyHere.....`
                    axios.get(url)
                        .then(response => {
                            this.result = []
                            this.prizeListOrigin = []
                            let data = response.data.results
                            for (let place of data) {
                                if (place.name != 'Singapore') {
                                    let temp = {}
                                    temp['name'] = place.name
                                    temp['place'] = place.place_id
                                    temp['rating'] = place.rating
                                    if (Object.keys(place).indexOf('photos') != -1) {
                                        temp['image'] = place.photos[0].photo_reference
                                    } else {
                                        temp['image'] = ""
                                    }
                                    temp['lat'] = parseFloat(place.geometry.location.lat)
                                    temp['lng'] = parseFloat(place.geometry.location.lng)
                                    this.result.push(temp)
                                }
                            }
                            for (let i of this.result) {
                                let indiv = {}
                                indiv.icon = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${i.image}&key=.....EnterGoogleAPIKeyHere.....`
                                indiv.name = i.name
                                this.prizeListOrigin.push(indiv)
                            }
                            console.log(this.result)
                        })
                        .catch(error => {
                            error.message
                        })
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        onClickRotate() {
            if (this.rolling) {
                return;
            }
            const result = Math.floor(Math.random() * this.prizeList.length);
            this.roll(result);
        },
        roll(result) {
            this.rolling = true;
            const {
                wheelDeg,
                prizeList
            } = this;
            this.wheelDeg =
                wheelDeg -
                wheelDeg % 360 +
                6 * 360 +
                (360 - 360 / prizeList.length * result);
            setTimeout(() => {
                this.rolling = false;
                // alert("Result：" + prizeList[result].name);
            }, 4500);
            this.spinned = prizeList[result].name
            this.spinResult = {}
            for (let i of this.result) {
                if (i.name == this.spinned) {
                    this.spinLat = i.lat
                    this.spinLng = i.lng
                    this.spinResult.image = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${i.image}&key=.....EnterGoogleAPIKeyHere.....`
                }
            }
            this.myLocation()
        }
    },
    watch: {
        prizeNumber() {
            this.freeze = true;
            this.wheelDeg = 0;

            setTimeout(() => {
                this.freeze = false;
            }, 0);
        }
    },
    mounted() {
        const directionsRenderer = new google.maps.DirectionsRenderer()
        const directionsService = new google.maps.DirectionsService()
        this.display()

    },
    computed: {
        image() {
            return `http://openweathermap.org/img/wn/${this.weather.icon}@2x.png`
        },
        prizeList() {
            return this.prizeListOrigin.slice(0, this.prizeNumber);
        },
        places() {
            let places = []
            for (let place in this.itinerary) {
                if (this.itinerary[place].date == this.today) {
                    let temp = {}
                    temp.name = this.itinerary[place].name
                    temp.type = this.itinerary[place].type
                    places.push(temp)
                }
            }
            places.sort((a, b) => a.name.localeCompare(b.name))
            return places
        }
    },
    created() {
        fetch("https://smart-2e77b-default-rtdb.asia-southeast1.firebasedatabase.app/itinerary.json")
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            }).then((data) => {
                this.itinerary = data
                // console.log(data)
            })

        const baseURL = 'https://api.openweathermap.org/data/2.5/onecall';
        const apiKey = '.....EnterOpenWeatherAPIKeyHere.....';
        // const apiKey = '0905b1434326d0ec5c9147d13aeb308f'
        const lat = 1.290270
        const lon = 103.851959

        axios.get(`${baseURL}?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${apiKey}&units=imperial`)
            .then(response => {
                let weathers = response.data.daily
                this.today = new Date().toString().slice(0, 15)
                // console.log(weathers)
                for (let weather of weathers) {
                    let date = (new Date(weather.dt * 1000)).toString().slice(0, 15)
                    if (this.today == date) {
                        this.weather.icon = weather.weather[0].icon
                        let minTemp = weather.temp.min
                        let maxTemp = weather.temp.max
                        let avgTemp = ((((minTemp + maxTemp) / 2) - 32) * (5 / 9)).toFixed(1)
                        this.weather.temp = avgTemp
                    }
                }
            })
            .catch(error => {
                error.message
            })

        fetch("https://smart-2e77b-default-rtdb.asia-southeast1.firebasedatabase.app/itinerary.json")
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            }).then((data) => {
                this.itinerary = data
                // console.log(this.itinerary)

                for (let i in this.itinerary) {
                    if (Object.keys(this.track).indexOf(this.itinerary[i].type) != -1) {
                        this.track[this.itinerary[i].type]++
                    } else {
                        this.track[this.itinerary[i].type] = 1
                    }
                }
                this.most = Object.keys(this.track).reduce((a, b) => this.track[a] > this.track[b] ? a : b)
                delete this.track[this.most]
                this.second = Object.keys(this.track).reduce((a, b) => this.track[a] > this.track[b] ? a : b)
            })
    }
}
</script>

<style scoped>
main {
    border: 1px solid #e050619d;
    vertical-align: middle;
}

h3 {
    color: #e050619d;
}

.wheel-wrapper {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 300px;
    left: 50%;
    transform: translate(-50%, -50%);
}

.wheel-pointer {
    width: 60px;
    height: 60px;
    border-radius: 1000px;
    background: #a0c6d9;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 60px;
    z-index: 10;
    cursor: pointer;
}

::after {
    content: "";
    position: absolute;
    top: -32px;
    left: 50%;
    border-width: 0 8px 40px;
    border-style: solid;
    border-color: transparent transparent #a0c6d9;
    transform: translateX(-50%);
}

.wheel-bg {
    width: 100%;
    height: 100%;
    border-radius: 1000px;
    overflow: hidden;
    transition: transform 4s ease-in-out;
    background: #e050619d;
}

.freeze {
    transition: none;
    background: red;
}

.prize-list {
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
}

.prize-item-wrapper {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 150px;
}

.prize-item {
    width: 100%;
    height: 100%;
    transform-origin: bottom;
}

.prize-name {
    padding: 16px 0;
}
</style>
