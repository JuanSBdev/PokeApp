import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createChar } from '../../redux/actions';

  
export default function FormCrear() {
 
  let dispatch = useDispatch()
  
      
  const [formValues, setFormValues] = useState({
    nombre: '',
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png",
    defensa: 0,
    ataque: 0,
    vida: 0,
    tipo: ["creado"],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createChar(formValues))
  };
  
  return (
    <div>
      <h1>FormCrear</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text"
         name='nombre'
          onChange={handleChange}  />

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

 