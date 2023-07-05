import React from 'react'
import styles from "./Welcome.module.css"

export default function Welcome() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Bienvenido a la PokeApi</h1>
      <p>Desarrollado por JLSB</p>
    </div>
    
  )
}
