import { dataBase } from '../utils/firebase.config';
import { collection, addDoc, doc, getDocFromCache, query, where, getDoc, getDocs, setDoc } from 'firebase/firestore';

const dataBaseMaPrimeRenov = collection(dataBase, 'primeRenovProspect');

export const setUserDoc = async (object)=>{
    return new Promise((resolve, reject)=>{
        setDoc(doc(dataBase, "primeRenovProspect", object.name), object).then(()=>{
            resolve(true)
        }).catch(err=>reject(err))
    })
}

export const showUserInformation =async (uid)=>{
    const q = query(collection(dataBase, "users"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    let user;
    return new Promise(async (resolve)=>{
        querySnapshot.forEach( (doc) => {
            console.log(doc.data());
            user = doc.data()
        })
        if(user === undefined) await user
        else resolve(user)
    })
}

