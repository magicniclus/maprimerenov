import React from 'react';
import styles from "./styles/videoContainer.module.css";

const VideoContainer = () => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.leftContainer}>
                    <h2 className={styles.title}>
                    Nous vous accompagnons dans chacune des étapes de votre projet
                    </h2>
                    <ul className={styles.list}>
                        <li className={styles.listElement}>Estimation</li>
                        <li className={styles.listElement}>Validation du projet</li>
                        <li className={styles.listElement}>Elaboration et dépot du projet </li>
                        <li className={styles.listElement}>Suivi de la bonne réalisation des travaux </li>
                        <li className={styles.listElement}>Livraison</li>
                        <li className={styles.listElement}>Encaissement de la prime par l’état</li>
                    </ul>
                    <button onClick={e =>{
                        let form = document.getElementById('form')
                        e.preventDefault()
                        form && form.scrollIntoView({ behavior: "smooth", block: "start"})
                    }
                    } className={styles.button}
                    >Tester mon éligibilité
                    </button>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.videoContainer}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/O4HxHLQ3k9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoContainer;