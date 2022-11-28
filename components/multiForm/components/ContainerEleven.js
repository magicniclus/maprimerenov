import React, {useState, useEffect} from 'react';
import styles from "../styles/multiForm.module.css";

const ContainerEleven = (props) => {

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
        <div className={`${styles.containerEleven} ${styles.container}`}>
            <label className={styles.label}>
                Quel est votre code postal ?*
                <span className={styles.span}>La prime peut varier en fonction du secteur dans lequel vous vous trouvez</span>
            </label>
            <div className={`${styles.cardContainerEleven} ${styles.cardContainer}`}>
                <input className={`${styles.input} ${styles.inputZipCode}`} onChange={e=>handleText(e)} type="zip" required placeholder="3300"  />
            </div>
        </div>
    );
};

export default ContainerEleven;