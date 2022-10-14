import React, { useState, useEffect } from 'react';
import styles from "./styles/multiForm.module.css";
import Image from 'next/image';
import ContainerOne from './components/ContainerOne';
import ContainerTwo from './components/ContainerTwo';
import { Button } from '@mui/material';
import ContainerThree from './components/ContainerThree';
import ContainerFour from './components/ContainerFour';
import ContainerFive from './components/ContainerFive';
import ContainerSix from './components/ContainerSix';
import ContainerSeven from './components/ContainerSeven';


const MultiForm = () => {
    const [value, setValue] = useState(1)

    const [stepOne, setStepOne] = useState(false)
    const [stepTwo, setStepTwo] = useState(false)
    const [stepThree, setStepThree] = useState(false)
    const [stepFour, setStepFour] = useState(false)
    const [stepFive, setStepFive] = useState(false)
    const [stepSix, setStepSix] = useState(false)
    const [stepSeven, setStepSeven] = useState(false)

    const [disable, setDisable] = useState(true)

    const [propsect, setProspect] = useState({
        type: "",
        years: "",
        size: "",
        heater: "",
        isolation: false,
        fenetre: false,
        vmc: false,
        pompeAChaleurClim: false,
        chauffage: false,
        solaireChauffeEau: false,
        status: "",
        name: "",
        phone: "",
        zipCode: "",
        email: "",
        contract: ""
    })

    const progressValue = (value * 100) / 7

    const handleContainer = () => {
        switch (value) {
            case 1:
                return <ContainerOne valid={(e) => setStepOne(e)} value={e => setProspect({ ...propsect, type: e })} />
                break;

            case 2:
                return <ContainerTwo valid={(e) => setStepTwo(e)} value={e => setProspect({ ...propsect, years: e })} />
                break;

            case 3:
                return <ContainerThree valid={(e) => setStepThree(e)} value={e => setProspect({ ...propsect, size: e })} />
                break;

            case 4:
                return <ContainerFour valid={(e) => setStepFour(e)} value={e => setProspect({ ...propsect, heater: e })} />
                break;

            case 5:
                // return <ContainerFive valid={(e)=>setStepFive(e)} value={e=>setProspect({...propsect, works:e})} />
                return <ContainerFive
                    valid={(e) => setStepFive(e)}
                    value={propsect}
                    setIsolation={(e) => setProspect({ ...propsect, isolation: e })}
                    setFenetre={e => setProspect({ ...propsect, fenetre: e })}
                    setVmc={e => setProspect({ ...propsect, vmc: e })}
                    setPompeAChaleurClim={e => setProspect({ ...propsect, pompeAChaleurClim: e })}
                    setChauffage={e => setProspect({ ...propsect, chauffage: e })}
                    setSolaireChauffeEau={e => setProspect({ ...propsect, solaireChauffeEau: e })}
                />
                break;

            case 6:
                return <ContainerSix valid={(e) => setStepSix(e)} value={e => setProspect({ ...propsect, status: e })} />
                break;

            case 7:
                return <ContainerSeven
                    valid={(e) => setStepSeven(e)}
                    valueName={e => setProspect({ ...propsect, name: e })}
                    valuePhone={e => setProspect({ ...propsect, phone: e })}
                    valueZipCode={e => setProspect({ ...propsect, zipCode: e })}
                    valueEmail={e => setProspect({ ...propsect, email: e })}
                    valueContract={e => setProspect({ ...propsect, contract: e })}
                />
                break;

            default:
                return null
                break;
        }
    }

    const nextValue = (e) => {
        e.preventDefault()
        if (value === 1 || value < 7) setValue(value + 1)
    }

    const prevValue = (e) => {
        e.preventDefault()
        if (value <= 7 && value > 1) setValue(value - 1)
    }

    useEffect(() => {
        switch (value) {
            case 1:
                propsect.type !== "" ? setDisable(false) : setDisable(true)
                break;

            case 2:
                propsect.years !== "" ? setDisable(false) : setDisable(true)
                break;

            case 3:
                propsect.size !== "" ? setDisable(false) : setDisable(true)
                break;

            case 4:
                propsect.heater !== "" ? setDisable(false) : setDisable(true)
                break;

            case 5:
                if (propsect.chauffage !== false || propsect.fenetre !== false || propsect.isolation !== false || propsect.vmc !== false || propsect.pompeAChaleurClim !== false || propsect.solaireChauffeEau !== false) {
                    setDisable(false)
                } else {
                    setDisable(true)
                }
                break;


            case 6:
                propsect.status !== "" ? setDisable(false) : setDisable(true)
                break;


            case 7:
                propsect.name !== "" && propsect.phone !== "" && propsect.zipCode !== "" && propsect.email !== "" && propsect.contract !== "" ? setDisable(false) : setDisable(true)
                break;

            default: setDisable(true)
                break;
        }
    }, [propsect, value])


    return (
        <div className={styles.multiFormContainer} id="form">
            <div className={styles.topContainer}>
                <div className={styles.progression} style={value <= 1 ? { display: "none" } : { display: "block" }}>
                    <div className={styles.avancement} style={value === 7 ? { borderRadius: "20px 0px 0 0", width: `${progressValue}%` } : { width: `${progressValue}%` }}>
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
                    <Button variant="contained" disabled={disable} style={{ backgroundColor: "#74c011" }} onClick={(e) => nextValue(e)}>
                        {
                            value < 7 ? "Suivant" : "Envoyer"
                        }

                    </Button>
                    <Button variant="outlined" disabled={value <= 1 ? true : false} onClick={(e) => prevValue(e)}>
                        Retour
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default MultiForm;