import React, { useState, useEffect } from 'react';
import styles from "./Card.module.css";
import { useSelector} from 'react-redux';


export default function Card(props) {
let character = useSelector( state => state.characters)




   return (
    <div className={styles.divCarta}>
    <div className={styles.btnsCard}>
   
    <button className={styles.button}
     >
        X
    </button>
    </div>
       <img className={styles.characterImg}
             src={props.imagen}
             alt='Pokeimagen'
        />

                <div className={styles.cardInfo}>
                   <h2 className={styles.nombre}>{character.name}</h2>
      <h2 className={styles.status}>&#x2764; {character.status}</h2>
     <h2>{character.species}</h2>
     <h2>{character.origin}</h2>
   </div>
 </div>
   )
}
