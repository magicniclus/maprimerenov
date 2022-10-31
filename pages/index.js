import React, { useEffect } from 'react';
import Formulaire from '../components/formulaire/Formulaire';
import HeaderForm from '../components/headerForm/HeaderForm';
import TextContainer from '../components/textContainer/TextContainer';
import VideoContainer from '../components/videoContainer/VideoContainer';
import Vignette from '../components/vignette/Vignette';
import LayoutClassicPage from '../components/classicPage/LayoutClassicPage';
import styles from '../styles/Home.module.css';
import { Button } from '@mui/material';
import Router from 'next/router';
import Tape from '../components/tape/Tape';
import TransitionBaniere from '../components/transitionBanière/TransitionBaniere';
import TextBaniere from '../components/textBaniere/TextBaniere';
import Image from 'next/image';
import { style } from '@mui/system';

export default function Home() {

  const handleChangePage = (e) => {
    e.preventDefault()
    Router.push("/simulateur")
  }

  return (
    <LayoutClassicPage  >
      <main className={styles.main}>
        <div className={styles.topContent}>
          <h1 className={styles.title}>Nous vous accompagnons dans toutes les étapes de votre rénovation énergétique</h1>
          <p className={styles.p}><span className={styles.span}>MaPrimeRénov&lsquo;</span> permet de <span className={styles.span}>financer</span> les travaux d&lsquo;<span className={styles.span}>isolation</span>, de <span className={styles.span}>chauffage</span>, de <span className={styles.span}>ventilation</span> ou d&lsquo;<span className={styles.span}>audit énergétique</span> d&lsquo;une <span className={styles.span}>maison individuelle</span> ou d&lsquo;un <span className={styles.span}>appartement</span> en habitat collectif. <br /><br />De l&lsquo;analyse de vos besoins, estimation des <span className={styles.span}>aides</span>, gestions du dossier, soursing des entreprises et gestion des <span className={styles.span}>travaux</span> jusqu’à la réception de votre <span className={styles.span}>prime</span>, chez <span className={styles.span}>MaPrimeRenov-info.org</span>, nous vous accompagnons pour tout.</p>
          <Button variant="contained" onClick={(e) => handleChangePage(e)} style={{ backgroundColor: "#74c011", minWidth: "250px", maxWidth: "250px", marginTop: "5rem" }}>
            Tester  mon éligibilité
          </Button>
        </div>
        <div className={styles.benefice}>
          <div className={styles.benefice_globalContainer}>
            <div className={styles.benefice_leftContainer}>
              <div className={styles.benefice_leftContainer_content}>
                <h3 className={styles.benefice_title}>Qui peut en bénéficier ? </h3>
                <p className={styles.benefice_p_one}>
                  Que vous soyez <span className={styles.span}>propriétaire occupant</span>, <span className={styles.span}>bailleur</span>, ou
                  <span className={styles.span}> syndicat de copropriétaire</span>, que ça soit pour une
                  <span className={styles.span}> rénovation global</span>, ou <span className={styles.span}> partiel</span>, bénéficiez de <span className={styles.span}> MaPrimeRénov’</span>.
                </p>
                <p className={styles.benefice_p_two}>
                  <span className={styles.span}>Améliation du confort</span> de votre habitat, <span className={styles.span}> réduction</span> des factures énergétique, amélioration de vos <span className={styles.span}> performences énergétique</span>, avec <span className={styles.span}> MaPrimeRénov’</span>,
                  vous participez à l’effort collectif.
                </p>
                <Button variant="contained" onClick={(e) => handleChangePage(e)} style={{ backgroundColor: "#74c011", minWidth: "250px", maxWidth: "250px" }}>
                  Tester  mon éligibilité
                </Button>
              </div>
            </div>
            <div className={styles.benefice_rightContainer}>
              <h3 className={styles.secondTitle}>Avec <span className={styles.span}>MaPrimeRenov-info.org</span>, vous choisissez la <span className={styles.span}>sérénité</span>.</h3>
            </div>
          </div>
        </div>
        <Tape />
        <TransitionBaniere />
        <TextBaniere />
      </main>
    </LayoutClassicPage>
  )
}
