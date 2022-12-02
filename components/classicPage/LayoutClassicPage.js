import styles from "./styles/layoutClassicPage.module.css";
import React, { useEffect, useState } from 'react';
import Nav from "../nav/Nav"
import Head from 'next/head';
import Footer from "../footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { showPage } from "../../redux/action";
import RightMenu from "../rightMenu/RightMenu";

const LayoutClassicPage = (props) => {
    const dispatch = useDispatch()
    const state = useSelector(state=>state)

    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=>{
        if(props.monEspace !== "unedifined"){
            dispatch(showPage(props.monEspace))
        }else{
            dispatch(showPage(false))
        }
    }, [])

    useEffect(()=>{
        if(state.menuIsOpen)setIsOpen(true)
    }, [state.menuIsOpen])

    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.meta} />
                <link rel="shortcut icon" href="imageHeader.png" type="image/x-icon" />
            </Head>
                <header>
                    <Nav />
                </header>
                {
                    isOpen?
                    <RightMenu />:
                    null
                }
                {props.children}
                <footer>
                    <Footer />
                </footer>
        </div>
    );
};

export default LayoutClassicPage;