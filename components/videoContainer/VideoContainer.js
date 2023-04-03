import React from "react";
import styles from "./styles/videoContainer.module.css";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const VideoContainer = () => {
  const router = useRouter();
  const locationUrl = router.pathname;
  const text = {
    init: {
      h2: "Nous vous accompagnons dans chacune des étapes de votre projet",
      li: [
        "-Estimation",
        "-Validation du projet",
        "-Elaboration et dépot du projet",
        "-Suivi de la bonne réalisation des travaux",
        "-Livraison",
        "-Encaissement de la prime par l’état",
      ],
    },
    CAH: {
      h2: "Nous vous guidons à travers chaque étape de votre projet",
      li: [
        "-Évaluation",
        "-Confirmation du projet",
        "-Préparation et soumission du projet",
        "-Contrôle du bon déroulement des travaux",
        "-Réception",
        "-Paiement de la prime par l'État",
      ],
    },
  };
  const headerText = locationUrl === "/simulateur" ? text.init : text.CAH;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftContainer}>
          <h2 className={styles.title}>{headerText.h2}</h2>
          <ul className={styles.list}>
            {headerText.li.map((el, idx) => (
              <li className={styles.listElement} key={idx}>
                {el}
              </li>
            ))}
          </ul>
          <Button
            variant="contained"
            style={{ backgroundColor: "#74c011" }}
            onClick={(e) => {
              let form = document.getElementById("form");
              e.preventDefault();
              form &&
                form.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={styles.button}
          >
            Tester mon éligibilité
          </Button>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.videoContainer}>
            <iframe
              className={styles.videoYoutube}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/O4HxHLQ3k9Y"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
