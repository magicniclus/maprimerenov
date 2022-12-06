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
import Image from 'next/image';

const Index = () => {
    const [valid, setValid] = useState(false)

    const dispatch = useDispatch()

    const [formValue, setFormValue] = useState({
        email: "",
        password: ""
    })

    const [image, setImage] = useState(false)

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
                        <div className={styles.passwordContainer}>
                            <input  className={styles.inputPassword} type={!image ? "password" : "text"} placeholder='Mot de passe' onChange={(e)=> setFormValue({...formValue, password: e.target.value})} />
                            <div className={styles.imageContainer}>
                                <Image src={image ? "/eye.png" : "/eyeClose.png"} width={20} height={20} priority objectFit="contain" onClick={e=>setImage(!image)} />
                            </div>
                        </div>
                        <p style={{ display: "flex", color: "red", marginTop:"1rem" }} className={styles.errorMessage}>{feedback}</p>
                        <Button variant="contained" style={{minWidth: "200px", marginTop: "2rem"}} type="submit" color="success">Se Connecter</Button>
                        <Link href={"/nouveau-mot-de-passe"}><Button variant="text" style={{color:"#c2c2c2"}} sx={{ fontSize: 10 }}>Mot de passe oublié</Button></Link>
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
