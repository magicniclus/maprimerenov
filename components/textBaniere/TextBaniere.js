import React from 'react';
import styles from "./styles/textBaniere.module.css"
import Router from 'next/router';
import { Button } from '@mui/material';

const TextBaniere = () => {
    const handleChangePage = (e) => {
        e.preventDefault()
        Router.push("/simulateur")
    }
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.p}><span className={styles.span}>MaPrimeRénov'</span> c’est <span className={styles.span}>+644 000 primes</span> accordé par <span className={styles.span}>l’état</span></div>
                <div className={styles.p}>L’ensemble de ces Primes n’ont qu’un seul objectif, favoriser la transition écologique en accompagnant l’ensemble des propriétaires dans l’optimisation énergétique et économique de leur logement. MaPrimeRénov’ c’est gratuit et sans condition de revenue. </div>
                <div className={styles.p}>Il vous suffit de tester l’éligibilité de votre projet !</div>
            </div>
            <Button variant="contained" onClick={(e) => handleChangePage(e)} style={{ backgroundColor: "#74c011", minWidth: "250px", maxWidth: "250px", marginTop: "2rem" }}>
                Tester  mon éligibilité
            </Button>
        </div>
    );
};

export default TextBaniere;