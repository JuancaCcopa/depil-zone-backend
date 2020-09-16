"use strict";
module.exports = (sequelize, DataTypes) => {
  const perfil = sequelize.define(
    "perfil",
    {
      IdPerfil: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Nombre: {
        type: DataTypes.STRING,
        required: true,
      },
    },
    { timestamps: false, freezeTableName: true, tableName: "perfil" }
    // {
    //   classMethods: {
    //     associate: function (models) {
    //       perfil.hasMany(models.usuario, { foreignKey: "IdPerfil" });
    //     },
    //   },
    // }
  );
  return perfil;
};
