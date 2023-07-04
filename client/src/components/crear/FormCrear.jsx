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
    <div className={Styles.container}>
      <h1>Crea tu pokemon</h1>
      <form  className={Styles.inputs} onSubmit={handleSubmit}>
        <label>Nombre*:</label>
        <input type="text"
         name='nombre'
          onChange={handleChange}
          placeholder={`'Mi pokemon'`}   />
        <p className={Styles.pError} > {errors.nombre ? errors.nombre : null }  </p>

        {/* <label>imagen:</label>
        <input type="text"
         onChange={handleChange}
         placeholder='Ingresa el link de tu imagen'  />
        <p className={Styles.pError} > {errors.imagen ? errors.imagen : null }  </p> */}


        <div className={Styles.formDos}>
              <div className="defensa">
              <label>Defensa:*</label>
               <input type="number" 
               name='defensa'
                onChange={handleChange}
                placeholder='50'  />
               <p className={Styles.pError}> {errors.defensa ? errors.   defensa : null }  </p>
           </div>


            <div className="ataque">
                <label>Ataque:*</label>
                <input type="number" 
                name='ataque' 
                onChange={handleChange}
                placeholder='50'   />
                <p className={Styles.pError} > {errors.ataque ?     errors.   ataque : null }  </p>
            </div>

            <div className="vida">
                  <label>Vida:*</label>
                  <input type="number"
                   name='vida'
                    onChange={handleChange}
                    placeholder='100'   />
                  <p className={Styles.pError}>  {errors.vida ? errors.vida :     null }  </p>

            </div>
           
        </div>

        <div className={Styles.formTres}>
              <div className={Styles.tipo}>
                    <label>Tipo:</label>
                    <input type='text'
                     name='tipo'
                      onChange={handleChange}
                      placeholder={`'fuego' `}  />
                    
              </div>

              <div className={Styles.habilidad}>
                      <label>Habilidad:</label>
                      <input type="text"
                       name='habilidad'
                        onChange={handleChange}
                        placeholder={`"overgrow"`}  />
                      
              </div>

        </div>

        <button  className={Styles.btn_submit} type='submit'>CREAR</button>
      </form>


    </div>

    
  )
}

 