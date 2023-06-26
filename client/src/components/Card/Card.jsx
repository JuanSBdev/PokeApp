import React, { useState, useEffect } from 'react';
import styles from "./Card.module.css";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


export default function Card(props) {
let character = useSelector( state => state.characters)
console.log(character)




   return (
    <div className={styles.divCarta}>
    <div className={styles.btnsCard}>
   
    <button className={styles.button}
     >
        X
    </button>
    </div>
       <img className={styles.characterImg}
             src={character.imagen}
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
