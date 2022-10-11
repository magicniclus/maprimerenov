import React from 'react';
import styles from "../styles/multiForm.module.css";
import SmallCard from './SmallCard';

const ContainerFive = () => {
    return (
        <div className={`${styles.containerFive} ${styles.container}`}>
            <label className={styles.label}>
                Quel type de travaux vous souhaitez réaliser :*
                <span className={styles.span}>Plusieurs choix possible</span>
            </label>
            <div className={`${styles.cardContainerFive} ${styles.cardContainer}`}>
                <SmallCard title="Isolation" />
                <SmallCard title="Fenetre/Porte-fenetre" />
                <SmallCard title="VMC double flux" />
                <SmallCard title="Pompe à chaleur climatisation" />
                <SmallCard title="Chauffage" />
                <SmallCard title="Solaire/chauffe eau" />
            </div>
        </div>
    );
};

export default ContainerFive;