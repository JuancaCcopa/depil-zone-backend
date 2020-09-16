const { Router } = require('express');
const router = Router();


const { obtener } = require('../controllers/perfil.controller');

router.route('/')
    .get(obtener);
module.exports = router;
