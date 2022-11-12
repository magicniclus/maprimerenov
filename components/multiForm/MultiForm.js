import React, { useState, useEffect } from 'react';
import styles from "./styles/multiForm.module.css";
import Image from 'next/image';
import ContainerOne from './components/ContainerOne';
import ContainerTwo from './components/ContainerTwo';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import ContainerThree from './components/ContainerThree';
import ContainerFour from './components/ContainerFour';
import ContainerFive from './components/ContainerFive';
import ContainerSix from './components/ContainerSix';
import ContainerSeven from './components/ContainerSeven';
import { dataBase } from '../../utils/firebase.config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Router from 'next/router';
import ContainerHeight from './components/ContainerHeight';
import ContainerNine from './components/ContainerNine';


const MultiForm = () => {
    const databaseRef = collection(dataBase, 'primeRenovProspect');
    const [loader, setLoader] = useState(false);

    const [value, setValue] = useState(1)

    const progressValue = (value * 100) / 9

    const [stepOne, setStepOne] = useState(false)
    const [stepTwo, setStepTwo] = useState(false)
    const [stepThree, setStepThree] = useState(false)
    const [stepFour, setStepFour] = useState(false)
    const [stepFive, setStepFive] = useState(false)
    const [stepSix, setStepSix] = useState(false)
    const [stepSeven, setStepSeven] = useState(false)
    const [stepHeight, setStepHeight] = useState(false)
    const [stepNine, setStepNine] = useState(false)

    const [password, setPasseword] = useState("")
    const [passwordIsTheSame, setPasswordIsSame] = useState(false)
    const [signInError, setSignInError] = useState("")

    const [disable, setDisable] = useState(true)

    const [propsect, setProspect] = useState({
        name: "",
        phone: "",
        zipCode: "",
        email: "",
        contract: "",
        type: "",
        status: "",
        years: "",
        size: "",
        heater: "",
        revenus: "",
        isolation: false,
        fenetre: false,
        vmc: false,
        pompeAChaleurClim: false,
        chauffage: false,
        solaireChauffeEau: false,
        date: new Date(),
        createAt: serverTimestamp(),
        attribution: "",
        call: false,
        callNumer: 0,
        click: false,
        send: false,
        comment: "",
        sign: false,
        signPrestation: "",
        entreprise: ""
    })

    const reset = (section) => {
        if (section === "works") {
            setProspect({ ...propsect, isolation: false, fenetre: false, vmc: false, pompeAChaleurClim: false, chauffage: false, solaireChauffeEau: false })
        }
        if (section === "personnalInformation") {
            setProspect({ ...propsect, name: "", phone: "", zipCode: "", email: "", contract: "" })
        }

    }

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
                return <ContainerFive
                    valid={(e) => setStepFive(e)}
                    value={propsect}
                    reset={() => reset("works")}
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
                return <ContainerHeight valid={(e) => setStepSeven(e)} value={e => setProspect({ ...propsect, revenus: e })}   />

            case 8:
                return <ContainerSeven
                    valid={(e) => setStepHeight(e)}
                    getValid={stepHeight}
                    reset={() => reset("personnalInformation")}
                    value={propsect}
                    valueName={e => setProspect({ ...propsect, name: e })}
                    valuePhone={e => setProspect({ ...propsect, phone: e })}
                    valueZipCode={e => setProspect({ ...propsect, zipCode: e })}
                    valueContract={e => setProspect({ ...propsect, contract: e })}
                />
                break;

            case 9:
                return <ContainerNine name={propsect.name} valid={(e) => setStepNine(e)} value={e => setProspect({ ...propsect, email: e })} error={e=>setSignInError(e)} password={e=>setPasseword(e)} passwordValid={e=>setPasswordIsSame(e)} />     

            default:
                return null
                break;
        }
    }

    const nextValue = (e) => {
        e.preventDefault()
        if (value === 1 || value < 9) setValue(value + 1)
        if (stepOne && stepTwo && stepThree && stepFour && stepFive && stepSix && stepSeven && stepHeight && stepNine) {
            setLoader(true)
            addDoc(databaseRef, {
                name: propsect.name,
                phone: propsect.phone,
                zipCode: propsect.zipCode,
                email: propsect.email,
                contract: propsect.contract,
                type: propsect.type,
                status: propsect.status,
                years: propsect.years,
                size: propsect.size,
                heater: propsect.heater,
                isolation: propsect.isolation,
                fenetre: propsect.fenetre,
                vmc: propsect.vmc,
                pompeAChaleurClim: propsect.pompeAChaleurClim,
                chauffage: propsect.chauffage,
                solaireChauffeEau: propsect.solaireChauffeEau,
                date: propsect.date,
                createAt: propsect.createAt,
                attribution: propsect.attribution,
                call: propsect.call,
                callNumer: propsect.callNumer,
                click: propsect.click,
                send: propsect.send,
                comment: propsect.comment,
                sign: propsect.sign,
                signPrestation: propsect.signPrestation
            })
            .then(async () => {
                await Router.push('/merci')
                await setLoader(false)
            })
            .catch((err) => {
                console.error(err)
                setLoader(false)
            })
        }
    }

    const prevValue = (e) => {
        e.preventDefault()
        if (value <= 9 && value > 1) setValue(value - 1)
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
                propsect.revenus !== "" ? setDisable(false) : setDisable(true)
                break;
    
            case 8:
                propsect.name !== "" && propsect.phone !== "" && propsect.zipCode !== "" && propsect.contract !== "" ? setDisable(false) : setDisable(true)
                break;

    
            case 9:
                stepNine ? setDisable(false) : setDisable(true)
                break;
    
            default: setDisable(true)
                break;
        }
    }, [propsect, value, stepNine])


    return (
        <div className={styles.multiFormContainer} id="form">
            {
                loader ?
                    <div className={styles.loader}>
                        <CircularProgress />
                    </div> : null
            }

            <div className={styles.topContainer}>
                <div className={styles.progression} style={value <= 1 ? { display: "none" } : { display: "block" }}>
                    <div className={styles.avancement} style={value === 7 ? { borderRadius: "20px 0px 0 0", width: `${progressValue}%` } : { width: `${progressValue}%` }}>
                        {
                            value === 9 ? "Dernière étape !" : null
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
                            value < 9 ? "Suivant" : "Envoyer"
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