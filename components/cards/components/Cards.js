import React from 'react';
import styles from '../styles/cards.module.css';

const Cards = (props) => {
    const title = props.title;
    const text = props.text;
    const accroche = props.accroche;

    return (
        <div className={styles.cards}>
            <h3 className={styles.title}>
                {
                    title !== undefined ? title : null
                }
            </h3>
            <h4 className={styles.text}>
                {
                    text !== undefined ? text : null
                }
            </h4>
            <p className={styles.accrorche}>
                {
                    accroche !== undefined ? accroche : null
                }
            </p>
        </div>
    );
};

export default Cards;