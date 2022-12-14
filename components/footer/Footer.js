import React from 'react';
import styles from "./styles/footer.module.css"
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mui/material';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.leftContainer}>
                    <Link href={"/connexion"} className={styles.liens}><Button style={{ color: "white" }} className={styles.liens}>Mon espace</Button></Link>
                    <Link href={"/entreprise"}><Button style={{ color: "white" }} className={styles.liens}>Espace pro</Button></Link>
                    <Link href={"/contact"}><Button style={{ color: "white" }} className={styles.liens}>Nous contacter</Button></Link>
                    <Link href={"/politique"}><Button style={{ color: "white" }} className={styles.liens}>Politique de confidentialit√©</Button></Link>
                    <p className={styles.certification}>¬© MaPrimeRenov-info.org 2022</p>
                </div>
                <div className={styles.rightContainer}>
                    <h3 className={styles.title}>MaPrimeRenov-info.org</h3>
                    <div className={styles.imageContainer}>
                        <Image priority src="/maprimerenov.jpg" alt="maprimerenov" width="150px" height="50px" objectFit='cover' />
                        <Image priority src="/cee.jpg" alt="cee" width="150px" height="50px" objectFit='cover' />
                        <Image priority src="/francerelance.jpg" alt="francerelance" width="50px" height="50px" objectFit='cover' />
                        <Image priority src="/rge.jpg" alt="rge" width="40px" height="50px" objectFit='cover' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;