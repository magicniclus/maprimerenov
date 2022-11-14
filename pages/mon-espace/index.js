import React, { useEffect, useState } from 'react';
import styles from "./styles/monEspace.module.css"
import LayoutClassicPage from '../../components/classicPage/LayoutClassicPage';
import { getUser } from '../../api/Auth';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import { showUserInformation } from '../../api/Doc';
import { showUserProjectInformation } from '../../redux/action';

const index = () => {

    const dispatch = useDispatch()
    const state = useSelector(state=>state)

    const [userName, setUserName] = useState("")
    const [userMail, setUserMail] = useState("")
    const [userId, setUserId] = useState("")


    const [loader, setLoader] = useState(true)

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

    return (
        <LayoutClassicPage title="MaPrimeRenov-info | Simulateur MaPrimeRenov" meta="Simulateur gratuit pour connaitre votre éligibilité aux aides de l'état MaPrimeRenov 2022.">
            <main className={styles.main}>
                {
                    loader ?
                    <div className={styles.loader}>
                        <CircularProgress />
                    </div> : null
                }
                <h1 className={styles.title} style={{color: "black"}}>
                    Hello {
                        userName !== "" ? 
                        userName : null
                    }
                </h1>
            </main>
        </LayoutClassicPage>
    );
};

export default index;