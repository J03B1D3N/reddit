<script setup lang="ts">
import logo from "../assets/Logo.webp"
import { ref } from "vue";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import {provider, auth} from "../firebase"


const Dropdown = ref(false)
function handleDropdown() {
    Dropdown.value = !Dropdown.value
}

const signedIn = ref(false)

function setSignedIn(arg:boolean) {
  signedIn.value = arg
}

function close() {
    setTimeout(() => {
        Dropdown.value = false;
    }, 200);
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    console.log("user is signed in")
    const uid = user.uid;
    setSignedIn(true)
    // ...
  } else {
    setSignedIn(false)

    // User is signed out
    console.log('user is signed out')
    // ...
  }
});


function handleSignIn() {

  signInWithPopup(auth, provider)

  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

function handleSignOut() {
  setTimeout(() => {
    signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
    }, 200);
    
}



</script>


<template>
    <div class="header w-full h-fit bg-amber-500 p-1 px-5 flex items-center justify-between">
      <RouterLink :to="{name: 'Home'}">

        <div class="wrapper flex items-center gap-2">
            <img :src="logo" alt="reddot logo" class="w-14 rounded-full">
            <div class="title text-3xl">REDDOT</div>
        </div>
      </RouterLink>

        <div class="wrapper flex justify-around gap-3">
            <button class="bg-white hover:bg-slate-300 font-bold py-2 px-4 rounded">Get App</button>
            <button v-if="!signedIn" @click="handleSignIn" class="bg-orange-600 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded">Log In</button>
            <div class="relative inline-block text-left">
  <div>
    <button v-if="signedIn" v-bind:class="[Dropdown ? 'bg-orange-900' : '']" @click="handleDropdown" @blur="close" type="button" class="inline-flex w-full justify-center items-center gap-x-1.5 bg-orange-600 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded" id="menu-button" aria-expanded="true" aria-haspopup="true">
      User
      <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  
  <div v-if="Dropdown" class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1" role="none">
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabindex="-1" id="menu-item-0">Account Settings</a>
      <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
      <button @click="handleSignOut" href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 text-left" role="menuitem" tabindex="-1" id="menu-item-2">Log Out</button>
      
    </div>
  </div>
</div>
        </div>

    </div>
</template>
