import React, { useState, useEffect } from 'react';
import { emailRegex } from '../../../utils/regex';
import styles from "../styles/multiForm.module.css";

const ContainerSeven = (props) => {

    const valid = props.valid

    const reset = props.reset

    const value = props.value

    const valueName = props.valueName
    const valuePhone = props.valuePhone
    const valueContract = props.valueContract
    const valueEmail = props.valueEmail

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [contract, setContract] = useState("")

    const [emailIsTheSame, setEmailIsSame] = useState(false)

    useEffect(() => {
        reset()
    }, [])

    useEffect(() => {
        if (name === "" || phone === "" || contract === "" || email === "") {
            valid(false)
        }
        else {
            valid(true)
        }
    }, [name, phone, contract])

    const handleText = ((e, target) => {
        e.preventDefault()
        target(e.target.value)
    })

    const handleEmail = (e)=>{
        e.preventDefault()
        if(emailRegex.test(e.target.value)){
            setEmailIsSame(true)
            setEmail(e.target.value)
            handleText(e, valueEmail)
        } 
        else{
            setEmail("")
            setEmailIsSame(false);
        } 
    }

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
                        className={`${styles.input} ${styles.inputNumber}`} type="number" minLength={10} required
                    />
                </label>
                <label className={styles.labelFinal}>
                    Email *
                    <input
                        style={emailIsTheSame ? {border: "1px solid green"} : null}
                        className={styles.input} 
                        type="email" 
                        onChange={handleEmail}
                        required
                        placeholder='johndoe@exemple.com'
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