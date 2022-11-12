import React from 'react';
import styles from "./styles/banierePartenaire.module.css";
import Image from 'next/image';
import { Skeleton } from '@mui/material';

const BanierePartenaire = (props) => {
    const img = props.img;
    const altImg = props.altImg
    return (
        <div className={styles.content}>
            <div className={styles.leftContainer}>
                {props.children}
            </div>
            <div className={styles.rightContainer}>
            </div>
        </div>
    );
};

export default BanierePartenaire;