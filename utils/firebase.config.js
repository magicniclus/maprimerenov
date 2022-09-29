// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyANjQ3xCyjveltI081x5ceT_Xv4cUylsCc",
  authDomain: "maprimerenov-58fdf.firebaseapp.com",
  projectId: "maprimerenov-58fdf",
  storageBucket: "maprimerenov-58fdf.appspot.com",
  messagingSenderId: "855231284792",
  appId: "1:855231284792:web:e491151c0617175c01c8cd"
};
// export const firebaseConfig = {
//   apiKey: process.env.MAPRIMERENOV_API_KEY,
//   authDomain: process.env.MAPRIMERENOV_AUTH_DOMAIN,
//   projectId: process.env.MAPRIMERENOV_PROJECT_ID,
//   storageBucket: process.env.MAPRIMERENOV_STORAGE_BUCKET,
//   messagingSenderId: process.env.MAPRIMERENOV_MESSAGING_SENDER_ID,
//   appId: process.env.MAPRIMERENOV_APP_ID
// };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
