import styles from "./styles/layoutClassicPage.module.css";
import React, { useEffect } from 'react';
import Nav from "../nav/Nav"
import Head from 'next/head';
import Footer from "../footer/Footer";
import { useDispatch } from "react-redux";
import { showPage } from "../../redux/action";

const LayoutClassicPage = (props) => {
    const dispatch = useDispatch()

    useEffect(()=>{
        if(props.monEspace !== "unedifined"){
            dispatch(showPage(props.monEspace))
        }else{
            dispatch(showPage(false))
        }
    }, [])

    return (
        <div className={styles.content}>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.meta} />
                <link rel="shortcut icon" href="imageHeader.png" type="image/x-icon" />
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