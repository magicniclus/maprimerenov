import React from 'react';
import Formulaire from '../../components/formulaire/Formulaire';
import HeaderForm from '../../components/headerForm/HeaderForm';
import TextContainer from '../../components/textContainer/TextContainer';
import Vignette from '../../components/vignette/Vignette';
import styles from './styles/Simulateur.module.css';

const index = () => {
    return (
        <div className={styles.content}>
            <HeaderForm />
            <div className={styles.midContent}>
                <TextContainer />
                <Formulaire />  
            </div>
            <Vignette />
        </div>
    );
};

export default index;