import React from 'react';
import styles from "./styles/formContact.module.css";
import { dataBase } from '../../utils/firebase.config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const FormContact = () => {
    const databaseRef = collection(dataBase, 'contact');

    const handleSubmit = e=>{
        e.preventDefault()
        
    }
    return (
        <div className={styles.content}>
            <h1 className={styles.title}>Contact</h1>
            <form onSubmit={(e)=>handleSubmit(e)} className={styles.formContainer}>
                <div className={styles.imgContainer}></div>
                <label className={styles.nameContainer}>
                    NOM, Prenom
                    <input className={styles.input} type="text" required/>
                </label>
                <label className={styles.nameContainer}>
                    Email
                    <input className={styles.input} type="email" required/>
                </label>
                <label className={styles.nameContainer}>
                    Téléphone
                    <input className={styles.input} type="number" minLength={10} required/>
                </label>
                <label className={styles.nameContainer}>
                    Sujet
                    <input className={styles.input} type="text" required/>
                </label>
                <label className={styles.nameContainer}>
                    Description
                    <textarea className={styles.textArea} id="text"></textarea>
                </label>
                <button className={styles.button} type='submit'>Envoyer</button>
            </form>
        </div>
    );
};

export default FormContact;