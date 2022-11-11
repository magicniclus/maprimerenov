import { setLazyProp } from 'next/dist/server/api-utils';
import React, { useEffect, useState } from 'react';
import styles from "../styles/multiForm.module.css";

const ContainerNine = (props) => {

    const name = props.name
    const valid = props.valid

    const [passwordIsTheSame, setPasswordIsSame] = useState(false)
    const [wordTapping, setWordTapping]=useState(false)

    const [passwordOne, setPassWordOne] = useState("")
    const [passwordTwo, setPassWordTwo] = useState("") 
    
    // const handleText = (e)=>{
    //     e.preventDefault()
    //     value(e.target.value)
    //     if(e.target.value.lenght <= 0) valid(false)
    //     valid(true)
    // }

    useEffect(()=>{
        if(passwordTwo===passwordOne && passwordTwo !== "" && passwordOne !== "") setPasswordIsSame(true)
        else setPasswordIsSame(false)
    }, [passwordTwo, passwordOne])

    const handlePasseWordOne = (e)=>{
        setPassWordOne(e.target.value)
    }

    const handlePasseWordTwo = (e)=>{
        setPassWordTwo(e.target.value)
    }
    return (
        <div className={`${styles.containerThree} ${styles.container}`}>
            <label className={styles.labelCreatAcount}>
                <h3 className={styles.nameH3}>
                    Bonjour <strong>{name}</strong>,<br/> Creez votre compte
                </h3>
                <span className={styles.span}>Vous y trouverez le resultat de votre simulation</span>
            </label>
            <div className={`${styles.cardContainerThree} ${styles.cardContainer}`}>
                <label className={styles.labelAccount}>
                    Email *
                    <input
                        className={styles.input} 
                        type="email" 
                        required
                        placeholder='johndoe@exemple.com'
                    />
                </label>
                <label className={styles.labelAccount}>
                    Mot de passe *
                    <input onChange={e=>handlePasseWordOne(e)} className={styles.input} type="password" style={passwordIsTheSame ? {border: "1px solid green"} : null} required placeholder='Mot de passe' />
                    <input onChange={e=>handlePasseWordTwo(e)} className={styles.input} type="password" style={passwordIsTheSame ? {border: "1px solid green"} : null} required placeholder='Confirmation du mot de passe' />
                </label>
                <span className={styles.lastSpan} style={{color: "#314662"}}>Le resultat de cette simulation n'est pas une proposition commerciale et l'ensemble des resultats obtenus devront être validés par un expert.</span>
            </div>
        </div>
    );
};

export default ContainerNine;