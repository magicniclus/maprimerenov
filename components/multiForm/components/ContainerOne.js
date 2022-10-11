import React, {useState} from 'react';
import styles from "../styles/multiForm.module.css";
import BigCard from './BigCard';
import SmallCard from './SmallCard';

const ContainerOne = () => {
    const [cardSelected, setCardSelected] = useState(0)

    console.log(cardSelected);

    const handleCard = (e, value)=>{
        e.preventDefault()
        if(cardSelected !== value && cardSelected!==0) setCardSelected(0)
        else setCardSelected(value)
        console.log(cardSelected);
    }

    return (
        <div className={`${styles.containerOne} ${styles.container}`}>
            <label className={styles.label}>
                Votre projet concerne :*
            </label>
            <div className={`${styles.cardContainerOne} ${styles.cardContainer}`}>
                <BigCard title="Une Maison" onClick={(e)=>handleCard(e, 1)} />
                <BigCard title="Un appartement" onClick={(e)=>handleCard(e, 2)} /> 
            </div>
        </div>
    );
};

export default ContainerOne;