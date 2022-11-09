// import { dataBase } from '../../utils/firebase.config';
import {  createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import { currentUser, switchConnect } from "../redux/action";
import store from "../redux/store";
import { auth  } from "../utils/firebase.config";


export const signUp = ( object ) =>{
    return new Promise((resolve, reject)=>{
        createUserWithEmailAndPassword(auth, object.email, object.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("New account successfull created, vous êtes:", user)
            resolve(true)
        })
        .catch((error) => {
            console.log("Error:" +  error);
            reject(error)
        });
    })
}

export const sendEmailValidation = ()=>{
    sendEmailVerification(auth.currentUser)
    .then(() => {
        console.log("Vous avez recu un email de verification");
    }).catch(err=>{
        console.log("Erreur: ", err);
    })
}

export const authenticateUser = ()=>{
    return new Promise((resolve, reject)=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve(user)
            } else {
                reject("You are not connected")
            }
        });
    })
}

export const signIn = (object)=>{
    return new Promise ((resolve, reject)=>{
        signInWithEmailAndPassword(auth, object.email, object.password )
        .then((user)=>{
            resolve(true)
        }).catch(err=>{
            console.error(err.message)
            reject(err)
        })
    })
}

export const signOut = () => {
    auth.signOut().then(function() {
      console.log(`Sign-out successful.`)
      store.dispatch(switchConnect(false))
    }).catch(function(error) {
      console.log(` An error happened ${error}`)
    });
}