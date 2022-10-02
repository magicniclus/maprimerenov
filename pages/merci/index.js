import React from 'react';
import styles from "./styles/merci.module.css";
import LayoutClassicPage from '../../components/classicPage/LayoutClassicPage';
const merci = () => {
    
    return (
        <LayoutClassicPage title="Remerciement" meta="Remerciement poour la validation du formulaire de MaPrimeRenov.">
            <main className={styles.main}>
                <h1 className={styles.title}>Merci</h1>
                <h2 className={styles.susTitle}>Nous vous contacterons dans les 24/48h</h2>
            </main>
        </LayoutClassicPage>
    );
};

export default merci;
