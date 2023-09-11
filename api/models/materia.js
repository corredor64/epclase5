'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    nombre: DataTypes.STRING,
    docente: DataTypes.STRING
  }, {});
  materia.associate = function(models) {
    // associations can be defined here
  };
  return materia;
};