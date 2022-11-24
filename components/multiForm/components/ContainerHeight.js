import React, { useEffect, useState } from 'react';
import styles from "../styles/multiForm.module.css";
import SmallCard from './SmallCard';

const ContainerHeight = (props) => {
    const valid = props.valid
    const valueMin = props.valueMin
    const valueMax = props.valueMax

    const [updateValueMin, setUpdateValueMin] = useState("")
    const [updateValueMax, setUpdateValueMax] = useState("")

    useEffect(() => {
        updateValueMin !== "" ? valid(true) : valid(false)
        if (updateValueMin !== "") {
            valid(true)
        }
        valueMin(updateValueMin)
        valueMax(updateValueMax)
    }, [updateValueMin])

    const handleClick = async (name) => {
        if(name === "Inférieur à 31 003€"){
            await setUpdateValueMin(0)
            await setUpdateValueMax(31003)
        } 
        if(name === "Entre 31 003€ et 37 739€"){
            await setUpdateValueMin(31003)
            await setUpdateValueMax(37739)
        } 
        if(name === "Entre 37 739€ et 56 130€"){
            await setUpdateValueMin(37739)
            await setUpdateValueMax(56130)
        } 
        if(name === "Supérieur à 56 130€"){
            await setUpdateValueMin(56130)  
            await setUpdateValueMax("")
        } 

        if(name === "Inférieur à 31 003€" && updateValueMin === 0){
            await setUpdateValueMin("")
            await setUpdateValueMax("")
        }
        if(name === "Entre 31 003€ et 37 739€" && updateValueMin === 31003){
            await setUpdateValueMin("")
            await setUpdateValueMax("")
        }
        if(name === "Entre 37 739€ et 56 130€" && updateValueMin === 37739){
            await setUpdateValueMin("")
            await setUpdateValueMax("")
        }
        if(name === "Supérieur à 56 130€" && updateValueMin === 56130){
            await setUpdateValueMin("")
            await setUpdateValueMax("")
        }
    }

    const handleValid = (name) => {
        if(updateValueMin === "") return false
        if (name.min === updateValueMin) return true
        return false
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