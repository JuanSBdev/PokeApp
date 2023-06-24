const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true

    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      default: 'https://cdn.dribbble.com/users/2104064/screenshots/8512308/artboardsnore_2x.png',
    },
    defensa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ataque: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vida: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo:{
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: 'No encontró'
    }
  },
  {
    timestamps:false
  });



};
