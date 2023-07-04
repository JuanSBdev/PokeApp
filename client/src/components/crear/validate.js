export default function validate(input) {
    let regexMail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    const regexPass = new RegExp('[0-9]');
    const errors = {};
  
    if (!input.nombre) {
      errors.nombre = "agrega un nombre";
    }
    if(!input.defensa ){
      errors.defensa = 'agregar un valor para defensa'
    }
    if(input.defensa <=0 ){
      errors.defensa = 'agregar un valor mayor a 0'
    }
    if(!input.ataque){
      errors.ataque = 'agregar un valor para ataque'
    }
    if(input.ataque <=0 ){
      errors.ataque = 'agregar un valor mayor a 0'
    }
    if(!input.vida){
      errors.vida = 'agregar un valor para vida'
    }
    if(input.vida <=0 ){
      errors.vida= 'agregar un valor mayor a 0'
    }

    // if(!input.habilidad){
    //   errors.habilidad = 'agregar un valor para habilidad'
    // }

    // if(!input.tipo){
    //   errors.tipo = 'agregar un valor para tipo'
    // }
   
  
    return errors;
  }
  