import React from 'react';
import MultiForm from "../../components/multiForm/MultiForm";
import TextContainer from '../../components/textContainer/TextContainer';
import VideoContainer from '../../components/videoContainer/VideoContainer';
import styles from './styles/Simulateur.module.css';
import LayoutClassicPage from '../../components/classicPage/LayoutClassicPage';
import CardsContainer from '../../components/cards/CardsContainer';

const index = () => {
    return (
        <LayoutClassicPage title="MaPrimeRenov-info | Simulateur MaPrimeRenov" meta="Simulateur gratuit pour connaitre votre éligibilité aux aides de l'état MaPrimeRenov 2022.">
            <main className={styles.main}>
                <div className={styles.topContainer}>
                    <h1 className={styles.h1}>Obtenez le réstultat de votre éligibilité aux aides MaPrimeRenov&apos; 2022/2023 en 2 minutes !</h1>
                    <h3 className={styles.h3}>80% de vos travaux d&apos;économie d&apos;énergie pris en charge.</h3>
                </div>
                <div className={styles.midContent}>
                    <TextContainer />
                    <MultiForm />
                </div>
                <CardsContainer />
                <VideoContainer />
            </main>
        </LayoutClassicPage>
    );
};

export default index;
