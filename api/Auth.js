// import { dataBase } from '../../utils/firebase.config';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.config";

// const auth = getAuth();

export const signUp = ( object ) =>{
    return new Promise((resolve, reject)=>{
        createUserWithEmailAndPassword(auth, object.email, object.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("New account successfull created, vous êtes:", user)
            resolve(true)
        })
        .catch((error) => {
            console.log("Error:" +  error);
            reject(error)
            // ..
        });
    })
}