import React from 'react';
import styles from "./styles/textContainer.module.css";

const TextContainer = () => {
    return (
        <div className={styles.content}>
            <div className={styles.topContainer}>
                <h2 className={styles.title}>MaPrimeRenov’, c’est jusqu’à 20.000€ de prise en charge par l’état !</h2>
                <p className={styles.text}>Bénéficiez du montant maximum subventioné pour vous. Il vous suffit de tester l’éligibilité de votre projet ! Utilisez notre simulateur GRATUIT et sans conditions de revenus pour tester votre éligibilité dès maintenant.</p>
            </div>
            <div className={`${styles.bottomContainer} ${styles.two}`}>
                <h2 className={styles.title}>Qui peut en bénéficier ?</h2>
                <p className={styles.text}>Depuis le 1er octobre 2020, tous les propriétaires peuvent en bénificier, quels que soit leurs revenus. Les propriétaires bailleurs peuvent déposer leur dossier de demande d’aide depuis le 1er juillet 2021. En 2021 plus de 644 000 demande d’aide ont été accordé par l’état.</p>
            </div>
        </div>
    );
};

export default TextContainer;