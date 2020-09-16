const Ctrl = {};

const db = require("../database.js");
const Perfil = require("../models/Perfil.js");
const User = db.userModel;

Ctrl.obtenerPorId = async (req, res) => {
 
  try {
    const users = User.findByPk(req.params.id).then((item) => {
      res.json(item);
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

Ctrl.obtener = async (req, res) => {
  try {
    const users = User.findAll().then((item) => {
      res.json(item);
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

Ctrl.guardar = async (req, res) => {
  try {
    console.log(req.body);

    const {
      Nombre,
      Usuario,
      Clave,
      IdPerfil,
      Estado,
      UsuarioRegistro,
    } = req.body;

    const FechaRegistro = new Date(Date.now()).toISOString();
    const newUsuario = new User({
      Nombre,
      Usuario,
      Clave,
      IdPerfil,
      Estado,
      UsuarioRegistro,
      FechaRegistro,
    });
    //console.log("create Usuario", newUsuario);
    await newUsuario
      .save()
      .then(() => {
        res.json("SE REGISTRO CORRECTAMENTE EL USUARIO");
      })
      .finally(() => {
        console.log("finally usuario");
        //sequelize.close();
      });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

module.exports = Ctrl;
