import firebase from 'firebase';
import app from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDn08K9Iufr47VwdYz-zS0BbpGzIX6mR44",
  authDomain: "expense-tracker-e0bc9.firebaseapp.com",
  projectId: "expense-tracker-e0bc9",
  storageBucket: "expense-tracker-e0bc9.appspot.com",
  messagingSenderId: "284891132621",
  appId: "1:284891132621:web:596a2b3cef830c6cfcef84",
  measurementId: "G-JP76M2WRF3"
};


if(!app.apps.length){
    app.initializeApp(firebaseConfig);
}

export const auth = app.auth();

export const storage = app.storage();

export const db = firebase.database();