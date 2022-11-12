// import { dataBase } from '../../utils/firebase.config';
import {  createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
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

export const getUser = ()=>{
    const user = auth.currentUser;
    return new Promise((resolve, reject)=>{
        if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
            const emailVerified = user.emailVerified;
    
            // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
            const uid = user.uid;
            resolve({
                displayName,
                email,
                uid
            })
        }else {
            reject("Aucun utilisateur n'est connecté")
        }
    })
}

export const updateUser = (object)=>{
    const user = auth.currentUser;
    return new Promise((resolve, reject)=>{
        updateProfile(auth.currentUser, {
            displayName: object
          }).then(() => {
            resolve({
                displayName: user.displayName,
                email: user.email
            })
          }).catch((error) => {
            reject(error)
          });
    })
      
}