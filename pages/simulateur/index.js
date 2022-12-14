import React from 'react';
import MultiForm from "../../components/multiForm/MultiForm";
import TextContainer from '../../components/textContainer/TextContainer';
import VideoContainer from '../../components/videoContainer/VideoContainer';
import styles from './styles/Simulateur.module.css';
import LayoutClassicPage from '../../components/classicPage/LayoutClassicPage';
import CardsContainer from '../../components/cards/CardsContainer';
import HeaderForm from '../../components/headerForm/HeaderForm';

const index = () => {
    return (
        <LayoutClassicPage title="MaPrimeRenov-info | Simulateur MaPrimeRenov" meta="Simulateur gratuit pour connaitre votre éligibilité aux aides de l'état MaPrimeRenov 2022.">
            <main className={styles.main}>
                <HeaderForm />
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
