<template>
<div class="bus">
        
        <p id="loc"></p>
        <!-- <div id="map"> {{ initMap() }}</div> -->
        <div class="col">
              <GoogleMap api-key="AIzaSyAtiM46_qHjLFBjoItcHwx6E5UWznDpEUk" style="width: 100%; height: 25vh; background-color: azure;" :center="{ lat: lat, lng: lng }" :zoom="15">
                <!-- <Marker v-for="(pos, index) in markers" :options="{ position: pos }" :icon="{url:('../../public/ico/food.ico'), size: {width:30, height:30}}" /> -->
                <!-- <CustomMarker v-for="(pos, index) in markers" :options="{ position: pos }">
                    <img src="../assets/internet.png" width="32" height="32" style="margin-top: 8px" />
                </CustomMarker> -->
                <Marker :options="{ position: { lat: lat, lng : lng }, label: { color: '#000000', fontWeight: 'bold', fontSize: '14px', text: 'You Are Here' } }" />
                
              </GoogleMap> 
              
              
        </div>

    
        <br>
        <div class="container">
            <h4 id="result"></h4>
            <div class="accordion"></div>
        </div> 
        <br>

       
        
        <div class="container-flex" id="images">
            <div class="container">
                <h4>Popular Attractions</h4>
                <div class="row d-flex flex-wrap align-items-center ">
                    <div class="card col-xl-3 col-lg-6 p-0">
                        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                              <div class="carousel-item active" data-bs-interval="10000">
                                <img src="../assets/chillicrabsingapore.png" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                  <p><a href="https://danielfooddiary.com/2019/07/23/roland/" target='blank' class='text-white bg-dark'>Chilli Crab</a></p>
                                </div>
                              </div>
                              <div class="carousel-item" data-bs-interval="2000">
                                <img src="../assets/rojak.jpg" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                    <p><a href="https://danielfooddiary.com/2019/02/14/hooverrojak/" target='blank' class='text-white bg-dark'>Rojak</a></p>
                                </div>
                              </div>
                              <div class="carousel-item">
                                <img src="../assets/bakkutteh.png" class="d-block w-100" alt="...">
                                <div class="carousel-caption d-none d-md-block">
                                    <p><a href="https://danielfooddiary.com/2019/07/04/songfasg/" target='blank' class='text-white bg-dark'>Bak Kut Teh</a></p>
                                </div>
                              </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                            </button>
                          </div>
                    </div>
                    <div class="card col-xl-3 col-lg-6 p-0">
                        <a href="https://www.gardensbythebay.com.sg/" target='blank'>
                            <!-- <img id="pic" src="./supertree-grove-light-show-Singapore.webp" class="d-block w-100" alt="..."> -->
                            <img id="info" src="../assets/info.png" alt="">
                        </a>
                        </div>
                    <div class="card col-xl-3 col-lg-6 p-0">
                        <a href="https://www.singaporeflyer.com/en" target='blank'>
                            <img id="pic" src="../assets/singaporeflyer.jpg" class="d-block w-100" alt="...">
                            <img id="info" src="../assets/info.png" alt="">
                        </a>
                    </div>
                    <div class="card col-xl-3 col-lg-6 p-0">
                        <a href="https://www.rwsentosa.com/en/attractions/universal-studios-singapore" target='blank'>
                            <img id="pic" src="../assets/humanrollercoaster.gif" class="d-block w-100" alt="...">
                            <img id="info" src="../assets/info.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
</div>
   
        
        
</template>
    
