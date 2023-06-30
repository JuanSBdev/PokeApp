import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import styles from './Nav.module.css'
import { addCharacter, getCharacters } from "../../redux/actions";
import NavRight from "./NavRight"; 
import { Link } from "react-router-dom";




export default function Nav(){
    const dispatch = useDispatch();
    const characters = useSelector(state => state.characters)

    let pokemonTitle = 'https://pokemon-shiny.vercel.app/title.png'
        

    return(
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                        <img src={pokemonTitle} alt="" />
                        {/* <Link to={"/home"} >asd</Link> */}
                                    </div>

            <NavRight className={styles.ContainerRight} />  
            
        </div>
    )
}