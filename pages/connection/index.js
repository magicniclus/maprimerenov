import React, { useEffect, useState } from 'react';
import styles from "./styles/connection.module.css";
import LayoutClassicPage from "../../components/classicPage/LayoutClassicPage";
import { Button } from '@mui/material';
import { signIn } from '../../api/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { switchConnect } from '../../redux/action';
import CircularProgress from '@mui/material/CircularProgress';
import Router from 'next/router';
import Link from 'next/link';

const Index = () => {
    const [valid, setValid] = useState(false)

    const dispatch = useDispatch()

    const [formValue, setFormValue] = useState({
        email: "",
        password: ""
    })

    const [loader, setLoader] = useState(true)

    const [feedback, setFeedBack]= useState()

    const state = useSelector(state=>state)

    useEffect(()=>{
        if(state.areConnect){
            Router.push("/mon-espace")
        }else{
            setLoader(false)
        }
    }, [state.areConnect])

    useEffect(()=>{
        if(state.areConnect){
            Router.push("/mon-espace")
        }else{
            setLoader(false)
        }
    }, [])

    const handleColorInput = (e) => {
        e.preventDefault()
        setLoader(true)
        signIn(formValue).then(success =>{
            if(success){
                setFeedBack("")
                dispatch(switchConnect(true))
                Router.push("/mon-espace")
            }
        })
        .catch(err=>{
            console.log(err)
            setFeedBack(err.message)
            setLoader(false)
        })
    }

    return (
        <LayoutClassicPage title="MaPrimeRenov-info | Se connecter" meta="Connectez-vous à votre espace dédié. Vous pouvez suivre l'avancement de votre projet MaPrimeRenov, vos artisans RGE et nous contacter directement !">
            <main className={styles.main}>
                {
                    loader ?
                    <div className={styles.loader}>
                        <CircularProgress />
                    </div> : null
                }
                <div className={styles.container}>
                    <form className={styles.formulaire} onSubmit={handleColorInput}>
                        <h1 className={styles.title}>Se connecter</h1>
                        <input  className={styles.input} type="email" placeholder='Email' onChange={(e)=> setFormValue({...formValue, email: e.target.value})} />
                        <input  className={styles.input} placeholder='Mot de passe' onChange={(e)=> setFormValue({...formValue, password: e.target.value})} />
                        <p style={{ display: "flex", color: "red", marginTop:"1rem" }} className={styles.errorMessage}>{feedback}</p>
                        <Button variant="contained" style={{minWidth: "200px", marginTop: "2rem"}} type="submit" color="success">Se Connecter</Button>
                        <Button variant="text" style={{color:"#c2c2c2"}} sx={{ fontSize: 10 }}>Mot de passe oublié</Button>
                    </form>
                    <section className={styles.entreprise}>
                        <h2 className={styles.entreprise_p}>Vous n'avez pas encore de projet avec nous ? </h2>
                        <Link href={"/simulateur"}><Button variant="contained" style={{maxWidth: "200px"}} >
                            Creer mon compte
                        </Button></Link>
                    </section>
                </div>
            </main>
        </LayoutClassicPage>
    );
};

export default Index;
