import Link from 'next/link';
import React from 'react';
import styles from "./styles/Nav.module.css";

const Nav = () => {
    return (
        <div className={styles.nav} id="nav">
            <div className={styles.content}>
                <div className={styles.leftContainer}>
                    <h3 className={styles.title}>Eco-info.org</h3>
                </div>
                <div className={styles.rightContainer}>
                    <Link href="/"><a className={styles.pro}>Vous êtes un professionel ?</a></Link>
                    <Link href={"/"}><a className={styles.espace}>Mon espace</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;