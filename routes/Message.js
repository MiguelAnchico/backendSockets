const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { crearMensaje, obtenerMensajes } = require('../controllers/Message');

// Ruta para crear mensaje
router.post(
    '/', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
    ], 
    crearMensaje
);

// Ruta para obtener mensajes
router.get(
    '/',
    obtenerMensajes
);

// Exportar Rutas
module.exports = router;