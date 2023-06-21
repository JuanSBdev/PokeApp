const URL = "https://pokeapi.co/api/v2/pokemon/";
const axios = require('axios');

const getPokeName = (req, res) => {
    const name = req.query.name;
    if (name) {
        axios.get(URL + name)
            .then((response) => {
                const data = response.data;

                if (data.name.toLowerCase() === name.toLowerCase()) {
                    const character = {
                        id: data.id,
                        name: data.name,
                        url: data.url,
                    };

                    res.status(200).json(character);
                } else {
                    res.status(404).json({ message: "No se encontraron resultados." });
                }
            })
            .catch((error) => res.status(500).json(error.message));
    }
};

module.exports = { getPokeName };
