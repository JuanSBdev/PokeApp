const URL = "https://pokeapi.co/api/v2/pokemon/";
const { Op } = require('sequelize');
const axios = require('axios');
const { Pokemon, Type } = require('../db');

const getPokeName = (req, res) => {
  const name = req.query.name;
  if (name) {
    axios.get(URL + name)
      .then(async (response) => {
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

        const [newPokemon, created] = await Pokemon.findOrCreate({
          where: { id: data.id },
          defaults: character,
        });

        if (!created) {
          return res.status(409).json({ message: 'Este pokemon ya existe' });
        }

        const typesPromises = types.map(async (typeName) => {
          const [newType] = await Type.findOrCreate({ where: { nombre: typeName } });
          return newType;
        });

        const foundTypes = await Promise.all(typesPromises);
        await newPokemon.setTypes(foundTypes);

        res.status(200).json(newPokemon);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ message: 'Error al buscar en la base de datos.' });
      });
  } else {
    res.status(404).json({ message: 'No se encontraron resultados.' });
  }
};

module.exports = { getPokeName };
