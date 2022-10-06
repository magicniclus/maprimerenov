import React, { useEffect, useState } from 'react';
import LayoutClassicPage from "../../components/classicPage/LayoutClassicPage";
import styles from "./styles/admin.module.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Router from 'next/router';
import { collection, doc, getDocs, orderBy, query } from 'firebase/firestore';
import { dataBase } from '../../utils/firebase.config';

const Admin = () => {
    const databaseRef = collection(dataBase, 'prospect');
    const q = query(databaseRef, orderBy("date", "asc"));

    const auth = getAuth();

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)

    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          getData()
        } else {
            Router.push('/')
        }
      });

    const getData = async ()=>{
        await getDocs(q)
        .then((res) => {
            console.log(res.docs.length);
            res.docs.map(doc=>
                console.log(doc.data())
            )
        })
        .catch(err=>{
            console.error(err)
        })

    }


    return (
        <LayoutClassicPage title="MaPrimeRenov-info || Admin" >
            <main className={styles.main}>
                <h1 style={{color: "black"}}>admin</h1>
            </main>
        </LayoutClassicPage>
    );
};

export default Admin;