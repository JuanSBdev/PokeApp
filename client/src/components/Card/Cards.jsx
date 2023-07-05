import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import styles from './Cards.module.css'
export default function Cards(props) {
   const  character  = useSelector( state => state.characters);

    const cardsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);
    // Calcula el índice inicial y final de las tarjetas que se mostrarán en la página actual
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = character.slice(indexOfFirstCard, indexOfLastCard);
  
    // Calcula el número total de páginas
    const totalPages = Math.ceil(character.length / cardsPerPage);
  
    // Cambia a la página siguiente
    const nextPage = () => {
      setCurrentPage(prevPage => prevPage + 1);
    };
  
    // Cambia a la página anterior
    const previousPage = () => {
      if( currentPage >= 2){

         setCurrentPage(prevPage => prevPage - 1);
      }
     
    };
  

    return (<div className={styles.Cards}>
      
         <div className={`${styles.paginacion} `} >
               {currentPage >= 1 && (
                <button   onClick={previousPage}>
                        <span class="material-symbols-outlined">
                           arrow_back
                        </span>
               </button>
               )}
                 
              {currentPage < totalPages && (
                <button onClick={nextPage}>
                  <span className="material-symbols-outlined">
                     arrow_forward
                  </span>   
               </button>
              )}
              
               
         </div>

         <div className={styles.card}>
         { character[0] && 
         currentCards.map((character, index) => (<Card
            key={index} id={character.id}
            name={character.nombre}
            imagen ={character.imagen}
            vida ={character.vida}
            ataque = { character.ataque}
            habilidad = {character.habilidad}
            tipos = {character.tipo[0]}
         >
            </Card>))
      }

         </div>

         </div>);
}
