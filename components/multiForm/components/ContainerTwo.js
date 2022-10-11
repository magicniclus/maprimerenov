import React from 'react';
import styles from "../styles/multiForm.module.css";
import BigCard from './BigCard';
import SmallCard from './SmallCard';

const ContainerTwo = () => {
    return (
        <div className={`${styles.containerTwo} ${styles.container}`}>
            <label className={styles.label}>
                Année de construction de votre logement :*
                <span className={styles.span}>Cela nous permet de determiner votre éligibilité aux différentes aides</span>
            </label>
            <div className={`${styles.cardContainerTwo} ${styles.cardContainer}`}>
                <BigCard title="Moins de deux ans" />
                <BigCard title="Entre 2 et 10 ans" /> 
                <BigCard title="Plus de 10 ans" /> 
            </div>
        </div>
    );
};

export default ContainerTwo;