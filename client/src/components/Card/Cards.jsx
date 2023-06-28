import { useSelector } from 'react-redux';
import Card from './Card';
import styles from './Cards.module.css'
export default function Cards(props) {
    const  character  = useSelector( state => state.characters);
 
    if(character[0]){
        console.log(character[0].map(i => i))
    }
    
    return (<div className={styles.Cards}>
      { character[0] && 
         character[0].map((character, index) => (<Card
            key={index} id={character.id}
            name={character.nombre}
            imagen ={character.imagen}
            vida ={character.vida}
         >
            </Card>))
      }

         </div>);
}
