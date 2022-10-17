import React from 'react';
import styles from "../styles/multiForm.module.css";
import Image from 'next/image';
import { Skeleton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const SmallCard = (props) => {
    const image = props.image;
    const altImage = props.altImage;
    const title = props.title;
    const setLastClick = props.setLastClick;
    const valid = props.valid

    const handleChange = async (e) => {
        e.preventDefault()
        if (setLastClick !== undefined) setLastClick(e)
    }
    return (
        <div style={valid ? { border: "2px solid #314662" } : null} className={styles.smallCard} onClick={e => handleChange(e)}>
            <div className={styles.smallCardCheck} style={valid ? { backgroundColor: "#74c011" } : null}>
                {
                    valid ? <FontAwesomeIcon icon={faCheck} /> : null
                }
            </div>
            {
                image !== undefined ? <Image priority src={`/${image}`} width="50px" height="50px" alt={altImage} objectFit="cover" /> : <Skeleton variant="rectangular" width={132} height={113} />
            }
            <div className={styles.smallCardTitle}>{title}</div>
        </div>
    );
};

export default SmallCard;