import React from 'react';
import styles from "./styles/connection.module.css";
import LayoutClassicPage from "../../layout/classicPage/LayoutClassicPage"

const index = () => {
    return (
        <LayoutClassicPage>
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1>Se connecter</h1>
                    <form className={styles.formulaire}>
                        <input type="email" placeholder='Email'/>
                        <input type="passeword" placeholder='Mot de passe'/>
                        <p>Mot de passe oublié ?</p>
                        <button type='submit'>Se connecter</button>
                    </form>
                </div>
            </main>
        </LayoutClassicPage>
    );
};

export default index;