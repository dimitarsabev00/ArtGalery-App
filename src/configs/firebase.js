// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRCkGS1VoeXD32ORTmbSpPzHR0Q9NL5WE",
  authDomain: "artgallery-app.firebaseapp.com",
  projectId: "artgallery-app",
  storageBucket: "artgallery-app.appspot.com",
  messagingSenderId: "614025330406",
  appId: "1:614025330406:web:9bcc77093d8bb6eaa44527",
  measurementId: "G-PG7W3NPMPH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
