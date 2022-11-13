import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Geolocation from 'vue3-geolocation'
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
import { MotionPlugin } from '@vueuse/motion'
const app = createApp(App)
app.use(MotionPlugin)
app.use(router).mount('#app')
app.use(Vue3Geolocation)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)
app.use(VueAxios, { axios: axios })
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC5uwc9Pi3UyjGkO9Iw3VyRUAq_qAGGjL4",
    authDomain: "smart-2e77b.firebaseapp.com",
    databaseURL: "https://smart-2e77b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smart-2e77b",
    storageBucket: "smart-2e77b.appspot.com",
    messagingSenderId: "992908814165",
    appId: "1:992908814165:web:f01c36a7b8110f18b9f1dc",
    measurementId: "G-1H5GQ7DC2H"
};

const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);