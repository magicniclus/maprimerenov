import React from 'react';
import styles from "../styles/multiForm.module.css";
import Image from 'next/image';
import { Skeleton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const BigCard = (props) => {
    const image = props.image;
    const altImage = props.altImage;
    const title = props.title;
    return (
        <div className={styles.bigCard}>
            <div className={styles.bigCardCheck}>
                <FontAwesomeIcon icon={faCheck} />
            </div>
            {
                image !== undefined ? <Image src={`/${image}`} alt={altImage} /> : <Skeleton variant="rectangular" width={132} height={113} />
            }
            <div className={styles.bigCardTitle}>{title}</div>
        </div>
    );
};

export default BigCard ;