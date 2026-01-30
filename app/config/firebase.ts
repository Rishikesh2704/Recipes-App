// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAePz-dC8BK3bV6qyKe4S4nnkpTqD_a2q4",
  authDomain: "anime-web-app-28d2f.firebaseapp.com",
  projectId: "anime-web-app-28d2f",
  storageBucket: "anime-web-app-28d2f.firebasestorage.app",
  messagingSenderId: "588836988372",
  appId: "1:588836988372:web:9b751904b76677e6946241",
  measurementId: "G-GHZ6EYC68J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()