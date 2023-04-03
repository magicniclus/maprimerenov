import React, { useEffect, useState } from "react";
import Nav from "../nav/Nav";
import Head from "next/head";
import Footer from "../footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { showPage } from "../../redux/action";
import RightMenu from "../rightMenu/RightMenu";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const LayoutClassicPage = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (props.monEspace !== "unedifined") {
      dispatch(showPage(props.monEspace));
    } else {
      dispatch(showPage(false));
    }
  }, []);

  useEffect(() => {
    if (state.menuIsOpen && document !== undefined) {
      // const body = document.querySelector("body")
      // body.style.overflowY = "hidden"
      disableBodyScroll(document);
      setIsOpen(true);
    } else {
      // const body = document.querySelector("body")
      // body.style.overflowY = "scroll"
      enableBodyScroll(document);
      setIsOpen(false);
    }
  }, [state.menuIsOpen]);

  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charset="UTF-8" />
        <meta name="description" content={props.meta} />
        <link rel="shortcut icon" href="imageHeader.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="fr" />
      </Head>
      <header>
        <Nav />
      </header>
      {isOpen ? <RightMenu /> : null}
      {props.children}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LayoutClassicPage;
