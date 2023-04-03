import React from "react";
import styles from "./styles/headerForm.module.css";
import { useRouter } from "next/router";

const HeaderForm = () => {
  const router = useRouter();
  const locationUrl = router.pathname;

  const text = {
    init: {
      h1: "Testez votre éligibilité aux aides 2022/2023 encadré par l’état: MaPrimeRenov’!",
      h3: "80% de vos travaux d’économie d’énergie pris en charge.",
    },
    CAH: {
      h1: "Validez votre éligibilité aux subventions 2022/2023 soutenues par l'État : MaPrimeRenov' !",
      h3: "Bénéficiez d'une prise en charge de 80% pour vos projets d'économies d'énergie.",
    },
  };
  const headerText = locationUrl === "/simulateur" ? text.init : text.CAH;
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{headerText.h1}</h1>
      <h3 className={styles.secondTitle}>{headerText.h3}</h3>
      <div className={styles.imgContainer}></div>
    </div>
  );
};

export default HeaderForm;
