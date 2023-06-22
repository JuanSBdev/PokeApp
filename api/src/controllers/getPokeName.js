const URL = "https://pokeapi.co/api/v2/pokemon/";
const axios = require('axios');
const {Pokemon} = require('../db')
const getPokeName = (req, res) => {
    const name = req.query.name;
    if (name) {
        axios.get(URL + name)
            .then((response) => {
                const data = response.data;

                if (data.name.toLowerCase() === name.toLowerCase()) {
                    const character = {
                        id: data.id,
                        nombre: data.name,
                        imagen: data.url,
                        defensa:data.moves[0],
                        ataque:data.moves[1],
                        vida:  data.base_experience,
                    };
                    Pokemon.create(character)
                        .then(() => {
                            res.status(200).json(character);
                        })
                        .catch((error) => {
                            res.status(500).json({ message: "Error al guardar en la base de datos." });
                        });
                } 
               else {
                    res.status(404).json({ message: "No se encontraron resultados." });
                }
            })
            .catch((error) => res.status(500).json(error.message));
    }
};

module.exports = { getPokeName };
