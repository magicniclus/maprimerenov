import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { maPrimeRenovWorksData } from '../../utils/maPrimeRenovAlgorithme/maPRimeRenovWorksData';
import Cards from './components/Cards';
import styles from "./styles/simulateur.module.css";

const Simulateur = (props) => {
    const prestations = props.prestations
    const revenusColor = props.revenusColor
    const [loader, setLoader]=useState(true)
    const [awaitMessage, setAwaitMessage]=useState("Veuillez patienter...")

    const [loaderResult, setLoaderResult]=useState(true)
    const [simulateurResult, setSimulateurResult] = useState(0)
    const state = useSelector(state=>state)
    const size = state.userProjectInformation.size;

    useEffect(()=>{
        if(prestations !== []) setLoader(false)
    }, [prestations, revenusColor])

    useEffect(()=>{
        setLoaderResult(true)
        updatePrestation()
    }, [prestations])
    
    const updatePrestation = async ()=>{
        setSimulateurResult(0)
        prestations.forEach(async presta => {
            switch (presta) {
                case "isolation":
                    setSimulateurResult(result => result + (maPrimeRenovWorksData["isolation"][`${revenusColor}`]["moyenne"] * size))
                    break;

                case "Systhème solaire / Chauffe Eau":
                    setSimulateurResult(result => result + maPrimeRenovWorksData["solaireChauffeEau"][`${revenusColor}`]["moyenne"])
                    break;

                case "Menuiserie":
                    setSimulateurResult(result => result + maPrimeRenovWorksData["fenetre"][`${revenusColor}`]["moyenne"])
                    break;
                    
                case "Vmc":
                    setSimulateurResult(result => result + maPrimeRenovWorksData["vmc"][`${revenusColor}`]["moyenne"])
                    break;            
                
                case "Pompe a chaleur / Climatisation":
                    setSimulateurResult(result => result + maPrimeRenovWorksData["pompeAChaleurClim"][`${revenusColor}`]["moyenne"])
                    break;            
                    
                case "Chauffage":
                    setSimulateurResult(result => result + maPrimeRenovWorksData["chauffage"][`${revenusColor}`]["moyenne"])
                    break;
                default:
                    break;
            }
        })
        setLoaderResult(false)
    }

    return (
        <div className={styles.simulateur}>
            <h3 className={styles.simulateur_h3}>Calcul de vos aides:</h3>
            <span className={styles.simulateur_span}>Cette estimation est basée sur les données que vous nous avez fournies, elle peut varier en fonction du choix des prestations.</span>
            <div className={styles.simulateur_cardContainer}>
                {
                    loader ? 
                    <h4 className={styles.simulateur_h4}>{awaitMessage}</h4>:
                    prestations.map((presta, idx)=>
                        <Cards key={idx} prestation={presta}/>
                    )
                }
            </div>
            <div className={styles.simulateur_result}>
                <h3 className={styles.simulateur_result_h3}>Montant moyen des aides accordé par MaPrimeRenov&apos; pour les prestations demandées:</h3>
                <h2 className={styles.simulateur_result_h2}>
                    {
                    !loaderResult ? 
                    simulateurResult + "€":
                    "Calcul en cours..."
                    }
                </h2>
                <h4 className={styles.simulateur_result_h4}>Les montants de vos aides indiqués ci-dessus ne constituent nullement une proposition commerciale, 
                et demandent à être validé par un de nos conseillers ainsi que par l’organisme 
                qui le propose. 
                </h4>
            </div>
        </div>
    );
};

export default Simulateur;