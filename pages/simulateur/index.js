import React from 'react';
import Formulaire from '../../components/formulaire/Formulaire';
import HeaderForm from '../../components/headerForm/HeaderForm';
import TextContainer from '../../components/textContainer/TextContainer';
import styles from './styles/Simulateur.module.css';

const index = () => {
    return (
        <div className={styles.content}>
            <HeaderForm />
            <div className={styles.midContent}>
                <TextContainer />
                <Formulaire />  
            </div>
        </div>
    );
};

export default index;