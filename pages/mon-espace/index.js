import React, { useEffect, useState } from 'react';
import styles from "./styles/monEspace.module.css"
import LayoutClassicPage from '../../components/classicPage/LayoutClassicPage';
import { getUser, updateUser } from '../../api/Auth';
import { currentUser } from '../../redux/action';
import { useSelector } from 'react-redux';
import Router from 'next/router';

const index = () => {

    const [userName, setUserName] = useState("")

    const state = useSelector(state=>state)

    useEffect(()=>{
        if(!state.areConnect)
        Router.push("/connection")
    }, [state.areConnect])

    useEffect(()=>{
        getUser().then(currentUsers=>{
            console.log(currentUsers);
        }).catch(err=>err)
    }, [])

    const handleUser = ()=>{
        updateUser("Nicolas").then(user=>console.log(user))
        .catch(err=>alert(err.message))
    }

    return (
        <LayoutClassicPage title="MaPrimeRenov-info | Simulateur MaPrimeRenov" meta="Simulateur gratuit pour connaitre votre éligibilité aux aides de l'état MaPrimeRenov 2022.">
            <main className={styles.main}>
                <h1 className={styles.title} style={{color: "black"}}>
                    Hello
                </h1>
                <button onClick={handleUser}>Click Here</button>
            </main>
        </LayoutClassicPage>
    );
};

export default index;