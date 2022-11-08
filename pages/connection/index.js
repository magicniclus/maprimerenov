import React, { useEffect, useState } from 'react';
import styles from "./styles/connection.module.css";
import LayoutClassicPage from "../../components/classicPage/LayoutClassicPage";
import { Button } from '@mui/material';
import { signUp } from '../../api/Auth';
import { getValue } from '@mui/system';

const Index = () => {
    const [valid, setValid] = useState(true)
    const [formValue, setFormValue] = useState({
        email: "",
        password: ""
    })

    const [feedback, setFeedBack]= useState()

    const handleColorInput = (e) => {
        e.preventDefault()
        signUp(formValue).then(success=>{
            if(success){
                console.log("email sccessfully created");
                setFeedBack("")
            }
        })
        .catch(err=>{
            console.log(err);
            setFeedBack(err.message)
        })
    }

    return (
        <LayoutClassicPage title="MaPrimeRenov-info | Se connecter" meta="Connectez-vous à votre espace dédié. Vous pouvez suivre l'avancement de votre projet MaPrimeRenov, vos artisans RGE et nous contacter directement !">
            <main className={styles.main}>
                <div className={styles.container}>
                    <form className={styles.formulaire} onSubmit={handleColorInput}>
                        <h1 className={styles.title}>Se connecter</h1>
                        <input  className={styles.input} type="email" placeholder='Email' onChange={(e)=> setFormValue({...formValue, email: e.target.value})} />
                        <input  className={styles.input} placeholder='Mot de passe' onChange={(e)=> setFormValue({...formValue, password: e.target.value})} />
                        <p style={{ display: "flex", color: "red", marginTop:"1rem" }} className={styles.errorMessage}>{feedback}</p>
                        <Button variant="contained" style={{minWidth: "200px", marginTop: "2rem"}} type="submit" color="success">Se Connecter</Button>
                        <Button variant="text" >Mot de passe oublié</Button>
                    </form>
                </div>
            </main>
        </LayoutClassicPage>
    );
};

export default Index;
