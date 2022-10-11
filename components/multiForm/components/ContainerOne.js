import { containerClasses } from '@mui/system';
import React from 'react';
import styles from "../styles/multiForm.module.css";
import BigCard from './BigCard';
import SmallCard from './SmallCard';

const ContainerOne = () => {
    return (
        <div className={`${styles.containerOne} ${styles.container}`}>
            <label className={styles.label}>
                Votre projet concerne :*
            </label>
            <div className={`${styles.cardContainerOne} ${styles.cardContainer}`}>
                <BigCard title="Une Maison" />
                <BigCard title="Un appartement" /> 
            </div>
        </div>
    );
};

export default ContainerOne;