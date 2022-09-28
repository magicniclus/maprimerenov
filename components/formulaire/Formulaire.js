import React from 'react';
import styles from "./styles/Formulaire.module.css";

const Formulaire = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    return (
        <div className={styles.content}>
            <h2 className={styles.title}>Tester mon éligibilité</h2>
            <img src='/frenchFlag.png' alt='drapeau francais' className={styles.flag} />
            <form className={styles.formulaire} onSubmit={(e)=>handleSubmit(e)}>
                <label className={styles.label}>
                    Votre logement *
                    <select required className={styles.select}>
                        <option value="maison">Maison</option>
                        <option value="appartement">Appartement</option>
                    </select>
                </label>
                <label className={styles.label}>
                    Votre situation *
                    <select required className={styles.select}>
                        <option value="proprietaire">Proptietaire</option>
                        <option value="locataire">Locataire</option>
                    </select>
                </label>
                <label className={styles.label}>
                    NOM, prenom *
                    <input className={styles.input} type="text" required />
                </label>
                <label className={styles.label}>
                    Telephone *
                    <input className={styles.input} id='phone' name="phone" type="tel" size={10} required />
                </label>
                <label className={styles.label}>
                    Code Postal *
                    <input className={styles.input}  id="zip" name="zip" type="text" pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$" required/>
                </label>
                <label className={styles.label}>
                    Quand souhaitez vous rélaiser ce projet ?
                    <select required className={styles.select}>
                        <option value="tot">Le plus tôt possible</option>
                        <option value="threeMonth">Dans les 3 mois</option>
                        <option value="years">Dans l&lsquo;année</option>
                        <option value="iDontNow">Je ne sais pas</option>
                    </select>
                </label>
                <button className={styles.button} type="submit">Envoyer</button>
            </form>
            <p className={styles.advertissment}>En soumettant votre demande, vous acceptez que les informations saisies soient exploitées dans le cadre de la demande à la réalisation d’un bilan technique et de la relation commerciale qui peut en découler.</p>
        </div>
    );
};

export default Formulaire;