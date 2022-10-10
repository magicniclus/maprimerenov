import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from "./styles/Nav.module.css";
import { connect, useDispatch, useSelector } from 'react-redux';
import { getAuth, signOut } from "firebase/auth";
import Router from 'next/router';
import { switchConnect } from '../../redux/action';
import { initializeApp } from "firebase/app";
import { dataBase } from '../../utils/firebase.config';

const Nav = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const [connected, setConnected] = useState(false)

    const auth = getAuth();

    useEffect(()=>{
        if(auth.currentUser !== null) setConnected(true)
        else setConnected(false)
    }, [auth.currentUser])

    const handleConnect = (e)=>{
        e.preventDefault()
        signOut(auth)
        .then(() => {
            dispatch(switchConnect(false))
            Router.push('/')
        }).catch((error) => {
          console.error(error)
        });
    }

    return (
        <div className={styles.nav} id="nav">
            <div className={styles.content}>
                <div style={{cursor:"pointer"}} className={styles.leftContainer}>
                    <Link href={"/simulateur"}><h3 className={styles.title}>MaPrimeRenov-info.org</h3></Link>
                </div>
                <div className={styles.rightContainer}>
                    <Link href="/entreprise"><a className={styles.pro}>Vous êtes un professionel ?</a></Link>
                    <Link href={!connected ? "/connection" : "/admin"}><a className={styles.espace}>Mon espace</a></Link>
                    {
                       connected ? <button onClick={e => handleConnect(e)}>Se deconnecter</button> : null
                    }
                </div>
            </div>
        </div>
    );
};

export default Nav;