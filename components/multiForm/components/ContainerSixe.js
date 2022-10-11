import React from 'react';
import styles from "../styles/multiForm.module.css";
import BigCard from './BigCard';
import SmallCard from './SmallCard';

const ContainerSixe = () => {
    return (
        <div className={`${styles.containerSice} ${styles.container}`}>
            <label className={styles.label}>
                Vous en êtes ou dans votre projet ? *
                <span className={styles.span}></span>
            </label>
            <div className={`${styles.cardContainerSice} ${styles.cardContainer}`}>
                <SmallCard title="Je refléchis" />
                <SmallCard title="Je recherche un artisan RGE" />
                <SmallCard title="Je vais signer mon devis" />
                <SmallCard title="J’ai deja signer un devis" />
            </div>
        </div>
    );
};

export default ContainerSixe;