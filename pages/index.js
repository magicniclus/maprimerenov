import React, { useEffect } from 'react';
import Formulaire from '../components/formulaire/Formulaire';
import HeaderForm from '../components/headerForm/HeaderForm';
import TextContainer from '../components/textContainer/TextContainer';
import VideoContainer from '../components/videoContainer/VideoContainer';
import Vignette from '../components/vignette/Vignette';
import LayoutClassicPage from '../components/classicPage/layoutClassicPage';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <LayoutClassicPage >
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
  )
}
