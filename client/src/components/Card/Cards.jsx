import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import styles from './Cards.module.css'
import { useEffect, useState } from 'react';
import { getCharacters } from '../../redux/actions';
export default function Cards(props) {
   const dispatch = useDispatch()
   const  character  = useSelector( state => state.characters);
   let [characters, setCharacters ] = useState(character[0]);

   // useEffect(() => {
   //    dispatch(getCharacters()); 
   //    console.log(characters)
   //  }, [dispatch]);
    
    return (<div className={styles.Cards}>
      { character[0] && 
         character.map((character, index) => (<Card
            key={index} id={character.id}
            name={character.nombre}
            imagen ={character.imagen}
            vida ={character.vida}
         >
            </Card>))
      }

         </div>);
}
