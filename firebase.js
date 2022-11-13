import 'firebase/auth' 
import 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import {getDatabase, set, get, update, remove, ref, child} from "firebase/database";

const firebaseConfig  = {
    apiKey: "AIzaSyC5uwc9Pi3UyjGkO9Iw3VyRUAq_qAGGjL4",
    authDomain: "smart-2e77b.firebaseapp.com",
    databaseURL: "https://smart-2e77b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smart-2e77b",
    storageBucket: "smart-2e77b.appspot.com",
    messagingSenderId: "992908814165",
    appId: "1:992908814165:web:f01c36a7b8110f18b9f1dc",
    measurementId: "G-1H5GQ7DC2H"
}

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const dbref = ref(db);

export function writeUserData(fav) {
    set(ref(db, 'places/' + fav.place), {
        placeId: fav.place,
        name: fav.name,
        operating: fav.operating,
        type: fav.type,
        image: fav.img,
        address: fav.address,
        lat: fav.lat,
        lng: fav.lng
    });
}

export function deleteUserData(fav){
    remove(ref(db, 'places/' + fav.place))
    .then(()=>{
        return true
    })
    .catch((error)=>{
        alert(error);
    });
}

export function addItinerary(place){
    set(ref(db, 'itinerary/' + place.place), {
        placeId: place.place,
        name: place.name,
        type: place.type,
        date: place.date,
        operating: place.operating,
        address: place.address,
        lat: place.lat,
        lng: place.lng,
        image: place.image
    });
}

