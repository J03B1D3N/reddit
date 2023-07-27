/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage, ref} from "firebase/storage"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANGZ0SJUBUMGNmC0xcNv_GMHeZQNBIH90",
  authDomain: "reddot-ce765.firebaseapp.com",
  projectId: "reddot-ce765",
  storageBucket: "reddot-ce765.appspot.com",
  messagingSenderId: "755205730654",
  appId: "1:755205730654:web:89a69cebdd1010bf251fcf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

const strogeRef = ref(storage)

const auth = getAuth(app);

const provider = new GoogleAuthProvider();



  export {auth, provider}

