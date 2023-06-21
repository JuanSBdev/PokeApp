const URL = "https://pokeapi.co/api/v2/pokemon/";
const axios = require('axios');

const getPokes = (req, res) => {
  axios.get(URL)
    .then((response) => {
      const data = response.data;
      const results = data.results;

      const character = results.map((result) => ({
        id: result.id,
        name: result.name,
        url: result.url,
      }));

      res.status(200).json(character);
    })
    .catch((error) => res.status(500).json(error.message));
};

module.exports = { getPokes };
