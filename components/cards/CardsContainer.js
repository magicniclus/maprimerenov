import React from 'react';
import styles from "./styles/cards.module.css"
import Button from '@mui/material/Button';
import Cards from './components/Cards';

const CardsContainer = () => {
    return (
        <div className={styles.container}>
            <Cards title="644 OOO" text="+644 000 dossiers accordés" accroche="Notre travail commence par là." />
            <Cards title="70%" text="Jusqu'à 70% d'économie sur vos travaux et sur votre facture d'énergie" accroche="Notre combat à tous." />
            <Cards title="20 000" text="Jusqu’à 20 000€ de prise en charge" accroche="Subvention accordée et encadrée par l'État." />
        </div>
    );
};

export default CardsContainer;