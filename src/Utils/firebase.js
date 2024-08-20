// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS8bt4z5auy6PO9RYgiTEkEUN8IruMaMM",
  authDomain: "try-test-7b36c.firebaseapp.com",
  projectId: "try-test-7b36c",
  storageBucket: "try-test-7b36c.appspot.com",
  messagingSenderId: "235121225703",
  appId: "1:235121225703:web:aca2daa0983e5259771742",
  measurementId: "G-ZD1ZV8K1E7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);