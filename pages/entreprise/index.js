import React from 'react';
import styles from "./styles/connectionEntreprise.module.css";
import LayoutClassicPage from '../../components/classicPage/LayoutClassicPage';
import FormEntreprise from '../../components/formEntreprise/FormEntreprise';
import BaniereHeader from "../../components/baniereHeader/BaniereHeader";
import { style } from '@mui/system';
import BanierePartenaire from '../../components/banierePartenaire./BanierePartenaire';
import FamilleBaniere from '../../components/familleBaniere/FamilleBaniere';

const index = () => {
    return (
        <LayoutClassicPage title="MaPrimeRenov-info | Espace Entreprise" meta="Artisan RGE, devenez partenaire et faite vous accompagner pour proposer MaPrimeRenov à vos clients! Trouvez des clients qualifiés." >
            <main className={styles.main}>
                {/* <FormEntreprise /> */}
                <BaniereHeader>
                    <h1 className={styles.title}>Le Meilleur partenaire pour la rénovation énergetique !</h1>
                    <h2 className={styles.secondTitle}>Nous somme le partainer pour le développement de votre activité.</h2>
                    <ul className={styles.ul}>
                        <li className={styles.li}><span className={styles.span}>+ de 300</span> demandes client <span className={styles.span}>qualifiés</span> par jour</li>
                        <li className={styles.li}> <span className={styles.span}>Accompagnement</span> sur les dossiers <span className={styles.span}>d’aides à l’énergie</span></li>
                        <li className={styles.li}>Un vrai reseau <span className={styles.span}>partenaire</span> de <span className={styles.span}>confiance et durable</span></li>
                    </ul>
                </BaniereHeader>
                <BanierePartenaire img="menuisier.jpg" altImg="menuisier">
                    <h2 className={styles.baniere_secondTitle}>
                        Comment devenir partenaire?
                    </h2>
                    <p className={styles.baniere_p}>
                        Vous êtes un entreprise certifié <span className={styles.span}>RGE</span> ? vous cherchez à <span className={styles.span}>developper </span> durablement votre activité ? Vous souhaitez obtenir de <span className={styles.span}>nouveaux clients</span> ? Nous sommes la pour vous.
                    </p>
                    <p className={styles.baniere_p}>
                        <span className={styles.span}>Rejoignez</span> notre reseau <span className={styles.span}>nationnal</span> de <span className={styles.span}>partenaire</span>.
                    </p>
                    <h4 className={styles.baniere_h4}>
                        Nous ne recherchons pas d’ <span className={styles.span}>entreprises</span>, mais des <span className={styles.span}>partaires</span>.
                    </h4>
                </BanierePartenaire>
                <FormEntreprise></FormEntreprise>
                <FamilleBaniere>
                    <h3 className={styles.familleBaniere_title}>
                        <span className={styles.span}>Ensemble</span>, accompagnons nos clients
                        dans la <span className={styles.span}>transition écologique</span>.
                    </h3>
                </FamilleBaniere>
            </main>
        </LayoutClassicPage>
    );
};

export default index;