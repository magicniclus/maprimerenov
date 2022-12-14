import React, {useState} from 'react';
import styles from "./styles/formContact.module.css";
import { dataBase } from '../../utils/firebase.config';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import Router from 'next/router';

const FormContact = () => {
    const databaseRef = collection(dataBase, 'contact');
    const [name, setName] = useState("")
    const [phone, setPhone] = useState ("")
    const [mail, setMail] = useState ("")
    const [sujet, setSujet] = useState ("")
    const [contenu, setContenu] = useState ("")

    const handleSubmit = e=>{
        e.preventDefault()
        addDoc(databaseRef, {
            name,
            mail,
            phone,
            sujet,
            contenu
        })
        .then(()=>{
            setTimeout(()=>{
                Router.push('/merci')
            }, 500)
        })
        .catch((err)=>{
            console.error(err)
        })
    }
    return (
        <div className={styles.content}>
            <form onSubmit={(e)=>handleSubmit(e)} className={styles.formContainer}>
                <h1 className={styles.title}>Contact</h1>
                <div className={styles.imgContainer}></div>
                <label className={styles.nameContainer}>
                    NOM, Prenom
                    <input onChange={(e)=>setName(e.target.value)} className={styles.input} type="text" required/>
                </label>
                <label className={styles.nameContainer}>
                    Email
                    <input onChange={(e)=>setMail(e.target.value)} className={styles.input} type="email" required/>
                </label>
                <label className={styles.nameContainer}>
                    Téléphone
                    <input onChange={(e)=>setPhone(e.target.value)} className={styles.input} type="number" minLength={10} required/>
                </label>
                <label className={styles.nameContainer}>
                    Sujet
                    <input onChange={(e)=>setSujet(e.target.value)} className={styles.input} type="text" required/>
                </label>
                <label className={styles.nameContainer}>
                    Description
                    <textarea onChange={(e)=>setContenu(e.target.value)} className={styles.textArea} id="text"></textarea>
                </label>
                <button className={styles.button} type='submit'>Envoyer</button>
            </form>
        </div>
    );
};

export default FormContact;