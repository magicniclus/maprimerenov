import React from 'react';
import styles from "./styles/multiForm.module.css";
import Image from 'next/image';


const MultiForm = () => {
    return (
        <div className={styles.multiFormContainer} id="form">
            <h2 className={styles.title}>Tester mon éligibilité</h2>
            <Image src='/frenchFlag.png' alt='drapeau francais' width="100px" height="5" objectFit='cover' className={styles.flag} />
            <form className={styles.formulaire}>
            </form>
        </div>
    );
};

export default MultiForm;