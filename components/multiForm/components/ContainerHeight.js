import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { maPrimeRenovData } from '../../../utils/maPrimeRenovAlgorithme/maPrimeRenovData';
import styles from "../styles/multiForm.module.css";
import SmallCard from './SmallCard';
import { Skeleton } from '@mui/material';
import { updateNumber } from '../../../utils/maPrimeRenovAlgorithme/maPrimeRenovAlgorithme';

const ContainerHeight = (props) => {

    const state = useSelector(state=>state)

    const valid = props.valid
    const value = props.value

    const [vignetteLoader, setVignetteLoader]=useState(true)

    const [updateValue, setUpdateValue] = useState(null)

    useEffect(() => {
        updateValue !== "" ? valid(true) : valid(false)
        if (updateValue !== "") {
            valid(true)
        }
        value(updateValue)
    }, [updateValue])

    const handleClick = async (name) => {
        if(name === "blue"){
            await setUpdateValue(["blue", maPrimeRenovData[state.getZipCode][updateNumber(state.numberOfFamily)]["bleu"]["min"], maPrimeRenovData[state.getZipCode][updateNumber(state.numberOfFamily)]["bleu"]["max"]])
        } 
        if(name === "yellow"){
            await setUpdateValue(["yellow", maPrimeRenovData[state.getZipCode][updateNumber(state.numberOfFamily)]["jaune"]["min"], maPrimeRenovData[state.getZipCode][updateNumber(state.numberOfFamily)]["jaune"]["max"]])
        } 
        if(name === "purple"){
            await setUpdateValue(["purple", maPrimeRenovData[state.getZipCode][updateNumber(state.numberOfFamily)]["violet"]["min"], maPrimeRenovData[state.getZipCode][updateNumber(state.numberOfFamily)]["violet"]["max"]])
        } 
        if(name === "pink"){
            await setUpdateValue(["pink",maPrimeRenovData[state.getZipCode][updateNumber(state.numberOfFamily)]["rose"]["min"],maPrimeRenovData[state.getZipCode][updateNumber(state.numberOfFamily)]["rose"]["max"]])  
        } 
        if(name === updateValue){
            await setUpdateValue(null)
        }
    }

    
    const handleValid = (name) => {
        if(updateValue === null) return null
        if(updateValue[0] === undefined && updateValue[0] === "") return false
        if (name === updateValue[0]) return true
        return false
    }

    useEffect(()=>{
        if(state.getZipCode !== null && state.numberOfFamily !== null ){
            setVignetteLoader(false)
        }else{
            setVignetteLoader(true)
        }
    }, [state])

    return (
        <div className={`${styles.containerHeight} ${styles.container}`}>
            <label className={styles.label}>
                Les revenus totals de votre foyer fiscal *
                <span className={styles.span}>Cela nous permet d'être plus precis pour le calcul de vos aides</span>
            </label>
            <div className={`${styles.cardContainerSice} ${styles.cardContainer}`}>
                {
                    !vignetteLoader ? 
                    <SmallCard setLastClick={(e) => handleClick("blue")} valid={handleValid("blue")} title={"Inférieur à " + maPrimeRenovData[state.getZipCode][updateNumber(state.numberOfFamily)]["bleu"]["max"]+"€"} />:
                    <Skeleton variant="rectangular" style={{ width: "132px", minHeight: "113px" }} />
                }
                {
                    !vignetteLoader ? 
                    <SmallCard setLastClick={(e) => handleClick("yellow")} valid={handleValid("yellow")} title={"Entre "+ maPrimeRenovData[state.getZipCode][updateNumber(state.numberOfFamily)]["jaune"]["min"] +"€ et " + maPrimeRenovData[state.getZipCode][updateNumber(state.numberOfFamily)]["jaune"]["max"] + "€"} />:
                    <Skeleton variant="rectangular" style={{ width: "132px", minHeight: "113px" }} />
                }
                {
                    !vignetteLoader ? 
                    <SmallCard setLastClick={(e) => handleClick("purple")} valid={handleValid("purple")} title={"Entre "+ maPrimeRenovData[state.getZipCode][updateNumber(state.numberOfFamily)]["violet"]["min"] +"€ et " + maPrimeRenovData[state.getZipCode][updateNumber(state.numberOfFamily)]["violet"]["max"] + "€"} />:
                    <Skeleton variant="rectangular" style={{ width: "132px", minHeight: "113px" }} />
                }
                {
                    !vignetteLoader ? 
                    <SmallCard setLastClick={(e) => handleClick("pink")} valid={handleValid("pink")} title={"Supérieur à " + maPrimeRenovData[state.getZipCode][updateNumber(state.numberOfFamily)]["rose"]["min"]+"€"} />:
                    <Skeleton variant="rectangular" style={{ width: "132px", minHeight: "113px" }} />
                }
            </div>
        </div>
    );
};

export default ContainerHeight;