// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoDunGkwrdLKLs9Y0vJgL6GaBy-AZ01SU",
  authDomain: "mern-book-store-ce52b.firebaseapp.com",
  projectId: "mern-book-store-ce52b",
  storageBucket: "mern-book-store-ce52b.appspot.com",
  messagingSenderId: "729769779702",
  appId: "1:729769779702:web:4f46458e129882a8bf67d7",
  measurementId: "G-7K32ZCYKCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app
