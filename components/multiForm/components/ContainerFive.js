import React, {useEffect, useState} from 'react';
import styles from "../styles/multiForm.module.css";
import SmallCard from './SmallCard';

const ContainerFive = (props) => {
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
        <div className={`${styles.containerFive} ${styles.container}`}>
            <label className={styles.label}>
                Quel type de travaux vous souhaitez réaliser :*
                <span className={styles.span}>Plusieurs choix possible</span>
            </label>
            <div className={`${styles.cardContainerFive} ${styles.cardContainer}`}>
                <SmallCard setLastClick={(e)=>handleClick("isolation")} valid={handleValid("isolation")} title="Isolation" />
                <SmallCard setLastClick={(e)=>handleClick("fenetre")} valid={handleValid("fenetre")} title="Fenetre/Porte-fenetre" />
                <SmallCard setLastClick={(e)=>handleClick("VMC double flux")} valid={handleValid("VMC double flux")} title="VMC double flux" />
                <SmallCard setLastClick={(e)=>handleClick("pompe à chaleur, climatisation")} valid={handleValid("pompe à chaleur, climatisation")} title="Pompe à chaleur/climatisation" />
                <SmallCard setLastClick={(e)=>handleClick("chauffage")} valid={handleValid("chauffage")} title="Chauffage" />
                <SmallCard setLastClick={(e)=>handleClick("solaire/chauffe eau")} valid={handleValid("solaire/chauffe eau")} title="Solaire/chauffe eau" />
            </div>
        </div>
    );
};

export default ContainerFive;