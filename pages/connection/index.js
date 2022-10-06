import React, { useEffect, useState } from 'react';
import styles from "./styles/connection.module.css";
import LayoutClassicPage from "../../components/classicPage/LayoutClassicPage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { dataBase } from '../../utils/firebase.config';
import Router from 'next/router';


const Index = () => {
    const [valid, setValid] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(()=>{
        if(email === "" && password === ""){
            setValid(true)
        }
    }, [email || password])

    const handleColorInput = (e)=>{
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setValid(true)
            Router.push('/admin')

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            setValid(false)
        });
    }



    return (
        <LayoutClassicPage title="Connection">
            <main className={styles.main}>
                <div className={styles.container}>
                    <form className={styles.formulaire}>
                    <h1 className={styles.title}>Se connecter</h1>
                        <input style={!valid ? {border:"1px solid red"}: {border:"none"}} onChange={e => setEmail(e.target.value)} className={styles.input} type="email" placeholder='Email'/>
                        <input style={!valid ? {border:"1px solid red"}: {border:"none"}} onChange={e => setPassword(e.target.value)} className={styles.input} type="passeword" placeholder='Mot de passe'/>
                        <p style={!valid ? {display:"flex", color:"red"}: {display:"none"}}  className={styles.errorMessage}>Mot de passe ou Email pas valide</p>
                        <p className={styles.recuperation}>Mot de passe oublié ?</p>
                        <button onClick={(e)=>handleColorInput(e)} className={styles.button} type='submit'>Se connecter</button>
                    </form>
                </div>
            </main>
        </LayoutClassicPage>
    );
};

export default Index;