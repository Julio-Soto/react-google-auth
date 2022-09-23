// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHUbf6tauJFQL2GFjPbxnd0TjL0aWFQns",
  authDomain: "react--auth-e1ef8.firebaseapp.com",
  projectId: "react--auth-e1ef8",
  storageBucket: "react--auth-e1ef8.appspot.com",
  messagingSenderId: "972209033306",
  appId: "1:972209033306:web:4503bf3cc12d34ecd94863"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)