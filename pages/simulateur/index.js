import React, { useEffect } from 'react';
import Head from 'next/head'
import Formulaire from '../../components/formulaire/Formulaire';
import HeaderForm from '../../components/headerForm/HeaderForm';
import Nav from '../../components/nav/Nav';
import TextContainer from '../../components/textContainer/TextContainer';
import VideoContainer from '../../components/videoContainer/VideoContainer';
import Vignette from '../../components/vignette/Vignette';
import styles from './styles/Simulateur.module.css';
import Footer from '../../components/footer/Footer';

const index = () => {
    return (
        <>
            <Head>
                <title>Simulateur MaPrimeRenov</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <Nav />
            </header>
            <main className={styles.content}>
                <HeaderForm />
                <div className={styles.midContent}>
                    <TextContainer />
                    <Formulaire />  
                </div>
                <Vignette />
                <VideoContainer />
            </main>
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </>
    );
};

export default index;