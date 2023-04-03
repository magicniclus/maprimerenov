import React from "react";
import styles from "./styles/textContainer.module.css";
import { useRouter } from "next/router";

const TextContainer = () => {
  const router = useRouter();
  const locationUrl = router.pathname;
  const text = {
    init: {
      h2One:
        "MaPrimeRenov’, c’est jusqu’à 20.000€ de prise en charge par l’état !",
      pOne: "Bénéficiez du montant maximum subventionné pour vous. Il vous suffit de tester l’éligibilité de votre projet ! Utilisez notre simulateur GRATUIT et sans conditions de revenus pour tester votre éligibilité dès maintenant.",
      h2Two: "Qui peut en bénéficier ?",
      pTwo: "Depuis le 1er octobre 2020, tous les propriétaires peuvent en bénéficier, quels que soient leurs revenus. Les propriétaires bailleurs peuvent déposer leur dossier de demande d’aide depuis le 1er juillet 2021. En 2021 plus de 644 000 demandes d’aide ont été accordé par l’État.",
    },
    CAH: {
      h2One:
        "MaPrimeRenov', c'est une prise en charge allant jusqu'à 20 000€ par l'État !",
      pOne: "Profitez du montant maximum de subvention pour vous-même. Il vous suffit de vérifier l'éligibilité de votre projet ! Utilisez notre outil de simulation GRATUIT et sans critères de revenus pour évaluer votre éligibilité dès à présent.",
      h2Two: "Qui est éligible ?",
      pTwo: "Depuis le 1er octobre 2020, tous les propriétaires peuvent profiter de cette aide, indépendamment de leurs revenus. Les propriétaires bailleurs ont la possibilité de soumettre leur demande d'aide depuis le 1er juillet 2021. En 2021, l'État a accordé plus de 644 000 demandes d'aide.",
    },
  };
  const headerText = locationUrl === "/simulateur" ? text.init : text.CAH;
  return (
    <div className={styles.content}>
      <div className={styles.topContainer}>
        <h2 className={styles.title}>{headerText.h2One}</h2>
        <p className={styles.text}>{headerText.pOne}</p>
      </div>
      <div className={`${styles.bottomContainer} ${styles.two}`}>
        <h2 className={styles.title}>{headerText.h2Two}</h2>
        <p className={styles.text}>{headerText.pTwo}</p>
      </div>
    </div>
  );
};

export default TextContainer;
