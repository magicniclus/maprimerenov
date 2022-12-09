import React, { useEffect } from 'react';
import styles from "./styles/merci.module.css";
import LayoutClassicPage from '../../components/classicPage/LayoutClassicPage';
import Router from 'next/router';
import { signOut } from '../../api/Auth';
const Index = () => {
    useEffect(()=>{
        // signOut()
        // setTimeout(()=>{
        //     Router.push("/connexion")
        // }, 4000)
    }, [])
    return (
        <LayoutClassicPage title="Remerciement" meta="Remerciement poour la validation du formulaire de MaPrimeRenov.">
            <main className={styles.main}>
                <h1 className={styles.title}>Merci</h1>
                <h2 className={styles.susTitle}>Vous êtes éligible aux aides MaPrimeRenov&apos;, nous vous contacterons dans les 48h.</h2>
            </main>
        </LayoutClassicPage>
    );
};

export default Index;
