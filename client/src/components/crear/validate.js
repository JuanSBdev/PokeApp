export default function validate(input) {
    let regexMail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const regexPass = new RegExp('[0-9]');
    const errors = {};
  
    if (!input.nombre) {
      errors.nombre = "agrega un nombre";
    }
    if(!input.defensa){
      errors.defensa = 'agregar un valor para defensa'
    }
    if(!input.ataque){
      errors.ataque = 'agregar un valor para ataque'
    }
    if(!input.vida){
      errors.vida = 'agregar un valor para vida'
    }
    if(!input.habilidad){
      errors.habilidad = 'agregar un valor para habilidad'
    }
    if(!input.tipo){
      errors.tipo = 'agregar un valor para tipo'
    }
   
  
    return errors;
  }
  