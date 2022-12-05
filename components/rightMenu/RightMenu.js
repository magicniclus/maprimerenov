import React, {useEffect, useState} from 'react';
import styles from "./styles/rightMenu.module.css"
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../redux/action';
import { signOut } from '../../api/Auth';
import { currentUser, showUserProjectInformation, switchConnect } from '../../redux/action';

const RightMenu = () => {

    const dispatch = useDispatch()
    const state = useSelector(state=>state)
    const [loader, setLoader]= useState(true)

    const updateToggleMenu = (e)=>{
        dispatch(toggleMenu(false))
    }

    useEffect(()=>{
        if(state.userProjectInformation.name !== undefined){
            setLoader(false)
        }
    }, [state.userProjectInformation.name])

       const handleClick = ()=>{
        signOut()
        dispatch(switchConnect(false))
        dispatch(currentUser(false))
        dispatch(showUserProjectInformation({}))
        dispatch(toggleMenu(false))
    }

    const updateIfLoading = ()=>{
        return(
            <>
                <h3 className={styles.h3}>Bienvenue<br/> {state.userProjectInformation.name}</h3>
            </>
        )
    }

    return (
        <div className={styles.rightMenu}>
            <div className={styles.content} onMouseLeave={(e)=>dispatch(toggleMenu(false))}>
                <div className={styles.imgaeContainer}>
                    <Image src="/closeButton.png" style={{cursor: "pointer"}} onClick={updateToggleMenu} priority width={20} height={20} objectFit="content" />
                </div>
                <div className={styles.info}>
                    {
                        loader ? 
                        null : 
                        updateIfLoading()
                    }
                    <p className={styles.p}>
                        Avec Ma-PrimeRenov-info, vous êtes 
                        certain d’avoir des artisans qualifiés
                        pour la réalisation de votre projet !
                    </p>
                </div>
                <div className={styles.linkContainer}>
                    <Link href={"/"}><Button onClick={updateToggleMenu} sx={{ fontWeight: 'bold' }} variant="text" className={styles.espace}>Accueil</Button></Link>
                    <Link href={"/mon-espace"}><Button  onClick={updateToggleMenu} sx={{ fontWeight: 'bold' }} variant="text" className={styles.espace}>Mon Projet</Button></Link>
                    <Link href={"/contact"}><Button onClick={updateToggleMenu} sx={{ fontWeight: 'bold' }} variant="contained" color="success" className={styles.espace}>Une Question ?</Button></Link>
                </div>
                <div className={styles.news}>
                    <h4 className={styles.h4}>
                        A venir sur MaPrimeRenov-info.org
                    </h4>
                    <p className={styles.p}>
                        -Notre application: <br/>
                        Elle vous permettra de suivre l’évolution de votre dossier 
                        ainsi que de vos travaux
                    </p>
                    <p className={styles.p}>
                        -Une hotline 100% francaise: <br/>
                        Nous pourrons répondre à n’importe quelle question 
                        dans la minute grace à nos expert joingnable 6j/7j, de
                        9h à 20h.
                    </p>
                </div>
                <div className={styles.bottom} style={{cursor: "pointer"}}>
                    <p onClick={handleClick} className={styles.p}>Se deconnecter</p>
                    <Image onClick={handleClick} src="/deconnection.png" priority width={20} height={15} objectFit="content"/>
                </div>
            </div>
        </div>
    );
};

export default RightMenu;