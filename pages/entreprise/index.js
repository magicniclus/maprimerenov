import React from 'react';
import styles from "./styles/connectionEntreprise.module.css";
import LayoutClassicPage from '../../components/classicPage/LayoutClassicPage';
import FormEntreprise from '../../components/formEntreprise/FormEntreprise';

const index = () => {
    return (
        <LayoutClassicPage title="MaPrimeRenov-info | Espace Entreprise" meta="Artisan RGE, devenez partenaire et faite vous accompagner pour proposer MaPrimeRenov à vos clients! Trouvez des clients qualifiés." >
            <main className={styles.main}>
                <FormEntreprise />
            </main>
        </LayoutClassicPage>
    );
};

export default index;