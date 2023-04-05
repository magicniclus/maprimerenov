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
  appId: "1:855231284792:web:e491151c0617175c01c8cd",
};

// // Your web app's Firebase configuration CAH
const firebaseConfig2 = {
  apiKey: "AIzaSyBWI7ZbXjSp96rI3iLdQtfDhRXezcVwaxk",
  authDomain: "leadmanager-bb42b.firebaseapp.com",
  projectId: "leadmanager-bb42b",
  storageBucket: "leadmanager-bb42b.appspot.com",
  messagingSenderId: "773911657744",
  appId: "1:773911657744:web:91654836d922f951eab995",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
export const auth = getAuth(app);

// Initialize CAH Firebase
export const app2 = initializeApp(firebaseConfig2, "app2");
export const dataBase2 = getFirestore(app2);
export const auth2 = getAuth(app2);
