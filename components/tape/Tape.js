import { style } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import styles from "./styles/tape.module.css"
import { Button } from '@mui/material';
import Router from 'next/router';

const Tape = () => {
    const handleChangePage = (e) => {
        e.preventDefault()
        Router.push("/simulateur")
    }
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.topContainer}>
                    <h3 className={styles.title}>
                        Les étapes de la démarche !
                    </h3>
                    <p className={styles.p}>
                        Premier mandataire MaPrimeRénov’ de France
                    </p>
                </div>
                <div className={styles.midContainer}>
                    <div className={styles.vignetteContainer}>
                        <div className={styles.vignette}>
                            <p className={styles.argument}>
                                Vérification de votre éligibilité
                            </p>
                        </div>
                        <div className={styles.vignette}>
                            <p className={styles.argument}>
                                Depose de votre demande  au prêt de l’État
                            </p>
                        </div>
                        <div className={styles.vignette}>
                            <p className={styles.argument}>
                                Réception du montant provisoir
                            </p>
                        </div>
                        <div className={styles.vignette}>
                            <p className={styles.argument}>
                                Réalisation des travaux et réception de votre facture
                            </p>
                        </div>
                        <div className={styles.vignette}>
                            <p className={styles.argument}>
                                Vous percevez le versement de votre prime
                            </p>
                        </div>
                    </div>
                    <p className={styles.p}>
                        Nous vous accompagnons dans toutes les étapes de votre
                        rénovation énergétique.
                    </p>
                    <Button variant="contained" onClick={(e) => handleChangePage(e)} style={{ backgroundColor: "#74c011", minWidth: "250px", maxWidth: "250px", marginRight: "auto", marginLeft: "auto" }}>
                        Tester  mon éligibilité
                    </Button>
                </div>
            </div>
        </div >
    );
};

export default Tape;