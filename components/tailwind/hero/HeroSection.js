import React from "react";
import { useRouter } from "next/router";

const HeroSection = () => {
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
    <div className="bg-indigo-600 py-24 sm:py-16 relative -z-10">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#818cf8] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#818cf8] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0">
          <p className="text-xl font-semibold leading-7 text-gray-100">
            Maprimerenov-info.org
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            {headerText.h1}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            {headerText.h3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
