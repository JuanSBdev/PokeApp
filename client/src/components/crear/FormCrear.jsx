import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createChar } from '../../redux/actions';
import validate from './validate';
import Styles from './Form.module.css'


export default function FormCrear() {
 
  let dispatch = useDispatch()
  
  const [errors, setErrors] = useState({error: 'llenar los campos obligatorios'})
  
      
  const [formValues, setFormValues] = useState({

    nombre: null,
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png',
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
      if(!errors.nombre) {
         dispatch(createChar(formValues))}
     else{
      console.log(errors)
     }

  };



  return (
    <div>
      <h1>FormCrear</h1>
      <form  className={Styles.container} onSubmit={handleSubmit}>
        <label>Nombre*:</label>
        <input type="text"
         name='nombre'
          onChange={handleChange}
          placeholder='Ingresar el nombre para tu pokemon'   />
        <p> {errors.nombre ? errors.nombre : null }  </p>

        <label>imagen:</label>
        <input type="text"
         onChange={handleChange}
         placeholder='Ingresa el link de tu imagen'  />
        <p> {errors.imagen ? errors.imagen : null }  </p>


        <label>Defensa:</label>
        <input type="number" 
        name='defensa'
         onChange={handleChange}
         placeholder='Ingresar valor numerico'  />
        <p> {errors.defensa ? errors.defensa : null }  </p>
        

        <label>Ataque:</label>
        <input type="number" 
        name='ataque' 
        onChange={handleChange}
        placeholder='Ingresar valor numerico'   />
        <p> {errors.ataque ? errors.ataque : null }  </p>

        <label>Vida:</label>
        <input type="number"
         name='vida'
          onChange={handleChange}
          placeholder='Ingresar valor numerico'   />
        <p> {errors.vida ? errors.vida : null }  </p>

        <label>Habilidad:</label>
        <input type="text"
         name='habilidad'
          onChange={handleChange}  />
        <p> {errors.habilidad ? errors.habilidad : null }  </p>

        <label>Tipo:</label>
        <input type='text'
         name='tipo'
          onChange={handleChange}  />
        <p> {errors.tipo ? errors.tipo : null }  </p>

        <button type='submit'></button>
      </form>


    </div>

    
  )
}

 