import React from "react";
import styles from "./styles/textContainer.module.css";
import { useRouter } from "next/router";
import {
  ArchiveBoxIcon,
  HandThumbUpIcon,
  CurrencyEuroIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";

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
    <div className="flex flex-col justify-around pr-6 lg:max-w-lg md:max-w-md">
      <div className={styles.topContainer}>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">
          {headerText.h2One}
        </h2>
        {/* <p className="mt-6 text-xl leading-8 text-gray-600">
          {headerText.pOne}
        </p>
      </div>
      <div className={`${styles.bottomContainer} ${styles.two}`}>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">
          {headerText.h2Two}
        </h2> */}
        <p className="mt-6 text-xl leading-8 text-gray-600">
          {headerText.pTwo}
        </p>
        <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
          <li className="flex gap-x-3">
            <HandThumbUpIcon
              className="mt-1 h-5 w-5 flex-none text-indigo-600"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-gray-900">+644 000</strong>{" "}
              dossiers accordés
            </span>
          </li>
          <li className="flex gap-x-3">
            <ArrowTrendingUpIcon
              className="mt-1 h-5 w-5 flex-none text-indigo-600"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-gray-900">70%</strong>{" "}
              d'économie sur vos travaux et sur votre facture d'énergie
            </span>
          </li>
          <li className="flex gap-x-3">
            <CurrencyEuroIcon
              className="mt-1 h-5 w-5 flex-none text-indigo-600"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-gray-900">20 000€</strong>{" "}
              de subvention accordée et encadrée par l'état
            </span>
          </li>
          <li className="flex gap-x-3">
            <CheckCircleIcon
              className="mt-1 h-5 w-5 flex-none text-indigo-600"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-gray-900">2023</strong>{" "}
              MaPrimeRenov' est reconduit pour 2023
            </span>
          </li>
          <li className="flex gap-x-3">
            <ArchiveBoxIcon
              className="mt-1 h-5 w-5 flex-none text-indigo-600"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-gray-900">Gratuit</strong>{" "}
              testez votre éligibilité dès maintenant
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TextContainer;
