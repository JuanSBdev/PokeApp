const URL = "https://pokeapi.co/api/v2/pokemon/";
const { Op } = require('sequelize');
const axios = require('axios');
const { Pokemon, Type } = require('../db');

const getPokeName = (req, res) => {
  const name = req.query.name;
  if (name) {
    axios.get(URL + name)
      .then((response) => {
        const data = response.data;

        if (data.name.toLowerCase() === name.toLowerCase()) {
          Pokemon.findOne({ where: { nombre: data.name } })
            .then((existingPokemon) => {
              if (existingPokemon) {
                // El Pokémon ya existe en la base de datos, no es necesario crearlo nuevamente
                res.status(200).json(existingPokemon);
              } else {
                const character = {
                    id: data.id,
                    nombre: data.name,
                    imagen: data.sprites.front_default,
                    defensa: data.stats[3].base_stat,
                    ataque: data.stats[4].base_stat,
                    vida: data.stats[5].base_stat
                };
                Pokemon.create(character)
                  .then(async (newPokemon) => {
                    const types = await Type.findAll({
                      where: {
                        [Op.or]: data.types.map((tipo) => ({ nombre: tipo.type.name })),
                      },
                    });

                    await newPokemon.setTypes(types);

                    res.status(200).json(newPokemon);
                  })
                  .catch((error) => {
                    res.status(500).json({ message: "Error al guardar en la base de datos." });
                  });
              }
            })
            .catch((error) => {
              res.status(500).json({ message: "Error al buscar en la base de datos." });
            });
        } else {
          res.status(404).json({ message: "No se encontraron resultados." });
        }
      })
      .catch((error) => res.status(500).json(error.message));
  }
};

module.exports = { getPokeName };
