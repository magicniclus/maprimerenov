import React from 'react';
import styles from "./styles/vignette.module.css";

const Vignette = () => {
    return (
        <div className={styles.content}>
            <div className={styles.vignetteOneContainer}>
                <h4 className={styles.vignetteTitle}>+644 000 dossier accordés</h4>
            </div>
            <div className={styles.vignetteTwoContainer}>
                <h4 className={styles.vignetteTitle}>70% d’économie</h4>
            </div>
            <div className={styles.vignetteThreeContainer}>
                <h4 className={styles.vignetteTitle}>Jusqu’à 20 000€ <br/> de prise en charge</h4>
            </div>
        </div>
    );
};

export default Vignette;