import React, {useState,useEffect} from 'react'
import styles from './NavRight.module.css';
import { useSelector, useDispatch } from 'react-redux';


import { addCharacter, getCharacters } from "../../redux/actions";

import {Link} from 'react-router-dom'

let pokeBola = 'https://img.freepik.com/free-icon/pokeball_318-196468.jpg';






export default function NavRight() {

    const dispatch = useDispatch();


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
    
    useEffect(()=>{
        dispatch(getCharacters())
},[dispatch])
    
  return (
            <div className={styles.container}>
                <div className={styles.buscador}>

                        <input className={styles.input}
                            placeholder={id}
                            type='search'
                            name='search'
                            onChange={handleInput}
                        />
                        <button className={styles.button_buscar}
                                onClick={()=> buscarCharacter(id)}
                        >
                        <img src={pokeBola} alt=""
                        />
                        </button>
                </div>
                <div className={styles.botonera}>
                        <Link to={'/create'}>
                            <p>Crea tu pokemon</p>
                        </Link>
                </div>

            </div>
            
            )
}
