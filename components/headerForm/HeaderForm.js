import React from 'react';
import styles from "./styles/headerForm.module.css";

const HeaderForm = () => {
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Testez votre éligibilité aux aides 2022 encadré par l’état: MaPrimeRenov’!</h1>
            <h3 className={styles.secondTitle}>Jusu’à 80% de vos travaux d’économie d’énergie pris en charge.</h3>
            <div className={styles.imgContainer}></div>
        </div>
    );
};

export default HeaderForm;