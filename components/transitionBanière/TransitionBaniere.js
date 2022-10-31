import React from 'react';
import styles from "./styles/transitionBaniere.module.css";

const TransitionBaniere = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                Avec <span className={styles.span}>MaPrimeRénov’</span>, vous favorisez
                la <span className={styles.span}>transition écologique</span>.
            </h3>
        </div>
    );
};

export default TransitionBaniere;