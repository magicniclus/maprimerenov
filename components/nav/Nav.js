import Link from 'next/link';
import React from 'react';
import styles from "./styles/Nav.module.css";
import { Button } from '@mui/material';

const Nav = () => {
    return (
        <div className={styles.nav} id="nav">
            <div className={styles.content}>
                <div style={{ cursor: "pointer" }} className={styles.leftContainer}>
                    <Link href={"/"}><h3 className={styles.title}>MaPrimeRenov-info.org</h3></Link>
                </div>
                <div className={styles.rightContainer}>
                    <Link href="/entreprise"><Button variant="text" className={styles.pro}>Vous êtes un professionel ?</Button></Link>
                    <Link href={"/connection"}><Button variant="outlined" className={styles.espace}>Mon espace</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;