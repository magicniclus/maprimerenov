import React, { useState } from 'react';
import styles from "./styles/formEntreprise.module.css";
import { dataBase } from '../../utils/firebase.config';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import Router from 'next/router';
import { Button } from '@mui/material';

const FormEntreprise = (props) => {
    const databaseRef = collection(dataBase, 'entreprise');
    const [nameEntreprise, setNameEntreprise] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [prestation, setPrestation] = useState("")
    const [siren, setSiren] = useState("")
    const [RGE, setRGE] = useState(false)
    const [domaine, setDomaine] = useState("")
    const [contenu, setContenu] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        addDoc(databaseRef, {
            name,
            nameEntreprise,
            mail,
            phone,
            prestation,
            zipCode,
            siren,
            RGE,
            domaine,
            contenu,
        })
            .then(() => {
                setTimeout(() => {
                    Router.push('/merci')
                }, 500)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                {props.children}
            </div>
            <div className={styles.rightContainer}>
                <form onSubmit={(e) => handleSubmit(e)} className={styles.formContainer}>
                    <h1 className={styles.title}>Devenir Partenaire</h1>
                    <div className={styles.imgContainer}></div>
                    <label className={styles.nameContainer}>
                        Nom de votre entreprise*
                        <input onChange={(e) => setNameEntreprise(e.target.value)} className={styles.input} type="text" required />
                    </label>
                    <label className={styles.nameContainer}>
                        NOM, Prenom*
                        <input onChange={(e) => setName(e.target.value)} className={styles.input} type="text" required />
                    </label>
                    <label className={styles.nameContainer}>
                        Email*
                        <input onChange={(e) => setMail(e.target.value)} className={styles.input} type="email" required />
                    </label>
                    <label className={styles.nameContainer}>
                        Téléphone*
                        <input onChange={(e) => setPhone(e.target.value)} className={styles.input} type="number" minLength={10} required />
                    </label>
                    <label className={styles.nameContainer}>
                        Code Postal*
                        <input onChange={(e) => setZipCode(e.target.value)} className={styles.input} type="number" minLength={5} required />
                    </label>
                    <div className={styles.entrepriseType}>
                        <label className={styles.sirenContainer}>
                            Siren de votre entreprise*
                            <input onChange={(e) => setSiren(e.target.value)} className={styles.input} type="number" required />
                        </label>
                        <label className={styles.selectContainer}>
                            Type d&apos; activité*
                            <select name="selected" id="selected" onChange={(e) => { setPrestation(e.target.value) }} className={styles.select}>
                                <option disabled selected>Selectionnez une option</option>
                                <option value="isolation">Isolation</option>
                                <option value="ite">ITE (Isolation thermique par l&apos; exterieur)</option>
                                <option value="Iti">ITI (Isolation thermique pas l&apos; interieur)</option>
                                <option value="Isolation des combles perdus">Isolation des combles perdus</option>
                                <option value="isolation sous rampant">Isolation sous rampant</option>
                                <option value="Isolation plancher">Isolation plancher</option>
                                <option value="isolation terrasse">Isolation des toitures terrasses</option>
                                <option value="Menuiserie">Menuiserie</option>
                                <option value="Fenêtre ou porte fenêtre">Fenêtre ou porte fenêtre</option>
                                <option value="Chauffage biomasse">Chauffage Biomasse</option>
                                <option value="Chauffage Gaz THPE">Chauffage Gaz THPE</option>
                                <option value="Chauffage PAC Hybride">Chauffage PAC Hybride</option>
                                <option value="Chauffage PAC air/eau ou eau/eau">Chauffage PAC air/eau ou eau/eau</option>
                                <option value="Chauffage Électrique">Chauffage Électrique</option>
                                <option value="Chauffage Solaire">Chauffage Solaire</option>
                                <option value="Chaudière gaz TPHE">Chaudière gaz TPHE</option>
                                <option value="VMC">VMC</option>
                                <option value="Eclairage">Eclairage</option>
                                <option value="Pompe à chaleur hybride">Pompe à chaleur hybride</option>
                                <option value="Pompe à chaleau air/eau ou eau/eau">Pompe à chaleur air/eau ou eau/eau</option>
                                <option value="Calorifuge">Calorifuge</option>
                                <option value="Poêle à bois">Poêle à bois</option>
                                <option value="Panneaux photovoltaïques">Panneaux photovoltaïques</option>
                                <option value="Chauffage Biomasse Poêle à bois">Chauffage Biomasse Poêle à bois</option>
                            </select>
                        </label>
                    </div>
                    <label className={styles.checkboxContainer}>
                        Artisan certifié RGE*
                        <input onChange={() => setRGE(!RGE)} type="checkbox" id="RGE" name="RGE" className={styles.checkbox} />
                    </label>
                    {/* <button className={styles.button} type='submit'>Envoyer</button> */}
                    <Button type="submit" variant="contained" color="success" style={{ backgroundColor: "#74c011", minWidth: "250px", maxWidth: "250px", marginLeft: "auto", marginRight: "auto", marginTop: "2rem", marginBottom: "2rem" }}>
                        Envoyer
                    </Button>
                </form>
            </div>
        </div >
    );
};

export default FormEntreprise;