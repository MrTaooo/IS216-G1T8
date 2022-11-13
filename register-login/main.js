import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).mount('#app')
