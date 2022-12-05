import React, { useEffect, useState } from 'react';
import styles from "./styles/connectedButton.module.css"
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../../../redux/action';

const ConnectedButton = (props) => {

    const dispatch = useDispatch()

    const state = useSelector(state=>state)
    const [userName, setUserName] = useState(null)
    const click = props.click

    useEffect(()=>{
        setUserName(state.userProjectInformation.name)
    }, [])

    const openToggleMenu = (e)=>{
        e.preventDefault()
        click(true) 
        dispatch(toggleMenu(true))
    }

    return (
        <div className={styles.connectedButton} onClick={openToggleMenu} >
                <p className={styles.p}>Menu</p>
                <div className={styles.imageContainer}>
                    <Image priority src="/iconmenu.png" alt="arrow" width="55px" height="16px" objectFit="contain" />
                </div>
        </div>
    );
};

export default ConnectedButton;