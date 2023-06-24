const { Type, Pokemon } = require('../db');
const { Op } = require('sequelize');
const axios = require('axios');
let lastId = 0;

const postPoke = async (req, res) => {
  let { nombre, imagen, defensa, ataque, vida, tipo } = req.body;
  lastId++;

  try {
    const newPokemon = await Pokemon.create({
      id: lastId,
      nombre,
      imagen,
      defensa,
      ataque,
      vida,
    });

    // Si el tipo es un array de números
    if (Array.isArray(tipo)) {
      tipo.forEach(async (typeId) => {
        const existingType = await Type.findByPk(typeId);
        if (existingType) {
          await newPokemon.addType(existingType);
        }
      });
    } else {
      // Si el tipo es un solo número
      const existingType = await Type.findByPk(tipo);
      if (existingType) {
        await newPokemon.addType(existingType);
      }
    }

    res.status(200).json(newPokemon);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { postPoke };
