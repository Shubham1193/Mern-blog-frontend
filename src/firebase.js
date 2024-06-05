// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-55d63.firebaseapp.com",
  projectId: "mern-blog-55d63",
  storageBucket: "mern-blog-55d63.appspot.com",
  messagingSenderId: "914198356854",
  appId: "1:914198356854:web:86c5d3d3246784ed125057",
  measurementId: "G-EPRPEYYHF3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
