import React from 'react';
import styles from "./styles/transitionBaniere.module.css";

const TransitionBaniere = (props) => {
    return (
        <div
            className={styles.container}>
            {props.children}
        </div >
    );
};

export default TransitionBaniere;