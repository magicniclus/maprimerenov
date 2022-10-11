import React from 'react';
import styles from "../styles/multiForm.module.css";
import SmallCard from './SmallCard';

const ContainerFour = () => {
    return (
        <div className={`${styles.containerFour} ${styles.container}`}>
            <label className={styles.label}>
                Quel est votre principale source de chauffage actuellement :*
            </label>
            <div className={`${styles.cardContainerFour} ${styles.cardContainer}`}>
                <SmallCard title="Electrique" />
                <SmallCard title="Fioul" />
                <SmallCard title="Gaz" />
                <SmallCard title="Bois" />
                <SmallCard title="Pompe à chaleur" />
                <SmallCard title="Charbon" />
            </div>
        </div>
    );
};

export default ContainerFour;