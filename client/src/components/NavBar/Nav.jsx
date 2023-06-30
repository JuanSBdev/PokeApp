import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import styles from './Nav.module.css'
import { addCharacter, getCharacters } from "../../redux/actions";



export default function Nav(){
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters)

let pokemonTitle = 'https://pokemon-shiny.vercel.app/title.png'

    const [id, setId ] = useState('Buscar Pokemon')

    const handleInput = (e)=>{
        let {value} = e.target;
        setId(value)
        console.log(value)
    }

    const buscarCharacter = ()=>{
          dispatch(addCharacter(id));
          setId('Buscar Pokemon');
        }
        
    let pokeBola = 'https://img.freepik.com/free-icon/pokeball_318-196468.jpg';

        useEffect(()=>{
            dispatch(getCharacters())
},[dispatch])

    return(
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <img src={pokemonTitle} alt="" />
            </div>
            <div className={styles.ContainerRight}>
                <input className={styles.input}
                    placeholder={id}
                    type='search'
                    name='search'
                    onChange={handleInput}
                />
                <button className={styles.button_buscar}
                onClick={()=> buscarCharacter(id)}
                >
                <img src={pokeBola} alt="" />
                </button>
            </div>
            
        </div>
    )
}