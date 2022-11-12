import React from 'react';
import styles from "./styles/merci.module.css";
import LayoutClassicPage from '../../components/classicPage/LayoutClassicPage';
const merci = () => {
    
    return (
        <LayoutClassicPage title="Remerciement" meta="Remerciement poour la validation du formulaire de MaPrimeRenov.">
            <main className={styles.main}>
                <h1 className={styles.title}>Merci</h1>
                <h2 className={styles.susTitle}>Vous allez recevoir un email de confirmation pour acceder à votre espace.</h2>
                <p className={styles.p}>Si il n'apparait pas verifiez vos spams</p>
            </main>
        </LayoutClassicPage>
    );
};

export default merci;
