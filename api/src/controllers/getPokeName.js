const { Pokemon, Type } = require('../db');
const axios = require('axios');

const getPokeName = async (req, res) => {
  const name = req.query.name;
  if (name) {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = response.data;
      const types = data.types.map((type) => type.type.name);

      const character = {
        id: data.id,
        nombre: data.name,
        imagen: data.sprites.front_default,
        defensa: data.stats[3].base_stat,
        ataque: data.stats[4].base_stat,
        vida: data.stats[5].base_stat,
        tipo: types.toString()
      };

      const newCharacter = await Pokemon.create(character,{
        include: [Type] 
      });
      await newCharacter.addType(newCharacter.tipo.split(',').pop());
      res.status(200).json(newCharacter)
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error al buscar en la base de datos.' });
    }
  } else {
    res.status(404).json({ message: 'No se encontraron resultados.' });
  }
};

module.exports = { getPokeName };
