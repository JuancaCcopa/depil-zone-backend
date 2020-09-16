const Ctrl = {};

const db = require("../database.js");
const Perfil = db.perfilModel;

Ctrl.obtener = async (req, res) => {
  try {
    const result = Perfil.findAll().then((item) => {
      res.json(item);
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

module.exports = Ctrl;
