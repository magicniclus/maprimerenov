import React, { useState, useEffect } from 'react';
import styles from "../styles/multiForm.module.css";

const ContainerSeven = (props) => {

    const valid = props.valid

    const reset = props.reset

    const value = props.value

    const valueName = props.valueName
    const valuePhone = props.valuePhone
    const valueZipCode = props.valueZipCode
    const valueEmail = props.valueEmail
    const valueContract = props.valueContract

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [email, setEmail] = useState("")
    const [contract, setContract] = useState("")

    useEffect(() => {
        reset()
    }, [])

    useEffect(() => {
        if (name === "" || phone === "" || zipCode === "" || email === "" || contract === "") {
            valid(false)
        }
        else {
            valid(true)
        }
    }, [name, phone, zipCode, email, contract])

    const handleText = ((e, target) => {
        e.preventDefault()
        target(e.target.value)
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
                    <input
                        onChange={e => {
                            handleText(e, valueName)
                            setName(e.target.value)
                        }}
                        className={styles.input} type="string" required
                    />
                </label>
                <label className={styles.labelFinal}>
                    Téléphone *
                    <input
                        onChange={e => {
                            handleText(e, valuePhone)
                            setPhone(e.target.value)
                        }}
                        className={styles.input} type="number" minLength={10} required
                    />
                </label>
                <label className={styles.labelFinal}>
                    Code postal *
                    <input
                        onChange={e => {
                            handleText(e, valueZipCode)
                            setZipCode(e.target.value)
                        }}
                        className={styles.input} type="zip" required
                    />
                </label>
                <label className={styles.labelFinal}>
                    Email *
                    <input
                        onChange={e => {
                            handleText(e, valueEmail)
                            setEmail(e.target.value)
                        }}
                        className={styles.input} type="email" required
                    />
                </label>
                <label className={styles.labelFinal}>
                    Vous etes ?*
                    <select
                        onChange={e => {
                            handleText(e, valueContract)
                            setContract(e.target.value)
                        }}
                        className={styles.select} name="type" id="type">
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