import React from 'react';
import Formulaire from '../../components/formulaire/Formulaire';
import styles from './styles/Simulateur.module.css';

const index = () => {
    return (
        <div className={styles.content}>
            <Formulaire />
        </div>
    );
};

export default index;