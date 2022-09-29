import React from 'react';
import styles from "./styles/footer.module.css"
import Link from 'next/link';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="content">
                <div className={styles.leftContainer}>
                    <Link href={"/conditions-generales"}><a className={styles.conditions}>Conditions générales</a></Link>
                    <Link href={"/contact"}><a className={styles.conditions}>Nous contacter</a></Link>
                    <Link href={"/connection"}><a className={styles.pro}>Vous êtes un professionel ?</a></Link>
                    <Link href={"/connection"}><a className={styles.perso}>Mon espace</a></Link>
                    <p>© Eco-info.org</p>
                </div>
                <div className={styles.rightContainer}>
                    <h3 className={styles.title}>Eco-info.org</h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;