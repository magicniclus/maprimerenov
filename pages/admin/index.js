import React, { useEffect } from 'react';
import LayoutClassicPage from "../../components/classicPage/LayoutClassicPage";
import styles from "./styles/admin.module.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Router from 'next/router';

const Admin = () => {
    const auth = getAuth();

    useEffect(()=>{
        console.log(auth);
    }, [])

    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(user);
        } else {
            Router.push('/')
        }
      });

    return (
        <LayoutClassicPage title="MaPrimeRenov-info || Admin" >
            <main className={styles.adminPage}>
                <h1 style={{color: "black"}}>admin</h1>
            </main>
        </LayoutClassicPage>
    );
};

export default Admin;