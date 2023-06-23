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
        tipo,
      });
      // const types = await Type.findAll({
      //   where: {
      //     [Op.or]: types.map((nombre)=>({nombre}))
      //   }
      // });
  
      // await newPokemon.setTypes(types);
      res.status(200).json(newPokemon)
      
} catch (error) {
    res.status(400).json({message: error.message})
}

   
}
module.exports = {postPoke}