import React, { useEffect, useState } from 'react';
import styles from "./styles/cards.module.css";
import { Skeleton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { maPrimeRenovWorksData } from '../../../utils/maPrimeRenovAlgorithme/maPRimeRenovWorksData';
import { updateCounter } from '../../../redux/action';

const Cards = (props) => {

    const dispatch= useDispatch()
    
    const [loader, setLoader]=useState(true)
    const [awaitMessage, setAwaitMessage]=useState("Veuillez patienter...")
    const prestation = props.prestation
    
    const state = useSelector(state=>state)
    const revenusColor = state.userProjectInformation.revenusColor;
    const size = state.userProjectInformation.size
    const areConnect = state.areConnect
    const [getPrestation, setGetPrestation]=useState({})

    const updateCardFromPrestation = ()=>{
        switch (prestation) {
            case "isolation":
                setGetPrestation({...getPrestation, moyenne: maPrimeRenovWorksData["isolation"][`${revenusColor}`]["moyenne"] * size, max: maPrimeRenovWorksData["isolation"][`${revenusColor}`]["max"] * size})
                break;
            
            case "Systhème solaire / Chauffe Eau":
                setGetPrestation({...getPrestation, moyenne: maPrimeRenovWorksData["solaireChauffeEau"][`${revenusColor}`]["moyenne"], max: maPrimeRenovWorksData["solaireChauffeEau"][`${revenusColor}`]["max"]})
                break;

            case "Menuiserie":
                setGetPrestation({...getPrestation, moyenne: maPrimeRenovWorksData["fenetre"][`${revenusColor}`]["moyenne"], max: maPrimeRenovWorksData["fenetre"][`${revenusColor}`]["max"]})
                break;

            case "Vmc":
                setGetPrestation({...getPrestation, moyenne: maPrimeRenovWorksData["vmc"][`${revenusColor}`]["moyenne"], max: maPrimeRenovWorksData["vmc"][`${revenusColor}`]["max"]})
                break;            
            
            case "Pompe a chaleur / Climatisation":
                setGetPrestation({...getPrestation, moyenne: maPrimeRenovWorksData["pompeAChaleurClim"][`${revenusColor}`]["moyenne"], max: maPrimeRenovWorksData["pompeAChaleurClim"][`${revenusColor}`]["max"]})
                break;            
                
            case "Chauffage":
                setGetPrestation({...getPrestation, moyenne: maPrimeRenovWorksData["chauffage"][`${revenusColor}`]["moyenne"], max: maPrimeRenovWorksData["chauffage"][`${revenusColor}`]["max"]})
                break;
        
            default:
                break;
        }
    }

    useEffect(()=>{
        if(revenusColor !== null, prestation !== "", areConnect){
            updateCardFromPrestation()
            setLoader(false)
        }else null
    }, [revenusColor, prestation, areConnect])

    useEffect(()=>{
    }, [])

    const card = ()=>{
        return (
            <div className={styles.card}>
                <h3 className={styles.card_h3}>{prestation.charAt(0).toUpperCase() + prestation.slice(1)}</h3>
                <p className={styles.card_p}>Prime moyenne obtenue: <span className={styles.card_p_span}>{getPrestation.moyenne}€</span></p>
                <p className={styles.card_p}>Prime maximal possible: <span className={styles.card_p_span}>{getPrestation.max}€</span></p>
                {
                    getPrestation.moyenne !== 0 ? 
                    <div className={styles.card_logo}>
                        <p className={styles.card_p}>Aides Possibles: </p><span className={styles.card_logo_span}></span>
                    </div>
                    :
                    null
                }
            </div>
        )
    }

    return (
        <>
            {
                loader ? 
                <Skeleton varaint="rectangular" width={700} height={400} />:
                card()
            }
        </>
    );
};

export default Cards;