// Import stylesheets
import './style.css';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCKEdKwcJhBLrBEWu5gpmThsjgnKusd0xI",
  authDomain: "schlotlink.firebaseapp.com",
  databaseURL: "https://schlotlink-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "schlotlink",
  storageBucket: "schlotlink.appspot.com",
  messagingSenderId: "993057708261",
  appId: "1:993057708261:web:3766708be5d8f411ad5c0c",
  measurementId: "G-7LTZZPSQJ7"
};

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>MuthaTrucker</h1>`;