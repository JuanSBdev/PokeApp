import React, { useState, useEffect } from 'react';
import styles from "./Card.module.css";
import { useSelector, useDispatch} from 'react-redux';
import { deleteCharacter, getCharacters } from '../../redux/actions';



export default function Card(props) {
   
   const dispatch = useDispatch()
   const  character  = useSelector( state => state.characters);
   let [characters, setCharacters ] = useState(character[0]);

   
   
   let onClose = ()=>{
      dispatch(deleteCharacter(props.id))
      console.log(characters)

   }
   useEffect(() => {
      dispatch(getCharacters()); 
      console.log(characters)
    }, [dispatch]);

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
