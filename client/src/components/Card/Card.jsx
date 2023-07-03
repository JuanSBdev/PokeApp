import React, { useEffect, useState } from 'react';
import styles from "./Card.module.css";
import { useDispatch} from 'react-redux';
import { deleteCharacter, addFav } from '../../redux/actions';


export default function Card(props) {

   let[backgroundType, setBackgroundType] = useState(styles.default)

   
   useEffect(()=>{

      switch (props.tipos[0]) {
         case 'grass':
            setBackgroundType(styles.grass)
            break;
         case 'water':
            setBackgroundType(styles.water)
            break;
         case 'bug':
            setBackgroundType(styles.bug)
            break;
         case 'fire':
            setBackgroundType(styles.fire)
            break;
         case 'poison':
            setBackgroundType(styles.poison)
            break;
         default:
            setBackgroundType(backgroundType)
            break;
      }
    
   })

   let dispatch = useDispatch()
      
   let onClose = ()=>{
      dispatch(deleteCharacter(props.id))
   }
   // let addFavourite =()=>{
   //    dispatch(addFav(props.id))
   // }

   return (
      <div className={`${styles.divCarta}  `}>
         <section className={`${styles.curved} ${backgroundType} `}>
      <div className={styles.btnsCard}>
   
         <button className={styles.buttonClose}
         onClick={onClose}
         >
         X
         </button>
         {/* <button className={styles.btn_fav}  onClick={addFavourite(props.id)}> </button> */}
         <h2
                className={styles.nombre}>
                  <p>{props.name}</p>
         </h2>
      </div>
       <img className={styles.characterImg}
             src={props.imagen}
             alt='Pokeimagen'
             />
         <div className={styles.uno}>
            <p> {`HP: ${props.vida}`}  </p>
            <p> ATK: {props.ataque} </p>

         </div>
             </section>  
      <div className={styles.cardInfo}>
         <div className={styles.dos} >
            <div className={styles.habilidad}>
               <p>Hability</p>
               <p>{props.habilidad[0]} </p>
            </div>
            <div className={`${styles.tipoText} ${backgroundType}`}>
            <p> {props.tipos ? props.tipos : 'Promedio'} </p>
            </div>
         </div>
         <div className={styles.tres}>
         <p>#{props.id}</p>

         </div>
      </div>
 </div>
   )
}
