import { setLazyProp } from 'next/dist/server/api-utils';
import React, { useEffect, useState } from 'react';
import styles from "../styles/multiForm.module.css";

const ContainerNine = (props) => {

    const name = props.name
    const valid = props.valid

    const [passwordIsTheSame, setPasswordIsSame] = useState(false)

    const [passwordOne, setPassWordOne] = useState("")
    const [passwordTwo, setPassWordTwo] = useState("") 
    
    // const handleText = (e)=>{
    //     e.preventDefault()
    //     value(e.target.value)
    //     if(e.target.value.lenght <= 0) valid(false)
    //     valid(true)
    // }

    const handlePasseWordOne = (e)=>{
        setPassWordOne(e.target.value)
    }

    const handlePasseWordTwo = async (e)=>{
        await setPassWordTwo(e.target.value)
        if(passwordOne.value === passwordTwo.value )  await setPasswordIsSame(true)
        if(passwordTwo.value !== passwordOne.value) setPasswordIsSame(false)
    }

    return (
        <div className={`${styles.containerThree} ${styles.container}`}>
            <label className={styles.labelCreatAcount}>
                <h3 className={styles.nameH3}>
                    Bonjour <strong>{name}</strong>,<br/> Creez votre compte
                </h3>
                <span className={styles.nameSpan}>Vous y trouverez le resultat de votre simulation</span>
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
                    <input onChange={handlePasseWordOne} className={styles.input} type="password" required placeholder='Mot de passe' />
                    <input onChange={handlePasseWordTwo} className={styles.input} type="password" required placeholder='Confirmation du mot de passe' />
                </label>
            </div>
        </div>
    );
};

export default ContainerNine;