import React, { useEffect, useState } from 'react';
import styles from "./styles/monEspace.module.css"
import LayoutClassicPage from '../../components/classicPage/LayoutClassicPage';
import { getUser } from '../../api/Auth';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { showUserInformation } from '../../api/Doc';
import { showUserProjectInformation } from '../../redux/action';
import { Skeleton } from '@mui/material';
import Simulateur from '../../components/simulateur/Simulateur';

const Index = () => {

    const dispatch = useDispatch()
    const state = useSelector(state=>state)

    const [userName, setUserName] = useState("")
    const [userMail, setUserMail] = useState("")
    const [userId, setUserId] = useState("")

    const [loader, setLoader] = useState(true)
    const [loaderRevenus, setLoaderRevenus] = useState(true)

    const [prestation, setPrestation] = useState([])

    const [loaderPrestation, setLoaderPrestation] = useState(true)

    useEffect(()=>{
        if(!state.areConnect){
            Router.push("/connexion")
            setLoader(true)
        }else{
            setLoader(false)
        }
    }, [state.areConnect])

    useEffect(()=>{
        getUser().then(currentUser=>{
            setUserName(currentUser.displayName)
            setUserMail(currentUser.email)
            setUserId(currentUser.uid)
        }).catch(err=>err)
    }, [])

    useEffect(()=>{
        showUserInformation(userId).then(user=>{
            dispatch(showUserProjectInformation(user))
        }).catch(err=>console.log("Aucun utilisateur connecté"))
    }, [userId])
    
    useEffect(()=>{
        if(state.userProjectInformation.zipCode) setLoader(false)
        else setLoader(true)
    }, [state.userProjectInformation.zipCode])
    
    useEffect(()=>{
        if(state.userProjectInformation.revenus !== undefined) setLoaderRevenus(false)
        else setLoaderRevenus(true)
    }, [state.userProjectInformation.revenus])
    
    useEffect(()=>{
        if(!loader){
            updatePrestation()
        }else setPrestation([])
    }, [loader])

    useEffect(()=>{
        prestation !== [] ? setLoaderPrestation(false):setLoaderPrestation(true)
    }, [prestation])
    
    const updatePrestation = async ()=>{
        if(state.userProjectInformation.isolation) await setPrestation(prestation => [...prestation, "isolation"])
        if(state.userProjectInformation.fenetre) await setPrestation(prestation => [...prestation, "Menuiserie"])
        if(state.userProjectInformation.vmc) await setPrestation(prestation => [...prestation, "Vmc"])
        if(state.userProjectInformation.pompeAChaleurClim) await setPrestation(prestation => [...prestation, "Pompe a chaleur / Climatisation"])
        if(state.userProjectInformation.chauffage) await setPrestation(prestation => [...prestation, "Chauffage"])
        if(state.userProjectInformation.solaireChauffeEau) await setPrestation(prestation => [...prestation, "Systhème solaire / Chauffe Eau"])
    }

    const updateRevenus = ()=>{
        if(state.userProjectInformation.revenusMax ){
            return (
                <span className={styles.article_span}>Entre {state.userProjectInformation.revenusMin}€ et {state.userProjectInformation.revenusMax}€</span>
            )
        }else if(state.userProjectInformation.revenusMin !== undefined){
            return (
                <span className={styles.article_span}>Plus de {state.userProjectInformation.revenusMin}€ </span>
            )
        }
    }

    return (
        <LayoutClassicPage title="MaPrimeRenov-info | Aides MaPrimeRenov" meta="Mon espece personnel." monEspace={true}>
            <main className={styles.main}>
                <section className={styles.section}>
                    <article className={styles.article}>
                        {
                        !loader?
                        <h1 className={styles.article_title}>
                            {"Bienvenue dans votre espace personnel "+userName+"."}
                        </h1>:
                        <Skeleton varaint="rectangular" width={350} height={250} />
                        }
                        <div className={styles.article_informationUserProject}>
                            <h3 className={styles.article_h3}>
                                Code Postal: <br/>
                                {
                                    !loader? 
                                    <span className={styles.article_span}>{state.userProjectInformation.zipCode}</span> : 
                                    <Skeleton varaint="rectangular" width={100} height={30} />
                                }
                            </h3>
                            <h3 className={styles.article_h3}>
                                Surface habitable: <br/>
                                {
                                    !loader? 
                                    <span className={styles.article_span}>{state.userProjectInformation.size}m²</span> : 
                                    <Skeleton varaint="rectangular" width={100} height={30} />
                                }
                            </h3>
                            <div className={styles.article_projectContainer}>
                                <h3 className={styles.article_h3}>
                                    Type de préstation souhaité:
                                </h3>
                                <ul className={styles.article_ul}>
                                    {
                                        !loader?
                                        prestation.map(presta=>
                                            <li key={presta} className={styles.article_li}>{presta}</li>
                                        ):<Skeleton varaint="rectangular" width={100} height={150} />
                                    }
                                </ul>
                            </div>
                            <h3 className={styles.article_h3}>
                                Revenus fiscal de référence: <br/>
                                {
                                    !loader? 
                                    updateRevenus()
                                    : 
                                    <Skeleton varaint="rectangular" width={100} height={30} />
                                }
                            </h3>
                            <h3 className={styles.article_h3}>
                                Nombre de personne dans votre foyer fiscal: <br/>
                                {
                                    !loader? 
                                    <span className={styles.span}>{state.userProjectInformation.nbrFamily}</span> : 
                                    <Skeleton varaint="rectangular" width={100} height={30} />
                                }
                            </h3>
                        </div>
                    </article>
                    <div className={styles.projectContainer}>
                        <h3 className={styles.projectContainer_h3}>
                        Nous vous confirmons votre rendez-vous téléphonique avec notre conseiller au {
                            !loader ? 
                            <span className={styles.projectContainer_span}>{state.userProjectInformation.phone}</span>:
                            <Skeleton varaint="rectangular" width={100} height={30} />
                        }
                        </h3>
                        {
                            !loader && !loaderPrestation ? <Simulateur prestations={prestation} revenusColor={state.userProjectInformation.revenusColor} />:
                            <Skeleton varaint="rectangular" width={300} height={500} />
                        }
                        
                    </div>
                </section>
            </main>
        </LayoutClassicPage>
    );
};

export default Index;