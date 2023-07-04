const URL = "https://pokeapi.co/api/v2/pokemon/";
const axios = require('axios');
const { Pokemon, Type } = require('../db')

const getPokemon = async (req, res) => {
    try {
        let { id } = req.params;
        const response = await axios.get(URL + id)
        const data = response.data;

        const types = data.types.map(type => type.type.name);

        const habilidades = data.abilities.map((ab) => ab.ability.name )

        const { base_stat: vida = 0 } = data.stats.find(stat => stat.stat.name === 'hp');
        const { base_stat: defensa = 0} = data.stats.find(stat => stat.stat.name === 'defense')
        const { base_stat: ataque = 0} = data.stats.find(stat => stat.stat.name === 'attack')


        const character = {
            id: data.id,
            nombre: data.name,
            imagen: data.sprites.front_default,
            defensa: defensa,
            ataque: ataque,
            vida: vida,
            habilidad: habilidades,
            tipo: types
        };
        // const newPokemon = await Pokemon.create( character,{
        //   include: [Type],

        // })
        // await newPokemon.addTypes(types);
        const [newPokemon, created] = await Pokemon.findOrCreate({
            where: { id: data.id },
            defaults: character,
            include:[Type]
        });
        
        if (!created) {
            return res.status(401).json({ message: 'Este pokemon ya existe' });
        }




        res.status(200).json(newPokemon);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const deletePokemon = async (req, res) => {
    try {
      const { id } = req.params;
  
      const pokemon = await Pokemon.findByPk(id);
      if (!pokemon) {
        return res.status(404).json({ message: 'El Pokémon no existe' });
      }
  
      // Eliminar el Pokémon de la base de datos
      await pokemon.destroy();
  
      res.status(200).json({ message: 'Pokémon eliminado correctamente' });
    } catch (error) {
      res.status(500).json(error.message);
    }
  };

module.exports = { getPokemon, deletePokemon }

