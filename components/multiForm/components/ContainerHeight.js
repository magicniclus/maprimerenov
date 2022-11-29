import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {maPrimeRenovData} from "../../../utils/maPrimeRenovAlgorithme/maPrimeRenovData"
import styles from "../styles/multiForm.module.css";
import SmallCard from './SmallCard';

const ContainerHeight = (props) => {

    const state = useSelector(state=>state)

    const valid = props.valid
    const value = props.value

    const [updateValue, setUpdateValue] = useState("")

    useEffect(() => {
        updateValue !== "" ? valid(true) : valid(false)
        if (updateValue !== "") {
            valid(true)
        }
        value(updateValue)
    }, [updateValue])

    const handleClick = async (name) => {
        if(name === "blue"){
            await setUpdateValue("blue")
        } 
        if(name === "yellow"){
            await setUpdateValue("yellow")
        } 
        if(name === "purple"){
            await setUpdateValue("purple")
        } 
        if(name === "pink"){
            await setUpdateValue("pink")  
        } 
        
        if(name === updateValue){
            await setUpdateValue("")
        }
    }

    
    const handleValid = (name) => {
        if(updateValue === undefined && updateValue === "") return false
        if (name === updateValue) return true
        return false
    }

    useEffect(()=>{
        console.log(maPrimeRenovData.province["one"]["bleu"]);
    }, [])

    return (
        <div className={`${styles.containerHeight} ${styles.container}`}>
            <label className={styles.label}>
                Les revenus totals de votre foyer fiscal *
                <span className={styles.span}>Cela nous permet d'être plus precis pour le calcul de vos aides</span>
            </label>
            <div className={`${styles.cardContainerSice} ${styles.cardContainer}`}>
                <SmallCard setLastClick={(e) => handleClick("blue")} valid={handleValid("blue")} title={"Inférieur à "} />
                <SmallCard setLastClick={(e) => handleClick("yellow")} valid={handleValid("yellow")} title="Entre 31 003€ et 37 739€" />
                <SmallCard setLastClick={(e) => handleClick("purple")} valid={handleValid("purple")} title="Entre 37 739€ et 56 130€" />
                <SmallCard setLastClick={(e) => handleClick("pink")} valid={handleValid("pink")} title="Supérieur à 56 130€" />
            </div>
        </div>
    );
};

export default ContainerHeight;