import React from "react";
import styles from "./styles/videoContainer.module.css";
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
    <div className="bg-gray-200 w-full py-24 sm:py-32 flex flex-wrap justify-center items-center ">
      <div className=" max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row justify-between">
        <div className="lg:w-2/6 w-full flex flex-col justify-around">
          <h2 className="text-xl font-bold tracking-tight text-gray-600 sm:text-2xl">
            {headerText.h2}
          </h2>
          <ul className={styles.list}>
            {headerText.li.map((el, idx) => (
              <li className="text-normal font-normal leading-6 text-gray-600">
                {el}
              </li>
            ))}
          </ul>
          <a
            href="#form"
            className="max-w-[180px] rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
          >
            Tester mon éligibilité
          </a>
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
