import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from "./styles/Nav.module.css";
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { authenticateUser, signOut } from '../../api/Auth';
import { currentUser, switchConnect } from '../../redux/action';

const Nav = () => {
    const state = useSelector(state => state)

    const dispatch = useDispatch(useDispatch())

    const [connected, setConnected] = useState(false)

    useEffect(()=>{
        if(state.areConnect){
            setConnected(true)
            authenticateUser().then(user=>{
                // console.log(user);
            }).catch(err=>console.log(err))
        }
        else{
            setConnected(false)
        }
    }, [state.areConnect])

    const handleClick = ()=>{
        signOut()
        setConnected(false)
        dispatch(switchConnect(false))
        dispatch(currentUser(false))
    }

    return (
        <div className={styles.nav} id="nav">
            <div className={styles.content}>
                <div style={{ cursor: "pointer" }} className={styles.leftContainer}>
                    <Link href={"/"}><h3 className={styles.title}>MaPrimeRenov-info.org</h3></Link>
                </div>
                <div className={styles.rightContainer}>
                    {
                        connected ? 
                        <Button variant="text" className={styles.deconnection} onClick={handleClick}>Se Deconnecter</Button>:
                        <Link href="/entreprise"><Button variant="text" className={styles.pro}>Vous êtes un professionel ?</Button></Link>
                    }
                    <Link href={"/connection"}><Button variant="outlined" className={styles.espace}>Mon espace</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;