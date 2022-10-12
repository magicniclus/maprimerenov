import React, {useEffect, useState} from 'react';
import styles from "../styles/multiForm.module.css";
import BigCard from './BigCard';

const ContainerOne = (props) => {
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
        <div className={`${styles.containerOne} ${styles.container}`}>
            <label className={styles.label}>
                Votre projet concerne :*
            </label>
            <div className={`${styles.cardContainerOne} ${styles.cardContainer}`}>
                <BigCard setLastClick={(e)=>handleClick("house")} valid={handleValid("house")} title="Une Maison" />
                <BigCard  setLastClick={(e)=>handleClick("appartment")} valid={handleValid("appartment")} title="Un appartement" /> 
            </div>
        </div>
    );
};

export default ContainerOne;