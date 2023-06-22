const { Pokemon } = require('../db')
const axios = require('axios');
let lastId = 0;
const postPoke = async (req, res)=>{
    let { nombre, imagen, defensa, ataque, vida } = req.body
    lastId++;
try {
    const newPokemon = await Pokemon.create({
        id: lastId,
        nombre,
        imagen,
        defensa,
        ataque,
        vida
      });
      res.status(200).json(newPokemon)
} catch (error) {
    res.status(400).json({message: error.message})
}

   
}
module.exports = {postPoke}