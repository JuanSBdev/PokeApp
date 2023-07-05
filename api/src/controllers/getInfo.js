const axios = require('axios');

const URL = `https://pokeapi.co/api/v2/pokemon/`;
const getInfo = async (req, res)=>{
    let {id} = req.params;
    try {
        const response = await axios.get(URL + id)
        let data = response.data;


        const types = data.types.map(type => type.type.name);

        const habilidades = data.abilities.map((ab) => ab.ability.name )

        const { base_stat: vida = 0 } = data.stats.find(stat => stat.stat.name === 'hp');
        const { base_stat: defensa = 0} = data.stats.find(stat => stat.stat.name === 'defense')
        const { base_stat: ataque = 0} = data.stats.find(stat => stat.stat.name === 'attack')

        const character = {
            id: data.id,
            nombre: data.name,
            height: data.height,
            weight: data.weight,
            imagen: data.sprites.front_default,
            imagen2: data.sprites.back_default,
            defensa: defensa,
            ataque: ataque,
            vida: vida,
            habilidad: habilidades,
            tipo: types
        };
        res.status(200).json(character)
} catch (error) {
    res.status(404).json({message: error.message})
}
}
module.exports = {
    getInfo
}