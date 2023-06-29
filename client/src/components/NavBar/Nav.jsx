import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import styles from './SearchBar.module.css'
import { addCharacter, getCharacters } from "../../redux/actions";



export default function Nav(){
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters)

    const [id, setId ] = useState('')

    const handleInput = (e)=>{
        let {value} = e.target;
        setId(value)
        console.log(value)
    }

    const buscarCharacter = ()=>{
          dispatch(addCharacter(id));
    }

useEffect(()=>{
    dispatch(getCharacters())
},[dispatch])

    return(
        <div className="div">
            <div className="container">
            <label > Buscar por ID:</label>
            <input className={styles.input}
               placeholder='add numero..'
               type='search'
               name='search'
               onChange={handleInput}
            />
            <button className={styles.button}
             onClick={()=> buscarCharacter(id)}
             >
                🔎

            </button>
            </div>
            
        </div>
    )
}