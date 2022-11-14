import { dataBase } from '../utils/firebase.config';
import { collection, addDoc, doc, getDocFromCache, query, where, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { resolve } from 'styled-jsx/css';

const dataBaseMaPrimeRenov = collection(dataBase, 'primeRenovProspect');

export const setUserDoc = async (object)=>{
    return new Promise((resolve, reject)=>{
        setDoc(doc(dataBase, 'users', object.uid), object).then(()=>{
            resolve(true)
        }).catch(err=>reject(err))
    })
}

export const showUserInformation =async (uid)=>{
    const q = query(collection(dataBase, "primeRenovProspect"));

    const querySnapshot = await getDocs(q);

    console.log(querySnapshot);
}

