// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCA3HkdMz8PLDrm13aIWVJCRHpWxobKC6w",
  authDomain: "e-commerce-app-74eff.firebaseapp.com",
  projectId: "e-commerce-app-74eff",
  storageBucket: "e-commerce-app-74eff.appspot.com",
  messagingSenderId: "234146731794",
  appId: "1:234146731794:web:c14d706d62855fc9f105cb",
  measurementId: "G-X06YCS5M4W",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, signInWithPopup };
