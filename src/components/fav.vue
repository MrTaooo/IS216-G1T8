<template>
<div class="fav">
    <div class="card h-100" :style="[isAdd ? {'background': '#D0D0D0'} : {'background':'white'}, (this.hotel && this.place.type == 'Hotel' && this.place.name!=this.hotelName) ? {'background': '#D0D0D0', 'pointer-events':'none'} : {'background':'white'}]" @click="select">
        <div class="row">
            <div class="col">
                <div class="card-body">
                    <p class="card-title">
                        <span>
                            <i v-if="this.place.type == 'Tourist Attraction'" class='fas fa-umbrella-beach fa-xs'></i>
                            <i v-else-if="this.place.type == 'Restaurant'" class="fas fa-utensils fa-xs"></i>
                            <i v-else-if="this.place.type == 'Hotel'" class="fas fa-bed fa-xs"></i>
                            <i v-else-if="this.place.type == 'Shop'" class="fas fa-shopping-cart fa-xs"></i>
                            <i v-else-if="this.place.type == 'Drink'" class="fas fa-glass-martini-alt fa-xs"></i>
                            <i v-else class="fas fa-coffee fa-xs"></i>
                            &nbsp; <strong class="p-0" style="font-size:14px;">{{this.place.name}}</strong>
                            <br>
                            <small class="text-muted" v-if="this.place.type == 'Tourist Attraction'">Tourist Attration</small>
                            <small class="text-muted" v-else-if="this.place.type == 'Restaurant'">Restaurant</small>
                            <small class="text-muted" v-else-if="this.place.type == 'Hotel'">Hotel</small>
                            <small class="text-muted" v-else-if="this.place.type == 'Shop'">Shop</small>
                            <small class="text-muted" v-else-if="this.place.type == 'Drink'">Drink</small>
                            <small class="text-muted" v-else>Café</small>
                        </span>
                    </p>

                    <div class="row">
                        <div v-if="this.place.type == 'Hotel'">
                            <span>
                                <i class="fa-solid fa-hotel"></i>
                                <span style="font-size:12px;">   Applicable to entire trip duration</span>
                            </span>
                        </div>
                        <div v-else class="input-group">
                            <span class="input-group-text" style="background: #2b5d81; color: white; font-size:14px;">Visit Date</span>
                            <select class="form-select" v-model="visitDate" style="font-size:14px;">
                                <option v-for="day in this.days+1" :key="day" :value="addDays(day)">
                                    {{addDays(day)}}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="row mt-2">
                        <div class="col" v-if="this.isError">
                            <p style="color: red; font-weight: bold; font-size:14px;">Please select a date!</p>
                        </div>
                        <div class="col">
                            <button v-if="this.isAdd==false" class="btn rounded-pill btn-success float-end" style="font-size:14px;" @click="add">
                                Add <i class="fa-solid fa-cart-plus fa-xs"></i>
                            </button>
                            <button v-if="this.isAdd" class="btn rounded-pill btn-danger float-end" style="font-size:14px;" @click="remove">
                                Remove <i class="fa-solid fa-trash fa-xs"></i>
                            </button>
                            <button v-if="this.isAdd && this.place.type!='Hotel'" class="btn rounded-pill btn-warning float-end" style="font-size:14px; margin-right:5px;" @click="edit">
                                Edit <i class="fa-solid fa-pen-to-square fa-xs"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: 'fav',
    props: ['place', 'start', 'days', 'hotel', 'hotelName', 'added'],
    data() {
        return {
            visitDate: "",
            isAdd: false,
            isError: false
        }
    },
    computed: {
        image() {
            for (let i in this.place.image) {
                return `
                http://localhost:8080/api/place/photo?maxwidth=800&photoreference=${this.place.image[i]}&key=AIzaSyD1ZWK4NHuagmG09Q1f6__-bJoPAf2xBXQ
                `
            }
        },
        startDate() {
            return new Date(this.start).toString().slice(0, 15)
        }
    },
    methods: {
        select() {
            let data = this.place
            this.$emit('select', data)
        },
        add() {
            // console.log("added")
            if (this.visitDate == "" && this.place.type != 'Hotel') {
                this.isError = true
            } else {
                this.isError = false
                this.isAdd = true
                let data = [this.place, this.visitDate]
                this.$emit('add', data)
            }
        },
        remove() {
            this.isAdd = false
            this.visitDate = ""
            let data = this.place.name
            this.$emit('remove', data)
        },
        edit() {
            this.isEdit = true
            let data = [this.place.name, this.visitDate]
            this.$emit('edit', data)
        },
        addDays(day) {
            let startDate = new Date(this.start)
            startDate.setDate(startDate.getDate() + day - 1)
            return startDate.toString().slice(0, 15)
        }
    },
    created(){
        for (let i in this.added){
            if (i == this.place.name){
                this.isAdd = true
                this.visitDate = this.added[i][0].date
            }
        }
    }
}
</script>

<style scoped>
.fas {
    color: #2b5d81;
    border: 1px solid #2b5d81;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 3px;
    padding-right: 3px;
    border-radius: 50%;
}

.card-body {
    width: 100%;
    object-fit: cover;
}

.card {
    max-height: 160px;
}

.card:hover {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
}

.fa-square-plus:hover,
.fa-square-minus:hover {
    zoom: 1.1;
}
</style>
