const URL = "https://pokeapi.co/api/v2/pokemon/";
const axios = require('axios');
const {Pokemon, Type, PokeType} = require('../db')

const getPokemon = async (req, res)=>{
    try {
        let {id} = req.params;
       const response = await axios.get(URL + id)
       const data = response.data;
       const character = {
        id: data.id,
        nombre: data.name,
        imagen: data.sprites.front_default,
        defensa: data.stats[3].base_stat,
        ataque: data.stats[4].base_stat,
        vida: data.stats[5].base_stat
                };
       const [newPokemon, created] = await Pokemon.findOrCreate({
        where:{ id: data.id }, 
        defaults: character
       });
       if(!created){
        return res.status(409).json({message: 'Este pokemon ya existe'});
       }
       const types = data.types.map((type) => type.type.name);
    await Promise.all(
      types.map(async (typeName) => {
        const [newType] = await Type.findOrCreate({ where: { nombre: typeName } });
        await PokeType.findOrCreate({ where: { pokemonId: newPokemon.id, typeId: newType.id } });
      })
    );
        res.status(200).json(character)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports = { getPokemon }