import React, { useEffect } from 'react'
import styles from "./Welcome.module.css"
import { getTypes } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'

export default function Welcome() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getTypes())

  }, [])
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Bienvenidx a la PokeApi</h1>
      <Link to='/home'><button className={styles.btn_start}>
                          INICIAR
                        </button>
      </Link>
      <p className={styles.p} >Desarrollado por JLSB</p>
    </div>
    
  )
}
