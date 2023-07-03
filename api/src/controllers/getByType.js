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

