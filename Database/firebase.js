import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQAHeLaU287Ghr8Fal7xa6pULhnkKMC9A",
  authDomain: "re-cosmetic.firebaseapp.com",
  projectId: "re-cosmetic",
  storageBucket: "re-cosmetic.appspot.com",
  messagingSenderId: "951383712897",
  appId: "1:951383712897:web:7bb7d34174d0595e0b1980",
};

firebase.initializeApp(firebaseConfig);

export default firebase;