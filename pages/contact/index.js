import React from 'react';
import styles from "./styles/contact.module.css";
import LayoutClassicPage from '../../components/classicPage/LayoutClassicPage';
import FormContact from '../../components/formContact/FormContact';

const index = () => {
    return (
        <LayoutClassicPage meta="contact MaPrimeRenov" title="Contact">
            <main className={styles.main}>
                <FormContact />
                ok
            </main>
        </LayoutClassicPage>
    );
};

export default index;