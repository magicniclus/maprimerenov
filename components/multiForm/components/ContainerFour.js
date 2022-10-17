import React, { useEffect, useState } from 'react';
import styles from "../styles/multiForm.module.css";
import SmallCard from './SmallCard';

const ContainerFour = (props) => {
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
        <div className={`${styles.containerFour} ${styles.container}`}>
            <label className={styles.label}>
                Quel est votre principale source de chauffage actuellement :*
            </label>
            <div className={`${styles.cardContainerFour} ${styles.cardContainer}`}>
                <SmallCard setLastClick={(e) => handleClick("electrique")} valid={handleValid("electrique")} image="electricite.png" title="Electrique" />
                <SmallCard setLastClick={(e) => handleClick("fioul")} valid={handleValid("fioul")} image="fioul.png" title="Fioul" />
                <SmallCard setLastClick={(e) => handleClick("gaz")} valid={handleValid("gaz")} image="gaz.png" title="Gaz" />
                <SmallCard setLastClick={(e) => handleClick("bois")} valid={handleValid("bois")} image="feu.png" title="Bois" />
                <SmallCard setLastClick={(e) => handleClick("pompe à chaleur")} valid={handleValid("pompe à chaleur")} image="pompe.png" title="Pompe à chaleur" />
                <SmallCard setLastClick={(e) => handleClick("charbon")} valid={handleValid("charbon")} image="charbon.png" title="Charbon" />
            </div>
        </div>
    );
};

export default ContainerFour;