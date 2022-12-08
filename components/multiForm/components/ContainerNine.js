import { setLazyProp } from 'next/dist/server/api-utils';
import React, { useEffect, useState } from 'react';
import { emailRegex, passwordRegex } from '../../../utils/regex';
import styles from "../styles/multiForm.module.css";

const ContainerNine = (props) => {

    const name = props.name
    const password = props.password
    const valid = props.valid
    const value = props.value
    const updatePassword =props.passwordValid

    const [passwordIsTheSame, setPasswordIsSame] = useState(false)
    const [emailIsTheSame, setEmailIsSame] = useState(false)

    const [passwordOne, setPassWordOne] = useState("")
    const [passwordTwo, setPassWordTwo] = useState("") 

    const handleEmail = (e)=>{
        e.preventDefault()
        if(emailRegex.test(e.target.value)){
            setEmailIsSame(true)
            value(e.target.value)
        } 
        else{
            value("")
            setEmailIsSame(false);
        } 
    }

    useEffect(()=>{
        if(passwordTwo===passwordOne && passwordTwo !== "" && passwordOne !== "" && passwordRegex.test(passwordOne)) {
            setPasswordIsSame(true)
            password(passwordOne)
            updatePassword(true)
        }
        else {
            setPasswordIsSame(false)
            password("")
            updatePassword(false)
        }
    }, [passwordTwo, passwordOne])

    const handlePasseWordOne = (e)=>{
        setPassWordOne(e.target.value)
    }

    const handlePasseWordTwo = (e)=>{
        setPassWordTwo(e.target.value)
    }

    useEffect(()=>{
        if(passwordIsTheSame && emailIsTheSame){
            valid(true)
        }else{
            valid(false)
        }
    }, [passwordIsTheSame, emailIsTheSame])

    return (
        <div className={`${styles.containerThree} ${styles.container}`}>
            <label className={styles.labelCreatAcount}>
                <h3 className={styles.nameH3}>
                    Bonjour <strong>{name}</strong>,<br/> Créez votre compte pour accéder à votre espace
                </h3>
                <span className={styles.span}>Vous y trouverez le resultat de votre simulation</span>
            </label>
            <div className={`${styles.cardContainerThree} ${styles.cardContainer}`}>
                <label className={styles.labelAccount}>
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
                <label className={styles.labelAccount}>
                    Mot de passe *
                    <input onChange={e=>handlePasseWordOne(e)} className={styles.input} type="password" style={passwordIsTheSame ? {border: "1px solid green"} : null} required placeholder='Mot de passe' />
                    <input onChange={e=>handlePasseWordTwo(e)} className={styles.input} type="password" style={passwordIsTheSame ? {border: "1px solid green"} : null} required placeholder='Confirmation du mot de passe' />
                </label>
                <span className={styles.lastSpan} style={{color: "#314662"}}>Le resultat de cette simulation ne constitut pas une proposition commerciale et l&apos;ensemble des resultats obtenus devront être validés par un expert.</span>
            </div>
        </div>
    );
};

export default ContainerNine;