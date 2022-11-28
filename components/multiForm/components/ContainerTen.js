import React, {useState, useEffect} from 'react';
import styles from "../styles/multiForm.module.css";
import { useDispatch } from 'react-redux';
import { updateNumberOfFamily } from '../../../redux/action';

const ContainerTen = (props) => {

    const dispatch = useDispatch()

    const valid = props.valid
    const value = props.value

    useEffect(()=>{
        value("")
    }, [])

    const handleText = (e)=>{
        e.preventDefault()
        value(e.target.value)
        if(e.target.value.lenght <= 0){
            valid(false)
            dispatch(updateNumberOfFamily(""))
        } 
        else {
            dispatch(updateNumberOfFamily(e.target.value))
            valid(true)
        }
    }

    return (
        <div className={`${styles.containerTen} ${styles.container}`}>
            <label className={styles.label}>
            Combien de personnes composent votre foyer, vous compris ? :*
                <span className={styles.span}>Le montant des aides varie en fonction de la taille de votre ménage.</span>
                <select
                    onChange={e => {
                        handleText(e)
                    }
                }
                        className={styles.select} name="type" id="type">
                        <option disabled selected>Selectionnez une option</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                        <option value={13}>13</option>
                        <option value={13}>13</option>
                        <option value={14}>14</option>
                        <option value={15}>15</option>
                    </select>
            </label>
            {/* <div className={`${styles.cardContainerTen} ${styles.cardContainer}`}>
                <input className={`${styles.input} ${styles.inputNumber}`} onChange={e=>handleText(e)} type="number" required placeholder="100" maxLength={15} minLength={15} />
            </div> */}
        </div>
    );
};

export default ContainerTen;