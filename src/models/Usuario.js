"use strict";
module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define(
    "usuario",
    {
      IdUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Nombre: {
        type: DataTypes.STRING,
        required: true,
      },
      Usuario: {
        type: DataTypes.STRING,
        required: true,
      },
      Clave: {
        type: DataTypes.STRING,
        required: true,
      },
      IdPerfil: {
        type: DataTypes.INTEGER,
        required: false,
      },
      Estado: {
        type: DataTypes.INTEGER,
        required: false,
      },
      UsuarioRegistro: {
        type: DataTypes.STRING,
        required: false,
      },
      FechaRegistro: {
        type: DataTypes.STRING,
        required: false,
      },
      // UsuarioModificacion: {
      //     type: DataTypes.STRING,
      //     required: false
      // },
      // FechaModificacion: {
      //     type: DataTypes.STRING,
      //     required: false
      // }
    },
    { timestamps: false, freezeTableName: true, tableName: "Usuario" }
    // {
    //   classMethods: {
    //     associate: function (models) {
    //         usuario.belongsTo(models.perfil, { foreignKey: "userId" });
    //     },
    //   },
    // }
  );


  // timestamps: false, , paranoid: true, underscored: true

  return usuario;
};
