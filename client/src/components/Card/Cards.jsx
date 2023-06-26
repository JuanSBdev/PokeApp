import { useSelector } from 'react-redux';
import Card from './Card';
import styles from './Cards.module.css'
import { useEffect } from 'react';
export default function Cards(props) {
    const  character  = useSelector( state => state.characters);
    console.log(character[0].map(i => i.imagen))
    
    return (<div className={styles.Cards}>
      {
         character[0].map((character, index) => (<Card
            key={index} id={character.id}
            name={character.nombre}
            imagen ={character.imagen}
         >
            </Card>))
      }

         </div>);
}
