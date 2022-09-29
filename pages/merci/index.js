import React from 'react';
import styles from "./styles/ThankYou.module.css";
import Head from 'next/head';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/footer/Footer';
const merci = () => {
    return (
        <div className={styles.content}>
            <Head>
                <title>Remerciement</title>
                <meta name="description" content="Remerciement poour la validation du formulaire de MaPrimeRenov." />
            </Head>
            <header>
                <Nav />
            </header>
            <main className={styles.main}>
                <h1 className={styles.title}>Merci</h1>
                <h2 className={styles.susTitle}>Nous vous contacterons dans les 24/48h</h2>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default merci;