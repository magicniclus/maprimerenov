import React from 'react';
import styles from "./styles/connectionEntreprise.module.css";
import LayoutClassicPage from '../../components/classicPage/LayoutClassicPage';
import FormEntreprise from '../../components/formEntreprise/FormEntreprise';
import BaniereHeader from "../../components/baniereHeader/BaniereHeader";
import BanierePartenaire from '../../components/banierePartenaire/BanierePartenaire';
import FamilleBaniere from '../../components/familleBaniere/FamilleBaniere';
import { Button } from '@mui/material';
import Router from 'next/router';

const index = () => {
    return (
        <LayoutClassicPage title="MaPrimeRenov-info | Espace Entreprise" meta="Artisan RGE, devenez partenaire et faite vous accompagner pour proposer MaPrimeRenov à vos clients! Trouvez des clients qualifiés." >
            <main className={styles.main}>
                {/* <FormEntreprise /> */}
                <BaniereHeader>
                    <h1 className={styles.title}>Le Meilleur partenaire pour la rénovation énergétique !</h1>
                    <h2 className={styles.secondTitle}>Nous sommes là pour le développement de votre activité.</h2>
                    <ul className={styles.ul}>
                        <li className={styles.li}><span className={styles.span}>+ de 300</span> demandes client <span className={styles.span}>qualifiées</span> par jour</li>
                        <li className={styles.li}> <span className={styles.span}>Accompagnement</span> sur les dossiers <span className={styles.span}>d’aides à l’énergie</span></li>
                        <li className={styles.li}>Un vrai réseau <span className={styles.span}>partenaire</span> de <span className={styles.span}>confiance et durable</span></li>
                    </ul>
                </BaniereHeader>
                <BanierePartenaire img="menuisier.jpg" altImg="menuisier">
                    <h2 className={styles.baniere_secondTitle}>
                        Comment devenir partenaire MaPrimeRenov-Info.org ?
                    </h2>
                    <p className={styles.baniere_p}>
                        Vous êtes une entreprise certifié <span className={styles.span}>RGE</span> ? vous cherchez à <span className={styles.span}>développer </span> durablement votre activité ? Vous souhaitez obtenir de <span className={styles.span}>nouveaux clients</span> ? Nous sommes là pour vous.
                    </p>
                    <ul className={styles.baniere_ul}>
                        <li className={styles.baniere_li}>Vous envoyez votre demande</li>
                        <li className={styles.baniere_li}>Vous nous transmettez les documents demandés</li>
                        <li className={styles.baniere_li}>Nous signons notre contrat</li>
                        <li className={styles.baniere_li}>Vous recevez vos demandes</li>
                    </ul>
                    <p className={styles.baniere_p}>
                        <span className={styles.span}>Rejoignez</span> notre réseau <span className={styles.span}>national</span> de <span className={styles.span}>partenaire</span>.
                    </p>
                    <h4 className={styles.baniere_h4}>
                        Nous ne recherchons pas d’ <span className={styles.span}>entreprises</span>, mais des <span className={styles.span}>partaires</span>.
                    </h4>
                </BanierePartenaire>
                <FormEntreprise>
                    <div className={styles.formEntreprise_content}>
                        <div className={styles.formEntreprise_paragraphOne}>
                            <h2 className={styles.formEntreprise_h2}>Notre service partenaire</h2>
                            <p className={styles.formEntreprise_p}>Une fois votre demande envoyé, un conseiller vous contactera dans les 24/48h. </p>
                        </div>
                        <div className={styles.formEntreprise_paragrapheTwo}>
                            <h2 className={styles.formEntreprise_h2}>Outils bientots disponibles</h2>
                            <ul className={styles.formEntreprise_ul}>
                                <li className={styles.formEntreprise_li}>Gestion de client (Analyse de votre entreprise, devis, facturation, relance etc...) via notre application</li>
                                <li className={styles.formEntreprise_li}> Générateur simplifié de l’ensemble des aides disponibles pour vos clients via notre application</li>
                            </ul>
                        </div>
                        <div className={styles.formEntreprise_buttonContainer}>
                            <h3 className={styles.formEntreprise_buttonContainer_h3}>Vous êtes un particulier ?</h3>
                            <Button variant="contained" onClick={() => Router.push('/simulateur')} style={{ width: "250px" }}>
                                Tester mon elegibilité
                            </Button>
                        </div>
                    </div>
                </FormEntreprise>
                <FamilleBaniere>
                    <h3 className={styles.familleBaniere_title}>
                        <span className={styles.span}>Ensemble</span>, accompagnons nos clients
                        dans la <span className={styles.span}>transition énergétique</span>.
                    </h3>
                </FamilleBaniere>
            </main>
        </LayoutClassicPage>
    );
};

export default index;