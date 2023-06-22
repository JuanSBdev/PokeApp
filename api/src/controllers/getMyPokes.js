const axios = require('axios');
const { Pokemon } = require('../db')

const getMyPokes = (req, res) => {
    Pokemon.findAll()
    .then((response) => {
      console.log(response)
      const character = response.map((pokemon) => ({
        id: pokemon.dataValues.id,
        name: pokemon.dataValues.nombre,
        url: pokemon.dataValues.imagen,
        defensa: pokemon.dataValues.defensa,
        ataque: pokemon.dataValues.ataque,
        vida: pokemon.dataValues.vida,
      }));

      res.status(200).json(character);
    })
    .catch((error) => res.status(500).json(error.message));
};

module.exports = { getMyPokes };
