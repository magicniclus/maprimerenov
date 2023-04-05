import { dataBase } from "../utils/firebase.config";
import { dataBase2 } from "../utils/firebase.config";
import {
  collection,
  doc,
  query,
  where,
  getDocs,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

const dataBaseMaPrimeRenov = collection(dataBase, "primeRenovProspect");

//Add user in terabois database in my database
export const setUserDoc = async (object) => {
  return new Promise((resolve, reject) => {
    setDoc(doc(dataBase, "primeRenovProspect", object.name), object)
      .then(() => {
        resolve(true);
      })
      .catch((err) => reject(err));
  });
};

//Add user in CAH database in my database
export const setUserDocCAH = async (object) => {
  return new Promise((resolve, reject) => {
    setDoc(doc(dataBase, "CAH", object.name), object)
      .then(() => {
        resolve(true);
      })
      .catch((err) => reject(err));
  });
};

//Add user in CAH database in CAH database
export const setUserDocCAHDirect = async (object) => {
  return new Promise((resolve, reject) => {
    setDoc(doc(dataBase2, "propsect", object.name), object)
      .then(() => {
        resolve(true);
      })
      .catch((err) => reject(err));
  });
};

//show user information
export const showUserInformation = async (uid) => {
  const q = query(collection(dataBase, "users"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  let user;
  return new Promise(async (resolve) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      user = doc.data();
    });
    if (user === undefined) await user;
    else resolve(user);
  });
};
