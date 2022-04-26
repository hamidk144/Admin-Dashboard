
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD62Hz-Ih4Kc5Y-oTO6mavdkH_ZUejxxHQ",
  authDomain: "admin-dashboard-aa7bc.firebaseapp.com",
  projectId: "admin-dashboard-aa7bc",
  storageBucket: "admin-dashboard-aa7bc.appspot.com",
  messagingSenderId: "685817669866",
  appId: "1:685817669866:web:83854ab4c77742dab94f93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth();