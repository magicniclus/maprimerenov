import React, { useEffect, useState } from 'react';
import styles from "./styles/monEspace.module.css"
import LayoutClassicPage from '../../components/classicPage/LayoutClassicPage';
import { getUser } from '../../api/Auth';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import { showUserInformation } from '../../api/Doc';
import { showUserProjectInformation } from '../../redux/action';
import { Skeleton } from '@mui/material';

const index = () => {

    const dispatch = useDispatch()
    const state = useSelector(state=>state)

    const [userName, setUserName] = useState("")
    const [userMail, setUserMail] = useState("")
    const [userId, setUserId] = useState("")


    const [loader, setLoader] = useState(true)

    const [prestation, setPrestation] = useState([])

    useEffect(()=>{
        if(!state.areConnect){
            Router.push("/connection")
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
        }).catch(err=>console.log("Aucun utilisateur n'est connecté"))
    }, [userId])

    useEffect(()=>{
        if(state.userProjectInformation.zipCode) setLoader(false)
        else setLoader(true)
    }, [state.userProjectInformation.zipCode])

    useEffect(()=>{
        if(!loader){
            updatePrestation()
        }else setPrestation([])
    }, [loader])

    const updatePrestation = async ()=>{
        if(state.userProjectInformation.isolation) await setPrestation(prestation => [...prestation, "isolation"])
        if(state.userProjectInformation.fenetre) await setPrestation(prestation => [...prestation, "Menuiserie"])
        if(state.userProjectInformation.vmc) await setPrestation(prestation => [...prestation, "Vmc"])
        if(state.userProjectInformation.pompeAChaleurClim) await setPrestation(prestation => [...prestation, "Pompe a chaleur / Climatisation"])
        if(state.userProjectInformation.chauffage) await setPrestation(prestation => [...prestation, "Chauffage"])
        if(state.userProjectInformation.solaireChauffeEau) await setPrestation(prestation => [...prestation, "Systhème solaire / Chauffe Eau"])

    }

    return (
        <LayoutClassicPage title="MaPrimeRenov-info | Aides MaPrimeRenov" meta="Mon espece personnel.">
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
                                    <span>{state.userProjectInformation.zipCode}</span> : 
                                    <Skeleton varaint="rectangular" width={100} height={30} />
                                }
                            </h3>
                            <h3 className={styles.article_h3}>
                                Surface habitable: <br/>
                                {
                                    !loader? 
                                    <span>{state.userProjectInformation.size}m2</span> : 
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
                                            <li className={styles.article_li}>{presta}</li>
                                        ):<Skeleton varaint="rectangular" width={100} height={150} />
                                    }
                                </ul>
                            </div>
                            <h3 className={styles.article_h3}>
                                Revenus fiscal de référence: <br/>
                                {
                                    !loader? 
                                    <span>{state.userProjectInformation.revenus}</span> : 
                                    <Skeleton varaint="rectangular" width={100} height={30} />
                                }
                            </h3>
                        </div>
                    </article>
                    <div className={styles.projectContainer}>
                        <h2 className={styles.projectContainer_h2}>
                        Nous vous confirmons votre rendez-vous téléphonique avec notre conseiller au <span className={styles.projectContainer_span}>064563234</span>.
                        </h2>
                    </div>
                </section>
            </main>
        </LayoutClassicPage>
    );
};

export default index;