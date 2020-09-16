const { Router } = require('express');
const router = Router();


const { obtener,obtenerPorId,guardar } = require('../controllers/usuario.controller');

router.route('/')
    .get(obtener)
    .post(guardar);
    //.post((req,resp)=> resp.send(' post getUsers Router'));
router.route('/:id')
.get(obtenerPorId)
module.exports = router;
