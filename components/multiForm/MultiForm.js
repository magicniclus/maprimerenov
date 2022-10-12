import React, { useState, useEffect } from 'react';
import styles from "./styles/multiForm.module.css";
import Image from 'next/image';
import ContainerOne from './components/ContainerOne';
import ContainerTwo from './components/ContainerTwo';
import { Button} from '@mui/material';
import ContainerThree from './components/ContainerThree';
import ContainerFour from './components/ContainerFour';
import ContainerFive from './components/ContainerFive';
import ContainerSixe from './components/ContainerSixe';
import ContainerSeven from './components/ContainerSeven';


const MultiForm = () => {
    const [value, setValue] = useState(1)
    const [stepOne, setStepOne]= useState(false)
    const [disable, setDisable] = useState(true)
    const [propsect, setProspect] = useState({
        type: "",
        years: "",
        size: "",
        heater: "",
        works: "",
        status: "",
        name: "",
        phone: "",
        zipCode: "",
        email: "",
        contract: ""
    })

    const progressValue = (value * 100)/7

    const handleContainer = ()=>{
        switch (value) {
            case 1:
                return <ContainerOne valid={(e)=>setStepOne(e)} value={e=>setProspect({...propsect, type:e})} />
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

    useEffect(()=>{
        switch (value) {
            case 1:
                return propsect.type !== "" ? setDisable(false) : setDisable(true)
                break;
        
            default:
                break;
        }
    }, [propsect])


    return (
        <div className={styles.multiFormContainer} id="form">
            <div className={styles.topContainer}>   
                <div className={styles.progression} style={value <= 1 ? {display: "none"} : {display: "block"} }>
                    <div className={styles.avancement} style={value === 7 ? {borderRadius: "20px 0px 0 0", width: `${progressValue}%`}:{width: `${progressValue}%`}}>
                        {
                            value === 7 ? "Dernière étape !" : null
                        }
                    </div>
                </div>
                <h2 className={styles.title}>Tester mon éligibilité</h2>
                <Image src='/frenchFlag.png' alt='drapeau francais' width="100px" height="5" objectFit='cover' className={styles.flag} />
            </div>
            <form className={styles.formulaire}>
                {
                    handleContainer()
                }
                <div className={styles.buttonContainer}>
                    <Button variant="contained" disabled={disable} style={{backgroundColor: "#74c011"}} onClick={(e)=>nextValue(e)}>
                        {
                            value < 7 ? "Suivant" : "Envoyer"
                        }
                        
                    </Button>
                    <Button variant="outlined" disabled={value <= 1 ? true : false} onClick={(e)=>prevValue(e)}>
                        Retour
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default MultiForm;