const Ctrl = {};

const db = require("../database.js");
const model = db.productModel;

Ctrl.getProveedor = async (req, res) => {
  model.findAll().then((product) => {
    console.log(res.json(product));
  });

  // product.findAll().then(item => {
  //     console.log(item);
  //     //console.log(res.json(notes));
  //   });

  //Proveedor.findAll().then(notes => res.json(notes));

  // const resusl = await Proveedor.findAll()
  //     .then( userResponse => {
  //     res.status( 200 ).json( userResponse )
  //   })
  //   .catch( error => {
  //     res.status( 400 ).send( error )
  //   })
  // res.json(resul);
};

// notesCtrl.getNote = async (req, res) => {
//     const note = await Note.findById(req.params.id);
//     res.json(note);
// }

module.exports = Ctrl;
