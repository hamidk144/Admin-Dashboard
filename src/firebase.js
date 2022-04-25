// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "admin-dashboard-aa7bc.firebaseapp.com",
  projectId: "admin-dashboard-aa7bc",
  storageBucket: "admin-dashboard-aa7bc.appspot.com",
  messagingSenderId: "685817669866",
  appId: "1:685817669866:web:83854ab4c77742dab94f93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);