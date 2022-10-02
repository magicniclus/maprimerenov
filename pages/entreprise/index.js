import React from 'react';
import styles from "./styles/connectionEntreprise.module.css";
import LayoutClassicPage from '../../components/classicPage/LayoutClassicPage';
import FormEntreprise from '../../components/formEntreprise/FormEntreprise';

const index = () => {
    return (
        <LayoutClassicPage title="Inscription Entreprise" meta="Inscription pour les entreprises afin d'obtenir des lead avec MaPrimeRenov" >
            <main className={styles.main}>
                <FormEntreprise />
            </main>
        </LayoutClassicPage>
    );
};

export default index;