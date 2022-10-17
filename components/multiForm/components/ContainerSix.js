import React, { useEffect, useState } from 'react';
import styles from "../styles/multiForm.module.css";
import SmallCard from './SmallCard';

const ContainerSix = (props) => {
    const valid = props.valid
    const value = props.value

    const [lastClick, setLastClick] = useState("")

    useEffect(() => {
        lastClick !== "" ? valid(true) : valid(false)
        if (lastClick !== "") {
            valid(true)
        }
        value(lastClick)
    }, [lastClick])

    const handleClick = (name) => {
        setLastClick(lastClick !== name ? name : "")
    }

    const handleValid = (name) => {
        if (name === lastClick) return true
        return false
    }
    return (
        <div className={`${styles.containerSice} ${styles.container}`}>
            <label className={styles.label}>
                Vous en êtes ou dans votre projet ? *
                <span className={styles.span}></span>
            </label>
            <div className={`${styles.cardContainerSice} ${styles.cardContainer}`}>
                <SmallCard setLastClick={(e) => handleClick("je réfléchis")} valid={handleValid("je réfléchis")} title="Je refléchis" image="question.png" />
                <SmallCard setLastClick={(e) => handleClick("je recherche un artisan RGE")} valid={handleValid("je recherche un artisan RGE")} title="Je recherche un artisan RGE" image="artisan.png" />
                <SmallCard setLastClick={(e) => handleClick("Je vais signer un devis")} valid={handleValid("Je vais signer un devis")} title="Je vais signer mon devis" image="devis.png" />
                <SmallCard setLastClick={(e) => handleClick("J'ai deja signé un devis")} valid={handleValid("J'ai deja signé un devis")} title="J’ai deja signer un devis" image="signature.png" />
            </div>
        </div>
    );
};

export default ContainerSix;