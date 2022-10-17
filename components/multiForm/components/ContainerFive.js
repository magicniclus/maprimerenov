import { validateConfig } from 'next/dist/server/config-shared';
import React, { useEffect, useState } from 'react';
import styles from "../styles/multiForm.module.css";
import SmallCard from './SmallCard';

const ContainerFive = (props) => {
    const valid = props.valid
    const value = props.value
    const reset = props.reset
    const setIsolation = props.setIsolation
    const setFenetre = props.setFenetre
    const setVmc = props.setVmc
    const setPompeAChaleurClim = props.setPompeAChaleurClim
    const setChauffage = props.setChauffage
    const setSolaireChauffeEau = props.setSolaireChauffeEau

    useEffect(() => {
        reset()
    }, [])

    useEffect(() => {
        if (value.isolation || value.fenetre || value.vmc || value.pompeAChaleurClim || value.chauffage || value.solaireChauffeEau) valid(true)
        else valid(false)
    }, [value.isolation, value.fenetre, value.vmc, value.pompeAChaleurClim, value.chauffage, value.solaireChauffeEau])

    const handleClick = (name) => {
        switch (name) {
            case "isolation":
                setIsolation(!value.isolation)
                break;
            case "fenetre":
                setFenetre(!value.fenetre)
                break;
            case "vmc":
                setVmc(!value.vmc)
                break;
            case "pompeAChaleurClim":
                setPompeAChaleurClim(!value.pompeAChaleurClim)
                break;
            case "chauffage":
                setChauffage(!value.chauffage)
                break;
            case "solaireChauffeEau":
                setSolaireChauffeEau(!value.solaireChauffeEau)
                break;

            default:
                setIsolation(false)
                setFenetre(false)
                setVmc(false)
                setPompeAChaleurClim(false)
                setChauffage(false)
                setSolaireChauffeEau(false)
                break;
        }
    }

    return (
        <div className={`${styles.containerFive} ${styles.container}`}>
            <label className={styles.label}>
                Quel type de travaux vous souhaitez réaliser :*
                <span className={styles.span}>Plusieurs choix possible</span>
            </label>
            <div className={`${styles.cardContainerFive} ${styles.cardContainer}`}>
                <SmallCard setLastClick={() => handleClick("isolation")} valid={value.isolation} title="Isolation" image="isolation.png" />
                <SmallCard setLastClick={() => handleClick("fenetre")} valid={value.fenetre} title="Fenetre/Porte-fenetre" image="menuiserie.png" />
                <SmallCard setLastClick={() => handleClick("vmc")} valid={value.vmc} title="VMC double flux" image="vmc.png" />
                <SmallCard setLastClick={() => handleClick("pompeAChaleurClim")} valid={value.pompeAChaleurClim} title="Pompe à chaleur/climatisation" image="pompe.png" />
                <SmallCard setLastClick={() => handleClick("chauffage")} valid={value.chauffage} title="Chauffage" image="chauffage.png" />
                <SmallCard setLastClick={() => handleClick("solaireChauffeEau")} valid={value.solaireChauffeEau} title="Solaire/chauffe eau" image="solaire.png" />
            </div>
        </div>
    );
};

export default ContainerFive;