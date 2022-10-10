import React, { useEffect } from 'react';
import Formulaire from '../../components/formulaire/Formulaire';
import HeaderForm from '../../components/headerForm/HeaderForm';
import TextContainer from '../../components/textContainer/TextContainer';
import VideoContainer from '../../components/videoContainer/VideoContainer';
import Vignette from '../../components/vignette/Vignette';
import styles from './styles/Simulateur.module.css';
import LayoutClassicPage from '../../components/classicPage/LayoutClassicPage';
import { getAuth} from "firebase/auth";

const index = () => {

    // console.log(getAuth().currentUser);

    return (
        <LayoutClassicPage title="Simulateur MaPrimeRenov" meta="Simulateur gratuit pour connaitre votre éligibilité aux aides de l'état MaPrimeRenov 2022.">
            <main className={styles.main}>
                <HeaderForm />
                <div className={styles.midContent}>
                    <TextContainer />
                    <Formulaire />  
                </div>
                <Vignette />
                <VideoContainer />
            </main>
        </LayoutClassicPage>

    );
};

export default index;
