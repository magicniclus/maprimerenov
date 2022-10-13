import React, {useState, useEffect} from 'react';
import styles from "../styles/multiForm.module.css";

const ContainerSeven = (props) => {

    const valid = props.valid

    const valueName = props.valueName
    const valuePhone = props.valuePhone
    const valueZipCode = props.valueZipCode
    const valueEmail = props.valueEmail
    const valueContract = props.valueContract

    useEffect(()=>{
        valueName("")
        valuePhone("")
        valueZipCode("")
        valueEmail("")
        valueContract("")
    }, [])

    useEffect(()=>{
        if(valueName === "" || valuePhone === "" || valueZipCode === "" || valueEmail === "" || valueContract === "") valid(false)
        valid(true)
    }, [valueName, valuePhone, valueZipCode, valueEmail, valueContract, valid])

    const handleText = ((e, tar) =>{
        e.preventDefault()
        tar(e.target.value)
    })

    return (
        <div className={`${styles.containerSeven} ${styles.container}`}>
            <label className={styles.labelSeven}>
                Comment vous appelez-vous ?*
                <span className={styles.span}>Vous acceptez d&apos;être rappelé gratuitement par un de nos expert afin de faire avancer votre dossier</span>
            </label>
            <div className={styles.inputContainer}>
                <label className={styles.labelFinal}>
                    NOM, Prénom *
                    <input onChange={e=>handleText(e, valueName)} className={styles.input} type="string" required/>
                </label>
                <label className={styles.labelFinal}>
                    Téléphone *
                    <input onChange={e=>handleText(e, valuePhone)} className={styles.input} type="phone" required/>
                </label>
                <label className={styles.labelFinal}>
                    Code postal *
                    <input onChange={e=>handleText(e, valueZipCode)} className={styles.input} type="zip" required/>
                </label>
                <label className={styles.labelFinal}>
                    Email *
                    <input onChange={e=>handleText(e, valueEmail)} className={styles.input} type="email" required/>
                </label>
                <label className={styles.labelFinal}>
                    Vous etes ?*
                    <select onChange={e=>handleText(e, valueContract)} className={styles.select} name="type" id="type">
                        <option disabled selected>Selectionnez une option</option>
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