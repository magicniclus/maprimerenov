import React, { useEffect, useState } from 'react';
import LayoutClassicPage from "../../components/classicPage/LayoutClassicPage";
import styles from "./styles/admin.module.css";
import Router from 'next/router';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { dataBase } from '../../utils/firebase.config';

const Admin = () => {
    const databaseRef = collection(dataBase, 'prospect');
    const q = query(databaseRef, orderBy("date", "asc"));

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
          getData()
        } else {
            Router.push('/')
        }
      });

    const getData = async ()=>{
        await getDocs(q)
        .then((res) => {
            console.log(res.docs.length);
            res.docs.map(doc=>{
                    return doc.data()
                }
            )
        })
        .catch(err=>{
            console.error(err)
        })
    }


    return (
        <LayoutClassicPage title="MaPrimeRenov-info || Admin" >
            <main className={styles.main}>
                <h1 style={{color: "black"}}>Interface Admin</h1>
            </main>
        </LayoutClassicPage>
    );
};

export default Admin;