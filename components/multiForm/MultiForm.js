import React, { useState, useEffect } from 'react';
import styles from "./styles/multiForm.module.css";
import Router from 'next/router';
import Image from 'next/image';
import { Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import ContainerOne from './components/ContainerOne';
import ContainerTwo from './components/ContainerTwo';
import ContainerThree from './components/ContainerThree';
import ContainerFour from './components/ContainerFour';
import ContainerFive from './components/ContainerFive';
import ContainerSix from './components/ContainerSix';
import ContainerSeven from './components/ContainerSeven';
import ContainerHeight from './components/ContainerHeight';
import ContainerNine from './components/ContainerNine';
import ContainerTen from "./components/ContainerTen";
import {  serverTimestamp } from 'firebase/firestore';
import { getUser, signUp, updateUser } from '../../api/Auth';
import { setUserDoc } from '../../api/Doc';
import ContainerEleven from './components/ContainerEleven';
import { zipCodeRegex, phoneRegex } from '../../utils/regex';
import { useDispatch } from 'react-redux';
import { getZipCode } from '../../redux/action';
import { checkZipCode } from '../../utils/checkZipCode';


const MultiForm = () => {

    const dispatch = useDispatch()

    const [loader, setLoader] = useState(false);

    const [value, setValue] = useState(1)

    const progressValue = (value * 100) / 11

    const [stepOne, setStepOne] = useState(false)
    const [stepTwo, setStepTwo] = useState(false)
    const [stepThree, setStepThree] = useState(false)
    const [stepFour, setStepFour] = useState(false)
    const [stepFive, setStepFive] = useState(false)
    const [stepSix, setStepSix] = useState(false)
    const [stepSeven, setStepSeven] = useState(false)
    const [stepHeight, setStepHeight] = useState(false)
    const [stepNine, setStepNine] = useState(false)
    const [stepTen, setStepTen] = useState(false)
    const [stepEleven, setStepEleven] = useState(false)

    const [localisation, setLocalisation]= useState("false")
    const [valueLocalisation, setValueLocalisation] = useState(null)

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
        revenusColor: "",
        revenusMin: "",
        revenusMax: "",
        nbrFamily: "",
        isolation: false,
        fenetre: false,
        vmc: false,
        pompeAChaleurClim: false,
        chauffage: false,
        solaireChauffeEau: false,
        localisation: "",
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
        entreprise: "",
        uid: ""
    })

    const reset = (section) => {
        if (section === "works") {
            setProspect({ ...propsect, isolation: false, fenetre: false, vmc: false, pompeAChaleurClim: false, chauffage: false, solaireChauffeEau: false })
        }
        if (section === "personnalInformation") {
            setProspect({ ...propsect, name: "", phone: "", email: "", contract: "" })
        }

    }

    const handleContainer = () => {
        switch (value) {
            case 1:
                return <ContainerOne valid={(e) => setStepOne(e)} value={e => setProspect({ ...propsect, type: e })} />

            case 2:
                return <ContainerTwo valid={(e) => setStepTwo(e)} value={e => setProspect({ ...propsect, years: e })} />

            case 3:
                return <ContainerThree valid={(e) => setStepThree(e)} value={e => setProspect({ ...propsect, size: e })} />

            case 4:
                return <ContainerFour valid={(e) => setStepFour(e)} value={e => setProspect({ ...propsect, heater: e })} />

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

            case 6:
                return <ContainerSix valid={(e) => setStepSix(e)} value={e => setProspect({ ...propsect, status: e })} />

            case 7: 
                return <ContainerEleven valid={e=>setStepEleven(e)} value={e=>setProspect({...propsect, zipCode: e})} />

            case 8:
                return <ContainerTen valid={e => setStepTen(e)} value={e=> setProspect({...propsect, nbrFamily: e})}/>

            case 9:
                return <ContainerHeight 
                    valid={(e) => setStepSeven(e)} 
                    value={e =>{
                        e !== null ? setProspect({ ...propsect, revenusColor: e[0], revenusMin: e[1], revenusMax: e[2] !== undefined ? e[2] : null }): null} 
                    } 
                />

            case 10:
                return <ContainerSeven
                    valid={(e) => setStepHeight(e)}
                    getValid={stepHeight}
                    reset={() => reset("personnalInformation")}
                    value={propsect}
                    valueName={e => setProspect({ ...propsect, name: e })}
                    valuePhone={e => setProspect({ ...propsect, phone: e })}
                    valueContract={e => setProspect({ ...propsect, contract: e })}
                />

            case 11:
                return <ContainerNine name={propsect.name} valid={(e) => setStepNine(e)} value={e => setProspect({ ...propsect, email: e })} password={e=>setPasseword(e)} passwordValid={e=>setPasswordIsSame(e)} />     

            default:
                return null
        }
    }

    const nextValue = async (e) => {
        e.preventDefault()
        if (value === 1 || value < 11) setValue(value + 1)
        if (stepOne && stepTwo && stepThree && stepFour && stepFive && stepSix && stepSeven && stepHeight && stepNine && stepTen && stepEleven) {
            await setLoader(true)
            await signUp({email: propsect.email, password: password}).then(success=>{
                if(success){
                    console.log("email sccessfully created");
                    sendEmailValidation()
                }
            })
            .catch(err=>{
                console.log(err);
            })
            await getUser().then(user=>{
                console.log(user)
                setProspect({ ...propsect, uid: user.uid })
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
        
    useEffect(()=>{
        if(propsect.uid !== ""){
            console.log(propsect);
            setUserDoc(propsect).then(()=>{
                    Router.push('/merci')
            }).catch(err=>{
                console.log(err);
                setLoader(false)
            })
            updateUser(propsect.name)
        }
    }, [propsect.uid])

    const prevValue = (e) => {
        e.preventDefault()
        if (value <= 11 && value > 1) setValue(value - 1)
    }

    useEffect(()=>{
        if(localisation && checkZipCode(propsect.zipCode)){
            dispatch(getZipCode("ileDeFrance"))
            setValueLocalisation("ileDeFrance")
        }else{
            dispatch(getZipCode("province"))
            setValueLocalisation("province")
        } 
    }, [propsect.zipCode])

    useEffect(()=>{
        setProspect({...propsect, localisation: valueLocalisation})
    }, [valueLocalisation])

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
                if(propsect.zipCode !== "" && zipCodeRegex.test(propsect.zipCode) === true){
                    setLocalisation(true)
                    setDisable(false)
                }else setDisable(true)
                break;

            case 8:
                propsect.nbrFamily !== "" ? setDisable(false) : setDisable(true)   
                break;
                
            case 9:
                propsect.revenusColor !== "" && propsect.revenusColor !== null ? setDisable(false) : setDisable(true)
                break; 

            case 10:
                propsect.name !== "" && propsect.phone !== "" && propsect.contract !== "" && phoneRegex.test(propsect.phone) === true ? setDisable(false) : setDisable(true)
                break;
    
            case 11:
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
                    <div className={styles.avancement} style={value === 8 ? { borderRadius: "20px 0px 0 0", width: `${progressValue}%` } : { width: `${progressValue}%` }}>
                        {
                            value === 11 ? "Dernière étape !" : null
                        }
                    </div>
                </div>
                <h2 className={styles.title}>Tester mon éligibilité</h2>
                <Image src='/frenchFlag.png' alt='drapeau francais' width="100px" height="5" objectFit='cover' className={styles.flag} />
            </div>
            <form className={styles.formulaire} id={styles.formulaire}>
                {
                    handleContainer()
                }
                <div className={styles.buttonContainer}>
                        <Button variant="contained" disabled={disable} style={{ backgroundColor: "#74c011" }} onClick={(e) => nextValue(e)}>
                            {
                                value < 11 ? "Suivant" : "Envoyer"
                            }

                        </Button>
                    <Button href="#form" variant="outlined" disabled={value <= 1 ? true : false} onClick={(e) => prevValue(e)}>
                        Retour
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default MultiForm;