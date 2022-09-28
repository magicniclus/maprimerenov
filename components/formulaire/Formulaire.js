import React from 'react';
import styles from "./styles/Formulaire.module.css";

const Formulaire = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    return (
        <div className={styles.content}>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label>
                    Votre logement *
                    <select className={styles.select}>
                        <option value="maison">Maison</option>
                        <option value="appartement">Appartement</option>
                    </select>
                </label>
                <label>
                    Votre situation *
                    <select className={styles.select}>
                        <option value="maison">Maison</option>
                        <option value="appartement">Appartement</option>
                    </select>
                </label>
                <button type="submit">Envoyer</button>
            </form>
            <p>En soumettant votre demande, vous acceptez que les informations saisies soient exploitées dans le cadre de la demande à la réalisation d’un bilan technique et de la relation commerciale qui peut en découler.</p>
        </div>
    );
};

export default Formulaire;