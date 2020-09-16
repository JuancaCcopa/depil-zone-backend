"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = "development";
const config = require(__dirname + "/config/config.json")[env];

let sequelize;

sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: "mssql",
  host: config.host,
  dialectOptions: {
    instanceName: "MSSQLSERVER",
    options: {
      encrypt: false,
      validateBulkLoadParameters: false,
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db.productModel = require("./models/product.js")(sequelize, Sequelize);
db.userModel = require("./models/Usuario.js")(sequelize, Sequelize);
db.perfilModel = require("./models/Perfil.js")(sequelize, Sequelize);

//db.userModel.hasOne(db.perfilModel,{ foreignKey: 'IdUsuario' });

 
module.exports = db;
