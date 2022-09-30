import styles from "./styles/layoutClassicPage.module.css";
import React from 'react';
import Nav from "../nav/Nav"
import Head from 'next/head';
import Footer from "../footer/Footer";

const LayoutClassicPage = (props) => {
    return (
        <div className={styles.content}>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.meta} />
                <link rel="shortcut icon" href="Test.png" type="image/x-icon" />
            </Head>
            <header>
                <Nav />
            </header>
                {props.children}
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default LayoutClassicPage;