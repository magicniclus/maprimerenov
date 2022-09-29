import React from 'react';
import styles from "./styles/connection.module.css";
import LayoutClassicPage from "../../layout/classicPage/LayoutClassicPage"

const index = () => {
    return (
        <LayoutClassicPage>
            <main className={styles.main}>
                <div className={styles.container}>
                    <form className={styles.formulaire}>
                    <h1 className={styles.title}>Se connecter</h1>
                        <input className={styles.input} type="email" placeholder='Email'/>
                        <input className={styles.input} type="passeword" placeholder='Mot de passe'/>
                        <p className={styles.recuperation}>Mot de passe oublié ?</p>
                        <button className={styles.button} type='submit'>Se connecter</button>
                    </form>
                </div>
            </main>
        </LayoutClassicPage>
    );
};

export default index;