import React, { useState } from 'react';
import styles from "./styles/multiForm.module.css";
import Image from 'next/image';
import ContainerOne from './components/ContainerOne';
import ContainerTwo from './components/ContainerTwo';
import { Button, LinearProgress } from '@mui/material';
import ContainerThree from './components/ContainerThree';
import ContainerFour from './components/ContainerFour';
import ContainerFive from './components/ContainerFive';
import ContainerSixe from './components/ContainerSixe';
import ContainerSeven from './components/ContainerSeven';


const MultiForm = () => {
    const [value, setValue] = useState(1)

    const handleContainer = ()=>{
        switch (value) {
            case 1:
                return <ContainerOne />
                break;
        
            case 2: 
                return <ContainerTwo />
                break;

            case 3: 
                return <ContainerThree />
            break;

            case 4: 
                return <ContainerFour />
            break;

            case 5: 
                return <ContainerFive />
            break;

            case 6: 
                return <ContainerSixe />
            break;

            case 7: 
                return <ContainerSeven />
            break;

            default:
                return null
                break;
        }
    }

    const nextValue = (e)=>{
        e.preventDefault()
        if(value === 1 || value < 7) setValue(value + 1)
    }
    
    const prevValue = (e)=>{
        e.preventDefault()
        if(value <= 7 && value > 1) setValue(value-1)
    }

    return (
        <div className={styles.multiFormContainer} id="form">
            <div className={styles.topContainer}>
                <div className={styles.progression}>

                </div>  
                <h2 className={styles.title}>Tester mon éligibilité</h2>
                <Image src='/frenchFlag.png' alt='drapeau francais' width="100px" height="5" objectFit='cover' className={styles.flag} />
            </div>
            <form className={styles.formulaire}>
                {
                    handleContainer()
                }
                <div className={styles.buttonContainer}>
                    <Button variant="contained" disabled color="success" onClick={(e)=>nextValue(e)}>
                        Suivant
                    </Button>
                    <Button variant="outlined" disabled onClick={(e)=>prevValue(e)}>
                        Retour
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default MultiForm;