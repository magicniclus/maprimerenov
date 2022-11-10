import React, { useEffect, useState } from 'react';
import styles from "./styles/monEspace.module.css"
import LayoutClassicPage from '../../components/classicPage/LayoutClassicPage';
import { getUser, updateUser } from '../../api/Auth';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';

const index = () => {

    const [userName, setUserName] = useState("")
    const [userMail, setUserMail] = useState("")
    const [userId, setUserId] = useState("")

    const state = useSelector(state=>state)

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
            console.log(currentUser);
            setUserName(currentUser.displayName)
            setUserMail(currentUser.email)
            setUserId(currentUser.uid)
        }).catch(err=>err)
    }, [])

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