const URL = "https://pokeapi.co/api/v2/pokemon/";
const axios = require('axios');
     getPokemon =(req, res)=>{
        let {id} = req.params;
        axios(URL + id)
        .then((response) =>{
            const data = response.data;
            const character = {
                id: data.id,
                status: data.status,
                name: data.name,
                image: data.image,
                gender: data.gender,
                species: data.species
            };
            res.status(200).json(character)
        },
        ), (error)=> res.status(500).json(error.message);
    }

    

module.exports = { getPokemon }