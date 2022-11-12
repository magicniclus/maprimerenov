import { dataBase } from '../utils/firebase.config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const dataBaseMaPrimeRenov = collection(dataBase, 'primeRenovProspect');

export const addDocs = (object)=>{
    return new Promise((resolve, reject)=>{
        addDoc(dataBaseMaPrimeRenov, object).then(success =>{
            resolve(true)
        }).catch(err=>reject(err))
    })
}