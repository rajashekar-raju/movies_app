// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhTNmphaFWI8G_tjxvcdjacDqRE4ErMLQ",
  authDomain: "moviesapp-dc757.firebaseapp.com",
  projectId: "moviesapp-dc757",
  storageBucket: "moviesapp-dc757.appspot.com",
  messagingSenderId: "492850008038",
  appId: "1:492850008038:web:a2e4fe9c2b275dea74d027",
  measurementId: "G-584S2ZPHKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();