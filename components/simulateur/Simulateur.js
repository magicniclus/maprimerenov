import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cards from './components/Cards';
import styles from "./styles/simulateur.module.css";

const Simulateur = (props) => {
    const prestations = props.prestations
    const revenusColor = props.revenusColor
    const [loader, setLoader]=useState(true)
    const [awaitMessage, setAwaitMessage]=useState("Veuillez patienter...")


    useEffect(()=>{
        if(prestations !== []) setLoader(false)
    }, [prestations, revenusColor])

    return (
        <div className={styles.simulateur}>
            <h3 className={styles.simulateur_h3}>Calcul de vos aides:</h3>
            <span className={styles.span}>Cette estimation est basée sur les données que vous nous avez fournies, elle peut varier en fonction du choix des prestations.</span>
            <div className={styles.simulateur_cardContainer}>
                {
                    loader ? 
                    <h4 className={styles.simulateur_h4}>{awaitMessage}</h4>:
                    prestations.map(presta=>
                        <Cards prestation={presta}/>
                    )
                }
            </div>
        </div>
    );
};

export default Simulateur;