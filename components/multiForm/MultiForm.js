import React, { useState } from 'react';
import styles from "./styles/multiForm.module.css";
import Image from 'next/image';
import ContainerOne from './components/ContainerOne';
import { Button, LinearProgress } from '@mui/material';


const MultiForm = () => {
    const [value, setValue] = useState(1)

    const handleContainer = ()=>{
        switch (value) {
            case 1:
                return <ContainerOne />
                break;
        
            case 2: 
                return 
                break;

            default:
                return null
                break;
        }
    }

    return (
        <div className={styles.multiFormContainer} id="form">
            <div className={styles.topContainer}>
                <div className={styles.progression}>

                </div>
                {/* <LinearProgress variant='determinate' value={80} /> */}
                <h2 className={styles.title}>Tester mon éligibilité</h2>
                <Image src='/frenchFlag.png' alt='drapeau francais' width="100px" height="5" objectFit='cover' className={styles.flag} />
            </div>
            <form className={styles.formulaire}>
                {
                    handleContainer()
                }
                <div className={styles.buttonContainer}>
                    <Button variant="contained" color="success">
                        Suivant
                    </Button>
                    <Button variant="outlined" disabled>
                        Retour
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default MultiForm;