import React from 'react';
import styles from "./styles/cards.module.css"
import Button from '@mui/material/Button';
import Cards from './components/Cards';

const CardsContainer = () => {
    return (
        <div className={styles.container}>
            <Cards title="644 OOO" text="+644 000 dossiers accordés" accroche="Notre travail commence par là." />
            <Cards title="70%" text="Jusqu'à 70% d'écomie sur vos travaux et sur votre facture d'énergie" accroche="Notre plus grande satisfaction." />
            <Cards title="20 000" text="Jusqu’à 20 000€ de prise en charge" accroche="Ca c'est le travail de l'état mais on s'en occupe !" />
        </div>
    );
};

export default CardsContainer;