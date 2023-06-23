const URL = "https://pokeapi.co/api/v2/pokemon/";
const { Op } = require('sequelize');
const axios = require('axios');
const { Pokemon, Type } = require('../db');

const getPokeName = (req, res) => {
  const name = req.query.name;
  if (name) {
    axios.get(URL + name)
      .then((response) => {
        const data = response.data;
        const character = {
          id: data.id,
          nombre: data.name,
          imagen: data.sprites.front_default,
          defensa: data.stats[3].base_stat,
          ataque: data.stats[4].base_stat,
          vida: data.stats[5].base_stat,
        };

        Pokemon.findOrCreate({ where: { nombre: character.nombre }, defaults: character, include: [Type] })
          .then(([createdPokemon, created]) => {
            if (created) {
              createdPokemon.getTypes()
                .then(types => {
                  character.tipo = types.map(tipo => tipo.name);
                  res.status(200).json(createdPokemon);
                })
                .catch((error) => {
                  console.log(error);
                  res.status(500).json({ message: 'Error al obtener los tipos del Pokémon.' });
                });
            } else {
              res.status(409).json({ message: 'El Pokémon ya existe en la base de datos.' });
            }
          })
          .catch((error) => {
            console.log(error);
            res.status(500).json({ message: 'Error al guardar en la base de datos.' });
          });
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
