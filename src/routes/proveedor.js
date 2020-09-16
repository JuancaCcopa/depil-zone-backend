const { Router } = require('express');
const router = Router();

const { getProveedor } = require('../controllers/proveedor.controller');

router.route('/')
        //.get((req,resp)=> resp.send(' get getProveedor Router'));
        //.post((req,resp)=> resp.json({message: 'Note post'}));
        .get(getProveedor);

module.exports = router;

