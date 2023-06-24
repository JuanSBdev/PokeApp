const axios = require('axios');
const { Pokemon, Type } = require('../db')

const getMyPokes = async (req, res) => {
    try {
      const pokemons = await Pokemon.findAll({include: Type})
      res.status(200).json(pokemons)
    } catch (error) {
      console.log(error)
    }
};

module.exports = { getMyPokes };
