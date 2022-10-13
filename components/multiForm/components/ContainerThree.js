import React, {useState, useEffect} from 'react';
import styles from "../styles/multiForm.module.css";

const ContainerThree = (props) => {

    const valid = props.valid
    const value = props.value

    useEffect(()=>{
        value("")
    }, [])

    const handleText = (e)=>{
        e.preventDefault()
        value(e.target.value)
        if(e.target.value.lenght <= 0) valid(false)
        valid(true)
    }

    return (
        <div className={`${styles.containerThree} ${styles.container}`}>
            <label className={styles.label}>
                Surface habitable de votre logement :*
                <span className={styles.span}>En m2</span>
            </label>
            <div className={`${styles.cardContainerThree} ${styles.cardContainer}`}>
                <input onChange={e=>handleText(e)} className={styles.input} type="number" required placeholder="100" />
            </div>
        </div>
    );
};

export default ContainerThree;