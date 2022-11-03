import React from 'react';
import styles from "./styles/familleBaniere.module.css";

const FamilleBaniere = (props) => {
    return (
        <div
            className={styles.container}>
            {props.children}
        </div >
    );
};

export default FamilleBaniere;