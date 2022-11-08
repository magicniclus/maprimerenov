import React, { useState } from 'react';
import styles from "./styles/connection.module.css";
import LayoutClassicPage from "../../components/classicPage/LayoutClassicPage";

const Index = () => {
    const [valid, setValid] = useState(true)

    const handleColorInput = (e) => {
        e.preventDefault()
        setValid(false)
    }

    return (
        <LayoutClassicPage title="MaPrimeRenov-info | Se connecter" meta="Connectez-vous à votre espace dédié. Vous pouvez suivre l'avancement de votre projet MaPrimeRenov, vos artisans RGE et nous contacter directement !">
            <main className={styles.main}>
                <div className={styles.container}>
                    <form className={styles.formulaire}>
                        <h1 className={styles.title}>Se connecter</h1>
                        <input style={!valid ? { border: "1px solid red" } : { border: "none" }} className={styles.input} type="email" placeholder='Email' />
                        <input style={!valid ? { border: "1px solid red" } : { border: "none" }} className={styles.input} type="passeword" placeholder='Mot de passe' />
                        <p style={!valid ? { display: "flex", color: "red" } : { display: "none" }} className={styles.errorMessage}>Mot de passe ou Email pas valide</p>
                        <p className={styles.recuperation}>Mot de passe oublié ?</p>
                        <button onClick={(e) => handleColorInput(e)} className={styles.button} type='submit'>Se connecter</button>
                    </form>
                </div>
            </main>
        </LayoutClassicPage>
    );
};

export default Index;