<script>
          import axios from 'axios'
          import { GoogleMap, Marker, CustomMarker } from "vue3-google-map"
          
          export default {
            components: { GoogleMap, Marker, CustomMarker },    
            data() {
              return {
                    lat : null,
                    lng : null,
                    key : 'TdzLwlLRSpiXz5drXZZbMg==',
                    myLocation : "",
                    buslogo: require('../assets/bus.png'),
                    busarrivallogo: require('../assets/busarrival.png')
              };
           },
           created() {
                this.$getLocation()
                .then((coordinates) => {
                    //console.log(coordinates);
                    // this.lat = coordinates.lat
                    // this.lng = coordinates.lng
                    this.lat = 1.2965392469404406
                    this.lng = 103.8501374683573
                    // const markerOptions = { position: { lat: lat, lng : lng }, label: { color: '#000000', fontWeight: 'bold', fontSize: '14px', text: 'You Are Here' } };
                    // return { markerOptions }
                    this.success() 
                    
                })
                .catch((error) => {
                    console.log(error);
                });
            },
    
  
           methods: {

            // initMap() {
            //   this.lat = parseFloat(this.lat)
            //   this.lng = parseFloat(this.lng)
  
            //   axios.get(
            //       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.lat},${this.lng}&key=AIzaSyAzHkvFmyqNxHK7I_Vwqgf0REGquG-HZkk`
            //   )
            //   .then(response=>{
            //       this.myLocation += response.data.results[0].formatted_address
            //       const sg = { lat: this.lat, lng: this.lng};
            //       const map = new google.maps.Map(document.getElementById("map").value, {
            //           zoom: 16,
            //           center: sg,
            //       });
            //       var infowindow = new google.maps.InfoWindow({
            //           content: this.myLocation
            //       });
            //       const marker = new google.maps.Marker({
            //           position: sg,
            //           map: map,
            //           label: { color: '#000000', fontWeight: 'bold', fontSize: '14px', text: 'You Are Here' }
            //       });
            //       infowindow.open(map, marker);
            //   })
            //   .catch(error=>{error.message})
            //   },
  
            success(){
              
              var loc = document.getElementById("loc")
              loc.innerText = `Latitude: ${this.lat} \u00B0, Longitude: ${this.lng} \u00B0`
  
              axios.get(`http://localhost:8080/one/maps/api/place/nearbysearch/json?location=${this.lat}%2C${this.lng}&radius=1500&type=bus_station&key=AIzaSyAtiM46_qHjLFBjoItcHwx6E5UWznDpEUk`)
              .then((response) => {
                  //console.log(response.data, "in response")
                  let result = response.data.results
                  //console.log(result)
                  var count = 0
                  for (var i of result){
                      let place = i.reference
                      axios.get(`http://localhost:8080/one/maps/api/place/details/json?place_id=${place}&key=AIzaSyAtiM46_qHjLFBjoItcHwx6E5UWznDpEUk`)
                          .then((response) => {
                        //   console.log(response.data)
                          let name = response.data.result.name
                          //console.log(name)
                          axios.get(`http://localhost:8080/two/ltaodataservice/BusStops`,
                              { headers: {
                                  Accept: "application/json", 
                                  'AccountKey': this.key
                              }}
                          )
                          .then((response) => {
                              var stops = response.data.value
                               //console.log(stops)
                              for (var idx in stops){
                                  var stop = stops[idx]
                                   //console.log(stop)
                                  if (name == stop.Description){
                                      count++
                                      var stopCode = stop.BusStopCode
                                      var url = `http://localhost:8080/two/ltaodataservice/BusArrivalv2?BusStopCode=${stopCode}` 
                                      axios.get(url, 
                                          { headers: {
                                              Accept: "application/json", 
                                              'AccountKey': this.key
                                          }}
                                      )
                                      .then((response) => {
                                          var services = response.data.Services
                                        //   console.log(services)
                                          if (services.length == 0){
                                              var arr = "No more bus service available &#x1F921;"
                                          }
                                          else{
                                              arr = ""
                                              var buses = {}
                                              var today = new Date().getTime()
  
                                              for (var service in services){
                                                  var tempBusInfo = []
                                                  var NextBus = Math.floor((Date.parse(services[service].NextBus.EstimatedArrival) - today)/60000)
                                                  if (NextBus <= 0){
                                                      NextBus = "Arr"
                                                  }
                                  
                                                  var NextBus2 = Math.floor((Date.parse(services[service].NextBus2.EstimatedArrival) - today)/60000)
                                                  if (NextBus2 <= 0){
                                                      NextBus2 = "Arr"
                                                  }
  
                                                  var NextBus3 = Math.floor((Date.parse(services[service].NextBus3.EstimatedArrival) - today)/60000)
                                                  if (NextBus3 <= 0){
                                                      NextBus3 = "Arr"
                                                  }
  
                                                  if (!Number.isNaN(NextBus)){
                                                      tempBusInfo.push(NextBus)
                                                  }
                                                  if (!Number.isNaN(NextBus2)){
                                                      tempBusInfo.push(NextBus2)
                                                  }
                                                  if (!Number.isNaN(NextBus3)){
                                                      tempBusInfo.push(NextBus3)
                                                  }
  
                                                  buses[services[service].ServiceNo] = tempBusInfo
                                              }
  
  
                                              arr += `<table class="table table-hover table-striped">
                                                      <tbody>`
  
                                              for (var bus in buses){
                                                  arr += `
                                                          <tr>
                                                              <th scope="row">${bus}</th>
                                                  `
                                                  for (var busArr of buses[bus]){
                                                      if (busArr == "Arr"){
                                                        //   bus arr
                                                          arr += ` 
                                                          <td>
                                                              <img id="bus" src="${this.busarrivallogo}">
                                                              <span style="color:red;">${busArr}</span>
                                                          </td>
                                                          `
                                                      }
                                                      else{
                                                          arr += ` 
                                                          <td>
                                                              <img id="bus" src="${this.buslogo}"> ${busArr}
                                                          </td>
                                                          `
                                                      }
                                                  }        
                                                  arr += `</tr>`
                                              }
  
                                              arr += `</tbody></table>`
                                          }
  
                                          var accordion = document.getElementsByClassName('accordion')[0]
                                          var bskey = name.replace(/ /g, '-')
                                          bskey = bskey.replace(/[^a-zA-Z0-9 ]/g, '')
                                          accordion.innerHTML += `
                                          <div class="accordion-item">
                                              <h2 class="accordion-header" id="${bskey}-heading">
                                              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#${bskey}-collapse" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                  ${name}
                                              </button>
                                              </h2>
                                              <div id="${bskey}-collapse" class="accordion-collapse collapse" aria-labelledby="${bskey}-heading">
                                              <div class="accordion-body">
                                                  ${arr}
                                              </div>
                                              </div>
                                          </div>
                                          `
                                      })
                                      .catch(error=>{error.message})
                          }}
                          document.getElementById('result').innerHTML = count + " Bus Stop(s) Nearby"
                      })
                          .catch(error=>{error.message})
              .catch(error=>error.message)
          })}
      })
          .catch(error=>{error.message})
      },
  
      error() {
              var loc = document.getElementById("loc")
              loc.innerText = 'Unable to retrieve your location';
  
              
          // if (!navigator.geolocation) {
          //     loc.innerText = 'Geolocation is not supported by your browser';
          // } 
          
          // else {
          //     loc.innerText = 'Locating…';
          //     navigator.geolocation.getCurrentPosition(success, error);
          // }
  
          }
  
    }
  };
         
  
</script>
    
<style>
       #map {
              height: 200px;
              width: 100%;
              border: 2px solid rgba(128, 128, 128, 0.226);
          }
  
          .container{
              margin-top: 3px;
          }
  
          #images{
              background-color: #a0c6d9;
              padding-top: 5px;
          }
  
          footer{
              background-color:  #a0c6d9;
              text-align: center;
          }
  
          body{
              background-color: #dce7ef;
          }
  
          #bus{
              height: 20px;
          }
  
          #pic{
              position: relative;
          }
  
          #info{
              position: absolute;
              right: 0px;
              top: 0px;
              height: 15%;
          }
</style>
    