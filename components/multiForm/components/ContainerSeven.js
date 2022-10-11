import React from 'react';
import styles from "../styles/multiForm.module.css";

const ContainerSeven = () => {
    return (
        <div className={`${styles.containerSeven} ${styles.container}`}>
            <label className={styles.label}>
                Comment vous appelez-vous ?*
                <span className={styles.span}>Vous acceptez d&apos;être rappelé gratuitement par un de nos expert pour faire avancer votre projet</span>
            </label>
            <div className={styles.inputContainer}>
                <label className={styles.label}>
                    NOM, Prénom *
                    <input className={styles.input} type="string" required/>
                </label>
                <label className={styles.label}>
                    Téléphone *
                    <input className={styles.input} type="phone" required/>
                </label>
                <label className={styles.label}>
                    Code postal *
                    <input className={styles.input} type="zip" required/>
                </label>
                <label className={styles.label}>
                    Email *
                    <input className={styles.input} type="email" required/>
                </label>
                <label className={styles.label}>
                    Vous etes ?*
                    <select className={styles.select} name="type" id="type">
                        <option value="proprietaire">Propriétaire occupant</option>
                        <option value="bailleur">Proprietaire bailleur</option>
                        <option value="locataire">Locataire</option>
                    </select>
                </label>
            </div>
        </div>
    );
};

export default ContainerSeven;