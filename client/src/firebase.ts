// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5b462.firebaseapp.com",
  projectId: "mern-estate-5b462",
  storageBucket: "mern-estate-5b462.appspot.com",
  messagingSenderId: "182813403249",
  appId: "1:182813403249:web:0d16d04a16eae6d36253d0"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);