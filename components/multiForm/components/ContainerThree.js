import React from 'react';
import styles from "../styles/multiForm.module.css";

const ContainerThree = () => {
    return (
        <div className={`${styles.containerThree} ${styles.container}`}>
            <label className={styles.label}>
                Surface habitable de votre logement :*
                <span className={styles.span}>En m2</span>
            </label>
            <div className={`${styles.cardContainerThree} ${styles.cardContainer}`}>
                <input className={styles.input} type="number" required placeholder="100" />
            </div>
        </div>
    );
};

export default ContainerThree;