import Link from 'next/link';
import React from 'react';
import styles from "./styles/Nav.module.css";

const Nav = () => {
    return (
        <div className={styles.nav} id="nav">
            <div className={styles.content}>
                <div style={{cursor:"pointer"}} className={styles.leftContainer}>
                    <Link href={"/simulateur"}><h3 className={styles.title}>MaPrimeRenov-info.org</h3></Link>
                </div>
                <div className={styles.rightContainer}>
                    <Link href="/connection-entreprise"><a className={styles.pro}>Vous êtes un professionel ?</a></Link>
                    <Link href={"/connection"}><a className={styles.espace}>Mon espace</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;