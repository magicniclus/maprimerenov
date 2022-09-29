import React from 'react';
import styles from "./styles/contact.module.css";
import LayoutClassicPage from '../../layout/classicPage/LayoutClassicPage';

const index = () => {
    return (
        <LayoutClassicPage meta="contact MaPrimeRenov" title="Contact">
            <main className={styles.main}>
                <h1 className={styles.title}>Contact</h1>
                <div className={styles.formContainer}>

                </div>
            </main>
        </LayoutClassicPage>
    );
};

export default index;