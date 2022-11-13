<template>
    <div class="login">
        <div class="container-fluid">
            <div class="row">
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">Account Login</h1>
                        <p class="card-text" id="email"><input type="text" size=34 placeholder="Email" v-model="email" /></p>
                        <p class="card-text" id="password"><input type="password" size=34 placeholder="Password" v-model="password" /></p>
                        <p id="error" v-if="errorMessage">{{ errorMessage }}</p>
                        <div class="d-grid col-8 mx-auto">
                            <a href="#" class="btn btn-primary" @click="register">Login</a>
                            <a href="#" class="btn btn-outline-primary" @click="signInWithGoogle"><img src="../assets/google-logo.png" align="left" width="25" height="25">Sign In With Google</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router' //import router
import { 
    getAuth, 
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

const email = ref("");
const password = ref(""); // by default, firebase requires a password with at least six characters long
const errorMessage = ref() // ERROR message
const router = useRouter() // get a reference to our vue router, redirect users that complete registration to 'ABout' page
const isLoggedIn = ref(false);

const register = () => {
    // need .value because ref()
    const auth = getAuth() // from firebase/auth
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
        console.log("Successfully logged in!");

        console.log(auth.currentUser)

        router.push('/home')
    })
    .catch((error) => {
        console.log(error.code);
        switch (error.code) {
            case "auth/invalid-email":
                errorMessage.value = "Invalid email";
                break;
            case "auth/user-not-found":
                errorMessage.value = "No account with that email was found";
                break;
            case "auth/wrong-password":
                errorMessage.value = "Incorrect password";
                break;
            default:
                errorMessage.value = "Email or password was incorrect";
                break;
        }
    });
};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider) // create google sign-in popup
        .then((result) => {
            console.log(result.user);
            router.push("/home");
        })
        .catch((error) => {
            // handle error
            console.log(error.code);
            alert(error.message);
        });
}

let auth;
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
        } else {
            isLoggedIn.value = false;
        }
    });
});

const handleSignOut = () => {
    signOut(auth).then(() => {
        router.push("/about"); 
    });
};
</script>

<style scoped>

.row {
    background-color: rgba(209,224,231,255);
    justify-content: center;
}

.card {
    width: 500px; 
    text-align:center; 
    margin:50px;
}

.card-title {
    padding: 20px;
}

#email {
    padding-top: 20px;
    padding-bottom: 10px;
}

#password {
    padding-bottom: 30px;
}

a{
    margin-bottom: 20px;
}

#error {
    padding-bottom: 10px;
}
</style>