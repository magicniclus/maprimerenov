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
    const [message, setMessage] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        setMessage("")
        setLoader(true)
        if(emailRegex.test(email)){
            setEmailIsSame(true)
            resetPassword(email).then(success=>{
                if(success){
                    setLoader(false)
                    setMessage("Pour valider votre nouveau mot de passe un email vous a été envoyé, s'il ne s'affiche pas vérifiez dans vos spams.")
                    setTimeout(()=>{
                        Router.push("/connexion")
                    }, 10000)
                }
            }).catch(err=>{
                console.log(err)
                setLoader(false)
                setMessage("Une erreur est survenue, veuillez essayer avec un email valid ou revenez plus tard.")
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
                        {
                            message !== "" ? 
                            <h4 className={styles.message}>
                                {message}
                            </h4>: null
                        }
                </form>
            </main>
        </LayoutClassicPage>
    );
};

export default NouveauMotDePasse;