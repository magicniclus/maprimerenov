import React, {useEffect, useState} from 'react';
import styles from "../styles/multiForm.module.css";
import BigCard from './BigCard';

const ContainerTwo = (props) => {
    const valid = props.valid
    const value = props.value

    const [lastClick, setLastClick] = useState("")

    useEffect(()=>{
        lastClick !== "" ? valid(true) : valid(false)
        if(lastClick !== ""){
            valid(true)
        }
        value(lastClick)
    }, [lastClick])

    const handleClick = (name) =>{
        setLastClick(lastClick !== name ? name : "")
    }

    const handleValid = (name)=>{
        if(name === lastClick) return true
        return false
    }

    return (
        <div className={`${styles.containerTwo} ${styles.container}`}>
            <label className={styles.label}>
                Année de construction de votre logement :*
                <span className={styles.span}>Cela nous permet de determiner votre éligibilité aux différentes aides</span>
            </label>
            <div className={`${styles.cardContainerTwo} ${styles.cardContainer}`}>
                <BigCard setLastClick={(e)=>handleClick("- de 2 ans")} valid={handleValid("- de 2 ans")} title="Moins de deux ans" />
                <BigCard setLastClick={(e)=>handleClick("entre 2 et 10 ans")} valid={handleValid("entre 2 et 10 ans")} title="Entre 2 et 10 ans" /> 
                <BigCard setLastClick={(e)=>handleClick("+ de 10 ans")} valid={handleValid("+ de 10 ans")} title="Plus de 10 ans" /> 
            </div>
        </div>
    );
};

export default ContainerTwo;