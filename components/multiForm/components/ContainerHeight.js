import React, { useEffect, useState } from 'react';
import styles from "../styles/multiForm.module.css";
import SmallCard from './SmallCard';

const ContainerHeight = (props) => {
    const valid = props.valid
    const value = props.value

    const [lastClick, setLastClick] = useState("")
    const [updateValue, setUpdateValue] = useState("")

    useEffect(() => {
        updateValue !== "" ? valid(true) : valid(false)
        if (updateValue !== "") {
            valid(true)
        }
        value(updateValue)
    }, [updateValue])

    const handleClick = async (name) => {
        if(name === "Inférieur à 31 003€") setUpdateValue({min: 0, max: 31003})
        if(name === "Entre 31 003€ et 37 739€") setUpdateValue({min: 31003, max: 37739})
        if(name === "Entre 37 739€ et 56 130€") setUpdateValue({min: 37739, max: 56130})
        if(name === "Supérieur à 56 130€") setUpdateValue({min: 56130})

        if(name === "Inférieur à 31 003€" && updateValue.min == 0)setUpdateValue("")
        if(name === "Entre 31 003€ et 37 739€" && updateValue.min === 31003)setUpdateValue("")
        if(name === "Entre 37 739€ et 56 130€" && updateValue.min === 37739)setUpdateValue("")
        if(name === "Supérieur à 56 130€" && updateValue.min === 56130)setUpdateValue("")
    }

    const handleValid = (name) => {
        if(updateValue === "") return false
        if (name.min === updateValue.min) return true
        else return false
    }

    return (
        <div className={`${styles.containerHeight} ${styles.container}`}>
            <label className={styles.label}>
                Les revenus totals de votre foyer fiscal *
                <span className={styles.span}>Cela nous permet d'être plus precis pour le calcul de vos aides</span>
            </label>
            <div className={`${styles.cardContainerSice} ${styles.cardContainer}`}>
                <SmallCard setLastClick={(e) => handleClick("Inférieur à 31 003€")} valid={handleValid({min: 0, max: 31003})} title="Inférieur à 31 003€" />
                <SmallCard setLastClick={(e) => handleClick("Entre 31 003€ et 37 739€")} valid={handleValid({min: 31003, max: 37739})} title="Entre 31 003€ et 37 739€" />
                <SmallCard setLastClick={(e) => handleClick("Entre 37 739€ et 56 130€")} valid={handleValid({min: 37739, max: 56130})} title="Entre 37 739€ et 56 130€" />
                <SmallCard setLastClick={(e) => handleClick("Supérieur à 56 130€")} valid={handleValid({min: 56130})} title="Supérieur à 56 130€" />
            </div>
        </div>
    );
};

export default ContainerHeight;