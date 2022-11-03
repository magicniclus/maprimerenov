import React from 'react';
import styles from "./styles/baniereHeader.module.css"

const BaniereHeader = (props) => {
    return (
        <div className={styles.topContent}>
            {props.children}
            <div className={styles.imgContainer}></div>
        </div>
    );
};

export default BaniereHeader;