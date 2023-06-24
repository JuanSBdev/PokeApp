const {Type, Pokemon  } = require('../db');
const { Op } = require('sequelize');
const axios = require('axios');
let lastId = 0;
const postPoke = async (req, res)=>{
    let { nombre, imagen, defensa, ataque, vida, tipo } = req.body
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
  
      await newPokemon.addType(tipo);
      res.status(200).json(newPokemon)
      
} catch (error) {
    res.status(400).json({message: error.message})
}

   
}
module.exports = {postPoke}