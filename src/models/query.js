'use strict'
module.exports=(sequelize,DataTypes)=>{
    
    sequelize.query("SELECT * from usuario").then(results => {
        console.log(results);
    });

    // const proveedores=sequelize.define('proveedores',{
    //     id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    //     nombre:DataTypes.STRING,
    //     apellido:DataTypes.STRING,
    //     direccion:DataTypes.STRING,
    //     telefono:DataTypes.STRING
    // },{});
    // proveedores.associate=function(models){

    // }
    // return proveedores;

}

