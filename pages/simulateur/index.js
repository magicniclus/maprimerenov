import React from "react";
import MultiForm from "../../components/multiForm/MultiForm";
import TextContainer from "../../components/textContainer/TextContainer";
import VideoContainer from "../../components/videoContainer/VideoContainer";
import styles from "./styles/Simulateur.module.css";
import LayoutClassicPage from "../../components/classicPage/LayoutClassicPage";
import CardsContainer from "../../components/cards/CardsContainer";
import HeroSection from "../../components/tailwind/hero/HeroSection";

const index = () => {
  return (
    <LayoutClassicPage
      title="MaPrimeRenov-info | Simulateur MaPrimeRenov"
      meta="Simulateur gratuit pour connaitre votre éligibilité aux aides de l'état MaPrimeRenov 2022."
    >
      <main className={styles.main}>
        <HeroSection />
        {/* <div className={styles.midContent}> */}
        <div className="mx-auto flex max-w-7xl py-10 p-6 md:px-8 flex-col md:flex-row justify-between">
          <TextContainer />
          <MultiForm />
        </div>
        <CardsContainer />
        {/* <Cards /> */}
        <VideoContainer />
      </main>
    </LayoutClassicPage>
  );
};

export default index;
