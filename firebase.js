// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM7cr-veWta5PQUNy_kXe2Pov2ssbGRjc",
  authDomain: "finalyearprojectrc.firebaseapp.com",
  projectId: "finalyearprojectrc",
  storageBucket: "finalyearprojectrc.appspot.com",
  messagingSenderId: "440154344371",
  appId: "1:440154344371:web:1a4060f4dbd873b6eb19c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

