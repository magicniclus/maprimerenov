import React from 'react';
import styles from "./styles/simulateur.module.css";

const Simulateur = (props) => {
    const prestations = props.prestations;
    return (
        <div className={styles.simulateur}>
            <h3 className={styles.simulateur_h3}>Calcul de vos aides:</h3>
            <div className={styles.simulateur_cardContainer}>
                {
                    prestations === undefined ? 
                    <h4 className={styles.simulateur_h4}>Oups !!! Vous n'avez aucun projet en cours...</h4>:
                    null
                }
            </div>
        </div>
    );
};

export default Simulateur;