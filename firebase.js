// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {initializeAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJoocP-cbGnpV9qLBducqmByLITnBGogM",
  authDomain: "dtfood-90f7e.firebaseapp.com",
  projectId: "dtfood-90f7e",
  storageBucket: "dtfood-90f7e.appspot.com",
  messagingSenderId: "316645075666",
  appId: "1:316645075666:web:0d988d578f2cf9dd419b0b",
  measurementId: "G-5C2LN45VM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app)

export {auth}