import { dataBase } from '../utils/firebase.config';
import { collection, addDoc, doc, getDocFromCache, query, where, getDoc, getDocs, setDoc } from 'firebase/firestore';

const dataBaseMaPrimeRenov = collection(dataBase, 'primeRenovProspect');

export const setUserDoc = async (object)=>{
    return new Promise((resolve, reject)=>{
        setDoc(doc(dataBase, 'users', object.uid), object).then(()=>{
            resolve(true)
        }).catch(err=>reject(err))
    })
}

export const showUserInformation =async (uid)=>{
    const q = query(collection(dataBase, "users"), where("uid", "==", uid));
    // const q = query(collection(db, "cities"), where("capital", "==", true));
    const querySnapshot = await getDocs(q);
    let user;
    return new Promise(async (resolve, reject)=>{
        querySnapshot.forEach( (doc) => {
        // doc.data() is never undefined for query doc snapshots
            user = doc.data()
        })
        if(user === undefined) await user
        else resolve(user)
    })
}

