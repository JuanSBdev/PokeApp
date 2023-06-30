import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import styles from './Cards.module.css'
export default function Cards(props) {
   const  character  = useSelector( state => state.characters);


    return (<div className={styles.Cards}>
      { character[0] && 
         character.map((character, index) => (<Card
            key={index} id={character.id}
            name={character.nombre}
            imagen ={character.imagen}
            vida ={character.vida}
            ataque = { character.ataque}
            habilidad = {character.habilidad}
            tipos = {character.tipo}
         >
            </Card>))
      }

         </div>);
}
