const axios = require('axios');

const URL = `https://pokeapi.co/api/v2/pokemon/`;
const getInfo = async (req, res)=>{
    let {id} = req.params;
    try {
        const response = await axios.get(URL + id)
        let data = response.data;
        let character = {
            nombre: data.name
        }
        res.status(200).json(character)
} catch (error) {
    res.status(404).json({message: error.message})
}
}
module.exports = {
    getInfo
}