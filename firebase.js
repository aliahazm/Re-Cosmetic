// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQAHeLaU287Ghr8Fal7xa6pULhnkKMC9A",
  authDomain: "re-cosmetic.firebaseapp.com",
  projectId: "re-cosmetic",
  storageBucket: "re-cosmetic.appspot.com",
  messagingSenderId: "951383712897",
  appId: "1:951383712897:web:7bb7d34174d0595e0b1980",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
