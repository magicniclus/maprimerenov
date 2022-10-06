import React, { useEffect, useState } from 'react';
import styles from "./styles/Formulaire.module.css";
import Image from 'next/image';
import { dataBase } from '../../utils/firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import Router from 'next/router';

const Formulaire = () => {
    const [type, setType] = useState ("Maison")
    const [situation, setSituation] = useState ("proprietaire")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState ("")
    const [zipCode, setZipCode] = useState ("")
    const [when, setWhen] = useState ("Le plus tôt possible")

    const databaseRef = collection(dataBase, 'prospect');

    const handleSubmit = (e)=>{
        e.preventDefault()
        addDoc(databaseRef, {
            type,
            situation,
            name,
            phone,
            zipCode,
            when, 
            date: new Date()
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
    
    // useEffect(()=>{
    //     getData()
    // }, [])

    return (
        <div className={styles.content} id="form">
            <h2 className={styles.title}>Tester mon éligibilité</h2>
            <Image src='/frenchFlag.png' alt='drapeau francais' width="100px" height="5" objectFit='cover' className={styles.flag} />
            <form className={styles.formulaire} onSubmit={(e)=>handleSubmit(e)}>
                <label className={styles.label}>
                    Votre logement *
                     <select onChange={e => setType(e.target.value)} required className={styles.select}>
                        <option value="maison">Maison</option>
                        <option value="appartement">Appartement</option>
                    </select>
                </label>
                <label className={styles.label}>
                    Votre situation *
                    <select required onChange={e => setSituation(e.target.value)} className={styles.select}>
                        <option value="proprietaire">Proptietaire</option>
                        <option value="locataire">Locataire</option>
                    </select>
                </label>
                <label className={styles.label}>
                    NOM, prenom *
                    <input className={styles.input} type="text" onChange={e => setName(e.target.value)} required />
                </label>
                <label className={styles.label}>
                    Telephone *
                    <input className={styles.input} onChange={e => setPhone(e.target.value)} id='phone' name="phone" type="tel" size={10} required />
                </label>
                <label className={styles.label}>
                    Code Postal *
                    <input className={styles.input} onChange={e => setZipCode(e.target.value)}  id="zip" name="zip" type="text" pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$" required/>
                </label>
                <label className={styles.label}>
                    Quand souhaitez vous rélaiser ce projet ?
                    <select required className={styles.select}>
                        <option value="tot">Le plus tôt possible</option>
                        <option value="threeMonth">Dans les 3 mois</option>
                        <option value="years">Dans l&lsquo;année</option>
                        <option value="iDontNow">Je ne sais pas</option>
                    </select>
                </label>
                <button className={styles.button} type="submit">Envoyer</button>
            </form>
            <p className={styles.advertissment}>En soumettant votre demande, vous acceptez que les informations saisies soient exploitées dans le cadre de la demande à la réalisation d’un bilan technique et de la relation commerciale qui peut en découler.</p>
        </div>
    );
};

export default Formulaire;