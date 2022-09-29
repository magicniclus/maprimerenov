import React from 'react';
import Formulaire from '../../components/formulaire/Formulaire';
import HeaderForm from '../../components/headerForm/HeaderForm';
import Nav from '../../components/nav/Nav';
import TextContainer from '../../components/textContainer/TextContainer';
import VideoContainer from '../../components/videoContainer/VideoContainer';
import Vignette from '../../components/vignette/Vignette';
import styles from './styles/Simulateur.module.css';

const index = () => {
    return (
        <div className={styles.content}>
            <Nav />
            <HeaderForm />
            <div className={styles.midContent}>
                <TextContainer />
                <Formulaire />  
            </div>
            <Vignette />
            <VideoContainer />
        </div>
    );
};

export default index;