<template>
<div class="attraction">
    <div class="card h-100">
        <img v-if="typeof this.result.img === 'object'" :src="image" class="card-img-top">
        <img v-else src="../assets/noImg.jpg" class="card-img-top">
        <div class="card-body position-relative">
            <h5 class="card-title">
                <span>{{name}}</span>
                <span class="float-end">
                    <span v-for="value in 5" :key="value">
                        <i class="fas fa-star" :class='{checked: value<=result.rating}' style="font-size:10px;"></i>
                    </span>
                    <span style="font-size:10px;"> ({{result.ratingNum}})</span>
                </span>
            </h5>
            <p class="card-subtitle mb-2 text-muted" style="font-size:12px;">{{result.address}}</p>
            <p class="card-text"><small class="text-muted">{{result.summary}}</small></p>
            <p class="card-text mb-0" v-if="result.phone">
                <i class="fa-solid fa-phone"></i>
                {{result.num}}
            </p>
            <p class="card-text" v-if="result.isWebsite" style="font-size: 14px;">
                <img src="../assets/internet.png" style="width:5%;">&nbsp;
                <a :href="result.website" class="link-primary">{{result.website}}</a>
            </p>
            <br><br>
            <img v-if="isFav" @click="favourite(this.fav)" style="width:10%;" class="like position-absolute bottom-0 end-0 m-2" src="../assets/liked.png">
            <img v-else @click="favourite(this.fav)" style="width:10%;" class="like position-absolute bottom-0 end-0 m-2" src="../assets/like.png">
        </div>
    </div>
</div>
</template>

<script>
import {
    writeUserData, deleteUserData
} from '/firebase.js'

export default {
    name: 'attraction',
    props: ['name', 'place', 'type'],
    data() {
        return {
            result: {},
            fav: {},
            liked: [],
            isFav: false
        }
    },
    computed: {
        image() {
            for (let i in this.result.img) {
                return `
                http://localhost:8080/one/maps/api/place/photo?maxwidth=800&photoreference=${this.result.img[i]}&key=AIzaSyD1ZWK4NHuagmG09Q1f6__-bJoPAf2xBXQ
                `
            }
        }
    },
    methods: {
        favourite(fav) {
            if (this.isFav){
                deleteUserData(fav)
                this.isFav = false
            }
            else{
                writeUserData(fav)
                this.isFav = true
            }
        }
    },
    created() {
        fetch("https://smart-2e77b-default-rtdb.asia-southeast1.firebasedatabase.app/places.json")
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
            }).then((data) => {
                this.isFav = Object.keys(data).indexOf(this.place) != -1
            })

        axios.get(`http://localhost:8080/one/maps/api/place/details/json?place_id=${this.place}&key=AIzaSyD1ZWK4NHuagmG09Q1f6__-bJoPAf2xBXQ`)
            .then(response => {
                // console.log(response.data)
                // console.log(this.liked)
                let data = response.data.result
                let keys = Object.keys(response.data.result)

                if (keys.indexOf('editorial_summary') != -1) {
                    this.result.summary = data.editorial_summary.overview
                } else {
                    this.result.summary = ""
                }

                if (keys.indexOf('formatted_phone_number') != -1) {
                    this.result.num = data.formatted_phone_number
                    this.result.phone = true
                } else {
                    this.result.num = ""
                    this.result.phone = false
                }

                if (keys.indexOf('website') != -1) {
                    this.result.website = data.website
                    this.result.isWebsite = true
                } else {
                    this.result.website = ""
                    this.result.isWebsite = false
                }

                if (keys.indexOf('photos') != -1) {
                    let gallery = []
                        for (let photo of data.photos) {
                            gallery.push(photo.photo_reference)
                        }
                    this.result.img = gallery
                    this.fav.img = gallery
                }
                else{
                    this.fav.img = '../assets/noImg.jpg'
                }

                this.fav.place = this.place
                this.fav.name = this.name
                if (this.type == "shopping"){
                    this.fav.type = 'Shop'
                }
                else if (this.type == 'tourist+attraction'){
                    this.fav.type = "Tourist Attraction"
                }
                else{
                    this.fav.type = this.type[0].toUpperCase() + this.type.slice(1,)
                }
                if (keys.indexOf('current_opening_hours') != -1) {
                    this.fav.operating = data.current_opening_hours.weekday_text
                } else {
                    this.fav.operating = ""
                }
                this.fav.address = data.formatted_address
                this.fav.lat = data.geometry.location.lat
                this.fav.lng = data.geometry.location.lng

                this.result.name = this.name
                this.result.place = this.place
                this.result.address = data.formatted_address
                this.result.rating = Math.floor(data.rating)
                this.result.ratingNum = data.user_ratings_total
            })
            .catch(error => {
                error.message
            })
        // return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${this.place}&key=AIzaSyD1ZWK4NHuagmG09Q1f6__-bJoPAf2xBXQ`
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.like:hover {
    transform: scale(1.1);
}

.like {
    transition: transform .5s;
}

.card-img-top {
    width: 100%;
    height: 30vh;
    object-fit: cover;
}

.checked {
    color: orange;
}
</style>
