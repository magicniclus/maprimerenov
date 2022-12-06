import React, { useEffect } from 'react';
import styles from "./styles/merci.module.css";
import LayoutClassicPage from '../../components/classicPage/LayoutClassicPage';
import Router from 'next/router';
import { signOut } from '../../api/Auth';
import { useDispatch } from 'react-redux';
import { showUserProjectInformation } from '../../redux/action';
const merci = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        signOut()
        setTimeout(()=>{
            Router.push("/connexion")
        }, 4000)
    }, [])
    return (
        <LayoutClassicPage title="Remerciement" meta="Remerciement poour la validation du formulaire de MaPrimeRenov.">
            <main className={styles.main}>
                <h1 className={styles.title}>Merci</h1>
                <h2 className={styles.susTitle}>Vous pouvez désormer acceder à votre espace et voir votre simulation.</h2>
            </main>
        </LayoutClassicPage>
    );
};

export default merci;
