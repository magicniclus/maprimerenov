import React, { useState, useEffect } from 'react';
import { phoneRegex } from '../../../utils/regex';
import styles from "../styles/multiForm.module.css";

const ContainerSeven = (props) => {

    const valid = props.valid

    const reset = props.reset

    const value = props.value

    const valueName = props.valueName
    const valuePhone = props.valuePhone
    const valueContract = props.valueContract

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [contract, setContract] = useState("")

    useEffect(() => {
        reset()
    }, [])

    useEffect(() => {
        if (name !== "" && phone !== "" && contract !== "" ) {
            valid(true)
        }
        else {
            valid(false)
        }
    }, [name, phone, contract])

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
                        className={styles.input} type="number" min={10} required
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