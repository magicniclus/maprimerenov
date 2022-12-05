import React, { useState } from 'react';
import LayoutClassicPage from '../../components/classicPage/LayoutClassicPage';
import { emailRegex } from '../../utils/regex';
import styles from "./styles/nouveauMotDePasse.module.css";
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link';
import { resetPassword } from '../../api/Auth';
import Router from 'next/router';

const NouveauMotDePasse = () => {

    const [emailIsTheSame, setEmailIsSame] = useState(false)
    const [loader, setLoader] = useState(false);
    const [email, setEmail] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        setLoader(true)
        if(emailRegex.test(email)){
            setEmailIsSame(true)
            resetPassword(email).then(success=>{
                if(success){
                    setLoader(false)
                    console.log("Mot de passe envoyé");
                }
            }).catch(err=>{
                console.log(err)
                setLoader(false)
            })
        } 
    }

    return (
        <LayoutClassicPage meta="Reinitialiser son mot de passe" title="MaPrimeRenov | Nouveau mot de passe">
            <main className={styles.main}>
                <form onSubmit={handleSubmit} className={styles.formulaire}>
                    {
                        loader ?
                            <div className={styles.loader}>
                                <CircularProgress />
                            </div> : null
                    }
                    <label className={styles.label}>
                        Veuillez saisir votre email
                        <input onChange={e=>setEmail(e.target.value)} style={emailIsTheSame ? {border: "1px solid green"} : null} className={styles.input} type="text" required placeholder='johndoe@exemple.com' />
                    </label>
                        <Button variant="contained" type='submit' style={{maxWidth: "200px"}} >
                            Envoyer
                        </Button>
                </form>
            </main>
        </LayoutClassicPage>
    );
};

export default NouveauMotDePasse;