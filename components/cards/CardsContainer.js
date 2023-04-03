import React from "react";
import styles from "./styles/cards.module.css";
import Cards from "./components/Cards";
import { useRouter } from "next/router";

const CardsContainer = () => {
  const router = useRouter();
  const locationUrl = router.pathname;
  const text = {
    init: {
      CardOne: {
        title: "644 000",
        text: "+644 000 dossiers accordés",
        accroche: "Notre travail commence par là",
      },
      CardTwo: {
        title: "70%",
        text: "Jusqu'à 70% d'économie sur vos travaux et sur votre facture d'énergie",
        accroche: "Notre combat à tous",
      },
      CardThree: {
        title: "20 000",
        text: "Jusqu’à 20 000€ de prise en charge",
        accroche: "Subvention accordée et encadrée par l'État",
      },
    },
    CAH: {
      CardOne: {
        title: "644 000",
        text: "Plus de 644 000 dossiers approuvés",
        accroche: "C'est là que notre mission débute",
      },
      CardTwo: {
        title: "70%",
        text: "Économisez jusqu'à 70% sur vos travaux et sur votre facture d'énergie",
        accroche: "Un objectif commun pour tous",
      },
      CardThree: {
        title: "20 000",
        text: "Prise en charge allant jusqu'à 20 000€",
        accroche: "Soutien financier supervisé et encadré par l'État",
      },
    },
  };
  const headerText = locationUrl === "/simulateur" ? text.init : text.CAH;
  return (
    <div className={styles.container}>
      {Object.keys(headerText).map((el, idx) => (
        <Cards
          key={idx}
          title={headerText[el].title}
          text={headerText[el].text}
          accroche={headerText[el].accroche}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
