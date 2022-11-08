import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyANjQ3xCyjveltI081x5ceT_Xv4cUylsCc",
  authDomain: "maprimerenov-58fdf.firebaseapp.com",
  projectId: "maprimerenov-58fdf",
  storageBucket: "maprimerenov-58fdf.appspot.com",
  messagingSenderId: "855231284792",
  appId: "1:855231284792:web:e491151c0617175c01c8cd"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
export const auth = getAuth(app)
