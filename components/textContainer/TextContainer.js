import React from 'react';
import styles from "./styles/textContainer.module.css";

const TextContainer = () => {
    return (
        <div className={styles.content}>
            <div className={styles.topContainer}>
                <h2 className={styles.title}>MaPrimeRenov’, c’est jusqu’à <span className={styles.bolder}>20.000€</span> de prise en charge par <span className={styles.bolder}>l’état</span> !</h2>
                <p className={styles.text}>Bénéficiez du montant maximum subventionné pour vous. Il vous suffit de tester l’éligibilité de votre projet ! Utilisez notre simulateur <span className={styles.bolder}>GRATUIT</span>  et <span className={styles.bolder}>sans conditions de revenus</span>  pour tester votre éligibilité dès maintenant.</p>
            </div>
            <div className={`${styles.bottomContainer} ${styles.two}`}>
                <h2 className={styles.title}>Qui peut en bénéficier ?</h2>
                <p className={styles.text}>Depuis le 1er octobre 2020, tous les propriétaires peuvent en bénéficier, quels que soient leurs revenus. Les propriétaires bailleurs peuvent déposer leur dossier de demande d’aide depuis le 1er juillet 2021. En 2021 plus de <span className={styles.bolder}>644 000</span>  demandes d’aide ont été accordé par l’État.</p>
            </div>
        </div>
    );
};

export default TextContainer;