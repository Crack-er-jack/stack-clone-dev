// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfDLOwlj86xj8fZHPtckOFSLdhsitF7Lo",
  authDomain: "knowhow-d0cd5.firebaseapp.com",
  projectId: "knowhow-d0cd5",
  storageBucket: "knowhow-d0cd5.appspot.com",
  messagingSenderId: "748575877925",
  appId: "1:748575877925:web:d9531eff58243c4982c8cc",
  measurementId: "G-WDXX1TYG2K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();