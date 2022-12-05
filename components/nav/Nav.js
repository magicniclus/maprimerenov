import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from "./styles/Nav.module.css";
import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { authenticateUser, signOut } from '../../api/Auth';
import { currentUser, showUserProjectInformation, switchConnect } from '../../redux/action';
import ConnectedButton from './components/connectedButton/ConnectedButton';

const Nav = (props) => {
    const state = useSelector(state => state)
    const dispatch = useDispatch(useDispatch())
    const [connected, setConnected] = useState(false)
    const [userInMonEspace, setUserInMonEspace] = useState(false)
    const [location, setLocation] = useState(null)
    const [loading, setLoading] = useState(true)
    const [openMenu, setOpenMenu]=useState(false)
    
    useEffect(()=>{
        if (typeof window !== "undefined") {
            setLocation(window.location.pathname)
        }
    }, [])

    useEffect(()=>{
        switch (location) {
            case "/mon-espace":
                if(connected){
                    console.log("mon-espace")
                    setUserInMonEspace(true)
                }
                break;
            default:
                setUserInMonEspace(false)
                break;
        }
    },[location])

    useEffect(()=>{
        if(state.areConnect){
            setConnected(true)
            authenticateUser().then(user=>{
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
        dispatch(showUserProjectInformation({}))
    }

    const updateNavWithPages = ()=>{
        if(connected && userInMonEspace){
            return(
                    <ConnectedButton click={setOpenMenu} />
                )
        }else if (connected && !userInMonEspace){
            return(
                <>
                    <Link href={"/connection"}><Button sx={{ fontWeight: 'bold' }} variant="outlined" className={styles.espace}>Mon espace</Button></Link>
                </>
            )
        }else {
            return (
                <>
                    <Link href="/entreprise"><Button sx={{ fontWeight: 'bold', maxWidth: "250px" }} variant="text" className={styles.pro}>Vous êtes un professionel ?</Button></Link>
                    <Link href={"/connection"}><Button sx={{ fontWeight: 'bold' }} variant="outlined" className={styles.espace}>Mon espace</Button></Link>
                </>
        )   
        }
    }

    return (
        <div className={styles.nav} id="nav">
            <div className={styles.content}>
                <div style={{ cursor: "pointer" }} className={styles.leftContainer}>
                    <Link href={"/"}><h3 className={styles.title}>MaPrimeRenov-info.org</h3></Link>
                </div>
                <div className={connected ? `${styles.rightContainer} ${styles.uncenter}` : styles.rightContainer}>
                    {
                        updateNavWithPages()
                    }
                </div>
            </div>
        </div>
    );
};

export default Nav;