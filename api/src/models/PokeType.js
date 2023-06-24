const { DataTypes } = require('sequelize');
module.exports= (sequelize) =>{
    sequelize.define('PokeType', {
        pokemonId:{
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        typeId:{
            type: DataTypes.INTEGER,
            foreignKey: true,
        }
    })
}