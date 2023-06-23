const { Type, Pokemon } = require('../db');
const axios = require('axios');
const URL = 'https://pokeapi.co/api/v2/type';

const getByType = async (req, res) => {
  try {
    const response = await axios.get(URL);
    const data = response.data;
    const types = data.results.map(tipo => ({
      nombre: tipo.name
    }));
    
    await Type.bulkCreate(types);

    
    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getByType
};

  // try {
  //   const response = await axios.get(URL);
  //   const data = response.data.results;

  //   const types = data.map((res) => ({
  //     nombre: res.name
  //   }));

  //   const createdTypes = await Promise.all(types.map((type) => Type.create(type)));

  //   const pokemons = await Pokemon.findAll();
  //   await Promise.all(
  //     createdTypes.map(async (createdType) => {
  //       for (const pokemon of pokemons) {
  //         await pokemon.addType(createdType);
  //       }
  //     })
  //   );

  //   res.status(200).json(createdTypes);
  // } catch (error) {
  //   res.status(500).json({ msg: error.message });
  // }
