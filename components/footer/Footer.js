import React from 'react';
import styles from "./styles/footer.module.css"
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.leftContainer}>
                    <Link href={"/conditions-generales"}><a className={styles.liens}>Conditions générales</a></Link>
                    <Link href={"/contact"}><a className={styles.liens}>Nous contacter</a></Link>
                    <Link href={"/connection"}><a className={styles.liens}>Vous êtes un professionel ?</a></Link>
                    <Link href={"/connection"}><a className={styles.liens}>Mon espace</a></Link>
                    <p className={styles.certification}>© Eco-info.org</p>
                </div>
                <div className={styles.midContainer}>
                </div>
                <div className={styles.rightContainer}>
                    <h3 className={styles.title}>Eco-info.org</h3>
                    <div className={styles.imageContainer}>
                        <Image src="/maprimerenov.jpg" alt="maprimerenov" width="150px" height="50px" objectFit='cover'/>
                        <Image src="/cee.jpg" alt="cee" width="150px" height="50px" objectFit='cover'/>
                        <Image src="/francerelance.jpg" alt="francerelance" width="50px" height="50px" objectFit='cover'/>
                        <Image src="/rge.jpg" alt="rge" width="40px" height="50px" objectFit='cover'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;