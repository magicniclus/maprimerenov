import React, { useEffect, useState } from 'react';
import styles from "../styles/multiForm.module.css";
import SmallCard from './SmallCard';

const ContainerHeight = (props) => {
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
        <div className={`${styles.containerHeight} ${styles.container}`}>
            <label className={styles.label}>
                Les revenus totals de votre foyer fiscal *
                <span className={styles.span}>Cela nous permet d'être plus precis pour le calcul de vos aides</span>
            </label>
            <div className={`${styles.cardContainerSice} ${styles.cardContainer}`}>
                <SmallCard setLastClick={(e) => handleClick("Inférieur à 31 003€")} valid={handleValid("Inférieur à 31 003€")} title="Inférieur à 31 003€" />
                <SmallCard setLastClick={(e) => handleClick("Entre 31 003€ et 37 739€")} valid={handleValid("Entre 31 003€ et 37 739€")} title="Entre 31 003€ et 37 739€" />
                <SmallCard setLastClick={(e) => handleClick("Entre 37 739€ et 56 130€")} valid={handleValid("Entre 37 739€ et 56 130€")} title="Entre 37 739€ et 56 130€" />
                <SmallCard setLastClick={(e) => handleClick("Supérieur à 56 130€")} valid={handleValid("Supérieur à 56 130€")} title="Supérieur à 56 130€" />
            </div>
        </div>
    );
};

export default ContainerHeight;