// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.MAPRIMERENOV_API_KEY,
  authDomain: process.env.MAPRIMERENOV_AUTH_DOMAIN,
  projectId: process.env.MAPRIMERENOV_PROJECT_ID,
  storageBucket: process.env.MAPRIMERENOV_STORAGE_BUCKET,
  messagingSenderId: process.env.MAPRIMERENOV_MESSAGING_SENDER_ID,
  appId: process.env.MAPRIMERENOV_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
