const express = require('express');
const router = express.Router();
const {
    crearNota,
    editarNota,
    borrarNota,
    obtenerNotas
} = require('../controllers/controladorNotas');


router.post('/', crearNota);
router.put('/', editarNota);
router.delete('/', borrarNota);
router.get('/', obtenerNotas)

module.exports = router;
