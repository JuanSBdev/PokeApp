import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createChar } from '../../redux/actions';
import validate from './validate';
import Styles from './Form.module.css'


export default function FormCrear() {
 
  let dispatch = useDispatch()
  
  const [errors, setErrors] = useState({})
  
      
  const [formValues, setFormValues] = useState({
    nombre: null,
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png",
    defensa: null,
    ataque: null,
    vida: null,
    tipo: ["creado"],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  
    setErrors(validate({
      ...formValues,
      [name]: value,
  })
    )
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    
    console.log(errors)
    dispatch(createChar(formValues))

  };



  return (
    <div>
      <h1>FormCrear</h1>
      <form  className={Styles.container} onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text"
         name='nombre'
          onChange={handleChange}  />
           <p> {errors.nombre ? errors.nombre : null }  </p>

        <label>imagen:</label>
        <input type="text"
         onChange={handleChange}  />

        <label>Defensa:</label>
        <input type="text" 
        name='defensa'
         onChange={handleChange}  />

        <label>Ataque:</label>
        <input type="text" 
        name='ataque' 
        onChange={handleChange}  />

        <label>Vida:</label>
        <input type="text"
         name='vida'
          onChange={handleChange}  />

        <label>Habilidad:</label>
        <input type="text"
         name='habilidad'
          onChange={handleChange}  />

        <label>Tipo:</label>
        <input type='text'
         name='tipo'
          onChange={handleChange}  />

        <button type='submit'></button>
      </form>


    </div>

    
  )
}

 