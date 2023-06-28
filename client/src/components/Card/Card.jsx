import React, { useState, useEffect } from 'react';
import styles from "./Card.module.css";
import { useSelector, useDispatch} from 'react-redux';
import { deleteCharacter } from '../../redux/actions';



export default function Card(props) {
   let character = useSelector( state => state.characters)
   let dispatch = useDispatch()
   
   let onClose = ()=>{
      dispatch(deleteCharacter(props.id))
   }

   return (
      <div className={`${styles.divCarta}`}>
         <section className={styles.curved}>

      <div className={styles.btnsCard}>
   
         <button className={styles.buttonClose}
         onClick={onClose}
         >
         X
         </button>
         <h2
                className={styles.nombre}>
                {props.name}
         </h2>
      </div>
       <img className={styles.characterImg}
             src={props.imagen}
             alt='Pokeimagen'
             />
             </section>  
      <div className={styles.cardInfo}>
            <h2>HP: {props.vida}  </h2>
      </div>
 </div>
   )
}
