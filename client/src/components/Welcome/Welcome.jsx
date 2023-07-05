import React, { useEffect } from 'react'
import styles from "./Welcome.module.css"
import { getTypes } from '../../redux/actions'
import { useDispatch } from 'react-redux'

export default function Welcome() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getTypes())

  }, [])
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Bienvenido a la PokeApi</h1>
      <p className={styles.p} >Desarrollado por JLSB</p>
    </div>
    
  )
}
